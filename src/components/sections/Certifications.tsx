/**
 * Certifications.tsx
 * Renders certification cards in a responsive grid.
 * Reads from data/certifications.ts — no content hardcoded here.
 * Each card links to the credential when a URL is provided.
 */

import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { certifications } from '../../data/certifications'
import type { Certification } from '../../types'

/** Emoji icon and background colour per issuer */
const ISSUER_STYLE: Record<string, { icon: string; bg: string }> = {
    'Stanford · Online': { icon: '🏥', bg: 'bg-[#fef3ee]' },
    'ALX Africa': { icon: '🌍', bg: 'bg-[#e8f0ec]' },
    'Coursera · Google': { icon: '📋', bg: 'bg-[#e8ecf8]' },
}

/** Fallback style for any issuer not listed above */
const FALLBACK_STYLE = { icon: '🎓', bg: 'bg-[#f0ece4]' }

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="py-24 px-6 md:px-12 bg-[#f0ece4]"
        >
            <div className="max-w-6xl mx-auto">

                <SectionHeader num="04" title="Certifi" accent="cations" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, index) => (
                        <CertCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

/** ─────────────────────────────────────────────
 * CertCard
 * Single certification card.
 * Renders as an anchor when credentialUrl exists,
 * otherwise a plain div — keeps semantics correct.
 * ───────────────────────────────────────────── */
interface CertCardProps {
    cert: Certification
    index: number
}

function CertCard({ cert, index }: CertCardProps) {
    const { issuer, name, detail, credentialUrl } = cert
    const style = ISSUER_STYLE[issuer] ?? FALLBACK_STYLE

    /** Shared classes for both the link and div variants */
    const cardClasses =
        'flex gap-4 items-start bg-white border border-black/5 rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-black/10'

    const content = (
        <>
            {/* Icon */}
            <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${style.bg}`}
                aria-hidden="true"
            >
                {style.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1 min-w-0">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[#b5a898]">
                    {issuer}
                </p>
                <p className="text-sm font-semibold text-[#1a1612] leading-snug">
                    {name}
                </p>
                <p className="text-xs text-[#8a7d6e] leading-relaxed">
                    {detail}
                </p>

                {/* Credential link indicator */}
                {credentialUrl && credentialUrl !== '#' && (
                    <p className="font-mono text-[10px] tracking-wide text-[#c84b2f] mt-1">
                        View credential →
                    </p>
                )}
            </div>
        </>
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
        >
            {credentialUrl && credentialUrl !== '#' ? (
                <a

                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                    aria-label={`View credential for ${name}`}
                >
                    {content}
                </a>
            ) : (
                <div className={cardClasses}>
                    {content}
                </div>
            )
            }
        </motion.div >
    )
}