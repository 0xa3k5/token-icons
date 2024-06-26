import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import {
  ITokenRaw,
  INetworkRaw,
  INetworkMetadata,
  ITokenMetadata,
} from '../types'
import geckoNetworks from './gecko/gecko-networks.json'
import geckoCoins from './gecko/gecko-coins.json'
import customTokens from './gecko/custom-tokens.json'
import customNetworks from './gecko/custom-networks.json'
import getCoinByID from './gecko/get-coin-by-id'
import {
  NETWORKS_METADATA_PATH,
  SVG_SRC_DIR,
  TOKENS_METADATA_PATH,
} from '../constants'
import {
  isUppercase,
  isKebabCase,
  findTokenByFileName,
  findNetworkByFileName,
  getTypeAndVariant,
} from '../utils'

const validateSvg = (filePath: string): boolean => {
  const svgContent = fs.readFileSync(filePath, 'utf8')
  const fileName = path.basename(filePath, '.svg')
  const { type, variant } = getTypeAndVariant(filePath)

  const hasCorrectDimensions =
    svgContent.includes('width="24"') && svgContent.includes('height="24"')
  if (!hasCorrectDimensions) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid dimensions. Expected 24x24. go`,
    )
    return false
  }

  if (type === 'token' && !isUppercase(fileName)) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name for token. Expected uppercase.`,
    )
    return false
  }
  if (type === 'network' && !isKebabCase(fileName)) {
    console.error(
      `❌ ${fileName}/${variant}: Invalid file name for network. Expected kebab-case.`,
    )
    return false
  }
  return true
}

const getModifiedIcons = () => {
  return execSync(
    "git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','",
  )
    .toString()
    .trim()
}

/**
 * Finds the metadata for a given id and type (tokens or networks)
 * @param id ID of the metadata to find
 * @param type Type of the metadata to find (tokens or networks)
 * @returns Metadata for the given id and type
 */
const findExistingMetadata = (
  id: string,
  type: 'tokens' | 'networks',
): ITokenMetadata | INetworkMetadata | undefined => {
  const tokensJson: ITokenMetadata[] = JSON.parse(
    fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
  )
  const networksJson: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
  )

  const existingMetadata =
    type === 'tokens'
      ? findTokenByFileName(id, tokensJson)
      : findNetworkByFileName(id, networksJson)

  return existingMetadata
}

/**
 * Finds the raw data for a given name and type (tokens or networks)
 * @param name Name of the data to find
 * @param type Type of the data to find (tokens or networks)
 * @returns Raw data for the given name and type
 */
const findRawData = (
  name: string,
  type: 'tokens' | 'networks',
): INetworkRaw | ITokenRaw | undefined => {
  if (type === 'tokens') {
    const geckoCoin = findTokenByFileName(name, geckoCoins)
    const customCoin = findTokenByFileName(name, customTokens)

    return geckoCoin ?? customCoin
  } else if (type === 'networks') {
    const geckoNetwork = findNetworkByFileName(name, geckoNetworks)
    const customNetwork = findNetworkByFileName(name, customNetworks)

    return geckoNetwork ?? customNetwork
  }
}

/**
 * Merges the variants of the given array of networks or tokens
 * @param arr Array of networks or tokens
 * @returns Array of merged networks or tokens
 */
const mergeVariants = (
  arr: INetworkMetadata[] | ITokenMetadata[],
): INetworkMetadata[] | ITokenMetadata[] => {
  const map: Map<string, INetworkMetadata | ITokenMetadata> = new Map()

  arr.forEach((n) => {
    const key = `${n.id}|${n.name}`
    if (map.has(key)) {
      // Merge the variants array
      const existing = map.get(key)
      if (existing) {
        existing.variants = [...new Set([...existing.variants, ...n.variants])]
      }
    } else {
      map.set(key, { ...n })
    }
  })

  return Array.from(map.values())
}

/**
 * creates metadata object for a given svg file
 * if matched, appends to existing metadata object
 * if not matched, creates new metadata object
 * @returns ITokenMetadata | INetworkMetadata | undefined
 */
const createMetadataObj = async (
  filePath: string,
): Promise<ITokenMetadata | INetworkMetadata | undefined> => {
  const type = filePath.includes('/tokens/') ? 'token' : 'network'
  const fileName = path.basename(filePath, '.svg')
  const fileVariant = filePath.includes('/mono/') ? 'mono' : 'branded'

  if (type === 'network') {
    // this is the raw metadata from either gecko-networks.json or custom-networks.json
    const rawData = findRawData(fileName, 'networks')

    if (rawData) {
      const existingNetworksMetadata = findExistingMetadata(
        fileName,
        'networks',
      )

      if (existingNetworksMetadata) {
        if (!existingNetworksMetadata.variants.includes(fileVariant)) {
          console.log(
            `existing metadata for: ${fileName}, existing variant: ${existingNetworksMetadata.variants} new variant: ${fileVariant}`,
          )
          existingNetworksMetadata.variants.push(fileVariant)
        }
        return existingNetworksMetadata
      } else {
        const metadata: INetworkMetadata = {
          ...rawData,
          variants: [fileVariant],
        }
        return metadata
      }
    } else {
      console.info(
        `👀 ${fileName}: No network metadata, consider manually adding to "packages/utils/scripts/gecko/custom-networks.json"`,
      )
      return undefined
    }
  }

  if (type === 'token') {
    const rawData = findRawData(fileName, 'tokens')

    if (rawData) {
      const existingTokenMetadata = findExistingMetadata(rawData.id, 'tokens')

      if (existingTokenMetadata) {
        if (!existingTokenMetadata.variants.includes(fileVariant)) {
          existingTokenMetadata.variants.push(fileVariant)
        }
        return existingTokenMetadata
      } else {
        const metadata = {
          ...rawData,
          addresses: {}, // will be fetched below
          marketCapRank: 0, // will be fetched below
          variants: [fileVariant],
        }

        const data = await getCoinByID(rawData.id)
        metadata.addresses = data?.platforms || {}
        metadata.marketCapRank = data?.market_cap_rank || null

        return metadata
      }
    } else {
      console.info(
        `👀 ${fileName}: No matching token metadata, consider manually adding to "packages/utils/scripts/gecko/custom-tokens.json"`,
      )
      return
    }
  }
}
const main = async () => {
  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('/raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0)
  ) {
    console.error(`No new icons found`)
    process.exit(1)
  }

  // we assume the passed file paths are partial paths
  // so we need to append the SVG_SRC_DIR to them
  // example of an expected passed file path: tokens/bitcoin or networks/ethereum
  // when appended: packages/core/src/raw-svgs/tokens/bitcoin or packages/core/src/raw-svgs/networks/ethereum

  const iconPaths = modifiedIcons
    .concat(passedFiles.map((f) => `${SVG_SRC_DIR}/${f}`).join(',')) // append the SVG_SRC_DIR
    .split(',')
    .filter(Boolean)

  const groupedPaths = iconPaths.reduce(
    (acc: { [key: string]: string[] }, filePath) => {
      const fileName = path.basename(filePath, '.svg')
      if (!acc[fileName]) {
        acc[fileName] = []
      }
      acc[fileName].push(filePath)
      return acc
    },
    {},
  )

  const addedNetworks: INetworkMetadata[] = []
  const addedTokens: ITokenMetadata[] = []

  await Promise.all(
    Object.values(groupedPaths).map(async (filePaths) => {
      const validPaths = filePaths.filter(validateSvg)
      for (const filePath of validPaths) {
        const metadata = await createMetadataObj(filePath)
        if (!metadata) {
          continue
        }
        filePath.includes('/tokens/')
          ? addedTokens.push(metadata as ITokenMetadata)
          : addedNetworks.push(metadata as INetworkMetadata)
      }
    }),
  )

  if (addedNetworks.length > 0) {
    const networksJson: INetworkMetadata[] = JSON.parse(
      fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
    )

    const JSONFILE = JSON.stringify(
      Array.from(
        new Map(
          [...networksJson, ...mergeVariants(addedNetworks)].map((item) => [
            item['id'],
            item,
          ]),
        ).values(),
      ),
    )

    fs.writeFileSync(NETWORKS_METADATA_PATH, JSONFILE)
  }

  if (addedTokens.length > 0) {
    const tokensJson: ITokenMetadata[] = JSON.parse(
      fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
    )

    const JSONFILE = JSON.stringify(
      Array.from(
        new Map(
          [...tokensJson, ...mergeVariants(addedTokens)].map((item) => [
            item['id'],
            item,
          ]),
        ).values(),
      ),
    )

    fs.writeFileSync(TOKENS_METADATA_PATH, JSONFILE)
  }
}

await main()
