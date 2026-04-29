import type { Certification } from "../types";


/**
 * Certifications list.
 * certFile paths are relative to src/assets/images/certifications/.
 * certFileType tells the card whether to show a thumbnail or a PDF link.
 */
export const certifications: Certification[] = [
  {
    id: "stanford-diabetes",
    issuer: "Stanford · Online",
    name: "Diabetes — Biochemistry & Fundamentals",
    detail:
      "Medical fundamentals applied in the Diabetes Risk Predictor project",
    certFile: "/src/assets/images/certifications/stanford-diabetes.jpg",
    certFileType: "image",
    credentialUrl: "#",
  },
  {
    id: "alx-se",
    issuer: "ALX Africa",
    name: "Software Engineering",
    detail: "Fullstack development, systems, and algorithms",
    certFile: "/src/assets/images/certifications/alx-software-engineering.jpg",
    certFileType: "image",
  },
  {
    id: "alx-aice",
    issuer: "ALX Africa",
    name: "AIce — AI & Data Track",
    detail: "Machine learning, data pipelines, and applied AI",
    certFile: "/src/assets/images/certifications/alx-aice.pdf",
    certFileType: "pdf",
  },
  {
    id: "coursera-pm",
    issuer: "Coursera · Google",
    name: "Project Management",
    detail: "Agile, Scrum, and project coordination fundamentals",
    certFile:
      "/src/assets/images/certifications/coursera-project-management.pdf",
    certFileType: "pdf",
    credentialUrl: "#",
  },
  {
    id: "coursera-it",
    issuer: "Coursera · Google",
    name: "IT Support",
    detail: "Networking, systems, and technical support fundamentals",
    certFile: "/src/assets/images/certifications/coursera-it-support.pdf",
    certFileType: "pdf",
    credentialUrl: "#",
  },
];
