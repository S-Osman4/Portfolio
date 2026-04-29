/**
 * SectionHeader.tsx
 * Reusable section header used by every section below the hero.
 * Renders a section number, title with optional italic accent word,
 * and a decorative horizontal rule.
 *
 * Usage:
 * <SectionHeader num="01" title="Selected" accent="work" />
 * → renders: "Selected work" where "work" is italic + accent coloured
 */

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  /** Two-digit section number e.g. "01" */
  num: string
  /** Main title text before the accent word */
  title: string
  /** Italic accent word rendered after the title */
  accent: string
}

export default function SectionHeader({ num, title, accent }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex items-baseline gap-5 mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Section number */}
      <span className="font-mono text-[11px] tracking-widest text-[#c84b2f] shrink-0">
        {num}
      </span>

      {/* Title */}
      <h2 className="font-serif font-light text-[clamp(32px,5vw,52px)] leading-tight text-[#1a1612] shrink-0">
        {title}{' '}
        <em className="italic text-[#c84b2f]">{accent}</em>
      </h2>

      {/* Decorative rule — fills remaining space */}
      <div
        className="flex-1 h-px bg-black/10 ml-4 self-center"
        aria-hidden="true"
      />
    </motion.div>
  )
}