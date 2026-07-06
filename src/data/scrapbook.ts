import anaghaPortrait from '../assets/photos/Photoshoot.jpg'

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
    src: anaghaPortrait,
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
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=360&h=280&fit=crop',
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
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=320&h=240&fit=crop',
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
