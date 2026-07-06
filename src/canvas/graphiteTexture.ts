/** Apply subtle graphite grain to a canvas context */
export function applyGraphiteStroke(
  ctx: CanvasRenderingContext2D,
  color: string,
  alpha: number,
): void {
  ctx.strokeStyle = color
  ctx.globalAlpha = alpha
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
}

/** Create a subtle noise overlay for graphite texture */
export function createGraphitePattern(
  ctx: CanvasRenderingContext2D,
  size = 128,
): CanvasPattern | null {
  const patternCanvas = document.createElement('canvas')
  patternCanvas.width = size
  patternCanvas.height = size
  const pCtx = patternCanvas.getContext('2d')
  if (!pCtx) return null

  const imageData = pCtx.createImageData(size, size)
  const data = imageData.data

  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 30
    data[i] = noise
    data[i + 1] = noise
    data[i + 2] = noise
    data[i + 3] = 8
  }

  pCtx.putImageData(imageData, 0, 0)
  return ctx.createPattern(patternCanvas, 'repeat')
}

export const GRAPHITE_COLORS = {
  light: {
    primary: '#2c2c2c',
    secondary: '#4a4a4a',
    faint: 'rgba(44, 44, 44, 0.15)',
  },
  dark: {
    primary: '#c8c4bf',
    secondary: '#a8a4a0',
    faint: 'rgba(200, 196, 191, 0.15)',
  },
} as const
