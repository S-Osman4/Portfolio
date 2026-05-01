/**
 * useScrollReveal.ts
 * Custom hook that returns a ref and a boolean indicating
 * whether the element is in view.
 *
 * Wraps Framer Motion's useInView with sensible portfolio defaults
 * so we don't repeat the same options across every section.
 *
 * Usage:
 * const { ref, inView } = useScrollReveal()
 * <div ref={ref} className={inView ? 'opacity-100' : 'opacity-0'} />
 */

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollRevealOptions {
  /**
   * Margin around the viewport before triggering.
   * Negative values trigger before the element fully enters view.
   * Default: '-80px'
   */
  margin?: string
  /**
   * Whether to only trigger once.
   * Default: true — elements don't re-animate on scroll back up.
   */
  once?: boolean
}

interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement>
  inView: boolean
}

export function useScrollReveal({
  margin = '-80px',
  once = true,
}: UseScrollRevealOptions = {}): UseScrollRevealReturn {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin })

  return { ref, inView }
}