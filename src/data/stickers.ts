export interface StickerPlacement {
  id: string
  label: string
  color: string
  /** Viewport position percent */
  x: number
  y: number
  rotate: number
  width: number
  peelDirection?: number
  peelBackHoverPct?: number
  peelBackActivePct?: number
  shadowIntensity?: number
}

/** Few stickers, tucked to corners — kept out of the main content area */
export const STICKER_PLACEMENTS: StickerPlacement[] = [
  {
    id: 'pencil',
    label: 'Pencil',
    color: '#6f8f78',
    x: 2,
    y: 14,
    rotate: -10,
    width: 72,
    peelDirection: 225,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.45,
  },
  {
    id: 'coffee',
    label: 'Coffee',
    color: '#a06a68',
    x: 93,
    y: 12,
    rotate: 8,
    width: 72,
    peelDirection: 315,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.45,
  },
  {
    id: 'compass',
    label: 'Compass',
    color: '#6f87a7',
    x: 94,
    y: 88,
    rotate: 12,
    width: 68,
    peelDirection: 45,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.4,
  },
  {
    id: 'fern',
    label: 'Fern',
    color: '#7e9a82',
    x: 8,
    y: 82,
    rotate: -7,
    width: 64,
    peelDirection: 140,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.42,
  },
  {
    id: 'berry',
    label: 'Berry',
    color: '#9a6f79',
    x: 82,
    y: 56,
    rotate: 5,
    width: 62,
    peelDirection: 280,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.42,
  },
]

export function getInitialStickerPosition(xPercent: number, yPercent: number) {
  return {
    x: (window.innerWidth * xPercent) / 100,
    y: (window.innerHeight * yPercent) / 100,
  }
}
