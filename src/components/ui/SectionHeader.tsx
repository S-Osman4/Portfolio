/**
 * SectionHeader.tsx
 * Reusable section header used by every section below the hero.
 *
 * The optional `dark` prop switches text and rule colours
 * for sections with a dark background (e.g. Contact).
 */

import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  num: string
  title: string
  accent: string
  /** Set to true when the section background is dark */
  dark?: boolean
}

export default function SectionHeader({ num, title, accent, dark = false }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex items-baseline gap-5 mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Section number */}
      <span
        className={cn(
          'font-mono text-[11px] tracking-widest shrink-0',
          dark ? 'text-[#e8a87c]' : 'text-[#c84b2f]'
        )}
      >
        {num}
      </span>

      {/* Title */}
      <h2
        className={cn(
          'font-serif font-light text-[clamp(32px,5vw,52px)] leading-tight shrink-0',
          dark ? 'text-[#f7f4ef]' : 'text-[#1a1612]'
        )}
      >
        {title}{' '}
        <em
          className={cn(
            'italic',
            dark ? 'text-[#e8a87c]' : 'text-[#c84b2f]'
          )}
        >
          {accent}
        </em>
      </h2>

      {/* Decorative rule */}
      <div
        className={cn(
          'flex-1 h-px ml-4 self-center',
          dark ? 'bg-[#f7f4ef]/15' : 'bg-black/10'
        )}
        aria-hidden="true"
      />
    </motion.div>
  )
}