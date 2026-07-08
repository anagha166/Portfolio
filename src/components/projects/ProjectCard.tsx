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
      <Link to={`/projects/${project.slug}`} className="group block" aria-label={project.title}>
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--color-window-border)] shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-400 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
          style={{ background: project.image }}
        >
          <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h2 className="translate-y-2 text-lg font-medium tracking-tight text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {project.title}
            </h2>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
