import { motion, type MotionValue } from 'framer-motion'

interface PolaroidPhotoProps {
  src?: string
  caption?: string
  blank?: boolean
  className?: string
  rotate?: number
  delay?: number
  idleFloat?: boolean
  parallaxX?: MotionValue<number>
  parallaxY?: MotionValue<number>
  prefersReducedMotion?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  widthPx?: number
}

const SIZE_CLASSES = {
  xs: 'w-[96px]',
  sm: 'w-[118px]',
  md: 'w-[148px]',
  lg: 'w-[178px]',
  xl: 'w-[210px]',
} as const

export function PolaroidPhoto({
  src,
  caption,
  blank = false,
  className = '',
  rotate = 0,
  delay = 0,
  idleFloat = false,
  parallaxX,
  parallaxY,
  prefersReducedMotion = false,
  size = 'md',
  widthPx,
}: PolaroidPhotoProps) {
  const width = widthPx ? `w-[${widthPx}px]` : SIZE_CLASSES[size]
  const isBlank = blank || !src

  return (
    <motion.figure
      className={`shrink-0 ${width} ${className}`}
      style={
        parallaxX && parallaxY && !prefersReducedMotion
          ? { x: parallaxX, y: parallaxY, rotate }
          : { rotate }
      }
      initial={
        prefersReducedMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.88, rotate: rotate + (rotate > 0 ? 10 : -10) }
      }
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        y: idleFloat && !prefersReducedMotion ? [0, -5, 0] : 0,
      }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { type: 'spring', stiffness: 360, damping: 24, delay },
        rotate: { type: 'spring', stiffness: 280, damping: 20, delay },
        y: idleFloat
          ? { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }
          : { duration: 0 },
      }}
    >
      <div className="bg-white p-1.5 pb-5 shadow-[3px_5px_18px_rgba(0,0,0,0.22)] sm:p-2 sm:pb-6">
        {isBlank ? (
          <div className="aspect-[4/5] w-full bg-[#eceae4]" aria-hidden="true" />
        ) : (
          <img src={src} alt="" className="aspect-[4/5] w-full object-cover" loading="eager" />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-1.5 text-center font-sans text-[0.6875rem] font-medium text-white/70">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  )
}
