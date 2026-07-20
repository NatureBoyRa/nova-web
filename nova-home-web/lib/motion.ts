import type { Transition, Variants } from "framer-motion";

/**
 * Standard M3-style deceleration curve, used for every scroll/entrance
 * animation on the site. Defined once so every component animates in sync.
 */
export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;

export function transition(delay = 0, duration: number = DURATION.base): Transition {
  return { duration, delay, ease: EASE_STANDARD };
}

/** Fade + rise entrance, the default reveal used across sections. */
export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: transition(delay) },
  };
}

/** Fade + scale, used for nodes/icons that should feel like they "arrive". */
export function fadeScale(delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: transition(delay) },
  };
}

/** Parent wrapper that staggers its children's fadeUp/fadeScale variants. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
