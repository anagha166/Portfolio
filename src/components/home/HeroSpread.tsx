import { motion } from 'framer-motion'
import { heroItem, heroStagger } from '@/animations/hero'
import { ScrapbookCollage } from '@/components/scrapbook/ScrapbookCollage'

export function HeroSpread() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[var(--spacing-page)]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
        <div className="relative z-20 flex w-full items-center justify-center gap-12 lg:gap-20">
          <motion.div variants={heroStagger} initial="hidden" animate="visible" className="max-w-xl">
            <motion.h1
              variants={heroItem}
              className="mt-2 whitespace-nowrap text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.9] tracking-[0.01em] text-black"
              style={{ fontFamily: 'var(--font-hero-name)' }}
            >
              Anagha Kamath
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-4 max-w-xl text-[0.8rem] leading-relaxed tracking-[0.01em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: 'var(--font-hero-support)' }}
            >
              UX designer and researcher at UCSD’s Design Lab and Systems Neuroscience Lab, marketing director at DS3, and an artist + dancer blending creativity with craft.
            </motion.p>
          </motion.div>

          <div className="pointer-events-none h-[72vh] w-[42vw] max-w-[34rem]">
            <ScrapbookCollage />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-micro text-[var(--color-accent)]/60 dark:text-[var(--color-accent-dark)]/60">
          Scroll
        </span>
        <motion.span
          className="block h-8 w-px origin-top bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-warm)]/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}
