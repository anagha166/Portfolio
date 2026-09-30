import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { spreadVariants } from '@/animations/scroll'
import type { ProjectSummary } from '@/types'
import { isCssBackground } from '@/utils/media'

interface ProjectCardProps {
  project: ProjectSummary
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cssBackground = isCssBackground(project.image)
  const cover = project.imageFit === 'cover'

  return (
    <motion.article
      variants={spreadVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.08 }}
    >
      <Link to={`/projects/${project.slug}`} className="group block" aria-label={project.title}>
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-visible">
          {cssBackground ? (
            <div className="h-full w-full" style={{ background: project.image }} />
          ) : (
            <img
              src={project.image}
              alt=""
              className={`max-h-full max-w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                cover
                  ? 'h-full w-full rounded-sm object-cover'
                  : 'object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]'
              }`}
            />
          )}
        </div>
        <h2 className="mt-4 text-lg font-medium tracking-tight text-[var(--color-graphite)]">
          {project.title}
        </h2>
      </Link>
    </motion.article>
  )
}
