import { motion } from 'framer-motion'
import { heroItem, heroStagger } from '@/animations/hero'
import { ScrapbookCollage } from '@/components/scrapbook/ScrapbookCollage'

export function HeroSpread() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[var(--spacing-page)]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
        <div className="relative z-20 flex w-full flex-col items-center justify-center gap-10 pt-16 md:pt-0 lg:flex-row lg:gap-20">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="w-full max-w-xl text-center lg:text-left"
          >
            <motion.h1
              variants={heroItem}
              className="mt-2 text-[clamp(2.2rem,7vw,5.6rem)] leading-[0.9] tracking-[0.01em] text-black lg:whitespace-nowrap"
              style={{ fontFamily: 'var(--font-hero-name)' }}
            >
              Anagha Kamath
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-4 max-w-xl text-[0.8rem] leading-relaxed tracking-[0.01em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: 'var(--font-hero-support)' }}
            >
              UX Designer & Researcher @ UCSD Design Lab • 3D World Building @ UCSD Systems Neuroscience Lab • Marketing @ UCSD DS3 • Design @ ChartR • Artist • Dancer • Foodie
            </motion.p>
          </motion.div>

          <div className="pointer-events-none mx-auto flex h-[min(42vh,360px)] w-full max-w-md items-center justify-center lg:mx-0 lg:h-[72vh] lg:w-[42vw] lg:max-w-[34rem]">
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
