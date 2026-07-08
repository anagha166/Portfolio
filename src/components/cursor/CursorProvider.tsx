import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useIsTouchDevice, usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import type { CursorMode } from '@/types'
import { CustomCursor } from './CustomCursor'

interface CursorContextValue {
  enabled: boolean
  mode: CursorMode
  setMode: (mode: CursorMode) => void
  position: { x: number; y: number }
}

const CursorContext = createContext<CursorContextValue | null>(null)

export function useCursor() {
  const ctx = useContext(CursorContext)
  return ctx
}

interface CursorProviderProps {
  children: ReactNode
}

export function CursorProvider({ children }: CursorProviderProps) {
  const isTouch = useIsTouchDevice()
  const prefersReducedMotion = usePrefersReducedMotion()
  const enabled = !isTouch && !prefersReducedMotion

  const [mode, setMode] = useState<CursorMode>('default')
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const lerp = 0.18
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp
    setPosition({ x: currentRef.current.x, y: currentRef.current.y })
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('custom-cursor-active')
      return
    }

    document.body.classList.add('custom-cursor-active')
    rafRef.current = requestAnimationFrame(animate)

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null
      const modeAttr = cursorEl?.dataset.cursor as CursorMode | undefined
      if (modeAttr) {
        setMode(modeAttr)
      } else if (target.closest('a, button, [role="button"]')) {
        setMode('link')
      } else {
        setMode('default')
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [enabled, animate])

  return (
    <CursorContext.Provider value={{ enabled, mode, setMode, position }}>
      {children}
      {enabled && <CustomCursor mode={mode} position={position} />}
    </CursorContext.Provider>
  )
}
