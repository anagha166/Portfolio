import { useState } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '@/data/projects'
import { HighlightWord } from '@/components/y2k/HighlightWord'

export function WorkAuraSection() {
  const [active, setActive] = useState(0)
  const project = caseStudies[active]

  const prev = () => setActive((i) => (i - 1 + caseStudies.length) % caseStudies.length)
  const next = () => setActive((i) => (i + 1) % caseStudies.length)

  return (
    <section
      id="work"
      className="scroll-mt-20 px-[var(--spacing-page)] py-20 md:py-28"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #d4e8f4 55%, #b8d8ec 100%)',
      }}
    >
      <div className="mx-auto grid max-w-[var(--content-max)] items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <div className="lg:pr-6">
          <p className="section-eyebrow mb-3">Selected work</p>
          <h2 className="scrapbook-heading leading-tight">
            Relevant <HighlightWord>projects</HighlightWord>
          </h2>
          <p className="scrapbook-body mt-4 max-w-md">
            Product design and development across education, community platforms, and mobile —
            from Figma prototypes to shipped code.
          </p>

          <div className="mt-6 space-y-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">
              {project.timeline}
            </p>
            <h3 className="font-sans text-lg font-semibold text-[var(--color-ink)]">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {project.subtitle}
            </p>
            <p className="text-sm font-medium text-[var(--color-ink)]">{project.impact}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-window-border)] bg-white/80 px-2.5 py-0.5 text-[0.6875rem] font-medium text-[var(--color-ink-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-highlight)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-pink-hot)]"
              >
                View case study →
              </Link>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-[var(--color-ink-muted)] underline underline-offset-4 hover:text-[var(--color-ink)]"
                >
                  Live project ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={prev}
            className="absolute top-1/2 -left-6 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-window-border)] bg-white text-2xl font-light text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105 md:-left-14"
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="relative w-[min(72vw,280px)]">
            <div
              className="aspect-[3/4] w-full border-2 border-[var(--color-window-border)] shadow-[4px_6px_24px_rgba(0,0,0,0.12)]"
              style={{ background: project.heroImage }}
              role="img"
              aria-label={project.title}
            />
          </div>
          <div
            className="mx-auto -mt-1 h-4 w-24 rounded-full bg-[var(--color-pink-pedestal)] shadow-[0_4px_12px_rgba(232,120,152,0.35)]"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={next}
            className="absolute top-1/2 -right-6 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-window-border)] bg-white text-2xl font-light text-[var(--color-ink)] shadow-sm transition-transform hover:scale-105 md:-right-14"
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:max-w-[280px] lg:justify-self-end">
          {caseStudies.map((study, i) => (
            <button
              key={study.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`group aspect-square overflow-hidden border-2 transition-all ${
                i === active
                  ? 'scale-[1.03] border-[var(--color-ink)] shadow-md'
                  : 'border-[var(--color-window-border)]/60 hover:border-[var(--color-ink)]'
              }`}
              aria-label={`View ${study.title}`}
              aria-current={i === active ? 'true' : undefined}
            >
              <div
                className="h-full w-full transition-transform group-hover:scale-105"
                style={{ background: study.heroImage }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
