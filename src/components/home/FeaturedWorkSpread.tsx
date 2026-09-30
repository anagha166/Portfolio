import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import { SectionEyebrow, SectionTitle } from '@/components/ui/SectionTypography'
import { getProjectSummaries } from '@/data/projects'
import type { ProjectSummary } from '@/types'

function FeaturedProjectCard({ project }: { project: ProjectSummary }) {
  const cover = project.imageFit === 'cover'

  return (
    <Link to={`/projects/${project.slug}`} className="group block w-80 shrink-0 md:w-[26rem]">
      <div className="relative flex h-80 items-center justify-center md:h-[26rem]">
        <img
          src={project.image}
          alt=""
          className={`max-h-full max-w-full transition-transform duration-500 group-hover:scale-[1.03] ${
            cover
              ? 'h-full w-full rounded-xl object-cover'
              : 'object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]'
          }`}
        />
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-base font-medium tracking-tight text-[var(--color-graphite)] md:text-lg">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-[var(--color-graphite-faint)]">
          {project.role} · {project.timeline}
        </p>
      </div>
    </Link>
  )
}

export function FeaturedWorkSpread() {
  const projects = getProjectSummaries()
  const carouselItems = [...projects, ...projects]

  return (
    <div className="flex min-h-dvh flex-col justify-center py-12 md:py-16">
      <div className="px-[var(--spacing-page)] md:pr-40">
        <motion.div
          variants={spreadVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <SectionEyebrow>Selected Work</SectionEyebrow>
          <SectionTitle>Projects where research meets craft</SectionTitle>
        </motion.div>
      </div>

      <div className="project-carousel mt-8 pl-[var(--spacing-page)] md:mt-10 md:pr-40">
        <div className="project-carousel-track">
          {carouselItems.map((project, i) => (
            <div key={`${project.slug}-${i}`} aria-hidden={i >= projects.length}>
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-8 px-[var(--spacing-page)] md:mt-10 md:pr-40"
        variants={spreadVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          className="text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors duration-300 hover:text-[var(--color-graphite)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-dark)]"
        >
          View all projects →
        </Link>
      </motion.div>
    </div>
  )
}
