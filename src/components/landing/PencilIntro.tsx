import { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { PencilGraphic } from './PencilGraphic'
import { HandwritingLine } from './HandwritingLine'
import { introLines, pencilVariants, pencilEnterTransition } from '@/animations/pencil'

interface PencilIntroProps {
  onComplete: () => void
}

type IntroPhase = 'enter' | 'write' | 'exit' | 'done'

const PENCIL_ENTER_MS = (pencilEnterTransition.duration as number) * 1000 + 100

export function PencilIntro({ onComplete }: PencilIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>('enter')
  const [activeLine, setActiveLine] = useState(-1)
  const [completedLines, setCompletedLines] = useState<Set<number>>(() => new Set())
  const [pencilX, setPencilX] = useState(0)
  const [pencilY, setPencilY] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const finishIntro = useCallback(() => {
    setPhase('done')
    onCompleteRef.current()
  }, [])

  // Respect reduced motion — skip straight to interactive
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishIntro()
    }
  }, [finishIntro])

  // Pencil enter → start writing
  useEffect(() => {
    if (phase !== 'enter') return
    const timer = window.setTimeout(() => {
      setPhase('write')
      setActiveLine(0)
    }, PENCIL_ENTER_MS)
    return () => window.clearTimeout(timer)
  }, [phase])

  // Pencil exit → hand off to interactive workspace
  useEffect(() => {
    if (phase !== 'exit') return
    const timer = window.setTimeout(finishIntro, 900)
    return () => window.clearTimeout(timer)
  }, [phase, finishIntro])

  const handleLineComplete = useCallback((lineIndex: number) => {
    setCompletedLines((prev) => new Set(prev).add(lineIndex))
    const pause = introLines[lineIndex].pauseAfter

    if (lineIndex < introLines.length - 1) {
      window.setTimeout(() => setActiveLine(lineIndex + 1), pause)
    } else {
      window.setTimeout(() => setPhase('exit'), pause)
    }
  }, [])

  const handleProgress = useCallback((lineIndex: number, _progress: number, x: number) => {
    setPencilX(x)
    setPencilY(lineIndex * 56 + 4)
  }, [])

  if (phase === 'done') return null

  const showPencil = phase === 'enter' || phase === 'write' || phase === 'exit'

  return (
    <div className="relative z-20 px-[var(--spacing-page)] pt-[clamp(4rem,15vh,8rem)]">
      {/* Pencil */}
      {showPencil && (
        <motion.div
          className="pointer-events-none fixed z-[45]"
          style={{
            left: `calc(var(--spacing-page) + ${pencilX}px)`,
            top: `calc(clamp(4rem, 15vh, 8rem) + ${pencilY}px)`,
          }}
          variants={pencilVariants}
          initial="offscreen"
          animate={phase === 'exit' ? 'exit' : 'writing'}
          transition={phase === 'enter' ? pencilEnterTransition : undefined}
        >
          <PencilGraphic className="h-6 w-auto drop-shadow-md" />
        </motion.div>
      )}

      {/* Skip */}
      <button
        type="button"
        onClick={finishIntro}
        className="absolute top-[clamp(4rem,15vh,8rem)] right-[var(--spacing-page)] z-30 text-xs tracking-wide text-[var(--color-graphite-faint)] transition-colors hover:text-[var(--color-graphite)] dark:text-[var(--color-graphite-faint-dark)] dark:hover:text-[var(--color-graphite-dark)]"
      >
        Skip intro
      </button>

      <div className="relative max-w-2xl space-y-6">
        <h1 className="sr-only">Anagha Kamath — Portfolio</h1>

        {introLines.map((line, index) => (
          <HandwritingLine
            key={line.text}
            text={line.text}
            isActive={phase === 'write' && activeLine === index}
            isComplete={completedLines.has(index)}
            onComplete={() => handleLineComplete(index)}
            onProgress={(p, x) => handleProgress(index, p, x)}
            className={`text-[clamp(1.25rem,3vw,1.75rem)] font-light leading-relaxed tracking-tight ${
              index === 0 ? 'text-[clamp(1.75rem,4vw,2.5rem)] font-normal' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}
