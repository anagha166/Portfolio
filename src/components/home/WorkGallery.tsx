import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectSummaries } from '@/data/projects'
import type { ProjectSummary } from '@/types'

function ProjectCard({ project, index }: { project: ProjectSummary; index: number }) {
  return (
    <motion.article
      className={project.featured ? 'lg:col-span-2' : ''}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block"
        data-cursor="view"
      >
        <div
          className={`relative overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] shadow-[0_4px_24px_rgba(26,25,23,0.06)] transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(61,92,72,0.12)] group-hover:-translate-y-1 ${
            project.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ background: project.image }}
            role="img"
            aria-label={`${project.title} preview`}
          />
          {project.outcomeShort && (
            <span className="absolute top-4 left-4 rounded-sm bg-[var(--color-white)]/95 px-3 py-1.5 text-[0.6875rem] font-bold tracking-wider text-[var(--color-sage)] uppercase shadow-sm">
              {project.outcomeShort}
            </span>
          )}
        </div>

        <div className="mt-5">
          <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.5vw,1.625rem)] leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-sage)]">
            {project.title}
          </h3>
          <p className="text-mono-meta mt-2">{project.roleContext}</p>
        </div>
      </Link>
    </motion.article>
  )
}

export function WorkGallery({ showHeader = true }: { showHeader?: boolean }) {
  const projects = getProjectSummaries()

  return (
    <section
      id="work"
      className="section-light scroll-mt-20 px-[var(--spacing-page)] py-[var(--spacing-section)]"
      aria-labelledby={showHeader ? 'work-heading' : undefined}
    >
      <div className="mx-auto max-w-[var(--content-max)]">
        {showHeader && (
          <header className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-mono-meta mb-3">Work</p>
              <h2 id="work-heading" className="text-display-sm">
                Case studies with measurable impact
              </h2>
            </div>
            <p className="max-w-sm text-body">
              End-to-end product design — human-AI, healthcare, design systems.
            </p>
          </header>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
