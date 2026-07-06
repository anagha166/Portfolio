import pencilImg from '@/assets/stickers/pencil.svg'
import coffeeImg from '@/assets/stickers/coffee.svg'
import compassImg from '@/assets/stickers/compass.svg'

export interface StickerPlacement {
  id: string
  label: string
  imageSrc: string
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
    imageSrc: pencilImg,
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
    imageSrc: coffeeImg,
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
    imageSrc: compassImg,
    x: 94,
    y: 88,
    rotate: 12,
    width: 68,
    peelDirection: 45,
    peelBackHoverPct: 18,
    peelBackActivePct: 32,
    shadowIntensity: 0.4,
  },
]

export function getInitialStickerPosition(xPercent: number, yPercent: number) {
  return {
    x: (window.innerWidth * xPercent) / 100,
    y: (window.innerHeight * yPercent) / 100,
  }
}
