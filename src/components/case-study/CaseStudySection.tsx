import { motion } from 'framer-motion'
import type { CaseStudySection as Section } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { PullQuote } from './PullQuote'
import { MetricBlock } from './MetricBlock'
import { ImageGallery } from './ImageGallery'
import { BeforeAfter } from './BeforeAfter'
import { DesignPrinciples } from './DesignPrinciples'
import { VideoEmbed } from './VideoEmbed'
import { PrototypeEmbed } from './PrototypeEmbed'

interface CaseStudySectionProps {
  section: Section
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <motion.section
      id={section.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={fadeTransition}
    >
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-light tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
        {section.title}
      </h2>

      <div className="mt-6 space-y-5">
        {section.content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="max-w-prose text-[var(--color-graphite-light)] leading-[1.8] dark:text-[var(--color-graphite-light-dark)]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {section.pullQuote && <PullQuote quote={section.pullQuote} />}
      {section.principles && <DesignPrinciples principles={section.principles} />}
      {section.images && <ImageGallery images={section.images} />}
      {section.beforeAfter && (
        <BeforeAfter before={section.beforeAfter.before} after={section.beforeAfter.after} />
      )}
      {section.metrics && <MetricBlock metrics={section.metrics} />}
      {section.videoUrl && <VideoEmbed url={section.videoUrl} />}
      {section.prototypeUrl && <PrototypeEmbed url={section.prototypeUrl} />}
    </motion.section>
  )
}
