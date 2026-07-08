import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DrawingCanvas } from '@/components/landing/DrawingCanvas'
import { FloatingSketchToolbar } from './FloatingSketchToolbar'
import { useDrawingEngine } from '@/hooks/useDrawingEngine'

export function SketchMode() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [active, setActive] = useState(false)

  const { mode, setMode, colorId, setColor, undo, clear, exportSketch, canUndo } =
    useDrawingEngine(canvasRef, { enabled: active })

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[40]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <DrawingCanvas
              ref={canvasRef}
              enabled
              mode={mode}
              className="h-full w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-[50] flex flex-col items-end gap-3">
        <AnimatePresence>
          {active && (
            <FloatingSketchToolbar
              mode={mode}
              colorId={colorId}
              onModeChange={setMode}
              onColorChange={setColor}
              onUndo={undo}
              onClear={clear}
              onExport={exportSketch}
              canUndo={canUndo}
            />
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setActive((prev) => !prev)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_4px_24px_rgba(28,28,28,0.08)] backdrop-blur-md transition-colors duration-300 ${
            active
              ? 'border-[var(--color-graphite)] bg-[var(--color-graphite)] text-[var(--color-surface)]'
              : 'border-black/[0.06] bg-white/80 text-[var(--color-graphite-muted)] hover:text-[var(--color-graphite)]'
          }`}
          aria-label={active ? 'Exit draw mode' : 'Enter draw mode'}
          aria-pressed={active}
          whileTap={{ scale: 0.96 }}
        >
          <PencilIcon />
        </motion.button>
      </div>
    </>
  )
}

function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 14l2-0.5 9-9-2-2-9 9L2 14z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M10 3l3 3"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />
    </svg>
  )
}
