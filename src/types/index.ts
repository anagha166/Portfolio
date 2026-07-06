export type DrawingMode = 'pencil' | 'eraser'

export interface Point {
  x: number
  y: number
  pressure: number
  timestamp: number
}

export interface Stroke {
  points: Point[]
  mode: DrawingMode
  lineWidth: number
  color: string
}

export interface NavItem {
  label: string
  path: string
}

export interface ProjectSummary {
  slug: string
  title: string
  role: string
  timeline: string
  impact: string
  image: string
  tags: string[]
}

export interface StickerPlacement {
  id: string
  x: number
  y: number
  rotate: number
}
