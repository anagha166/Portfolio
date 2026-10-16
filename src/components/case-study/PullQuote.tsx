import { motion } from 'framer-motion'
import { fadeTransition } from '@/animations/transitions'

interface PullQuoteProps {
  quote: string
}

export function PullQuote({ quote }: PullQuoteProps) {
  return (
    <motion.blockquote
      className="my-12"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={fadeTransition}
    >
      <p
        className="text-[clamp(1.25rem,2.2vw,1.5rem)] font-normal leading-snug tracking-tight"
        style={{ fontFamily: 'var(--font-hero-name)' }}
      >
        {quote}
      </p>
    </motion.blockquote>
  )
}
