import { motion } from 'framer-motion'
import { ABOUT_COPY, HERO_CREDENTIALS } from '@/data/hero'

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-white scroll-mt-20 border-b border-[var(--color-border)] px-[var(--spacing-page)] py-[var(--spacing-section)]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          className="relative mx-auto w-full max-w-sm lg:mx-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden rounded-sm shadow-[0_16px_48px_rgba(17,24,20,0.12)]">
            <div
              className="flex aspect-[4/5] w-full items-end justify-start bg-[linear-gradient(145deg,#f8f3ea_0%,#e5ddcf_55%,#d4cabd_100%)] p-6"
              role="img"
              aria-label="Anagha Kamath portrait placeholder"
            >
              <span className="rounded-sm border border-black/10 bg-white/70 px-3 py-1 text-xs tracking-[0.18em] text-[var(--color-ink-faint)] uppercase">
                Profile
              </span>
            </div>
          </div>
          <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-sm bg-[var(--color-sage)]/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-mono-meta mb-4">About</p>
          <h2 id="about-heading" className="text-display-sm text-[var(--color-ink)]">
            {ABOUT_COPY.headline}
          </h2>
          <p className="text-body-lg mt-6 max-w-xl">{ABOUT_COPY.body}</p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Credentials">
            {HERO_CREDENTIALS.map((cred) => (
              <li key={cred}>
                <span className="credential-pill credential-pill-light">{cred}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
