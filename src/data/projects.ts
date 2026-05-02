import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "skyhaven-care",
    title: "SkyHaven Care LLC",
    description:
      "A behavioral health residential facility website — responsive, accessible, and deployed for a US-based client.",
    domain: "frontend",
    badge: "Client work",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://skyhaven-care-llc.web.app/",
    githubUrl: undefined, // not public by request
  },
  {
    id: "lasha-moments",
    title: "Lasha Moments",
    description:
      "Creative agency site for a décor business — elegant, mobile-first, and tailored to their brand identity.",
    domain: "frontend",
    badge: "Client work",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://lashamoments.web.app/",
    githubUrl: undefined,
  },
  {
    id: "bookclub",
    title: "Gated Book Club",
    description:
      "Full authentication, member management, and book tracking — frontend and backend built end to end. Hosted on Render and Supabase.",
    domain: "fullstack",
    badge: "Personal",
    tags: ["React", "Node.js", "Supabase", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "study-buddy",
    title: "Study Buddy Chatbot",
    description:
      "Japanese language learning chatbot that helped achieve 92nd percentile on JLPT N5. Built with Next.js, Cerebras Cloud SDK, and Llama 3.1.",
    domain: "fullstack",
    badge: "Personal",
    tags: ["Next.js", "React", "Cerebras Cloud SDK", "Llama 3.1"],
    liveUrl: "https://study-buddy-osik7rntz-shamso-osman.vercel.app/",
    githubUrl: "https://github.com/S-Osman4/Cerebras/",
  },
  {
    id: "data-science-competitions",
    title: "Data Science Competitions",
    description:
      "Multiple Kaggle challenges — 3rd place (Gold) in Wildfire Prediction, Top 25% (Silver) in Location Mention Recognition. Feature engineering, ensemble modelling, and NLP.",
    domain: "data-science",
    badge: "Zindi",
    tags: ["Python", "scikit-learn", "XGBoost", "NLP"],
    liveUrl: undefined,
    githubUrl: "#", // add the actual repo link if available
  },
];
