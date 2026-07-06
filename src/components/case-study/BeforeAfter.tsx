import { motion } from 'framer-motion'
import type { CaseStudyImage } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'

interface BeforeAfterProps {
  before: CaseStudyImage
  after: CaseStudyImage
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="my-10 grid gap-6 md:grid-cols-2">
      {[before, after].map((image, i) => (
        <motion.figure
          key={image.alt}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...fadeTransition, delay: i * 0.15 }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.15em] text-[var(--color-graphite-faint)] uppercase dark:text-[var(--color-graphite-faint-dark)]">
            {i === 0 ? 'Before' : 'After'}
          </p>
          <div
            className="aspect-[4/3] w-full rounded-sm shadow-[0_2px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
            style={{ background: image.src }}
            role="img"
            aria-label={image.alt}
          />
        </motion.figure>
      ))}
    </div>
  )
}
