import type { Transition, Variants } from 'framer-motion'
import { outExpo, premiumEase } from './transitions'

export const spreadTransition: Transition = {
  duration: 0.7,
  ease: outExpo,
}

export const spreadVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spreadTransition,
  },
}

export const pageStackVariants: Variants = {
  enter: (index: number) => ({
    y: index === 0 ? 0 : '8%',
    scale: index === 0 ? 1 : 0.97,
    opacity: index === 0 ? 1 : 0.6,
  }),
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: premiumEase },
  },
  exit: {
    y: '-12%',
    scale: 0.98,
    opacity: 0.4,
    transition: { duration: 0.5, ease: premiumEase },
  },
}

export const curlHoverTransition: Transition = {
  duration: 0.4,
  ease: premiumEase,
}
