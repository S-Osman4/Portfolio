/**
 * Skills.tsx
 * Renders skill groups in a responsive grid.
 * Each skill has a proficiency bar animated on scroll.
 * Reads from data/skills.ts — no content hardcoded here.
 */

import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { skillGroups } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { SkillGroup } from '../../types'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-[#f7f4ef]"
    >
      <div className="max-w-6xl mx-auto">

        <SectionHeader num="03" title="Skills &" accent="tools" />

        {/* Empty state – safe if skillGroups ever becomes empty */}
        {skillGroups.length === 0 ? (
          <p className="text-sm text-[#b5a898] font-mono text-center py-16">
            Skills list coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group) => (
              <SkillGroupBlock key={group.title} group={group} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

/* ── Skill group block ── */
interface SkillGroupBlockProps {
  group: SkillGroup
}

function SkillGroupBlock({ group }: SkillGroupBlockProps) {
  // Use your custom hook for consistent animation defaults
  const { ref, inView } = useScrollReveal({ margin: '-40px' })

  return (
    <div ref={ref}>

      {/* Group title — now an <h3> for proper heading hierarchy */}
      <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#c84b2f] mb-4 pb-2 border-b border-black/10">
        {group.title}
      </h3>

      <ul className="flex flex-col gap-3">
        {group.skills.map((skill) => (
          <li key={skill.name} className="flex flex-col gap-1.5">

            <span className="text-sm text-[#4a4238]">
              {skill.name}
            </span>

            {/* Bar track */}
            <div
              className="w-full h-0.5 bg-[#e8e2d8] rounded-full overflow-hidden"
              role="meter"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* Animated fill */}
              <motion.div
                className="h-full bg-[#1a1612] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: inView ? `${skill.level}%` : 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              />
            </div>

          </li>
        ))}
      </ul>

    </div>
  )
}