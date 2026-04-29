/**
 * ProjectCard.tsx
 * Card component for a single portfolio project.
 *
 * Thumbnail behaviour:
 * - previewImage provided → renders screenshot with zoom on hover
 * - no previewImage       → renders coloured gradient placeholder
 *
 * Link behaviour:
 * - liveUrl provided   → shows live site link
 * - githubUrl provided → shows GitHub link
 * - neither shown when absent — client work won't show GitHub
 */

import { motion } from 'framer-motion'
import Tag from './Tag'
import { cn } from '../../utils/cn'
import type { Project, ProjectDomain, ProjectBadge } from '../../types'

/** Gradient placeholder per domain — used when no previewImage exists */
const DOMAIN_THUMB_CLASS: Record<ProjectDomain, string> = {
  'frontend':      'bg-gradient-to-br from-[#f0ece4] to-[#e8ddd0]',
  'fullstack':     'bg-gradient-to-br from-[#e8f0ec] to-[#d0e4d8]',
  'data-analysis': 'bg-gradient-to-br from-[#f0e8ec] to-[#e4d0d8]',
  'data-science':  'bg-gradient-to-br from-[#e8ecf0] to-[#d0d8e4]',
}

/** Badge colour per origin */
const BADGE_CLASS: Record<ProjectBadge, string> = {
  'Client work': 'bg-[#c84b2f] text-white',
  'Personal':    'bg-[#1a1612] text-[#f7f4ef]',
  'SheCodes':    'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
  'Kaggle':      'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
  'Zindi':       'bg-[#e8e2d8] text-[#8a7d6e] border border-black/10',
}

/** Human-readable domain label */
const DOMAIN_LABEL: Record<ProjectDomain, string> = {
  'frontend':      'Frontend',
  'fullstack':     'Fullstack',
  'data-analysis': 'Data Analysis',
  'data-science':  'Data Science',
}

/** Domain colour dot */
const DOMAIN_DOT_CLASS: Record<ProjectDomain, string> = {
  'frontend':      'bg-[#c84b2f]',
  'fullstack':     'bg-[#2e8b57]',
  'data-analysis': 'bg-[#9b3db8]',
  'data-science':  'bg-[#2563c4]',
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

  return (
    <motion.article
      className="group bg-white border border-black/5 rounded-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-black/10 transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Thumbnail ── */}
      <div className={cn(
        'relative h-44 overflow-hidden',
        !previewImage && DOMAIN_THUMB_CLASS[domain]
      )}>

        {previewImage ? (
          /**
           * Screenshot thumbnail.
           * group-hover:scale-105 — subtle zoom when the card is hovered.
           * transition-transform duration-500 — slow enough to feel intentional.
           */
          <img
            src={previewImage}
            alt={`${title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /**
           * Gradient placeholder — shown while previewImage isn't available.
           * Remove once all screenshots are added to public/previews/.
           */
          <div className="w-full h-full" aria-hidden="true" />
        )}

        {/* Subtle gradient overlay at the bottom of the thumbnail */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/10 to-transparent"
          aria-hidden="true"
        />

        {/* Badge — top left */}
        <span
          className={cn(
            'absolute top-3 left-3 font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm font-medium',
            BADGE_CLASS[badge]
          )}
        >
          {badge}
        </span>

        {/* Domain colour dot — top right */}
        <span
          className={cn(
            'absolute top-3.5 right-3.5 w-2 h-2 rounded-full',
            DOMAIN_DOT_CLASS[domain]
          )}
          aria-hidden="true"
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Domain label */}
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#b5a898] mb-2">
          {DOMAIN_LABEL[domain]}
        </p>

        {/* Title */}
        <h3 className="font-serif text-xl font-normal text-[#1a1612] mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#8a7d6e] mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Links — only rendered when the url exists */}
        {(liveUrl || githubUrl) && (
          <div className="flex gap-4 pt-1">
            {liveUrl && (
                <a
              
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c84b2f] tracking-wide flex items-center gap-1 hover:gap-2 transition-all duration-200"
              >
                Live site <span aria-hidden="true">→</span>
              </a>
            )}
            {githubUrl && (
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