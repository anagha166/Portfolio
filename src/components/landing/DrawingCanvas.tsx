import { forwardRef } from 'react'
import type { DrawingMode } from '@/types'

interface DrawingCanvasProps {
  enabled: boolean
  mode: DrawingMode
  className?: string
}

export const DrawingCanvas = forwardRef<HTMLCanvasElement, DrawingCanvasProps>(
  function DrawingCanvas({ enabled, mode, className = '' }, ref) {
    return (
      <canvas
        ref={ref}
        className={`touch-none ${
          enabled
            ? `pointer-events-auto ${mode === 'eraser' ? 'cursor-eraser' : 'cursor-pencil'}`
            : 'pointer-events-none'
        } ${className}`}
        aria-label={enabled ? 'Sketch canvas — draw anywhere on the page' : undefined}
        role={enabled ? 'presentation' : undefined}
      />
    )
  },
)
