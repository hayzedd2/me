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
      "An AI chef Assistant that helps to identify dishes from images, generate step-by-step cooking instructions, and answer follow-up questions about the dish.",
    projectLink: "https://pictoplate.vercel.app/",
  },
  {
    projectName: "EventEase",
    projectDescription:
      "A web application that enables users to discover events, add them to their Google Calendar, and create, update, and manage their own events",
    projectLink: "https://eventsease.vercel.app/",
  },
  {
    projectName: " Habeeb's portfolio",
    projectDescription:
      "Habeeb is a product designer . This is a portfolio i built for him, replicating the exact figma design he gave me. It showcases his casestudies, skills, experience, certfications and all that.",
    projectLink: "https://habeeb-azeez.vercel.app/",
  },
  {
    projectName: "WishGenie",
    projectDescription:
      "A web application that allows users rant about their wish, create and manage it. Also giving room for philanthropists to explore and reach out to wishers regarding their wish.",
    projectLink: "https://wish-genie.vercel.app/",
  },
];

export const repositoryArray = [
    {
      projectName: "Role-Based auth",
      projectDescription:
        "Advanced authentication system for a Nextjs app.A role-based access control system to ensure secure authorization. It includes sign-up and login functionality, O-auth, 2FA, email verification, password reset.",
      projectSkills: ["Nextjs", "Typescript", "Supabase", "Prisma" , "Next-auth"],
      projectLink: "https://github.com/hayzedd2/RoleBased-Auth/",
    },
    {
        projectName: "Snippet",
        projectDescription:
          "A CLI tool for developers to save, retrieve and manage commonly used code snippets.",
        projectSkills: ["Nextjs", "Typescript" , "Prisma" , "Clerk auth"],
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