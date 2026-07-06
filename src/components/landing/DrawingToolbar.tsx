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
      className="fixed bottom-8 left-1/2 z-[55] -translate-x-1/2"
      variants={toolbarVariants}
      initial="hidden"
      animate="visible"
      role="toolbar"
      aria-label="Drawing tools"
    >
      <div className="flex items-center gap-0.5 rounded-2xl border border-black/[0.06] bg-[var(--color-paper)]/75 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/[0.06] dark:bg-[var(--color-paper-warm-dark)]/75 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-1 px-1.5" role="group" aria-label="Colors">
          {palette.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onColorChange(c.id)}
              className={`h-5 w-5 rounded-full transition-all duration-300 ${
                colorId === c.id && mode !== 'eraser'
                  ? 'ring-2 ring-[var(--color-graphite)]/30 ring-offset-1 dark:ring-[var(--color-graphite-dark)]/30'
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
  return <div className="mx-1 h-4 w-px bg-black/[0.06] dark:bg-white/[0.08]" />
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
          ? 'bg-[var(--color-graphite)] text-[var(--color-paper)] dark:bg-[var(--color-graphite-dark)] dark:text-[var(--color-paper-dark)]'
          : 'text-[var(--color-graphite-faint)] hover:bg-black/[0.04] hover:text-[var(--color-graphite)] disabled:opacity-25 dark:text-[var(--color-graphite-faint-dark)] dark:hover:bg-white/[0.06] dark:hover:text-[var(--color-graphite-dark)]'
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
