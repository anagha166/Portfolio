import type { CaseStudyData } from '@/data/workV3'

export function CaseStudyTemplate({ study }: { study: CaseStudyData }) {
  const isGradient = study.heroImage.startsWith('linear-gradient')

  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-28 sm:px-10">
      <header className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
            Case Study Template
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2rem,5vw,3.8rem)] font-semibold tracking-tight text-[var(--color-ink)]">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {study.summary}
          </p>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-[var(--color-ink-faint)]">Role</dt>
              <dd className="mt-1 font-medium text-[var(--color-ink)]">{study.role}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-ink-faint)]">Timeline</dt>
              <dd className="mt-1 font-medium text-[var(--color-ink)]">{study.timeline}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-ink-faint)]">Tools</dt>
              <dd className="mt-1 font-medium text-[var(--color-ink)]">{study.tools.join(' • ')}</dd>
            </div>
          </dl>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-[0_24px_50px_rgba(20,40,80,0.14)]">
          {isGradient ? (
            <div
              className="h-full min-h-72 w-full"
              style={{ background: study.heroImage }}
              role="img"
              aria-label={study.title}
            />
          ) : (
            <img
              src={study.heroImage}
              alt={study.title}
              className="h-full min-h-72 w-full object-cover"
            />
          )}
        </div>
      </header>

      <div className="mt-16 space-y-14">
        {study.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="rounded-2xl border border-[var(--color-border)] bg-white/72 p-8 backdrop-blur-sm"
          >
            <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {section.title}
            </h2>
            <div className="mt-4 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-[var(--color-ink-muted)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
