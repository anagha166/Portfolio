import type { Transition, Variants } from 'framer-motion'
import { outExpo, premiumEase } from './transitions'

export const pencilEnterTransition: Transition = {
  duration: 1.2,
  ease: outExpo,
}

export const pencilExitTransition: Transition = {
  duration: 0.8,
  ease: premiumEase,
}

export const pencilVariants: Variants = {
  offscreen: {
    x: '120%',
    y: '40%',
    rotate: -25,
    opacity: 0,
  },
  writing: {
    x: 0,
    y: 0,
    rotate: -12,
    opacity: 1,
    transition: pencilEnterTransition,
  },
  exit: {
    x: '-120%',
    y: '-30%',
    rotate: 15,
    opacity: 0,
    transition: pencilExitTransition,
  },
}

export const introLines = [
  { text: "Hi, I'm Anagha.", pauseAfter: 800 },
  {
    text: 'I explore how thoughtful design can shape the way people think, create, and connect.',
    pauseAfter: 1000,
  },
  { text: 'Every project starts as a sketch.', pauseAfter: 1200 },
] as const

/** Approximate ms per character for handwriting timing */
export const CHAR_DURATION = 45

export function getLineDuration(text: string): number {
  return text.length * CHAR_DURATION
}
