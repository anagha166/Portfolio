import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import { ExperienceTimeline } from '@/components/about/ExperienceTimeline'
import meVideo from '@/assets/my_photos/me.mp4'

export function AboutPage() {
  return (
    <motion.div
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-28 pb-24"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] text-[var(--color-graphite-faint)] uppercase">
              About
            </p>
            <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-light tracking-tight text-[var(--color-graphite)]">
              Path so far
            </h1>
            <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-[var(--color-graphite-light)]">
              A timeline of the roles where I&apos;ve designed, researched, and built — from
              healthcare AI and VR research to student org platforms and nonprofit redesigns.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <video
              src={meVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Anagha Kamath"
              className="aspect-square w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl md:mt-28">
          <ExperienceTimeline />
        </div>
      </div>
    </motion.div>
  )
}
