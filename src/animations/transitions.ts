import type { Transition, Variants } from 'framer-motion'

export const premiumEase = [0.25, 0.1, 0.25, 1] as const
export const outExpo = [0.16, 1, 0.3, 1] as const

export const fadeTransition: Transition = {
  duration: 0.6,
  ease: premiumEase,
}

export const slideTransition: Transition = {
  duration: 0.5,
  ease: outExpo,
}

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: fadeTransition,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: premiumEase },
  },
}

export const sketchbookVariants: Variants = {
  blank: { opacity: 1 },
  interactive: {
    opacity: 1,
    transition: { duration: 0.8, ease: premiumEase },
  },
}

export const toolbarVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: outExpo, delay: 0.3 },
  },
}

export const navTabVariants: Variants = {
  inactive: { opacity: 0.5 },
  active: {
    opacity: 1,
    transition: { duration: 0.3, ease: premiumEase },
  },
}
