import { motion } from 'framer-motion'
import type { CaseStudyMetric } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'

interface MetricBlockProps {
  metrics: CaseStudyMetric[]
}

export function MetricBlock({ metrics }: MetricBlockProps) {
  return (
    <div className="my-12 grid gap-8 sm:grid-cols-3">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...fadeTransition, delay: i * 0.1 }}
        >
          <p className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-[var(--color-accent)] dark:text-[var(--color-accent-dark)]">
            {metric.value}
          </p>
          <p className="mt-1 text-sm tracking-wide text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
