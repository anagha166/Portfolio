import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { isCssBackground } from '@/utils/media'

interface CaseStudyHeroProps {
  study: CaseStudy
}

function projectYear(timeline: string): string {
  const match = timeline.match(/\d{4}(?:\s*[–-]\s*\d{4})?/)
  return match?.[0] ?? timeline
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const year = projectYear(study.timeline)
  const heroImages =
    study.heroImages && study.heroImages.length > 0
      ? study.heroImages
      : [{ src: study.heroImage, alt: `${study.title} hero image`, fit: study.imageFit }]

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeTransition}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-black/45 transition-colors hover:text-black"
        >
          <span aria-hidden="true">←</span> Work
        </Link>
      </motion.div>

      <motion.div
        className="mt-14 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeTransition, delay: 0.08 }}
      >
        <p className="text-sm tracking-wide text-black/45">{year}</p>

        <h1
          className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] tracking-tight"
          style={{ fontFamily: 'var(--font-hero-name)' }}
        >
          {study.title}
        </h1>

        <p className="mt-5 max-w-2xl text-[1.125rem] leading-relaxed text-black/70">
          {study.subtitle}
        </p>

        {study.externalUrl && (
          <a
            href={study.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-sm tracking-wide text-black/50 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black hover:decoration-black/50"
          >
            Open live website
          </a>
        )}
      </motion.div>

      <div className="mt-14 space-y-6">
        {heroImages.map((image, i) => {
          const contain = image.fit === 'contain'
          return (
            <motion.div
              key={image.alt}
              className={`mx-auto w-full overflow-hidden ${
                contain
                  ? 'flex min-h-[16rem] items-center justify-center bg-transparent md:min-h-[22rem]'
                  : 'flex justify-center bg-transparent'
              }`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fadeTransition, delay: 0.12 + i * 0.06 }}
            >
              {isCssBackground(image.src) ? (
                <div
                  className="aspect-[21/9] w-full"
                  style={{ background: image.src }}
                  role="img"
                  aria-label={image.alt}
                />
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={
                    contain
                      ? 'mx-auto max-h-[min(70vh,36rem)] w-auto max-w-full object-contain'
                      : 'mx-auto h-auto w-full max-w-4xl object-contain'
                  }
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </header>
  )
}
