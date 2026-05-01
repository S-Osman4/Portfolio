/**
 * useActiveSection.ts
 * Tracks which section is currently in view and returns its id.
 * Used by Nav to highlight the active link as the user scrolls.
 *
 * Uses IntersectionObserver directly — no Framer Motion dependency
 * since this is pure DOM observation logic.
 *
 * Usage:
 * const activeSection = useActiveSection(['projects', 'experience', 'skills'])
 */

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    /**
     * rootMargin: '-50% 0px -50% 0px'
     * Only triggers when a section crosses the middle of the viewport —
     * feels more natural than triggering at the top edge.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    /** Observe each section by id */
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}