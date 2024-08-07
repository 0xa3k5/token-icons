import { toKebabCase } from './naming-conventions'

/**
 * @param fileName
 * @param data
 * @returns
 */
export const findNetworkByFileName = <
  T extends { id: string; name: string; shortname?: string },
>(
  fileName: string,
  data: T[],
): T[] | undefined => {
  const found = data.filter(
    (n) =>
      toKebabCase(n.id) === fileName ||
      toKebabCase(n.name) === fileName ||
      (n.shortname && toKebabCase(n.shortname) === fileName),
  )

  if (found.length === 0) {
    return undefined
  }

  return found.filter((n) => n !== undefined)
}

/**
 * @param fileName
 * @param data
 * @returns
 */
export const findTokenByFileName = <
  T extends { id: string; name: string; symbol: string },
>(
  fileName: string,
  data: T[],
): T[] | undefined => {
  const found = data.filter(
    (t) =>
      t.id.toLowerCase() === fileName.toLowerCase() ||
      t.symbol.toLowerCase() === fileName.toLowerCase() ||
      t.name.toLowerCase() === fileName.toLowerCase(),
  )

  if (found.length === 0) {
    return undefined
  }

  return found.filter((t) => t !== undefined)
}
