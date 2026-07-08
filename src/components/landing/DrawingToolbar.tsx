import { motion } from 'framer-motion'
import { toolbarVariants } from '@/animations/transitions'
import { getDrawingPalette, type DrawingColorId } from '@/canvas/drawingColors'
import { useThemeContext } from '@/layout/ThemeProvider'
import type { DrawingMode } from '@/types'

interface DrawingToolbarProps {
  mode: DrawingMode
  colorId: DrawingColorId
  onModeChange: (mode: DrawingMode) => void
  onColorChange: (id: DrawingColorId) => void
  onUndo: () => void
  onClear: () => void
  onExport: () => string
  canUndo: boolean
}

export function DrawingToolbar({
  mode,
  colorId,
  onModeChange,
  onColorChange,
  onUndo,
  onClear,
  onExport,
  canUndo,
}: DrawingToolbarProps) {
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
      className="fixed bottom-8 left-6 z-[55]"
      variants={toolbarVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="mb-2 text-center text-[0.75rem] font-medium tracking-[0.01em] text-[var(--color-ink-muted)]">
        every idea starts as just a sketch - try it out for yourself
      </p>
      <div className="flex items-center gap-0.5 rounded-2xl border border-[var(--color-window-border)] bg-[var(--color-paper)]/98 px-2 py-2 shadow-[0_12px_34px_rgba(32,22,14,0.18)] backdrop-blur-xl">
        <div className="flex items-center gap-1 px-1.5" role="group" aria-label="Colors">
          {palette.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onColorChange(c.id)}
              className={`h-5 w-5 rounded-full transition-all duration-300 ${
                colorId === c.id && mode !== 'eraser'
                  ? 'ring-2 ring-[var(--color-ink)]/35 ring-offset-1'
                  : 'hover:scale-110'
              }`}
              style={{ backgroundColor: c.value }}
              aria-label={c.label}
              aria-pressed={colorId === c.id && mode !== 'eraser'}
            />
          ))}
        </div>

        <Divider />

        <ToolbarButton
          onClick={() => onModeChange(mode === 'eraser' ? 'pencil' : 'eraser')}
          label={mode === 'eraser' ? 'Pencil' : 'Eraser'}
          active={mode === 'eraser'}
        >
          {mode === 'eraser' ? <PencilIcon /> : <EraserIcon />}
        </ToolbarButton>
        <ToolbarButton onClick={onUndo} label="Undo" disabled={!canUndo}>
          <UndoIcon />
        </ToolbarButton>
        <ToolbarButton onClick={onClear} label="Clear">
          <ClearIcon />
        </ToolbarButton>
        <ToolbarButton onClick={handleExport} label="Export">
          <ExportIcon />
        </ToolbarButton>
      </div>
    </motion.div>
  )
}

function Divider() {
  return <div className="mx-1 h-4 w-px bg-[var(--color-window-border)]" />
}

function ToolbarButton({
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
      className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
        active
          ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
          : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-sage-wash)]/55 hover:text-[var(--color-ink)] disabled:opacity-35'
      }`}
      aria-label={label}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 14l2-0.5 9-9-2-2-9 9L2 14z" fill="currentColor" />
    </svg>
  )
}

function EraserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function UndoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h8a3 3 0 100-6H8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L3 8l2 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ExportIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2v8M5 7l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 12v1h10v-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
