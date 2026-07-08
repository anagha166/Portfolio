import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import { getProjectSummaries } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function ProjectsPage() {
  const projects = getProjectSummaries()

  return (
    <motion.div
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-28 pb-16"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.2em] text-[var(--color-graphite-faint)] uppercase dark:text-[var(--color-graphite-faint-dark)]">
          Work
        </p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-light tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
          Case Studies
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
