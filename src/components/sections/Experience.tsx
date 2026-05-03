/**
 * Experience.tsx
 * Renders work, volunteer, and training experience in a timeline list.
 * Reads from data/experience.ts — no content hardcoded here.
 * Each entry animates in on scroll via Framer Motion.
 */

import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { experiences } from '../../data/experience'
import { cn } from '../../utils/cn'
import type { Experience } from '../../types'

/** Badge colour per experience type */
const TYPE_CLASS: Record<Experience['type'], string> = {
    Internship: 'bg-[#e8f0ec] text-[#2e8b57]',
    Volunteer: 'bg-[#f0e8f0] text-[#9b3db8]',
    Training: 'bg-[#fef3ee] text-[#c84b2f]',
    Work: 'bg-[#e8f0ec] text-[#2e8b57]',
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 md:px-12 bg-[#f0ece4]"
        >
            <div className="max-w-6xl mx-auto">

                <SectionHeader num="02" title="Experi" accent="ence" />

                <ol className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} exp={exp} index={index} isLast={index === experiences.length - 1} />
                    ))}
                </ol>

            </div>
        </section>
    )
}

/** ─────────────────────────────────────────────
 * ExperienceItem
 * Single experience row — extracted to keep
 * the parent component readable.
 * ───────────────────────────────────────────── */
interface ExperienceItemProps {
    exp: Experience
    index: number
    isLast: boolean
}

function ExperienceItem({ exp, index, isLast }: ExperienceItemProps) {
    const { role, organisation, period, type, description, points } = exp

    return (
        <motion.li
            className={cn(
                'grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-10',
                !isLast && 'border-b border-black/10'
            )}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        >
            {/* Left — meta */}
            <div className="flex flex-col gap-2">
                <p className="font-mono text-[11px] tracking-[0.08em] text-[#b5a898]">
                    {period}
                </p>
                <p className="text-xs font-semibold tracking-wide text-[#8a7d6e]">
                    {organisation}
                </p>
                <span
                    className={cn(
                        'self-start font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-sm',
                        TYPE_CLASS[type]
                    )}
                >
                    {type}
                </span>
            </div>

            {/* Right — content */}
            <div>
                <h3 className="font-serif text-2xl font-normal text-[#1a1612] mb-3 leading-snug">
                    {role}
                </h3>

                <p className="text-sm leading-relaxed text-[#4a4238] mb-4">
                    {description}
                </p>

                <ul className="flex flex-col gap-2">
                    {points.map((point) => (
                        <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-[#8a7d6e] leading-relaxed"
                        >
                            {/* Arrow marker */}
                            <span
                                className="text-[#c84b2f] text-xs mt-0.5 shrink-0"
                                aria-hidden="true"
                            >
                                →
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.li>
    )
}