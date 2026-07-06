import { motion } from 'framer-motion'
import { fadeTransition } from '@/animations/transitions'

interface PullQuoteProps {
  quote: string
}

export function PullQuote({ quote }: PullQuoteProps) {
  return (
    <motion.blockquote
      className="my-12 border-l-2 border-[var(--color-accent)] py-2 pl-8 dark:border-[var(--color-accent-dark)]"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={fadeTransition}
    >
      <p className="text-[clamp(1.125rem,2vw,1.375rem)] font-light leading-relaxed tracking-tight text-[var(--color-graphite)] italic dark:text-[var(--color-graphite-dark)]">
        &ldquo;{quote}&rdquo;
      </p>
    </motion.blockquote>
  )
}
