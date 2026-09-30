import { motion } from 'framer-motion'
import type { StudioPiece } from '@/data/studio'
import { drivePreviewUrl } from '@/data/studio'

interface StudioCardProps {
  piece: StudioPiece
  index?: number
  onOpen: (piece: StudioPiece) => void
}

export function StudioCard({ piece, index = 0, onOpen }: StudioCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(piece)}
      className="group w-full text-left"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      aria-label={`Open ${piece.title}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-shadow duration-400 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        {piece.mediaType === 'video' ? (
          <>
            <iframe
              src={drivePreviewUrl(piece.src)}
              title={piece.title}
              className="pointer-events-none h-full w-full border-0"
              tabIndex={-1}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            <span className="absolute right-3 bottom-3 rounded-full bg-black/70 px-2.5 py-1 text-[0.625rem] tracking-wide text-white uppercase">
              Video
            </span>
          </>
        ) : (
          <img
            src={piece.src}
            alt={piece.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
      </div>
      <p className="mt-3 text-sm font-medium tracking-tight text-[var(--color-graphite)]">
        {piece.title}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-[var(--color-graphite-faint)]">
        {piece.caption}
      </p>
    </motion.button>
  )
}
