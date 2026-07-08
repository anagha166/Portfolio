import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { CloudSkyBackground } from '@/components/landing/CloudSkyBackground'
import { ProjectWidget, type WidgetLayout } from '@/components/landing/ProjectWidget'
import { projectsData } from '@/data/projectsData'
import { profile } from '@/data/profile'

const WIDGET_LAYOUT: WidgetLayout[] = [
  { id: 'ascendtials', x: 3, y: 8, rotate: -9, size: 'md', parallax: 0.4, zIndex: 12 },
  { id: 'ds3', x: 74, y: 5, rotate: 7, size: 'lg', parallax: 0.6, zIndex: 14 },
  { id: 'consulting', x: 1, y: 46, rotate: 5, size: 'sm', parallax: 0.3, zIndex: 11 },
  { id: 'studybuddy', x: 77, y: 36, rotate: -6, size: 'md', parallax: 0.5, zIndex: 13 },
  { id: 'yipyap', x: 6, y: 70, rotate: -4, size: 'lg', parallax: 0.45, zIndex: 10 },
  { id: 'bitefresh', x: 70, y: 66, rotate: 8, size: 'xl', parallax: 0.55, zIndex: 15 },
  { id: 'magic-mirror', x: 36, y: 2, rotate: -3, size: 'sm', parallax: 0.35, zIndex: 9 },
  { id: 'self-playing-guitar', x: 40, y: 76, rotate: 6, size: 'md', parallax: 0.42, zIndex: 11 },
]

const MOBILE_LAYOUT: WidgetLayout[] = [
  { id: 'ascendtials', x: 2, y: 12, rotate: -5, size: 'sm', parallax: 0.25, zIndex: 10 },
  { id: 'ds3', x: 56, y: 10, rotate: 4, size: 'sm', parallax: 0.3, zIndex: 11 },
  { id: 'consulting', x: 0, y: 58, rotate: 3, size: 'sm', parallax: 0.2, zIndex: 9 },
  { id: 'studybuddy', x: 54, y: 56, rotate: -3, size: 'sm', parallax: 0.25, zIndex: 10 },
  { id: 'yipyap', x: 4, y: 80, rotate: -2, size: 'sm', parallax: 0.22, zIndex: 8 },
  { id: 'bitefresh', x: 52, y: 78, rotate: 5, size: 'sm', parallax: 0.28, zIndex: 11 },
  { id: 'magic-mirror', x: 60, y: 34, rotate: -2, size: 'sm', parallax: 0.18, zIndex: 7 },
  { id: 'self-playing-guitar', x: 0, y: 36, rotate: 2, size: 'sm', parallax: 0.2, zIndex: 9 },
]

export function LandingSequence() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 767px)')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0])
  const centerOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 1, 0.06])
  const centerY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -28])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const layouts = isMobile ? MOBILE_LAYOUT : WIDGET_LAYOUT
  const projects = projectsData.map((project) => ({
    project,
    layout: layouts.find((l) => l.id === project.id)!,
  }))

  return (
    <section ref={containerRef} id="top" className="relative h-[240vh] bg-[#f5f5f7] sm:h-[280vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <CloudSkyBackground />

        <header className="relative z-30 flex items-center justify-between px-6 pt-6 sm:px-10">
          <motion.a
            href="#top"
            className="font-sans text-sm font-semibold tracking-tight text-neutral-900 sm:text-base"
            style={{ opacity: headerOpacity }}
          >
            {profile.name}
          </motion.a>
          <motion.a
            href="#experience"
            className="text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-900 sm:text-sm"
            style={{ opacity: headerOpacity }}
          >
            Case Studies
          </motion.a>
        </header>

        <div className="relative mx-auto h-[calc(100dvh-4rem)] max-w-[100rem] px-4 sm:px-8">
          {projects.map(({ project, layout }, index) => (
            <ProjectWidget
              key={project.id}
              project={project}
              layout={layout}
              scrollYProgress={scrollYProgress}
              index={index}
              prefersReducedMotion={!!prefersReducedMotion}
            />
          ))}

          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
            style={{ opacity: centerOpacity, y: centerY }}
          >
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-neutral-700">
                Design • Development • Research
              </p>
              <h1 className="mt-4 font-sans text-[clamp(2.2rem,7.4vw,4.8rem)] font-semibold leading-[0.95] tracking-tight text-black">
                Anagha Kamath
              </h1>
            </div>
          </motion.div>

          <motion.p
            className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs font-medium tracking-wide text-neutral-400"
            style={{ opacity: scrollHintOpacity }}
          >
            Scroll
          </motion.p>
        </div>
      </div>
    </section>
  )
}
