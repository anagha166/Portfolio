import { motion } from 'framer-motion'
import { heroItem } from '@/animations/hero'
import { WashiTape } from './WashiTape'
import type { ScrapbookPhotoItem } from '@/data/scrapbook'

interface ScrapbookPhotoProps {
  photo: ScrapbookPhotoItem
  delay?: number
}

export function ScrapbookPhoto({ photo, delay = 0 }: ScrapbookPhotoProps) {
  const tint = photo.tint ?? 'var(--color-blush)'
  const isGradient = photo.src.startsWith('linear-gradient')

  return (
    <motion.figure
      className="absolute"
      style={{
        left: `${photo.x}%`,
        top: `${photo.y}%`,
        width: photo.width,
        zIndex: photo.zIndex ?? 1,
        rotate: `${photo.rotate}deg`,
      }}
      variants={heroItem}
      initial={{ opacity: 0, y: 20, rotate: photo.rotate - 4 }}
      animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="scrapbook-polaroid relative"
        style={{
          boxShadow: `
            0 1px 2px rgba(0, 0, 0, 0.04),
            0 8px 24px color-mix(in srgb, ${tint} 35%, rgba(0, 0, 0, 0.1)),
            0 24px 48px color-mix(in srgb, ${tint} 20%, rgba(0, 0, 0, 0.06))
          `,
        }}
      >
        {photo.tape && (
          <WashiTape position={photo.tape} color={photo.tapeColor ?? 'cream'} />
        )}

        <div className="overflow-hidden rounded-[1px] bg-[#f0ebe4]">
          {isGradient ? (
            <div
              className="aspect-[4/5] w-full saturate-[1.12] contrast-[1.03] brightness-[1.02]"
              style={{ background: photo.src }}
              role="img"
              aria-label={photo.alt}
            />
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/5] w-full object-cover saturate-[1.12] contrast-[1.03] brightness-[1.02]"
              loading="lazy"
              draggable={false}
            />
          )}
        </div>

        {photo.caption && (
          <figcaption className="scrapbook-caption">{photo.caption}</figcaption>
        )}
      </div>
    </motion.figure>
  )
}
