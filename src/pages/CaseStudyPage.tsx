import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCaseStudy } from '@/data/projects'
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero'
import { CaseStudySection } from '@/components/case-study/CaseStudySection'
import { StickyTOC } from '@/components/case-study/StickyTOC'
import { pageVariants } from '@/animations/transitions'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) return <Navigate to="/projects" replace />

  const tocItems = study.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <motion.article
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-28 pb-32"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <CaseStudyHero study={study} />

        <div className="mt-20 grid gap-16 lg:grid-cols-[200px_1fr]">
          <StickyTOC items={tocItems} />

          <div className="max-w-2xl space-y-24">
            {study.sections.map((section) => (
              <CaseStudySection key={section.id} section={section} />
            ))}

            {/* Lessons Learned */}
            <section id="lessons-learned" className="scroll-mt-32 border-t border-[var(--color-beige)] pt-16 dark:border-[var(--color-beige-dark)]">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-light tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
                Lessons Learned
              </h2>
              <ul className="mt-6 space-y-4">
                {study.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex gap-3 text-[var(--color-graphite-light)] leading-relaxed dark:text-[var(--color-graphite-light-dark)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)] dark:bg-[var(--color-accent-dark)]" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
