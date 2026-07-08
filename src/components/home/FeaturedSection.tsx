import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getProjectSummaries } from '@/data/projects'

const PROJECT_ACCENTS = [
  'var(--color-art-sky)',
  'var(--color-art-sage)',
]

export function FeaturedSection() {
  const projects = getProjectSummaries().slice(0, 2)

  return (
    <section className="px-[var(--spacing-page)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--content-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionHeader
            eyebrow="Selected Work"
            title="Case studies in craft and research"
            description="A selection of projects where design thinking meets technical execution."
          />
        </motion.div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link to={`/projects/${project.slug}`} className="group block">
                <div
                  className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-muted)] transition-shadow duration-500 group-hover:shadow-[0_12px_48px_rgba(28,28,28,0.1)]"
                  style={{
                    background: project.image,
                    borderTop: `4px solid ${PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]}`,
                  }}
                />
                <div className="mt-6 border-t border-[var(--color-beige)] pt-6">
                  <h3 className="text-lg font-medium tracking-tight text-[var(--color-graphite)] transition-colors duration-300 group-hover:text-[var(--color-graphite-muted)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-caption">
                    {project.role} · {project.timeline}
                  </p>
                  <p className="text-body-lg mt-4 line-clamp-2 text-[var(--color-graphite-muted)]">
                    {project.impact}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/projects"
            className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)]"
          >
            View all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
