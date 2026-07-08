import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { floatingCards, type FloatingCardData } from '@/data/workV3'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function FloatingCard({
  card,
  progress,
  reducedMotion,
}: {
  card: FloatingCardData
  progress: MotionValue<number>
  reducedMotion: boolean
}) {
  const yShift = reducedMotion
    ? 0
    : useTransform(progress, [0, 1], [0, -160 * card.speed - card.depth * 38])

  return (
    <motion.article
      className="group absolute w-[min(340px,82vw)]"
      style={{
        left: card.x,
        top: `${card.y}%`,
        y: yShift,
        scale: card.depth,
        filter: `blur(${Math.max(0, (1 - card.depth) * 1.4)}px)`,
      }}
      animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 7 + (1 - card.depth) * 3.4,
              ease: 'easeInOut',
              repeat: Number.POSITIVE_INFINITY,
            }
      }
    >
      <Link
        to={`/work/${card.slug}`}
        className="block overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-[0_18px_40px_rgba(18,38,63,0.12)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_50px_rgba(18,38,63,0.18)]"
      >
        <img src={card.image} alt={card.title} className="h-44 w-full object-cover" loading="lazy" />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.97)_100%)] px-4 py-3">
          <p className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]">
            {card.title}
          </p>
          <p className="mt-1 text-sm leading-snug text-[var(--color-ink-muted)] opacity-80 transition-opacity duration-200 group-hover:opacity-100">
            {card.descriptor}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

export function FloatingProjectDemo() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={sectionRef} className="relative min-h-[170vh] px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)] uppercase">
          Floating Projects Demo
        </p>
        <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-[var(--color-ink)]">
          Upright cards drift at different depths while staying legible.
        </h2>
      </div>

      <div className="relative mx-auto mt-16 h-[120vh] max-w-6xl">
        {floatingCards.map((card) => (
          <FloatingCard
            key={card.slug}
            card={card}
            progress={scrollYProgress}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </section>
  )
}
