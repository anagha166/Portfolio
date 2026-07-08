import { NotesWindow } from '@/components/y2k/NotesWindow'
import { HighlightWord } from '@/components/y2k/HighlightWord'
import { FORMULA_BG } from '@/data/moodboard'
import { profile } from '@/data/profile'

const PROCESS_STEPS = [
  { label: '01 · Research', detail: 'Interviews, usability audits, behavioral context' },
  { label: '02 · Define', detail: 'IA, user flows, design principles' },
  { label: '03 · Design & build', detail: 'Figma prototypes → React, TypeScript, Tailwind' },
  { label: '04 · Ship & iterate', detail: 'Testing, accessibility, analytics, refinement' },
]

export function FormulaSection() {
  const { skills } = profile

  return (
    <section id="formula" className="relative scroll-mt-20 min-h-[520px] overflow-hidden py-16 md:min-h-[600px] md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={
          FORMULA_BG.startsWith('linear-gradient')
            ? { background: FORMULA_BG }
            : { backgroundImage: `url(${FORMULA_BG})` }
        }
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[var(--content-max)] items-center gap-12 px-[var(--spacing-page)] lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="space-y-4">
          <p className="section-eyebrow !text-white/80">Process</p>
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.label}
              className="rounded-sm border border-white/30 bg-white/10 px-4 py-3 backdrop-blur-sm"
            >
              <p className="font-sans text-sm font-semibold text-white">{step.label}</p>
              <p className="mt-0.5 text-[0.8125rem] text-white/75">{step.detail}</p>
            </div>
          ))}
        </div>

        <NotesWindow title="Toolkit" className="w-full max-w-md justify-self-end lg:max-w-lg">
          <p className="!bg-transparent scrapbook-heading !text-[clamp(1.5rem,3vw,2rem)]">
            Design + <HighlightWord>engineering</HighlightWord>
          </p>
          <p className="mt-4 !bg-transparent text-[0.9375rem] leading-relaxed">
            I work across Figma and production code — wireframes, design systems, and shipped
            interfaces in React and TypeScript. Cognitive science training informs how I evaluate
            clarity, cognitive load, and comprehension.
          </p>
          <div className="mt-4 !bg-transparent space-y-2 text-[0.8125rem] leading-relaxed text-[var(--color-ink-muted)]">
            <p className="!bg-transparent">
              <span className="font-semibold text-[var(--color-ink)]">Design:</span>{' '}
              {skills.design.join(', ')}
            </p>
            <p className="!bg-transparent">
              <span className="font-semibold text-[var(--color-ink)]">Frontend:</span>{' '}
              {skills.frontend.join(', ')}
            </p>
            <p className="!bg-transparent">
              <span className="font-semibold text-[var(--color-ink)]">Product:</span>{' '}
              {skills.product.join(', ')}
            </p>
          </div>
        </NotesWindow>
      </div>
    </section>
  )
}
