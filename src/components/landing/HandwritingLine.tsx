import { useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { CHAR_DURATION } from '@/animations/pencil'

interface HandwritingLineProps {
  text: string
  isActive: boolean
  isComplete: boolean
  onComplete: () => void
  onProgress?: (progress: number, pencilX: number) => void
  className?: string
}

export function HandwritingLine({
  text,
  isActive,
  isComplete,
  onComplete,
  onProgress,
  className = '',
}: HandwritingLineProps) {
  const measureRef = useRef<HTMLSpanElement>(null)
  const progress = useMotionValue(isComplete ? 1 : 0)
  const clipPath = useTransform(progress, (p) => `inset(0 ${100 - p * 100}% 0 0)`)
  const hasAnimated = useRef(false)

  const reportProgress = useCallback(
    (p: number) => {
      if (!measureRef.current) return
      const charIndex = Math.max(0, Math.floor(p * text.length))
      measureRef.current.textContent = text.slice(0, charIndex) || '\u00a0'
      onProgress?.(p, measureRef.current.offsetWidth)
    },
    [text, onProgress],
  )

  useEffect(() => {
    if (!isActive) return
    if (hasAnimated.current) return
    hasAnimated.current = true

    progress.set(0)
    const duration = (text.length * CHAR_DURATION) / 1000

    const controls = animate(progress, 1, {
      duration,
      ease: 'linear',
      onUpdate: reportProgress,
      onComplete: () => {
        reportProgress(1)
        onComplete()
      },
    })

    return () => controls.stop()
  }, [isActive, text, progress, onComplete, reportProgress])

  return (
    <div className={`relative ${className}`}>
      {/* Reserve layout space */}
      <p className="invisible" aria-hidden="true">
        {text}
      </p>

      {/* Hidden measurer — must match font styles */}
      <span
        ref={measureRef}
        className={`pointer-events-none absolute top-0 left-0 whitespace-pre opacity-0 ${className}`}
        aria-hidden="true"
      >
        {'\u00a0'}
      </span>

      {/* Graphite reveal */}
      {(isActive || isComplete) && (
        <motion.p
          className={`graphite-text absolute inset-0 ${className}`}
          style={isComplete ? undefined : { clipPath }}
          aria-hidden={!isComplete}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}
