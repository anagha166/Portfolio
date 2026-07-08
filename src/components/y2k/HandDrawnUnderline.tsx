import { motion } from 'framer-motion'

const WAVY_PATH = 'M 2 6 C 28 10, 52 2, 78 7 S 128 11, 178 5 S 228 3, 268 8'

interface HandDrawnUnderlineProps {
  className?: string
  animate?: boolean
  stroke?: string
}

export function HandDrawnUnderline({
  className = '',
  animate: shouldAnimate = true,
  stroke = 'var(--color-red-accent)',
}: HandDrawnUnderlineProps) {
  return (
    <svg
      viewBox="0 0 270 12"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={WAVY_PATH}
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />
    </svg>
  )
}
