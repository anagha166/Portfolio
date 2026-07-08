import { motion } from 'framer-motion'
import { researchItems } from '@/data/research'

export function ResearchSection() {
  return (
    <section
      id="research"
      className="scroll-mt-20 border-t border-[var(--color-border)] bg-[var(--color-sage-wash)] px-[var(--spacing-page)] py-[var(--spacing-section)]"
      aria-labelledby="research-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)]">
        <motion.header
          className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-mono-meta mb-3">Research</p>
            <h2 id="research-heading" className="text-display-sm">
              Cognitive science & neuroscience
            </h2>
          </div>
          <p className="max-w-sm text-body">
            Rigorous study of perception, attention, and decision-making — applied to design.
          </p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-3">
          {researchItems.map((item, i) => (
            <motion.article
              key={item.id}
              className="flex flex-col rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-[0_2px_16px_rgba(26,25,23,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(61,92,72,0.1)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-mono-meta !text-[var(--color-sage)]">{item.institution}</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.375rem] leading-snug text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="text-body mt-3 flex-1">{item.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Methods">
                {item.methods.map((method) => (
                  <li
                    key={method}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] px-2.5 py-1 text-[0.6875rem] text-[var(--color-ink-muted)]"
                  >
                    {method}
                  </li>
                ))}
              </ul>
              <p className="text-mono-meta mt-5 !text-[0.5625rem]">{item.period}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
