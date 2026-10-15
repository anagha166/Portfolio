import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'
import { getProjectSummaries } from '@/data/projects'
import type { ProjectSummary } from '@/types'

function projectYear(timeline: string): string {
  const match = timeline.match(/\d{4}(?:\s*[–-]\s*\d{4})?/)
  return match?.[0] ?? timeline
}

function FeaturedProjectCard({ project }: { project: ProjectSummary }) {
  const cover = project.imageFit === 'cover'

  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt=""
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${
            cover
              ? 'h-full w-full object-cover'
              : 'max-h-full max-w-full object-contain'
          }`}
          loading="lazy"
        />
      </div>
      <div className="mt-2.5 px-0.5">
        <h3 className="text-xs font-medium tracking-tight text-[var(--color-graphite)] md:text-sm">
          {project.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[0.7rem] text-[var(--color-graphite-faint)] md:text-xs">
          {projectYear(project.timeline)}
        </p>
      </div>
    </Link>
  )
}

export function FeaturedWorkSpread() {
  const allProjects = getProjectSummaries()
  const projects = allProjects.slice(0, 4)
  const hasMore = allProjects.length > 4

  return (
    <div className="flex flex-col justify-center px-[var(--spacing-page)] py-20 md:py-28">
      <motion.div
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <SectionTitle>Projects where research meets craft</SectionTitle>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            variants={spreadVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            transition={{ delay: i * 0.04 }}
          >
            <FeaturedProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <motion.div
          className="mt-10"
          variants={spreadVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-dark)]"
          >
            See more →
          </Link>
        </motion.div>
      )}
    </div>
  )
}
