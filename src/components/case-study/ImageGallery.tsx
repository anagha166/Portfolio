import { motion } from 'framer-motion'
import type { CaseStudyImage } from '@/types/caseStudy'
import { fadeTransition } from '@/animations/transitions'
import { isCssBackground } from '@/utils/media'

interface ImageGalleryProps {
  images: CaseStudyImage[]
  layout?: 'stack' | 'row' | 'tight'
}

export function ImageGallery({ images, layout = 'stack' }: ImageGalleryProps) {
  const isRow = layout === 'row'
  const isTight = layout === 'tight'
  const hasWide = images.some((image) => image.span === 'full')
  const rowCols = hasWide
    ? 'sm:grid-cols-2'
    : images.length <= 2
      ? 'sm:grid-cols-2'
      : images.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2 lg:grid-cols-4'

  const figures = images.map((image, i) => {
    const contain = image.fit === 'contain'
    const small = image.size === 'sm'
    const medium = image.size === 'md'
    const large = image.size === 'lg'
    const wide = image.span === 'full'

    return (
      <motion.figure
        key={image.alt}
        className={
          [isRow || isTight ? 'min-w-0' : '', wide ? 'sm:col-span-2' : '']
            .filter(Boolean)
            .join(' ') || undefined
        }
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ ...fadeTransition, delay: i * 0.08 }}
      >
        <div
          className={`overflow-hidden bg-transparent ${
            isTight
              ? 'w-full'
              : isRow
              ? wide
                ? large
                  ? 'mx-auto flex w-[80%] items-center justify-center'
                  : 'flex w-full items-center justify-center'
                : 'flex aspect-[16/10] w-full items-center justify-center'
              : small
                ? 'mx-auto flex max-w-[14rem] items-center justify-center sm:max-w-[16rem]'
                : medium
                  ? 'mx-auto flex max-w-md items-center justify-center'
                  : large
                    ? 'mx-auto flex w-[80%] items-center justify-center'
                    : contain
                      ? 'flex w-full items-center justify-center'
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
                isTight
                  ? 'h-auto w-full object-contain object-center'
                      : isRow
                      ? wide
                        ? 'h-auto w-full object-contain object-center'
                        : 'h-full w-full object-contain object-center'
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
  })

  if (isTight) {
    const columns = [0, 1].map((col) => figures.filter((_, i) => i % 2 === col))

    return (
      <div className="mx-auto my-10 grid w-[84%] grid-cols-2 items-start gap-1">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex min-w-0 flex-col gap-1">
            {column}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={
        isRow
          ? `my-10 grid w-full grid-cols-1 gap-4 ${rowCols} sm:gap-5`
          : 'my-10 space-y-8'
      }
    >
      {figures}
    </div>
  )
}
