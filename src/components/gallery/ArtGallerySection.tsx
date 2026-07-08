import { useState } from 'react'
import { motion } from 'framer-motion'
import { GALLERY_ITEMS } from '@/data/gallery'
import type { GalleryItem } from '@/data/gallery'
import { GalleryFrame } from './GalleryFrame'
import { Lightbox } from './Lightbox'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ArtGallerySection() {
  const [active, setActive] = useState<GalleryItem | null>(null)

  return (
    <section className="border-t border-[var(--color-beige)] px-[var(--spacing-page)] py-[var(--spacing-section)]">
      <div className="relative mx-auto max-w-[var(--content-max)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="Studio & Gallery"
            title="Art, process, and creative experiments"
            description="Paintings, sketches, interface explorations, and research artifacts from my practice as a designer and artist."
          />
        </motion.div>

        {/* Mobile + tablet: colorful grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="group overflow-hidden bg-white text-left shadow-[0_4px_20px_rgba(28,28,28,0.07)]"
              style={{ borderTop: `3px solid ${ART_ACCENTS[i % ART_ACCENTS.length]}` }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <GalleryTile item={item} />
            </motion.button>
          ))}
        </div>

        {/* Desktop: floating studio layout */}
        <div className="relative mt-14 hidden h-[min(70vh,640px)] lg:block">
          {GALLERY_ITEMS.map((item) => (
            <GalleryFrame key={item.id} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
}

const ART_ACCENTS = [
  'var(--color-art-coral)',
  'var(--color-art-sage)',
  'var(--color-art-sky)',
  'var(--color-art-gold)',
  'var(--color-art-plum)',
  'var(--color-art-rose)',
]

function GalleryTile({ item }: { item: GalleryItem }) {
  const isGradient = item.src.startsWith('linear-gradient')

  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-muted)]">
        {isGradient ? (
          <div className="h-full w-full" style={{ background: item.src }} />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover saturate-[1.12] transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
      </div>
      {item.title && (
        <p className="px-2 py-2 text-[0.625rem] font-medium tracking-wide">{item.title}</p>
      )}
    </>
  )
}
