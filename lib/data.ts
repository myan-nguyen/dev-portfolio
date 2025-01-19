import React from "react";
import devImg from "@/public/dev-port-ss.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  },
  {
    name: "RESUME",
    hash: "#resume",
  },
  {
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Developer Portfolio",
    description:
      "I built the website you're looking at right now! FILL IN DESCRIPTION",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: devImg,
  },
  {
    title: "Shakespeare Text Generation Model",
    description:
      "RNN model. FILL IN DESCRIPTION & REPLACE PHOTO",
    tags: ["Python", "TensorFlow", "Keras"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Predictive Tree",
    description:
      "Project built for my data structures class FILL IN DESCRIPTION & REPLACE PHOTO",
    tags: ["Java"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "TensorFlow",
  "Keras",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Bitbucket",
  "Jira (Agile)",
  "Lean Six Sigma (Yellow Belt)"
] as const;