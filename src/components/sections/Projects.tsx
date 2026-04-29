/**
 * Projects.tsx
 * Filterable grid of portfolio projects.
 * Reads from data/projects.ts — no content is hardcoded here.
 * Filter state lives in this component and is passed down to
 * FilterButton. ProjectCard is stateless.
 */

import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import FilterButton from '../ui/FilterButton'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import type { ProjectDomain } from '../../types'

/** All filter options — 'all' is a UI-only value, not a domain type */
type FilterValue = ProjectDomain | 'all'

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All',           value: 'all'           },
  { label: 'Frontend',      value: 'frontend'      },
  { label: 'Fullstack',     value: 'fullstack'     },
  { label: 'Data Analysis', value: 'data-analysis' },
  { label: 'Data Science',  value: 'data-science'  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  /** Filter projects — show all when 'all' is selected */
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.domain === activeFilter)

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-[#f7f4ef]"
    >
      <div className="max-w-6xl mx-auto">

        <SectionHeader num="01" title="Selected" accent="work" />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(({ label, value }) => (
            <FilterButton
              key={value}
              label={label}
              active={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            />
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state — shown if a filter returns no results */}
        {filtered.length === 0 && (
          <p className="text-sm text-[#b5a898] font-mono text-center py-16">
            No projects in this category yet.
          </p>
        )}

      </div>
    </section>
  )
}