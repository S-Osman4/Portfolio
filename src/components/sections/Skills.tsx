/**
 * Skills.tsx
 * Renders skill groups in a responsive grid.
 * Each skill has a proficiency bar animated on scroll.
 * Data is defined inline here since skills are tightly
 * coupled to this section and don't need to be shared.
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import type { SkillGroup } from '../../types'

/** All skill groups — update levels honestly, not aspirationally */
const SKILL_GROUPS: SkillGroup[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React / TSX', level: 88 },
            { name: 'TypeScript', level: 78 },
            { name: 'CSS / Tailwind', level: 85 },
            { name: 'HTML', level: 92 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Python / FastAPI', level: 80 },
            { name: 'Node.js', level: 74 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'Supabase', level: 75 },
        ],
    },
    {
        title: 'Data',
        skills: [
            { name: 'pandas / numpy', level: 82 },
            { name: 'scikit-learn', level: 75 },
            { name: 'Plotly / Seaborn', level: 78 },
            { name: 'XGBoost / SHAP', level: 65 },
        ],
    },
    {
        title: 'Tooling',
        skills: [
            { name: 'Git / GitHub', level: 88 },
            { name: 'Render / Netlify', level: 72 },
            { name: 'Figma', level: 60 },
            { name: 'Jupyter', level: 80 },
        ],
    },
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 px-6 md:px-12 bg-[#f7f4ef]"
        >
            <div className="max-w-6xl mx-auto">

                <SectionHeader num="03" title="Skills &" accent="tools" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {SKILL_GROUPS.map((group) => (
                        <SkillGroupBlock key={group.title} group={group} />
                    ))}
                </div>

            </div>
        </section>
    )
}

/** ─────────────────────────────────────────────
 * SkillGroupBlock
 * Renders a single group title and its skill bars.
 * Uses useInView so bars only animate when visible.
 * ───────────────────────────────────────────── */
interface SkillGroupBlockProps {
    group: SkillGroup
}

function SkillGroupBlock({ group }: SkillGroupBlockProps) {
    const ref = useRef<HTMLDivElement>(null)

    /**
     * once: true — animate in once, don't replay on scroll back up.
     * margin: '-40px' — trigger slightly before fully in view.
     */
    const inView = useInView(ref, { once: true, margin: '-40px' })

    return (
        <div ref={ref}>

            {/* Group title */}
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#c84b2f] mb-4 pb-2 border-b border-black/10">
                {group.title}
            </p>

            <ul className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-1.5">

                        {/* Skill name */}
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