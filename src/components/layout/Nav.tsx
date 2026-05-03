/**
 * Nav.tsx
 * Fixed top navigation bar.
 * ...
 */

import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'
import { scrollToSection } from '../../utils/scrollTo'
import { useActiveSection } from '../../hooks/useActiveSection'

/** Navigation links — add or remove sections here only */
const NAV_LINKS = [
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const activeSection = useActiveSection([
    'home',
    'projects',
    'experience',
    'skills',
    'certifications',
    'contact',
  ])

  /** Add background once user scrolls past 20px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /** Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /** Smooth scroll to section and close mobile menu */
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    e.preventDefault()
    setMenuOpen(false)
    scrollToSection(href)
  }
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#f7f4ef]/90 backdrop-blur-md border-b border-black/5 py-4'
          : 'bg-transparent py-6'
      )}
    >

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'body')}
          aria-label="Shamso Osman – back to top"
          className="font-serif text-xl tracking-wide text-[#1a1612]"
        >
          Sham<em className="italic text-[#c84b2f]">so</em>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                'text-xs font-medium tracking-widest uppercase transition-colors duration-200',
                activeSection === id
                  ? 'text-[#1a1612]'
                  : 'text-[#8a7d6e] hover:text-[#1a1612]'
              )}
            >
              {label}
            </a>
          ))}

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={cn(
              'text-xs font-semibold tracking-wider uppercase border px-4 py-2 rounded-sm transition-all duration-200',
              activeSection === 'contact'
                ? 'bg-[#c84b2f] text-white border-[#c84b2f]'
                : 'text-[#c84b2f] border-[#c84b2f] hover:bg-[#c84b2f] hover:text-white'
            )}
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={cn(
            'block w-6 h-0.5 bg-[#1a1612] transition-all duration-300',
            menuOpen && 'translate-y-2 rotate-45'
          )} />
          <span className={cn(
            'block w-6 h-0.5 bg-[#1a1612] transition-all duration-300',
            menuOpen && 'opacity-0'
          )} />
          <span className={cn(
            'block w-6 h-0.5 bg-[#1a1612] transition-all duration-300',
            menuOpen && '-translate-y-2 -rotate-45'
          )} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300',
        menuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
      )}>
        <nav className="flex flex-col px-6 pb-6 pt-4 gap-4 bg-[#f7f4ef] border-t border-black/5">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                'text-xs font-medium tracking-wider uppercase transition-colors duration-200',
                activeSection === id
                  ? 'text-[#1a1612]'
                  : 'text-[#8a7d6e] hover:text-[#1a1612]'
              )}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={cn(
              'text-xs font-semibold tracking-widest uppercase border px-4 py-2 rounded-sm text-center transition-all duration-200',
              activeSection === 'contact'
                ? 'bg-[#c84b2f] text-white border-[#c84b2f]'
                : 'text-[#c84b2f] border-[#c84b2f] hover:bg-[#c84b2f] hover:text-white'
            )}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}