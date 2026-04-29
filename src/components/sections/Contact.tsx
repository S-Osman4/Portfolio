/**
 * Contact.tsx
 * Final section — a simple, direct contact block.
 * No form (avoids spam and backend complexity for a portfolio).
 * Instead: email link, GitHub, LinkedIn, and location.
 *
 * Update the CONTACT object below with your real details.
 */

import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

/** Update these with your real details */
const CONTACT = {
    email: 'hello@shamso.dev',
    github: 'https://github.com/shamso',
    linkedin: 'https://linkedin.com/in/shamso',
    location: 'Nairobi, Kenya · Open to remote',
} as const

/** Contact links rendered in the right column */
const LINKS = [
    {
        label: 'Email',
        display: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
    },
    {
        label: 'GitHub',
        display: 'github.com/shamso',
        href: CONTACT.github,
    },
    {
        label: 'LinkedIn',
        display: 'linkedin.com/in/shamso',
        href: CONTACT.linkedin,
    },
    {
        label: 'Location',
        display: CONTACT.location,
        href: null,
    },
] as const

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#1a1612]">
            <div className="max-w-6xl mx-auto">
                <SectionHeader num="05" title="Get in" accent="touch" dark />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Left — blurb and CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <p className="font-serif font-light text-[clamp(22px,3vw,34px)] leading-snug text-[#f7f4ef]/80 mb-8">
                            Open to{' '}
                            <em className="italic text-[#e8a87c]">fullstack</em>,
                            data, and frontend roles — freelance, contract, or full-time.
                        </p>

                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c84b2f] text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#e8a87c] hover:text-[#1a1612] transition-all duration-200"
                        >
                            Say hello
                            <span aria-hidden="true">→</span>
                        </a>
                    </motion.div>

                    {/* Right — contact links */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    >
                        {LINKS.map(({ label, display, href }, index) => (
                            <ContactLink
                                key={label}
                                label={label}
                                display={display}
                                href={href ?? undefined}
                                isLast={index === LINKS.length - 1}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

/** ─────────────────────────────────────────────
 * ContactLink
 * Single contact row.
 * Renders as an anchor when href is provided,
 * otherwise a plain div — location has no link.
 * ───────────────────────────────────────────── */
interface ContactLinkProps {
    label: string
    display: string
    href?: string
    isLast: boolean
}

function ContactLink({ label, display, href, isLast }: ContactLinkProps) {
    const inner = (
        <div className="flex flex-col gap-0.5 py-4">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#e8a87c]">
                {label}
            </span>
            <span className="text-sm text-[#f7f4ef]/60 group-hover:text-[#f7f4ef] transition-colors duration-200">
                {display}
            </span>
        </div>
    )

    const baseClasses = `group flex border-b transition-colors duration-200 ${isLast ? 'border-transparent' : 'border-[#f7f4ef]/08'
        }`

    return href ? (
        <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={baseClasses}
            aria-label={`${label}: ${display}`}
        >
            {inner}
        </a>
    ) : (
        <div className={baseClasses}>{inner}</div>
    )
}