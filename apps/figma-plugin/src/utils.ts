import { INetworkMetadata, ITokenMetadata, svgs } from '@web3icons/core'
import { SvgIcon } from './types'
import { networks, tokens } from '@web3icons/core/metadata'

const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

export const icons = () => {
  const tokenIcons: { [key: string]: SvgIcon[] } = {
    branded: [],
    mono: [],
  }
  const networkIcons: { [key: string]: SvgIcon[] } = {
    branded: [],
    mono: [],
  }

  // token icons
  Object.entries(svgs.tokens).forEach(([name, svg]) => {
    if (name.startsWith('branded')) {
      tokenIcons.branded?.push({ name: name.replace('branded', ''), svg })
    } else if (name.startsWith('mono')) {
      tokenIcons.mono?.push({ name: name.replace('mono', ''), svg })
    }
  })

  // network icons
  Object.entries(svgs.networks).forEach(([name, svg]) => {
    if (name.startsWith('branded')) {
      networkIcons.branded?.push({ name: name.replace('branded', ''), svg })
    } else if (name.startsWith('mono')) {
      networkIcons.mono?.push({ name: name.replace('mono', ''), svg })
    }
  })

  return { tokenIcons, networkIcons }
}

export const filterIcons = (
  searchKey: string,
  type: 'tokens' | 'networks',
  variant: 'mono' | 'branded',
) => {
  const { tokenIcons, networkIcons } = icons()
  const searchLower = searchKey.trim().toLowerCase()

  if (type === 'tokens') {
    // Filtering for tokens specifically
    return tokens
      .filter((token: ITokenMetadata) => {
        return (
          token.name.toLowerCase().includes(searchLower) ||
          token.id?.toLowerCase().includes(searchLower) ||
          (token.symbol && token.symbol.toLowerCase().includes(searchLower))
        )
      })
      .map((token) => ({
        name: token.name.toLowerCase(),
        svg: tokenIcons[variant]?.find(
          (icon) => icon.name.toLowerCase() === token.name.toLowerCase(),
        )?.svg,
      }))
      .filter((icon) => icon.svg !== undefined) as SvgIcon[]
  } else {
    // Filtering for networks specifically
    return networks
      .filter((network: INetworkMetadata) => {
        return (
          network.name.toLowerCase().includes(searchLower) ||
          network.id.toLowerCase().includes(searchLower) ||
          (network.shortname &&
            network.shortname.toLowerCase().includes(searchLower))
        )
      })
      .map((network) => {
        return {
          name: network.name.toLowerCase(),
          svg: networkIcons[variant]?.find(
            (icon) =>
              icon.name === toPascalCase(network.name) ||
              icon.name === toPascalCase(network.id),
          )?.svg,
        }
      })
      .filter((icon) => icon.svg !== undefined) as SvgIcon[]
  }
}
