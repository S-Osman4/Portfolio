/**
 * ProjectCard.tsx
 * Card component for a single portfolio project.
 *
 * Thumbnail behaviour:
 * - previewImage provided → renders screenshot with zoom on hover
 * - no previewImage       → renders coloured gradient placeholder
 *
 * Link behaviour:
 * - liveUrl provided (and not '#')   → shows live site link
 * - githubUrl provided (and not '#') → shows GitHub link
 * - neither shown when absent or placeholder
 */

import { motion } from 'framer-motion'
import Tag from './Tag'
import { cn } from '../../utils/cn'
import type { Project, ProjectDomain, ProjectBadge } from '../../types'

/* ── All visual config per domain / badge ── */
const STYLE = {
  domain: {
    frontend: {
      label: 'Frontend',
      dot: 'bg-[#c84b2f]',
      thumb: 'bg-gradient-to-br from-[#f0ece4] to-[#e8ddd0]',
    },
    fullstack: {
      label: 'Fullstack',
      dot: 'bg-[#2e8b57]',
      thumb: 'bg-gradient-to-br from-[#e8f0ec] to-[#d0e4d8]',
    },
    'data-analysis': {
      label: 'Data Analysis',
      dot: 'bg-[#9b3db8]',
      thumb: 'bg-gradient-to-br from-[#f0e8ec] to-[#e4d0d8]',
    },
    'data-science': {
      label: 'Data Science',
      dot: 'bg-[#2563c4]',
      thumb: 'bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4]',
    },
  } as Record<ProjectDomain, { label: string; dot: string; thumb: string }>,

  badge: {
    'Client work': 'bg-[#c84b2f] text-white',
    Personal: 'bg-[#1a1612] text-[#f7f4ef]',
    SheCodes: 'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
    Kaggle: 'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
    Zindi: 'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
  } as Record<ProjectBadge, string>,
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    domain,
    badge,
    tags,
    liveUrl,
    githubUrl,
    previewImage,
  } = project

  const domainStyle = STYLE.domain[domain]

  /** Helper: only show link if it exists AND is not a placeholder '#' */
  const showLive = liveUrl && liveUrl !== '#'
  const showGitHub = githubUrl && githubUrl !== '#'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className="group bg-white border border-black/5 rounded-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-black/10 transition-all duration-300"
    >
      {/* ── Thumbnail ── */}
      <div
        className={cn(
          'relative h-44 overflow-hidden',
          !previewImage && domainStyle.thumb
        )}
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full" aria-hidden="true" />
        )}

        {/* Overlay gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/10 to-transparent"
          aria-hidden="true"
        />

        {/* Badge */}
        <span
          className={cn(
            'absolute top-3 left-3 font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm font-medium',
            STYLE.badge[badge]
          )}
        >
          {badge}
        </span>

        {/* Domain colour dot — now direct lookup, not cn() conditionals */}
        <span
          className={cn(
            'absolute top-3.5 right-3.5 w-2 h-2 rounded-full',
            domainStyle.dot
          )}
          aria-hidden="true"
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#b5a898] mb-2">
          {domainStyle.label}
        </p>

        <h3 className="font-serif text-xl font-normal text-[#1a1612] mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-[#8a7d6e] mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Links — only rendered when real URLs exist */}
        {(showLive || showGitHub) && (
          <div className="flex gap-4 pt-1">
            {showLive && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c84b2f] tracking-wide flex items-center gap-1 hover:gap-2 transition-all duration-200"
              >
                Live site <span aria-hidden="true">→</span>
              </a>
            )}
            {showGitHub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#b5a898] tracking-wide flex items-center gap-1 hover:gap-2 hover:text-[#8a7d6e] transition-all duration-200"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}