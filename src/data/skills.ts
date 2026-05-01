import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / TSX',    level: 88 },
      { name: 'TypeScript',      level: 78 },
      { name: 'CSS / Tailwind',  level: 85 },
      { name: 'HTML',            level: 92 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python / FastAPI', level: 80 },
      { name: 'Node.js',          level: 74 },
      { name: 'PostgreSQL',       level: 70 },
      { name: 'Supabase',         level: 75 },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'pandas / numpy',   level: 82 },
      { name: 'scikit-learn',     level: 75 },
      { name: 'Plotly / Seaborn', level: 78 },
      { name: 'XGBoost / SHAP',   level: 65 },
    ],
  },
  {
    title: 'Tooling',
    skills: [
      { name: 'Git / GitHub',     level: 88 },
      { name: 'Render / Netlify', level: 72 },
      { name: 'Figma',            level: 60 },
      { name: 'Jupyter',          level: 80 },
    ],
  },
]