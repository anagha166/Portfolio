export interface ScrapbookPhotoItem {
  id: string
  src: string
  alt: string
  caption?: string
  rotate: number
  /** Position within collage container (percent) */
  x: number
  y: number
  width: number
  zIndex?: number
  tape?: 'top-left' | 'top-right' | 'bottom'
  tapeColor?: 'blush' | 'sage' | 'coral' | 'sky' | 'butter'
  /** Subtle chromatic shadow tint */
  tint?: string
}

export const HERO_SCRAPBOOK_PHOTOS: ScrapbookPhotoItem[] = [
  {
    id: 'portrait-main',
    src: 'linear-gradient(155deg, #f7f1ea 0%, #e7dacc 55%, #cebca8 100%)',
    alt: 'Portrait — Anagha',
    caption: 'Anagha · Oakland',
    rotate: 3,
    x: 18,
    y: 8,
    width: 200,
    zIndex: 3,
    tape: 'top-right',
    tapeColor: 'coral',
    tint: 'var(--color-coral)',
  },
  {
    id: 'sketching',
    src: 'linear-gradient(140deg, #f8f2e7 0%, #ead7b1 45%, #cfb07c 100%)',
    alt: 'Sketching at the desk',
    caption: 'Every project starts here',
    rotate: -7,
    x: 52,
    y: 42,
    width: 168,
    zIndex: 2,
    tape: 'top-left',
    tapeColor: 'butter',
    tint: 'var(--color-butter)',
  },
  {
    id: 'workspace',
    src: 'linear-gradient(145deg, #edf3f7 0%, #d5e0e8 52%, #bac9d4 100%)',
    alt: 'Research notes and workspace',
    caption: 'Field notes',
    rotate: 5,
    x: 4,
    y: 58,
    width: 150,
    zIndex: 1,
    tape: 'bottom',
    tapeColor: 'sage',
    tint: 'var(--color-sage-wash)',
  },
]
