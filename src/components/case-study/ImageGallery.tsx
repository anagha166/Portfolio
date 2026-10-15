import { motion } from 'framer-motion'
import type { CaseStudyImage } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { isCssBackground } from '@/utils/media'

interface ImageGalleryProps {
  images: CaseStudyImage[]
  layout?: 'stack' | 'row'
}

export function ImageGallery({ images, layout = 'stack' }: ImageGalleryProps) {
  const isRow = layout === 'row'
  const rowCols =
    images.length <= 2
      ? 'sm:grid-cols-2'
      : images.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <div
      className={
        isRow
          ? `my-10 grid w-full grid-cols-1 gap-4 ${rowCols} sm:gap-5`
          : 'my-10 space-y-8'
      }
    >
      {images.map((image, i) => {
        const contain = image.fit === 'contain'
        const small = image.size === 'sm'
        const medium = image.size === 'md'

        return (
          <motion.figure
            key={image.alt}
            className={isRow ? 'min-w-0' : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ ...fadeTransition, delay: i * 0.08 }}
          >
            <div
              className={`overflow-hidden bg-transparent ${
                isRow
                  ? 'flex aspect-[16/10] w-full items-center justify-center'
                  : small
                    ? 'mx-auto flex max-w-[14rem] items-center justify-center sm:max-w-[16rem]'
                    : medium
                      ? 'mx-auto flex max-w-md items-center justify-center'
                      : contain
                        ? 'flex min-h-[22rem] w-full items-center justify-center py-6 md:min-h-[28rem]'
                        : 'aspect-[16/10] w-full'
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
                    isRow
                      ? 'h-full w-full object-contain object-center'
                      : small || medium
                        ? 'h-auto w-full object-contain object-center'
                        : contain
                          ? 'h-auto max-h-[min(80vh,44rem)] w-full object-contain object-center'
                          : 'h-full w-full object-cover'
                  }
                />
              )}
            </div>
            {image.caption && (
              <figcaption className="mt-2 text-center text-sm text-black/45">
                {image.caption}
              </figcaption>
            )}
          </motion.figure>
        )
      })}
    </div>
  )
}
