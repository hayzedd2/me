import { FiGithub } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

export const Links = [
  {
    name: " Github",
    icon: <FiGithub />,
    href: "https://github.com/hayzedd2/",
    bg: "#0D1117",
    tilt: "-5deg",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-[1.4rem]" />,
    href: "http://linkedin.com/in/azeez-alhameen-9a604026a",
    bg: "#0075B1",
    tilt: "5deg",
  },
  {
    name: "Mail",
    icon: <IoMail className="text-[1.4rem]" />,
    href: "mailto:azeezalhameen1@gmail.com",
    bg: "bg-sky-400 ml-[-20px]",
    tilt: "-5deg",
  },
];

export const projectArray = [
  {
    projectName: "PicToPlate",
    projectDescription:
      "Allows you to snap or upload a photo of any dish to get instant recipes, cooking instructions, and expert answers about ingredients and techniques.",
    projectLink: "https://pictoplate.alhameen.xyz/",
  },
  {
    projectName: "Snippet",
    projectDescription:
      "A CLI tool for developers to save, retrieve and manage commonly used code snippets. Written in golang.",
    projectLink: "https://github.com/hayzedd2/snippet-cli/",
  },
  {
    projectName: "EventEase",
    projectDescription:
      "A web application for discovering and managing events with Google Calendar integration, allowing users to explore events near them and create their own events.",
    projectLink: "https://eventsease.alhameen.xyz/",
  },
  {
    projectName: "Structo",
    projectDescription:
      "A tool that helps generate realistic mock data by analyzing TypeScript interfaces or Go structs, ensuring type safety in testing environments.",
    projectLink: "https://structo.alhameen.xyz/",
  },
  {
    projectName: " Habeeb's portfolio",
    projectDescription:
      "A portfolio I built for Habeeb, a product designer replicating his exact Figma design. It highlights his case studies, skills, experience, certifications, and more.",
    projectLink: "https://habeeb-azeez.vercel.app/",
  },
  
];

export const repositoryArray = [
  {
    projectName: "Role-Based auth",
    projectDescription:
      "Advanced authentication system for a Nextjs app.A role-based access control system to ensure secure authorization. It includes sign-up and login functionality, O-auth, 2FA, email verification, password reset.",
    projectSkills: ["Nextjs", "Typescript", "Supabase", "Prisma", "Next-auth"],
    projectLink: "https://github.com/hayzedd2/RoleBased-Auth/",
  },
  {
    projectName: "Snippet",
    projectDescription:
      "A CLI tool for developers to save, retrieve and manage commonly used code snippets.",
    projectSkills: ["Nextjs", "Typescript", "Prisma", "Clerk auth"],
    projectLink: "https://github.com/hayzedd2/snippet-cli/",
  },
  {
    projectName: "My playground",
    projectDescription:
      "I try to create mini-web interactions with my free time. See this repo for some of them(Framer motion), documenting my interaction journey.",
    projectSkills: ["Framer-motion", "Typescript"],
    projectLink: "https://github.com/hayzedd2/My-playground/",
  },
];
