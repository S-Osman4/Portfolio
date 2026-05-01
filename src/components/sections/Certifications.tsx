/**
 * Certifications.tsx
 * Renders certification cards in a responsive grid.
 * Reads from data/certifications.ts — no content hardcoded here.
 *
 * Handles two cert file types:
 * - image: renders a thumbnail that opens the full image in a new tab
 * - pdf: renders a styled PDF indicator that opens the PDF in a new tab
 *
 * Cards without a valid link fall back to a static view.
 */

import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { certifications } from '../../data/certifications'
import { cn } from '../../utils/cn'
import type { Certification } from '../../types'

/** Fallback icon and background per issuer when no certFile is provided */
const ISSUER_STYLE: Record<string, { icon: string; bg: string }> = {
  'Stanford · Online': { icon: '🏥', bg: 'bg-[#fef3ee]' },
  'ALX Africa':        { icon: '🌍', bg: 'bg-[#e8f0ec]' },
  'Coursera · Google': { icon: '📋', bg: 'bg-[#e8ecf8]' },
}

const FALLBACK_STYLE = { icon: '🎓', bg: 'bg-[#f0ece4]' }

/** Helper: only treat as a real URL if it isn't a placeholder '#' */
function isRealUrl(url?: string): url is string {
  return url !== undefined && url !== '#'
}

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

/* ── Certification Card ── */
interface CertCardProps {
  cert: Certification
  index: number
}

function CertCard({ cert, index }: CertCardProps) {
  const { issuer, name, detail, certFile, certFileType, credentialUrl } = cert

  const style = ISSUER_STYLE[issuer] ?? FALLBACK_STYLE

  // Only use real URLs (not '#') and prefer certFile over credentialUrl
  const linkHref = isRealUrl(certFile) ? certFile : isRealUrl(credentialUrl) ? credentialUrl : undefined

  // Base card classes – always include `group` so group-hover works
  const baseClasses =
    'flex flex-col bg-white border border-black/5 rounded-sm overflow-hidden ' +
    'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ' +
    'hover:shadow-black/5 hover:border-black/10 group'

  const inner = (
    <>
      {/* ── Thumbnail area ── */}
      <CertThumbnail
        certFile={certFile}
        certFileType={certFileType}
        name={name}
        fallbackStyle={style}
      />

      {/* ── Text body ── */}
      <div className="flex flex-col gap-1 p-4">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#b5a898]">
          {issuer}
        </p>
        <p className="text-sm font-semibold text-[#1a1612] leading-snug">
          {name}
        </p>
        <p className="text-xs text-[#8a7d6e] leading-relaxed">
          {detail}
        </p>

        {/* Open indicator – only when a real link exists */}
        {linkHref && (
          <p className="font-mono text-[10px] tracking-wide text-[#c84b2f] mt-2 flex items-center gap-1">
            {certFileType === 'pdf' ? 'View PDF' : certFile ? 'View certificate' : 'View credential'}
            <span aria-hidden="true">→</span>
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
      {linkHref ? (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          aria-label={`Open certificate for ${name}`}
        >
          {inner}
        </a>
      ) : (
        <div className={baseClasses}>
          {inner}
        </div>
      )}
    </motion.div>
  )
}

/* ── Thumbnail States ── */
interface CertThumbnailProps {
  certFile?: string
  certFileType?: Certification['certFileType']
  name: string
  fallbackStyle: { icon: string; bg: string }
}

function CertThumbnail({ certFile, certFileType, name, fallbackStyle }: CertThumbnailProps) {
  // Image
  if (certFile && certFileType === 'image') {
    return (
      <div className="relative w-full h-40 bg-[#f0ece4] overflow-hidden">
        <img
          src={certFile}
          alt={`${name} certificate`}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white to-transparent"
          aria-hidden="true"
        />
      </div>
    )
  }

  // PDF
  if (certFile && certFileType === 'pdf') {
    return (
      <div className="w-full h-40 bg-[#f7f4ef] border-b border-black/5 flex flex-col items-center justify-center gap-2">
        <div className="relative">
          <div className="w-10 h-12 bg-white border border-black/10 rounded-sm shadow-sm flex items-end justify-center pb-1.5">
            <span className="font-mono text-[8px] font-semibold tracking-wider text-[#c84b2f]">
              PDF
            </span>
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-[#f0ece4] border-b border-l border-black/10 rounded-bl-sm" />
        </div>
        <p className="font-mono text-[10px] tracking-wide text-[#b5a898]">
          Certificate document
        </p>
      </div>
    )
  }

  // Fallback icon
  return (
    <div
      className={cn('w-full h-40 flex items-center justify-center text-4xl', fallbackStyle.bg)}
      aria-hidden="true"
    >
      {fallbackStyle.icon}
    </div>
  )
}