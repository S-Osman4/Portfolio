/**
 * Central type definitions for the portfolio.
 * All shared interfaces live here to keep things consistent
 * and avoid duplicating types across components.
 */

/** Domain categories for filtering projects */
export type ProjectDomain =
  | 'frontend'
  | 'fullstack'
  | 'data-analysis'
  | 'data-science'

/** Badge labels that indicate project origin */
export type ProjectBadge = 'Client work' | 'Personal' | 'SheCodes' | 'Kaggle'  | 'Zindi'

/** A single portfolio project */
export interface Project {
  id: string
  title: string
  description: string
  domain: ProjectDomain
  badge: ProjectBadge
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  /** Optional — used on individual project detail pages */
  longDescription?: string
}

/** A single experience entry (internship, volunteer, training) */
export interface Experience {
  id: string
  role: string
  organisation: string
  period: string
  type: 'Internship' | 'Volunteer' | 'Training'
  description: string
  points: string[]
}

/** A single certification */
export interface Certification {
  id: string
  issuer: string
  name: string
  detail: string
  /** Optional link to credential */
  credentialUrl?: string
}

/** A skill group (e.g. Frontend, Backend, Data) */
export interface SkillGroup {
  title: string
  skills: Skill[]
}

/** An individual skill with a proficiency level 0–100 */
export interface Skill {
  name: string
  level: number
}