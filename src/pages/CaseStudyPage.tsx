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

  const tocItems = [
    ...study.sections.map((s) => ({ id: s.id, title: s.title })),
    ...(study.reflection.length > 0 ? [{ id: 'reflection', title: 'Reflection' }] : []),
    ...(study.lessonsLearned.length > 0
      ? [{ id: 'lessons', title: 'What I took away' }]
      : []),
  ]

  return (
    <motion.article
      className="relative min-h-screen px-[var(--spacing-page)] pt-28 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      <div className="mx-auto max-w-6xl">
        <CaseStudyHero study={study} />

        <div className="mt-24 grid gap-12 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-16">
          <StickyTOC items={tocItems} />

          <div className="min-w-0 max-w-4xl space-y-20">
            {study.sections.map((section) => (
              <CaseStudySection key={section.id} section={section} />
            ))}

            {study.reflection.length > 0 && (
              <section id="reflection" className="scroll-mt-32 border-t border-black/10 pt-16">
                <h2
                  className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-normal tracking-tight"
                  style={{ fontFamily: 'var(--font-hero-name)' }}
                >
                  Reflection
                </h2>
                <div className="mt-6 space-y-5">
                  {study.reflection.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="max-w-[38rem] text-[1.0625rem] leading-[1.75] text-black/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {study.lessonsLearned.length > 0 && (
              <section id="lessons" className="scroll-mt-32 border-t border-black/10 pt-16">
                <h2
                  className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-normal tracking-tight"
                  style={{ fontFamily: 'var(--font-hero-name)' }}
                >
                  What I took away
                </h2>
                <ol className="mt-8 space-y-6">
                  {study.lessonsLearned.map((lesson, i) => (
                    <li key={lesson} className="flex gap-5">
                      <span
                        className="w-6 shrink-0 pt-0.5 text-sm text-black/35"
                        style={{ fontFamily: 'var(--font-hero-name)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="max-w-[34rem] text-[1.0625rem] leading-[1.75] text-black/75">
                        {lesson}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
