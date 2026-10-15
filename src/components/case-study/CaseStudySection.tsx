import { motion } from 'framer-motion'
import type { CaseStudySection as Section } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { PullQuote } from './PullQuote'
import { MetricBlock } from './MetricBlock'
import { ImageGallery } from './ImageGallery'
import { BeforeAfter } from './BeforeAfter'
import { VideoEmbed } from './VideoEmbed'
import { PrototypeEmbed } from './PrototypeEmbed'
import { renderParagraphWithHoverPreviews } from './HoverImageTerm'

interface CaseStudySectionProps {
  section: Section
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <motion.section
      id={section.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={fadeTransition}
    >
      <h2
        className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-normal tracking-tight"
        style={{ fontFamily: 'var(--font-hero-name)' }}
      >
        {section.title}
      </h2>

      <div className="mt-6 space-y-5">
        {section.content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="max-w-[38rem] text-[1.0625rem] leading-[1.75] text-black/75"
          >
            {renderParagraphWithHoverPreviews(paragraph, section.hoverPreviews)}
          </p>
        ))}
      </div>

      {section.pullQuote && <PullQuote quote={section.pullQuote} />}
      {section.metrics && <MetricBlock metrics={section.metrics} />}
      {section.images && (
        <ImageGallery images={section.images} layout={section.imageLayout} />
      )}
      {section.imagePlaceholder && (
        <div className="my-10 flex min-h-[16rem] items-center justify-center border border-dashed border-black/20 px-6 py-12 md:min-h-[20rem]">
          <p className="max-w-xs text-center text-sm leading-relaxed text-black/40">
            {section.imagePlaceholder}
          </p>
        </div>
      )}
      {section.beforeAfter && (
        <BeforeAfter before={section.beforeAfter.before} after={section.beforeAfter.after} />
      )}
      {section.contentAfter && section.contentAfter.length > 0 && (
        <div className="mt-6 space-y-5">
          {section.contentAfter.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="max-w-[38rem] text-[1.0625rem] leading-[1.75] text-black/75"
            >
              {renderParagraphWithHoverPreviews(paragraph, section.hoverPreviews)}
            </p>
          ))}
        </div>
      )}
      {section.videoUrl && <VideoEmbed url={section.videoUrl} />}
      {section.prototypeUrl && <PrototypeEmbed url={section.prototypeUrl} />}
    </motion.section>
  )
}
