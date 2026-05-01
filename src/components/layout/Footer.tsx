/**
 * Footer.tsx
 * Minimal footer — copyright and back to top link.
 * Sits below the contact section inside the dark background.
 */

import { scrollToTop } from '../../utils/scrollTo'

export default function Footer() {
  return (
    <footer className="bg-[#1a1612] border-t border-[#f7f4ef]/08 px-6 md:px-12 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="font-mono text-xs tracking-wide text-[#f7f4ef]/60">
          © {new Date().getFullYear()} Shamso Osman
        </p>

        <button
          onClick={scrollToTop}
          className="font-mono text-xs tracking-wide text-[#f7f4ef]/60 hover:text-[#f7f4ef] transition-colors duration-200"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}