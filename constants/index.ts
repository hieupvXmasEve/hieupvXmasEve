import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiFreelancer } from "react-icons/si";
import { RiProjectorLine } from "react-icons/ri";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/hieupv2412",
  github: "https://github.com/hieupvXmasEve",
  resume: "/resume.pdf",
  source_code: "https://github.com/hieupvXmasEve/portfolio",
  email: "hieupv2412@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Graduated from FPT College",
    location: "Hanoi, VN",
    description:
      "Completed my college education at FPT, gaining knowledge in web-related subjects and familiarizing myself with MySQL, PHP, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2019 - Mar 2022",
  },
  {
    title: "Freelance NFT Marketplace Project",
    location: "Hanoi, VN",
    description:
        "Developed a freelance project for an NFT marketplace using React.js for the frontend and Express.js with MongoDB for the backend. Integrated MetaMask for cryptocurrency transactions.",
    icon: React.createElement(SiFreelancer),
    date: "Sep 2021 - Feb 2022",
  },
  {
    title: "Frontend Developer at Icetea Labs",
    location: "Hanoi, VN",
    description:
        "Worked on an NFT marketplace project using React.js. Also contributed to an esports tournament project, helping to develop and manage various aspects of the platform.",
    icon: React.createElement(RiProjectorLine),
    date: "Feb 2022 - Feb 2023",
  },
  {
    title: "Frontend Developer at Townsoftvina",
    location: "Hanoi, VN",
    description:
      "Utilized Vue.js to develop accounting statistics tools for a company based in South Korea, helping to streamline financial reporting and data visualization.",
    icon: React.createElement(RiProjectorLine),
    date: "Feb 2023 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "CarHub",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: carhubImg,
    projectUrl: "#",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "#",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "#",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Shadcn UI",
  "Vuejs",
  "Nuxt",
  "Pinia",
  "Node.js",
  "Git",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Express",
  "Nestjs",
  "Python",
] as const;

// Owner name
export const OWNER_NAME = "Hieu Pham";
