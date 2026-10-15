import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { StudioPiece } from '@/data/studio'
import { drivePreviewUrl } from '@/data/studio'

interface StudioLightboxProps {
  piece: StudioPiece | null
  onClose: () => void
}

export function StudioLightbox({ piece, onClose }: StudioLightboxProps) {
  useEffect(() => {
    if (!piece) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [piece, onClose])

  return (
    <AnimatePresence>
      {piece && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-white/92 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close lightbox"
          />

          <motion.figure
            className="relative z-10 w-full max-w-3xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            <div className="overflow-hidden bg-white p-4 shadow-[0_24px_80px_rgba(28,28,28,0.12)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                {piece.mediaType === 'video' ? (
                  <iframe
                    src={drivePreviewUrl(piece.src)}
                    title={piece.title}
                    allow="autoplay"
                    className="h-full w-full border-0"
                  />
                ) : (
                  <img
                    src={piece.src}
                    alt={piece.alt}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
              <figcaption className="mt-5 px-1">
                <p className="text-xl font-light tracking-tight text-[var(--color-graphite)]">
                  {piece.title}
                </p>
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
