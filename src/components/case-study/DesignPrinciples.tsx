import { motion } from 'framer-motion'
import { fadeTransition } from '@/animations/transitions'

interface DesignPrinciplesProps {
  principles: string[]
}

export function DesignPrinciples({ principles }: DesignPrinciplesProps) {
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {principles.map((principle, i) => (
        <motion.div
          key={principle}
          className="rounded-sm border border-[var(--color-beige)] px-5 py-4 dark:border-[var(--color-beige-dark)]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...fadeTransition, delay: i * 0.06 }}
        >
          <p className="text-sm font-medium tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
            {principle}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
