import annu from '@/assets/art/Annu.png'
import greekTragedy from '@/assets/art/GreekTragedy.png'
import lemur from '@/assets/art/Lemur.png'
import marvel from '@/assets/art/Marvel.png'
import wanda from '@/assets/art/Wanda.png'
import pearlGirl from '@/assets/art/PearlGirl.png'

export type StudioCategory = '2d' | '3d'
export type StudioMediaType = 'image' | 'video'

export interface StudioPiece {
  id: string
  title: string
  category: StudioCategory
  mediaType: StudioMediaType
  /** Image URL for photos, or Google Drive file id for videos */
  src: string
  alt: string
}

export const STUDIO_SECTIONS: {
  id: StudioCategory
  label: string
}[] = [
  {
    id: '2d',
    label: '2D Art & Design',
  },
  {
    id: '3d',
    label: '3D Modeling',
  },
]

export const STUDIO_PIECES: StudioPiece[] = [
  {
    id: 'family-portrait',
    title: 'Pencil Sketch',
    category: '2d',
    mediaType: 'image',
    src: annu,
    alt: 'Family portrait painting',
  },
  {
    id: 'greek-tragedy',
    title: 'Pencil Sketch',
    category: '2d',
    mediaType: 'image',
    src: greekTragedy,
    alt: 'Portrait painted from reference',
  },
  {
    id: 'lemur',
    title: 'Pencil sketch',
    category: '2d',
    mediaType: 'image',
    src: lemur,
    alt: 'Pencil sketch of a lemur',
  },
  {
    id: 'marvel-car',
    title: 'Acrylic on Wood',
    category: '2d',
    mediaType: 'image',
    src: marvel,
    alt: 'Car illustration featuring Marvel superheroes',
  },
  {
    id: 'mona-lisa',
    title: 'Colored Pencil',
    category: '2d',
    mediaType: 'video',
    src: '13ngqzH-4pSXEm8JskU_xrJQKl0RXgtTj',
    alt: 'Video of Mona Lisa recreation with frame',
  },
  {
    id: 'wandavision',
    title: 'Tempera on Paper',
    category: '2d',
    mediaType: 'image',
    src: wanda,
    alt: 'WandaVision portrait painting',
  },
  {
    id: 'pearl-girl',
    title: 'Oil on Canvas',
    category: '2d',
    mediaType: 'image',
    src: pearlGirl,
    alt: 'Girl with a Pearl Earring recreation in progress',
  },
  {
    id: 'bat-animation',
    title: 'Pixelar',
    caption: 'Sprite work for a game design experiment',
    category: '2d',
    mediaType: 'video',
    src: '15RpkvNoiJVODTbsSaz1qtwtKhZQXG2L8',
    alt: 'Bat animation for a game design',
  },
  {
    id: 'blue-car',
    title: 'Car demo',
    category: '3d',
    mediaType: 'video',
    src: '1sOA-_QFZFkpbGOEOtuwEAWA38iR4Ix9g',
    alt: '3D blue car with glowing headlights',
  },
  {
    id: 'winter-scene',
    title: 'Winter scene',
    category: '3d',
    mediaType: 'video',
    src: '18aq7hg7TeZZ6sfiAg56FdL3J-bwkjS8W',
    alt: '3D winter scene',
  },
  {
    id: 'donut',
    title: 'The Blender rite of passage',
    category: '3d',
    mediaType: 'video',
    src: '1yD8b8MLdYxxpAwOsmEdku4q7WXXrmU-w',
    alt: 'Preliminary 3D donut model with sprinkles',
  },
]

export function getStudioPiecesByCategory(category: StudioCategory) {
  return STUDIO_PIECES.filter((piece) => piece.category === category)
}

export function getStudioTeaserPieces(limit = 4) {
  return STUDIO_PIECES.filter((piece) => piece.mediaType === 'image').slice(0, limit)
}

export function drivePreviewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`
}
