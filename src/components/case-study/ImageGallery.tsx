import { motion } from 'framer-motion'
import type { CaseStudyImage } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { isCssBackground } from '@/utils/media'

interface ImageGalleryProps {
  images: CaseStudyImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="my-10 space-y-6">
      {images.map((image, i) => {
        const contain = image.fit === 'contain'

        return (
          <motion.figure
            key={image.alt}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ ...fadeTransition, delay: i * 0.1 }}
          >
            <div
              className={`w-full overflow-hidden rounded-sm bg-black shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)] ${
                contain
                  ? 'flex aspect-[9/19] max-h-[min(75vh,42rem)] items-center justify-center'
                  : 'aspect-[16/10]'
              }`}
            >
              {isCssBackground(image.src) ? (
                <div
                  className="h-full w-full"
                  style={{ background: image.src }}
                  role="img"
                  aria-label={image.alt}
                />
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={
                    contain
                      ? 'h-full w-full object-contain object-center'
                      : 'h-full w-full object-cover'
                  }
                />
              )}
            </div>
            {image.caption && (
              <figcaption className="mt-3 text-center text-sm text-[var(--color-graphite-faint)] dark:text-[var(--color-graphite-faint-dark)]">
                {image.caption}
              </figcaption>
            )}
          </motion.figure>
        )
      })}
    </div>
  )
}
