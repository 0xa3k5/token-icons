import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  ROOT_REACT,
  JSX_WALLETS_OUT_DIR,
} from '../../constants'
import { TType } from '../../types'

const generateIndexFile = (directory: string, type: TType) => {
  const svgFiles = fs
    .readdirSync(directory)
    .filter((file) => path.extname(file).toLocaleLowerCase() === '.tsx')
  const exports = svgFiles
    .map((svgFile) => {
      const baseName = path.basename(svgFile, '.tsx')
      return `export { default as ${baseName} } from './${baseName}';\n`
    })
    .join('')

  fs.writeFileSync(path.join(directory, 'index.ts'), exports)
  console.log(`✓ Generated: ${type} index file`)
}

export function generateIndex() {
  // Generate index.ts for tokens and networks
  generateIndexFile(JSX_TOKENS_OUT_DIR, 'token')
  generateIndexFile(JSX_NETWORKS_OUT_DIR, 'network')
  generateIndexFile(JSX_WALLETS_OUT_DIR, 'wallet')

  // Generate icons/index.ts in src
  const iconsIndexContent = `export * from './tokens';\nexport * from './networks';\nexport * from './wallets';\n`
  fs.writeFileSync(
    path.join(ROOT_REACT, 'src', 'icons', 'index.ts'),
    iconsIndexContent,
  )
  console.log('✓ Generated: icons index file')
}