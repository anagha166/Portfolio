export type DrawingColorId =
  | 'graphite'
  | 'accent'
  | 'terracotta'
  | 'slate'
  | 'plum'
  | 'gold'

export interface DrawingColor {
  id: DrawingColorId
  label: string
  /** Stroke color on light paper */
  light: string
  /** Stroke color on dark paper */
  dark: string
}

/** Each color has a light-mode and dark-mode value — dark on paper, light on paper */
export const DRAWING_COLORS: DrawingColor[] = [
  { id: 'graphite', label: 'Graphite', light: '#2c2c2c', dark: '#e8e4df' },
  { id: 'accent', label: 'Forest', light: '#4a6741', dark: '#9ab892' },
  { id: 'terracotta', label: 'Terracotta', light: '#8b5a4a', dark: '#d4a894' },
  { id: 'slate', label: 'Slate', light: '#5a7a8b', dark: '#9ab8c8' },
  { id: 'plum', label: 'Plum', light: '#6b4a5a', dark: '#c4a0b0' },
  { id: 'gold', label: 'Ochre', light: '#9a8b5a', dark: '#d4c490' },
]

export const DEFAULT_COLOR_ID: DrawingColorId = 'graphite'

export function resolveDrawingColor(id: DrawingColorId, isDark: boolean): string {
  const entry = DRAWING_COLORS.find((c) => c.id === id)
  if (!entry) return isDark ? '#e8e4df' : '#2c2c2c'
  return isDark ? entry.dark : entry.light
}

export function getDrawingPalette(isDark: boolean) {
  return DRAWING_COLORS.map((c) => ({
    id: c.id,
    label: c.label,
    value: isDark ? c.dark : c.light,
  }))
}
