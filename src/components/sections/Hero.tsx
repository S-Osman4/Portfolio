/**
 * Hero.tsx
 * Landing section — the first thing a visitor sees.
 * Contains the name, positioning statement, skill pills, and CTAs.
 * Animations handled by Framer Motion.
 */

import { motion } from 'framer-motion'
import { scrollToSection } from '../../utils/scrollTo'

/** Skill pills displayed below the description */
const SKILLS = [
  'React · React Native · Next.js',
  'Python · FastAPI',
  'PostgreSQL · Supabase',
  'scikit-learn · pandas',
  'Google Cloud · Vertex AI',
] as const

/**
 * Shared Framer Motion fade-up variant.
 * Each child staggers via the `custom` prop (delay multiplier).
 */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end px-6 pt-24 pb-20 overflow-hidden bg-[#f7f4ef] md:px-12"
    >
      {/* Background watermark text */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-[clamp(3rem,9vw,10rem)] leading-none text-black/4 select-none pointer-events-none whitespace-nowrap"
      >
        Build · Analyze · Repeat
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Eyebrow */}
        <motion.p
          className="flex items-center gap-3 mb-5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#c84b2f]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="inline-block w-8 h-px bg-[#c84b2f]" />
          Fullstack · Data · Frontend
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-serif font-light text-[clamp(52px,9vw,112px)] leading-[0.95] tracking-tight text-[#1a1612] mb-7"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Hi, I'm Shamso
          <br />
          <em className="italic text-[#c84b2f]">Osman</em>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-lg text-base leading-relaxed text-[#4a4238] mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Fullstack engineer and data practitioner. I build products that work
          and find meaning in the data behind them. Based in Nairobi, open to remote.
        </motion.p>

        {/* Skill pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-black/10 bg-white text-[#4a4238]"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#projects')
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1612] text-[#f7f4ef] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#c84b2f] transition-colors duration-200"
          >
            View work
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="/shamso-osman-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-black/15 text-[#4a4238] text-xs font-semibold tracking-widest uppercase rounded-sm hover:border-black/40 hover:text-[#1a1612] transition-all duration-200"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-8 bottom-20 hidden md:flex flex-col items-center gap-3"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#b5a898] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="w-px h-16 bg-linear-to-b from-[#b5a898] to-transparent" />
      </motion.div>
    </section>
  )
}