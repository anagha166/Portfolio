import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'

const pillars = [
  {
    title: 'Research',
    description:
      'Understanding people before pixels. Contextual inquiry, co-design, and synthesis that reveals what matters.',
  },
  {
    title: 'Design',
    description:
      'From sketch to system. Every decision tested, every interaction intentional, every detail considered.',
  },
  {
    title: 'Engineering',
    description:
      'Building what I design. React, TypeScript, and a belief that designers who code make better products.',
  },
  {
    title: 'Human-AI Interaction',
    description:
      'Studying how intelligent systems can extend human capability without diminishing human agency.',
  },
]

export function ApproachSpread() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-[var(--spacing-page)] py-32">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <SectionEyebrow>Approach</SectionEyebrow>
        <SectionTitle>Human-centered, sketch-first, always iterating</SectionTitle>
      </motion.div>

      <div className="mt-20 grid gap-14 md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            variants={spreadVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.08 }}
            className="group"
          >
            <div className="mb-4 h-px w-6 bg-[var(--color-graphite)]/20 transition-all duration-500 group-hover:w-10 dark:bg-[var(--color-graphite-dark)]/25" />
            <h3 className="text-base font-medium tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
              {pillar.title}
            </h3>
            <p className="mt-2.5 max-w-sm text-[0.9375rem] leading-relaxed text-[var(--color-graphite-light)] dark:text-[var(--color-graphite-light-dark)]">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
