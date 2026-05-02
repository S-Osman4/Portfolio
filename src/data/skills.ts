import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Web & Mobile",
    skills: [
      { name: "React / React Native", level: 85 },
      { name: "Next.js", level: 78 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 92 },
      { name: "Tailwind", level: 85 },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Python", level: 82 },
      { name: "SQL", level: 70 },
      { name: "pandas / scikit-learn", level: 78 },
      { name: "XGBoost / SHAP", level: 65 },
      { name: "NLP / LLMs", level: 70 },
      { name: "Cerebras Cloud SDK", level: 68 },
    ],
  },
  {
    title: "Cloud & Backend",
    skills: [
      { name: "FastAPI", level: 72 },
      { name: "Node.js", level: 70 },
      { name: "Supabase", level: 75 },
      { name: "Firebase", level: 70 },
      { name: "GCP (Vertex AI)", level: 65 },
      { name: "BigQuery / Cloud Run", level: 60 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Vercel / Render", level: 75 },
      { name: "Notion / Slack", level: 85 },
      { name: "Jupyter", level: 80 },
    ],
  },
];
