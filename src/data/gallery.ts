import { placeholderImages } from '@/assets/placeholders'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  title?: string
  caption?: string
  accent?: string
  x: number
  y: number
  width: number
  rotate?: number
  zIndex?: number
  projectSlug?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'painting-large',
    src: 'linear-gradient(155deg, #f8efe2 0%, #eacdb2 45%, #d39f86 100%)',
    alt: 'Abstract painting with bold color',
    title: 'Abstract study',
    caption: 'Acrylic on canvas',
    accent: 'var(--color-art-coral)',
    x: 72,
    y: 4,
    width: 200,
    rotate: 2,
    zIndex: 4,
  },
  {
    id: 'portrait',
    src: 'linear-gradient(165deg, #f6f0e8 0%, #dfd0c0 55%, #c6b29d 100%)',
    alt: 'Anagha Kamath',
    title: 'In the studio',
    caption: 'Oakland, CA',
    accent: 'var(--color-art-plum)',
    x: 2,
    y: 12,
    width: 175,
    rotate: -3,
    zIndex: 3,
  },
  {
    id: 'ui-exploration',
    src: 'linear-gradient(140deg, #eef4fb 0%, #d4e5f7 52%, #bdd6ef 100%)',
    alt: 'UI exploration on screen',
    title: 'Interface craft',
    caption: 'Human-AI workspace',
    accent: 'var(--color-art-sky)',
    x: 38,
    y: 22,
    width: 190,
    rotate: 1,
    zIndex: 3,
    projectSlug: 'human-ai-workspace',
  },
  {
    id: 'sketch',
    src: 'linear-gradient(150deg, #f8f2e5 0%, #ead9b2 50%, #cfb27c 100%)',
    alt: 'Sketchbook and pencils',
    title: 'Sketchbook',
    caption: 'Ideation',
    accent: 'var(--color-art-gold)',
    x: 85,
    y: 38,
    width: 145,
    rotate: 5,
    zIndex: 2,
  },
  {
    id: 'watercolor',
    src: 'linear-gradient(160deg, #f7eef1 0%, #e9d3df 50%, #ceb0c4 100%)',
    alt: 'Watercolor and paint',
    title: 'Color exploration',
    caption: 'Paint & pigment',
    accent: 'var(--color-art-rose)',
    x: 4,
    y: 52,
    width: 165,
    rotate: -2,
    zIndex: 2,
  },
  {
    id: 'wireframe',
    src: 'linear-gradient(145deg, #f1f5f8 0%, #d4dde5 50%, #b9c7d2 100%)',
    alt: 'Wireframe on desk',
    title: 'Wireframes',
    caption: 'Health companion',
    accent: 'var(--color-art-sage)',
    x: 55,
    y: 58,
    width: 175,
    rotate: -3,
    zIndex: 3,
    projectSlug: 'health-companion',
  },
  {
    id: 'design-system',
    src: placeholderImages.designSystem,
    alt: 'Design system components',
    title: 'Design system',
    caption: 'Component library',
    accent: 'var(--color-art-sky)',
    x: 20,
    y: 72,
    width: 155,
    rotate: 2,
    zIndex: 1,
    projectSlug: 'design-system',
  },
]
