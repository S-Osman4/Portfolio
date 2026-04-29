import { Experience } from '../types'

/**
 * Work, volunteer, and training experience.
 * Ordered most recent first.
 */
export const experiences: Experience[] = [
  {
    id: 'internship',
    role: 'Junior Software Developer',
    organisation: 'Undisclosed · NDA',
    period: '2023 – 2024',
    type: 'Internship',
    description:
      'Contributed to the core development team for an unreleased mobile application. Working under NDA.',
    points: [
      'Part of the founding engineering team for a mobile product',
      'Collaborated on architecture decisions and feature development',
      'Worked within an agile team environment with real delivery cycles',
    ],
  },
  {
    id: 'mentor',
    role: 'Technical Mentor',
    organisation: 'Volunteer Programme',
    period: '2022 – Present',
    type: 'Volunteer',
    description:
      'Volunteered as a technical mentor supporting early-career developers and aspiring engineers.',
    points: [
      'Guided mentees through foundational programming concepts and project work',
      'Coordinated structured mentoring sessions and tracked progress over time',
      'Built a personal dashboard to log and visualise mentoring activity',
    ],
  },
  {
    id: 'alx',
    role: 'Software Engineering Programme',
    organisation: 'ALX Africa',
    period: '2022 – 2024',
    type: 'Training',
    description:
      "Completed ALX's rigorous, project-based software engineering curriculum — one of Africa's most respected technical training programmes.",
    points: [
      'Fullstack development, algorithms, and systems programming',
      'Collaborative, deadline-driven project environment',
      'Also completed ALX AIce — AI and data track',
    ],
  },
]