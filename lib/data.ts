import React from "react";
import devImg from "@/public/dev-port-ss.png";
import apparelImg from '@/public/apparel.png';
import treeImg from '@/public/tree.png';
import shakespeareImg from "@/public/shakespeare.png";

export const links = [
  {
    name: '',
    hash: '#home'
  },
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
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Developer Portfolio",
    description:
      "I built the website you're looking at right now! Created with React App, styled with Tailwind CSS, animations with Framer Motion and contact form component with Resend & React Email.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "React Email & Resend"],
    imageUrl: devImg,
  },
  {
    title: "Shakespeare Text Generation Model",
    description:
      "I developed and trained an RNN model based on a dataset of Shakespeare's works, allowing users to input prompts and outputs a Shakespearean style text.",
    tags: ["Python", "TensorFlow", "Keras"],
    imageUrl: shakespeareImg,
  },
  {
    title: "Apparel Portfolio",
    description:
      "A digital collection of my designs. Coming soon!",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: apparelImg,
  },
  {
    title: "Predictive Tree",
    description:
      "Created a machine learning program from scratch utilizing decision tree structures, allowing user input of a set of variables and outputting a prediction of the target attribute.",
    tags: ["Java"],
    imageUrl: treeImg,
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
  "C/C++",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Docker",
  "Forge/Alloy",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Bitbucket",
  "Jira (Agile)",
  "Lean Six Sigma (Yellow Belt)"
] as const;