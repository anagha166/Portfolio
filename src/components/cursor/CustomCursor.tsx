import { motion } from 'framer-motion'
import type { CursorMode } from '@/types'

interface CustomCursorProps {
  mode: CursorMode
  position: { x: number; y: number }
}

const modeLabels: Partial<Record<CursorMode, string>> = {
  view: 'View',
  link: '→',
  draw: '✎',
}

export function CustomCursor({ mode, position }: CustomCursorProps) {
  const isExpanded = mode === 'view' || mode === 'link' || mode === 'draw'
  const label = modeLabels[mode]

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-normal"
      aria-hidden="true"
      animate={{
        x: position.x,
        y: position.y,
        width: isExpanded ? (mode === 'view' ? 56 : 36) : 10,
        height: isExpanded ? 28 : 10,
        borderRadius: isExpanded ? 14 : 5,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.5 }}
      style={{ translate: '-50% -50%' }}
    >
      <div
        className="flex h-full w-full items-center justify-center"
        style={{
          backgroundColor: 'var(--color-sage)',
          color: 'var(--color-white)',
        }}
      >
        {isExpanded && label && (
          <span className="text-mono-meta !text-[0.5625rem] !tracking-[0.06em] !text-[var(--color-bg)]">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  )
}
