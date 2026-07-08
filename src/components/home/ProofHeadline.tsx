import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HERO_PROOF } from '@/data/hero'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function ProofLine({ stat, label }: { stat: string; label: string }) {
  return (
    <>
      <span className="text-[var(--color-sage)]">{stat}</span>
      <span className="ml-3 text-[var(--color-ink)]">{label}</span>
    </>
  )
}

export function ProofHeadline() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const proof = HERO_PROOF[index]

  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_PROOF.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const ariaLabel = `${proof.stat} ${proof.label}`

  if (prefersReducedMotion) {
    const staticProof = HERO_PROOF[0]
    return (
      <div>
        <h1
          className="text-display mx-auto max-w-4xl"
          aria-label={`${staticProof.stat} ${staticProof.label}`}
        >
          <ProofLine stat={staticProof.stat} label={staticProof.label} />
        </h1>
        <p className="text-mono-meta mt-4 !text-[var(--color-blush)]">{staticProof.context}</p>
      </div>
    )
  }

  return (
    <div className="relative min-h-[clamp(6.5rem,16vw,10rem)]" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-display mx-auto max-w-4xl" aria-label={ariaLabel}>
            <ProofLine stat={proof.stat} label={proof.label} />
          </h1>
          <p className="text-mono-meta mt-4 !text-[var(--color-blush)]">{proof.context}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
