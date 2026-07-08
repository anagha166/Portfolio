import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

const pillars = [
  {
    title: 'Research',
    description:
      'Understanding people before pixels. Contextual inquiry, synthesis, and co-design that reveals what matters.',
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
    title: 'Art',
    description:
      'Painting, drawing, and visual exploration that inform how I think about color, composition, and emotion.',
  },
]

export function StudioSection() {
  return (
    <section className="border-t border-[var(--color-beige)] bg-[color-mix(in_srgb,var(--color-art-gold)_6%,var(--color-surface))] px-[var(--spacing-page)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--content-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionHeader
            eyebrow="Studio"
            title="Where curiosity meets craft"
            description="I work at the intersection of human-centered design, creative technology, and visual art."
          />
        </motion.div>

        <div className="mt-20 grid gap-14 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="mb-4 h-px w-8 bg-[var(--color-graphite)]/15" />
              <h3 className="text-base font-medium tracking-tight text-[var(--color-graphite)]">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-[var(--color-graphite-muted)]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
