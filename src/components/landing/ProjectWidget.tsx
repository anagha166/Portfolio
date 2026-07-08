import { motion, useTransform, type MotionValue } from 'framer-motion'
import type { ProjectData } from '@/data/projectsData'

export interface WidgetLayout {
  id: string
  x: number
  y: number
  rotate: number
  size: 'sm' | 'md' | 'lg' | 'xl'
  parallax: number
  zIndex: number
}

const SIZE_WIDTH = {
  sm: 'w-[min(28vw,128px)]',
  md: 'w-[min(32vw,156px)]',
  lg: 'w-[min(36vw,184px)]',
  xl: 'w-[min(40vw,212px)]',
} as const

const WIDGET_GRADIENTS = [
  'linear-gradient(160deg, #ffffff 0%, #f0f0f2 100%)',
  'linear-gradient(160deg, #fafafa 0%, #ebebef 100%)',
  'linear-gradient(160deg, #f8f8fa 0%, #e8e8ec 100%)',
  'linear-gradient(160deg, #fcfcfc 0%, #ededf1 100%)',
  'linear-gradient(160deg, #f6f6f8 0%, #e6e6ea 100%)',
  'linear-gradient(160deg, #fafafa 0%, #eaeaf0 100%)',
  'linear-gradient(160deg, #f4f4f6 0%, #e4e4e8 100%)',
  'linear-gradient(160deg, #f8f8fa 0%, #e8e8ee 100%)',
]

interface ProjectWidgetProps {
  project: ProjectData
  layout: WidgetLayout
  scrollYProgress: MotionValue<number>
  index: number
  prefersReducedMotion: boolean
}

export function ProjectWidget({
  project,
  layout,
  scrollYProgress,
  index,
  prefersReducedMotion,
}: ProjectWidgetProps) {
  const driftY = useTransform(scrollYProgress, [0, 1], [0, layout.parallax * -220])
  const driftX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, layout.parallax * (index % 2 === 0 ? 50 : -50)],
  )

  const gradient = WIDGET_GRADIENTS[index % WIDGET_GRADIENTS.length]
  const link = project.liveUrl || project.githubUrl
  const tags = [project.category, ...project.tools.slice(0, 2)]

  return (
    <motion.div
      className={`absolute ${SIZE_WIDTH[layout.size]}`}
      style={{
        left: `${layout.x}%`,
        top: `${layout.y}%`,
        zIndex: layout.zIndex,
        x: prefersReducedMotion ? 0 : driftX,
        y: prefersReducedMotion ? 0 : driftY,
        rotate: layout.rotate,
      }}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 28,
        delay: 0.05 + index * 0.05,
      }}
    >
      <motion.div
        className="group relative cursor-pointer"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, -8, 0] }
        }
        transition={
          { duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }
        }
        whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -10 }}
      >
        <a
          href={link}
          target={link ? '_blank' : undefined}
          rel={link ? 'noopener noreferrer' : undefined}
          className="block overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:rounded-[1.25rem] sm:p-2.5"
        >
          <div
            className="aspect-4/5 w-full rounded-xl bg-neutral-100 sm:rounded-[0.9rem]"
            style={{ background: gradient }}
            aria-hidden="true"
          />

          <div className="mt-3 px-0.5">
            <p className="text-[0.7rem] font-semibold leading-snug text-neutral-900 sm:text-xs">
              {project.title}
            </p>
            <p className="mt-1.5 text-[0.625rem] leading-relaxed text-neutral-500 sm:text-[0.6875rem]">
              {project.description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={`${project.id}-${tag}`}
                  className="rounded-full border border-neutral-200 px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-[0.08em] text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  )
}
