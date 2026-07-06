import { motion } from 'framer-motion'
import type { CaseStudyImage } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'

interface ImageGalleryProps {
  images: CaseStudyImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="my-10 space-y-6">
      {images.map((image, i) => (
        <motion.figure
          key={image.alt}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ ...fadeTransition, delay: i * 0.1 }}
        >
          <div
            className="aspect-[16/10] w-full rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            style={{ background: image.src }}
            role="img"
            aria-label={image.alt}
          />
          {image.caption && (
            <figcaption className="mt-3 text-center text-sm text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">
              {image.caption}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  )
}
