"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app once at the root. `reducedMotion="user"` makes Framer Motion
 * automatically defer to the OS-level `prefers-reduced-motion` setting for
 * every animation (transform/layout animations are neutralized, opacity
 * crossfades are kept) — this is what actually disables things like the
 * infinite orb rotation and particle drift for users who need it, since
 * those are driven by the Web Animations API, not CSS `animation`, and the
 * blanket CSS override in globals.css can't reach them.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
