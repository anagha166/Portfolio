import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'

interface CaseStudyHeroProps {
  study: CaseStudy
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeTransition}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors hover:text-[var(--color-graphite)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-dark)]"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeTransition, delay: 0.1 }}
      >
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-beige)] px-3 py-1 text-xs tracking-wide text-[var(--color-graphite-faint)] dark:border-[var(--color-beige-dark)] dark:text-[var(--color-graphite-faint-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-6 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
          {study.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-graphite-light)] dark:text-[var(--color-graphite-light-dark)]">
          {study.subtitle}
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-sm">
          <div>
            <dt className="text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">Role</dt>
            <dd className="mt-1 font-medium text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
              {study.role}
            </dd>
          </div>
          <div>
            <dt className="text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">Timeline</dt>
            <dd className="mt-1 font-medium text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
              {study.timeline}
            </dd>
          </div>
          {study.team && (
            <div>
              <dt className="text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">Team</dt>
              <dd className="mt-1 font-medium text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
                {study.team}
              </dd>
            </div>
          )}
        </dl>
      </motion.div>

      <motion.div
        className="mt-12 aspect-[21/9] w-full overflow-hidden rounded-sm shadow-[0_4px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
        style={{ background: study.heroImage }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeTransition, delay: 0.2 }}
        role="img"
        aria-label={`${study.title} hero image`}
      />
    </header>
  )
}
