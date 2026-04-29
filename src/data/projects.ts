import type { Project } from '../types'

/**
 * All portfolio projects.
 * To add a new project, append an object to this array.
 * Components read from here — no hardcoding in JSX.
 */
export const projects: Project[] = [
  {
    id: 'client-landing-1',
    title: 'Client Landing Page I',
    description:
      'Designed and developed a responsive landing page for a client — from brief to deployment.',
    domain: 'frontend',
    badge: 'Client work',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'client-landing-2',
    title: 'Client Landing Page II',
    description: "Second client engagement — a polished marketing page tailored to the client's brand identity.",
    domain: 'frontend',
    badge: 'Client work',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'shecodes-weather',
    title: 'Weather App',
    description:
      'A live weather dashboard using a public API — real-time data, location search, and animated icons.',
    domain: 'frontend',
    badge: 'SheCodes',
    tags: ['JavaScript', 'API', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'bookclub',
    title: 'Gated Book Club',
    description:
      'Full authentication, member management, and book tracking — frontend and backend built end to end. Hosted on Render and Supabase.',
    domain: 'fullstack',
    badge: 'Personal',
    tags: ['React', 'Node.js', 'Supabase', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'mentor-dashboard',
    title: 'Mentor Activity Dashboard',
    description:
      'Built a personal logging system and dashboard to track volunteer mentoring sessions — from raw logs to visual insights.',
    domain: 'data-analysis',
    badge: 'Personal',
    tags: ['Python', 'pandas', 'Plotly'],
    githubUrl: '#',
  },
  {
    id: 'diabetes-predictor',
    title: 'Diabetes Risk Predictor',
    description:
      'Applied diabetes biochemistry knowledge to build and deploy a risk prediction tool — PIMA dataset through to a live API with an interactive frontend.',
    domain: 'data-science',
    badge: 'Personal',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'kaggle-models',
    title: 'Competition Models',
    description:
      'Predictive modelling entries across Kaggle competitions — feature engineering, model comparison, and evaluation across real datasets.',
    domain: 'data-science',
    badge: 'Kaggle',
    tags: ['Python', 'XGBoost', 'scikit-learn'],
    githubUrl: '#',
  },
]