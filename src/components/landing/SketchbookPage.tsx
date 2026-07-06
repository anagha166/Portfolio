import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { sketchbookVariants } from '@/animations/transitions'

interface SketchbookPageProps {
  children: React.ReactNode
  isInteractive?: boolean
  className?: string
}

export const SketchbookPage = forwardRef<HTMLDivElement, SketchbookPageProps>(
  function SketchbookPage({ children, isInteractive = false, className = '' }, ref) {
    return (
      <motion.div
        ref={ref}
        className={`paper-texture relative min-h-screen ${className}`}
        variants={sketchbookVariants}
        initial="blank"
        animate={isInteractive ? 'interactive' : 'blank'}
      >
        {/* Paper edge shadow — left binding */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/[0.04] to-transparent dark:from-black/20"
          aria-hidden="true"
        />

        {/* Subtle page depth shadow */}
        <div
          className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_20px_rgba(0,0,0,0.3)]"
          aria-hidden="true"
        />

        {/* Top page curl hint */}
        <div
          className="pointer-events-none absolute -right-1 top-0 h-16 w-16 opacity-[0.03] dark:opacity-[0.06]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 100% 0%, transparent 60%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {children}
      </motion.div>
    )
  },
)
