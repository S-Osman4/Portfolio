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
    previewImage: "/Portfolio/projects/Skyhaven Care.png",
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
    previewImage: "/Portfolio/projects/Lasha Moments.png",
  },
  {
    id: "bookclub",
    title: "TechSisters Book Club",
    description:
      "Members-only reading platform with access code gating, hCaptcha-protected registration, reading progress tracking, book suggestions, and a full admin dashboard. Built end to end with FastAPI, HTMX, and Tailwind CSS. Hosted on Render with a Supabase PostgreSQL database.",
    domain: "fullstack",
    badge: "Personal",
    tags: [
      "FastAPI",
      "HTMX",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Docker",
    ],
    liveUrl: "https://techsisters-bookclub.onrender.com",
    previewImage: "/Portfolio/projects/Bookclub.png",
    githubUrl: "https://github.com/S-Osman4/techsisters-bookclub",
  },
  {
    id: "study-buddy",
    title: "Study Buddy Chatbot",
    description:
      "Japanese language learning chatbot that helped achieve 92nd percentile on JLPT N5. Built with Next.js, Cerebras Cloud SDK, and Llama 3.1.",
    domain: "fullstack",
    badge: "Personal",
    tags: ["Next.js", "React", "Cerebras Cloud SDK", "Llama 3.1"],
    previewImage: "/Portfolio/projects/Study Buddy.png",
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
  {
    id: "mentor-tracker",
    title: "Mentor Session Tracker",
    description:
      "A 7-week activity log built in Google Sheets to document and track my volunteer mentoring sessions during the Google Cloud Study Jam Extension Period (ALX Africa). ",
    domain: "data-analysis",
    badge: "Personal",
    tags: [
      "Google Sheets",
      "Mentorship Tracking",
      "Google Cloud",
      "Data Analysis",
    ],
    liveUrl:
      "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?usp=sharing", // use the actual shareable link
    previewImage: "/Portfolio/projects/Mentor Tracker.png",
  },
];
