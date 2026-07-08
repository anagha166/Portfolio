import { motion } from 'framer-motion'
import { getDrawingPalette, type DrawingColorId } from '@/canvas/drawingColors'
import { useThemeContext } from '@/layout/ThemeProvider'
import type { DrawingMode } from '@/types'

interface FloatingSketchToolbarProps {
  mode: DrawingMode
  colorId: DrawingColorId
  onModeChange: (mode: DrawingMode) => void
  onColorChange: (id: DrawingColorId) => void
  onUndo: () => void
  onClear: () => void
  onExport: () => string
  canUndo: boolean
}

export function FloatingSketchToolbar({
  mode,
  colorId,
  onModeChange,
  onColorChange,
  onUndo,
  onClear,
  onExport,
  canUndo,
}: FloatingSketchToolbarProps) {
  const { isDark } = useThemeContext()
  const palette = getDrawingPalette(isDark)

  const handleExport = () => {
    const dataUrl = onExport()
    if (!dataUrl) return
    const link = document.createElement('a')
    link.download = 'sketch.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center gap-1 rounded-full border border-[var(--color-window-border)] bg-[var(--color-paper)]/98 px-2 py-2 shadow-[0_10px_30px_rgba(32,22,14,0.18)] backdrop-blur-md"
      role="toolbar"
      aria-label="Drawing tools"
    >
      {palette.slice(0, 3).map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onColorChange(c.id)}
          className={`h-5 w-5 rounded-full transition-all duration-300 ${
            colorId === c.id && mode !== 'eraser'
              ? 'ring-2 ring-[var(--color-graphite)]/25 ring-offset-1'
              : ''
          }`}
          style={{ backgroundColor: c.value }}
          aria-label={c.label}
          aria-pressed={colorId === c.id && mode !== 'eraser'}
        />
      ))}

      <Divider />

      <ToolButton
        onClick={() => onModeChange(mode === 'eraser' ? 'pencil' : 'eraser')}
        label={mode === 'eraser' ? 'Pencil' : 'Eraser'}
        active={mode === 'eraser'}
      >
        {mode === 'eraser' ? '✎' : '◻'}
      </ToolButton>
      <ToolButton onClick={onUndo} label="Undo" disabled={!canUndo}>
        ↩
      </ToolButton>
      <ToolButton onClick={onClear} label="Clear">
        ×
      </ToolButton>
      <ToolButton onClick={handleExport} label="Export">
        ↓
      </ToolButton>
    </motion.div>
  )
}

function Divider() {
  return <div className="mx-0.5 h-4 w-px bg-[var(--color-window-border)]" />
}

function ToolButton({
  children,
  onClick,
  label,
  disabled = false,
  active = false,
}: {
  children: React.ReactNode
  onClick: () => void
  label: string
  disabled?: boolean
  active?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all duration-300 ${
        active
          ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
          : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-sage-wash)]/50 hover:text-[var(--color-ink)] disabled:opacity-35'
      }`}
      aria-label={label}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}
