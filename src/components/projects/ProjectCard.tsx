import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import type { ProjectSummary } from '@/types'

interface ProjectCardProps {
  project: ProjectSummary
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      variants={spreadVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.08 }}
    >
      <Link to={`/projects/${project.slug}`} className="group block">
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-[0_2px_24px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
          style={{ background: project.image }}
        >
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03] dark:group-hover:bg-black/10" />
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium tracking-tight text-[var(--color-graphite)] transition-colors group-hover:text-[var(--color-accent)] dark:text-[var(--color-graphite-dark)] dark:group-hover:text-[var(--color-accent-dark)]">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">
              {project.role} · {project.timeline}
            </p>
          </div>
          <p className="max-w-sm text-[var(--color-graphite-light)] leading-relaxed md:text-right dark:text-[var(--color-graphite-light-dark)]">
            {project.impact}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-beige)] px-3 py-1 text-xs tracking-wide text-[var(--color-graphite-faint)] dark:border-[var(--color-beige-dark)] dark:text-[var(--color-graphite-faint-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  )
}
