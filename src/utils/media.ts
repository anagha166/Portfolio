/** True when a media string is a CSS background (gradient/color), not an image URL. */
export function isCssBackground(src: string) {
  return (
    src.startsWith('linear-gradient') ||
    src.startsWith('radial-gradient') ||
    src.startsWith('conic-gradient') ||
    src.startsWith('#') ||
    src.startsWith('rgb') ||
    src.startsWith('hsl')
  )
}
