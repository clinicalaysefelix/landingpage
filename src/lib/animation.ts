import { Transition, Variants } from 'motion/react'

const createAnimationConfig = () => {
  const defaultTransition: Transition = {
    type: 'spring',
    bounce: 0.2,
    duration: 0.6,
  }

  const viewportDefault = { once: true, amount: 1 }

  const animationsVariants: Variants = {
    popOffScreen: {
      scale: 0,
      opacity: 0,
    },
    popOnScreen: {
      scale: 1,
      opacity: 1,
      transition: defaultTransition,
    },
    navbarOffScreen: {
      y: -64,
      opacity: 0,
    },
    navbarOnScreen: {
      y: 0,
      opacity: 1,
      transition: defaultTransition,
    },
    toTopOffScreen: {
      y: 20,
      opacity: 0,
    },
    toTopOnScreen: {
      y: 0,
      opacity: 1,
      transition: defaultTransition,
    },
    toBottomOffScreen: {
      y: -20,
      opacity: 0,
    },
    toBottomOnScreen: {
      y: 0,
      opacity: 1,
      transition: defaultTransition,
    },
    toLeftOffScreen: {
      x: -20,
      opacity: 0,
    },
    toLeftOnScreen: {
      x: 0,
      opacity: 1,
      transition: defaultTransition,
    },
    toRightOffScreen: {
      x: 20,
      opacity: 0,
    },
    toRightOnScreen: {
      x: 0,
      opacity: 1,
      transition: defaultTransition,
    },
  }

  return {
    variants: animationsVariants,
    viewport: viewportDefault,
  }
}

export const animationConfig = createAnimationConfig()
