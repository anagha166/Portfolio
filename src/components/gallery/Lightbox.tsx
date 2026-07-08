import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryItem } from '@/data/gallery'

interface LightboxProps {
  item: GalleryItem | null
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  const isGradient = item?.src.startsWith('linear-gradient')

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-white/90 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close lightbox"
          />

          <motion.figure
            className="relative z-10 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="overflow-hidden bg-white p-4 shadow-[0_24px_80px_rgba(28,28,28,0.12)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface-muted)]">
                {isGradient ? (
                  <div className="h-full w-full" style={{ background: item.src }} />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <figcaption className="mt-5 flex items-end justify-between gap-6 px-1">
                <div>
                  {item.title && (
                    <p className="font-serif text-2xl font-light tracking-tight text-[var(--color-graphite)]">
                      {item.title}
                    </p>
                  )}
                  {item.caption && (
                    <p className="mt-1 text-caption">{item.caption}</p>
                  )}
                </div>
                {item.projectSlug && (
                  <Link
                    to={`/projects/${item.projectSlug}`}
                    className="shrink-0 text-sm tracking-wide text-[var(--color-graphite-muted)] transition-colors duration-300 hover:text-[var(--color-graphite)]"
                    onClick={onClose}
                  >
                    View project →
                  </Link>
                )}
              </figcaption>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute -top-12 right-0 text-sm tracking-wide text-[var(--color-graphite-faint)] transition-colors hover:text-[var(--color-graphite)]"
            >
              Close
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
