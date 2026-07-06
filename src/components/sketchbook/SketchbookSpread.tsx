import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SketchbookSpreadProps {
  children: React.ReactNode
  overlay?: React.ReactNode
  index: number
  total: number
  className?: string
}

export function SketchbookSpread({
  children,
  overlay,
  index,
  total,
  className = '',
}: SketchbookSpreadProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.995, 0.98])
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.02, 0.06])
  const boxShadow = useTransform(
    shadowOpacity,
    (o) => `inset 0 -32px 48px rgba(80, 60, 40, ${o})`,
  )

  const isLast = index === total - 1

  return (
    <section
      ref={ref}
      className={`${isLast ? 'relative' : 'sticky top-0'} min-h-screen ${className}`}
      style={{ zIndex: index + 1 }}
      aria-label={`Page ${index + 1}`}
    >
      <motion.div
        className="paper-texture group relative min-h-screen overflow-x-hidden"
        style={isLast ? undefined : { y, scale }}
      >
        {/* Binding — sketchbook spine */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--color-sketch-binding)] via-transparent to-transparent dark:from-[var(--color-sketch-binding-dark)]"
          aria-hidden="true"
        />

        {/* Dynamic depth shadow */}
        {!isLast && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ boxShadow }}
            aria-hidden="true"
          />
        )}

        {/* Paper surface highlight */}
        <div
          className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          aria-hidden="true"
        />

        {/* Full-bleed overlay layer */}
        {overlay && (
          <div className="absolute inset-0 z-[8] min-h-screen">{overlay}</div>
        )}

        <div className="relative z-10 min-h-screen">{children}</div>
      </motion.div>
    </section>
  )
}
