import { Certification } from '../types'

/**
 * Certifications list.
 * Add credentialUrl when you have the shareable link.
 */
export const certifications: Certification[] = [
  {
    id: 'stanford-diabetes',
    issuer: 'Stanford · Online',
    name: 'Diabetes — Biochemistry & Fundamentals',
    detail: 'Medical fundamentals applied in the Diabetes Risk Predictor project',
    credentialUrl: '#',
  },
  {
    id: 'alx-se',
    issuer: 'ALX Africa',
    name: 'Software Engineering',
    detail: 'Fullstack development, systems, and algorithms',
  },
  {
    id: 'alx-aice',
    issuer: 'ALX Africa',
    name: 'AIce — AI & Data Track',
    detail: 'Machine learning, data pipelines, and applied AI',
  },
  {
    id: 'coursera-pm',
    issuer: 'Coursera · Google',
    name: 'Project Management',
    detail: 'Agile, Scrum, and project coordination fundamentals',
    credentialUrl: '#',
  },
  {
    id: 'coursera-it',
    issuer: 'Coursera · Google',
    name: 'IT Support',
    detail: 'Networking, systems, and technical support fundamentals',
    credentialUrl: '#',
  },
]