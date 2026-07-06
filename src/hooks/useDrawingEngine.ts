import { useLayoutEffect, useEffect, useRef, useCallback, useState } from 'react'
import { DrawingEngine } from '@/canvas/DrawingEngine'
import {
  DEFAULT_COLOR_ID,
  resolveDrawingColor,
  type DrawingColorId,
} from '@/canvas/drawingColors'
import { useThemeContext } from '@/layout/ThemeProvider'
import type { DrawingMode } from '@/types'

interface UseDrawingEngineOptions {
  enabled?: boolean
}

export function useDrawingEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseDrawingEngineOptions = {},
) {
  const { enabled = true } = options
  const { isDark } = useThemeContext()
  const engineRef = useRef<DrawingEngine | null>(null)
  const [mode, setModeState] = useState<DrawingMode>('pencil')
  const [colorId, setColorId] = useState<DrawingColorId>(DEFAULT_COLOR_ID)
  const [canUndo, setCanUndo] = useState(false)

  const resolvedColor = resolveDrawingColor(colorId, isDark)

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !enabled) return

    const engine = new DrawingEngine({
      canvas,
      color: resolvedColor,
      onStrokeEnd: () => setCanUndo(true),
    })
    engineRef.current = engine

    const initSize = () => engine.resize()
    initSize()
    const raf1 = requestAnimationFrame(() => {
      initSize()
      requestAnimationFrame(initSize)
    })

    const observer = new ResizeObserver(() => engine.resize())
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(raf1)
      observer.disconnect()
      engine.destroy()
      engineRef.current = null
    }
  }, [canvasRef, enabled])

  // Update stroke color when theme or color selection changes
  useEffect(() => {
    engineRef.current?.setColor(resolvedColor)
  }, [resolvedColor])

  const setMode = useCallback((newMode: DrawingMode) => {
    engineRef.current?.setMode(newMode)
    setModeState(newMode)
  }, [])

  const setColor = useCallback((id: DrawingColorId) => {
    setColorId(id)
    engineRef.current?.setMode('pencil')
    setModeState('pencil')
  }, [])

  const undo = useCallback(() => {
    const success = engineRef.current?.undo() ?? false
    if (success) setCanUndo(true)
    return success
  }, [])

  const clear = useCallback(() => {
    engineRef.current?.clear()
    setCanUndo(true)
  }, [])

  const exportSketch = useCallback(() => {
    return engineRef.current?.export() ?? ''
  }, [])

  return {
    mode,
    setMode,
    colorId,
    color: resolvedColor,
    setColor,
    undo,
    clear,
    exportSketch,
    canUndo,
  }
}
