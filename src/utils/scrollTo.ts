/**
 * Smooth‑scroll to a DOM element by selector.
 * Falls back to scrolling to top if the selector is 'body'.
 */
export function scrollToSection(selector: string): void {
  if (selector === 'body') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}