import { motion } from 'framer-motion'
import { heroItem, heroStagger } from '@/animations/hero'
import { ScrapbookCollage } from '@/components/scrapbook/ScrapbookCollage'

const ROLE_CHIPS = [
  { label: 'Product Design', bg: 'var(--color-sage-wash)', text: 'var(--color-accent)' },
  { label: 'Research', bg: 'var(--color-blush)', text: 'var(--color-accent-warm)' },
  { label: 'Art', bg: 'var(--color-sky)', text: '#5a7a8a' },
] as const

export function HeroSpread() {
  return (
    <div className="relative min-h-screen px-[var(--spacing-page)] pb-28 pt-[clamp(5rem,12vh,7rem)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Copy */}
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          <motion.div variants={heroItem} className="flex flex-wrap gap-2">
            {ROLE_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="rounded-full px-3 py-1 text-[0.625rem] font-medium tracking-wide"
                style={{
                  backgroundColor: `color-mix(in srgb, ${chip.bg} 70%, white)`,
                  color: chip.text,
                }}
              >
                {chip.label}
              </span>
            ))}
          </motion.div>

          <motion.h1 variants={heroItem} className="text-display mt-8">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-warm)] bg-clip-text text-transparent">
              Anagha
            </span>
            .
          </motion.h1>

          <motion.div
            variants={heroItem}
            className="mt-8 h-px w-16 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-warm)]/60 to-transparent"
          />

          <motion.p variants={heroItem} className="text-lead mt-8 max-w-md">
            I explore how thoughtful design shapes the way people think, create, and connect.
          </motion.p>

          <motion.p variants={heroItem} className="text-quiet mt-4 max-w-sm">
            Every project starts as a sketch.
          </motion.p>
        </motion.div>

        {/* Scrapbook collage */}
        <div className="pointer-events-none relative">
          <ScrapbookCollage />
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
