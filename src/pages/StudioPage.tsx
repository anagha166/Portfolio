import { useState } from 'react'
import { motion } from 'framer-motion'
import { pageVariants } from '@/animations/transitions'
import {
  STUDIO_SECTIONS,
  getStudioPiecesByCategory,
  type StudioPiece,
} from '@/data/studio'
import { StudioCard } from '@/components/studio/StudioCard'
import { StudioLightbox } from '@/components/studio/StudioLightbox'

export function StudioPage() {
  const [active, setActive] = useState<StudioPiece | null>(null)

  return (
    <motion.div
      className="paper-texture min-h-screen px-[var(--spacing-page)] pt-28 pb-24"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.2em] text-[var(--color-graphite-faint)] uppercase">
          Studio
        </p>

        <div className="mt-16 space-y-24">
          {STUDIO_SECTIONS.map((section) => {
            const pieces = getStudioPiecesByCategory(section.id)
            return (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-light tracking-tight text-[var(--color-graphite)]">
                  {section.label}
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {pieces.map((piece, i) => (
                    <StudioCard
                      key={piece.id}
                      piece={piece}
                      index={i}
                      onOpen={setActive}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <StudioLightbox piece={active} onClose={() => setActive(null)} />
    </motion.div>
  )
}
