import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'

export function ResumePage() {
  return (
    <motion.div
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-32 pb-20"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-light tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
          Resume
        </h1>
        <p className="mt-4 max-w-lg text-[var(--color-graphite-light)] dark:text-[var(--color-graphite-light-dark)]">
          Resume content coming in a future milestone.
        </p>
      </div>
    </motion.div>
  )
}
