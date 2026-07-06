import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import { getProjectSummaries } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function ProjectsPage() {
  const projects = getProjectSummaries()

  return (
    <motion.div
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-32 pb-20"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-[0.2em] text-[var(--color-graphite-faint)] uppercase dark:text-[var(--color-graphite-faint-dark)]">
          Work
        </p>
        <h1 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-light tracking-tight text-[var(--color-graphite)] dark:text-[var(--color-graphite-dark)]">
          Projects
        </h1>
        <p className="mt-4 max-w-lg text-[var(--color-graphite-light)] leading-relaxed dark:text-[var(--color-graphite-light-dark)]">
          Case studies exploring human-centered design, research, and the craft of building thoughtful products.
        </p>

        <div className="mt-20 space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
