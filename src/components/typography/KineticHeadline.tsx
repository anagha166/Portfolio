import { useCallback, useRef, type CSSProperties, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import { kineticDefaultVariation } from './kineticLetters'

interface KineticHeadlineProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  id?: string
}

export function KineticHeadline({
  children,
  as: Tag = 'h2',
  className = '',
  id,
}: KineticHeadlineProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion || !containerRef.current) return

      const spans = containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]')
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
        const influence = Math.max(0, 1 - dist / 120)
        const weight = 600 + influence * 200
        const spacing = influence * 0.03
        span.style.fontVariationSettings = `'wght' ${weight}, 'SOFT' 0, 'WONK' 0`
        span.style.letterSpacing = `${spacing}em`
      })
    },
    [prefersReducedMotion],
  )

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return
    containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]').forEach((span) => {
      span.style.fontVariationSettings = kineticDefaultVariation
      span.style.letterSpacing = '0em'
    })
  }, [])

  const words = children.split(' ')

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      id={id}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={children}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split('').map((letter, li) => (
            <span
              key={li}
              data-letter
              className="inline-block font-[family-name:var(--font-display)] transition-[font-variation-settings,letter-spacing] duration-150"
              style={
                {
                  fontVariationSettings: kineticDefaultVariation,
                } as CSSProperties
              }
            >
              {letter}
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}

interface KineticTextProps {
  children: ReactNode
  className?: string
}

export function KineticText({ children, className = '' }: KineticTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion || !containerRef.current) return
      containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]').forEach((span) => {
        const rect = span.getBoundingClientRect()
        const dist = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2),
        )
        const influence = Math.max(0, 1 - dist / 140)
        const weight = 600 + influence * 200
        span.style.fontVariationSettings = `'wght' ${weight}, 'SOFT' 0, 'WONK' 0`
      })
    },
    [prefersReducedMotion],
  )

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return
    containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]').forEach((span) => {
      span.style.fontVariationSettings = kineticDefaultVariation
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
