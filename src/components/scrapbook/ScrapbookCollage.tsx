import { motion } from 'framer-motion'
import { heroStagger } from '@/animations/hero'
import { HERO_SCRAPBOOK_PHOTOS } from '@/data/scrapbook'
import { ScrapbookPhoto } from './ScrapbookPhoto'

const NOTE_TAGS = [
  { label: 'Design', color: 'var(--color-sage-wash)' },
  { label: 'Research', color: 'var(--color-blush)' },
  { label: 'Art', color: 'var(--color-sky)' },
] as const

export function ScrapbookCollage() {
  return (
    <div className="relative mx-auto h-[min(52vh,480px)] w-full max-w-md lg:max-w-none lg:h-[min(58vh,520px)]">
      {/* Torn paper edge accent */}
      <motion.div
        className="pointer-events-none absolute -right-2 top-1/4 h-24 w-8 opacity-50"
        style={{
          background: 'linear-gradient(180deg, var(--color-butter), var(--color-tape-cream))',
          clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0 100%)',
        }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        aria-hidden="true"
      />

      <motion.div
        className="relative h-full w-full"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {HERO_SCRAPBOOK_PHOTOS.map((photo, i) => (
          <ScrapbookPhoto key={photo.id} photo={photo} delay={0.2 + i * 0.12} />
        ))}
      </motion.div>

      {/* Sticky note with color tags */}
      <motion.div
        className="absolute -bottom-2 right-0 max-w-[10rem] rotate-[6deg] rounded-sm px-3 py-2.5 shadow-[0_2px_16px_color-mix(in_srgb,var(--color-butter)_40%,rgba(0,0,0,0.08))] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
        style={{ background: 'var(--color-note)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex flex-wrap gap-1">
          {NOTE_TAGS.map((tag) => (
            <span
              key={tag.label}
              className="rounded px-1.5 py-0.5 text-[0.55rem] font-medium tracking-wide"
              style={{
                backgroundColor: `color-mix(in srgb, ${tag.color} 65%, white)`,
                color: 'var(--color-graphite-light)',
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
