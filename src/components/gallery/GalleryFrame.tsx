import { motion } from 'framer-motion'
import type { GalleryItem } from '@/data/gallery'

interface GalleryFrameProps {
  item: GalleryItem
  onOpen: (item: GalleryItem) => void
}

export function GalleryFrame({ item, onOpen }: GalleryFrameProps) {
  const isGradient = item.src.startsWith('linear-gradient')

  return (
    <motion.button
      type="button"
      className="group absolute cursor-pointer text-left"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: item.width,
        zIndex: item.zIndex ?? 1,
        rotate: `${item.rotate ?? 0}deg`,
      }}
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }}
      aria-label={item.title ?? item.alt}
    >
      <div
        className="overflow-hidden bg-white p-2.5 shadow-[0_4px_24px_var(--color-frame-shadow)] transition-shadow duration-500 group-hover:shadow-[0_12px_40px_rgba(28,28,28,0.12)]"
        style={{
          border: '1px solid rgba(0,0,0,0.05)',
          borderTop: item.accent ? `3px solid ${item.accent}` : '3px solid var(--color-art-coral)',
        }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-surface-muted)]">
          {isGradient ? (
            <div className="h-full w-full" style={{ background: item.src }} />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover saturate-[1.15] transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
              loading="lazy"
              draggable={false}
            />
          )}
        </div>
        {(item.title || item.caption) && (
          <div className="mt-2.5 px-0.5">
            {item.title && (
              <p className="text-[0.6875rem] font-medium tracking-wide text-[var(--color-graphite)]">
                {item.title}
              </p>
            )}
            {item.caption && (
              <p className="mt-0.5 text-[0.625rem] tracking-wide text-[var(--color-graphite-faint)]">
                {item.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.button>
  )
}
