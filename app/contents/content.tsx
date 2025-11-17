import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Pill from "../components/Pill";

export const Links = [
  {
    name: " Github",
    icon: <FiGithub />,
    href: "https://github.com/hayzedd2/",
    bg: "#0D1117",
    tilt: "-10deg",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-[1.4rem]" />,
    href: "http://linkedin.com/in/azeez-alhameen-9a604026a",
    bg: "#0075B1",
    tilt: "5deg",
  },
];

export const projects = [
  {
    projectName: "Gather",
    projectDescription: (
      <span>
        A <Pill text="visual form builder" /> for creating dynamic forms with
        ease:
      </span>
    ),
    listItems: [
      "Supports various field types and response collection",
      "Secure submissions with powerful integrations (coming soon)",
      "Advanced analytics for insights",
      "Export responses to diverse data format",
    ],
    projectLink: "https://trygather.vercel.app/",
  },
  {
    projectName: "Snippet",
    projectDescription: (
      <span>
        A <Pill text="CLI tool" /> for developers to save, retrieve and manage
        commonly used code snippets:
      </span>
    ),
    listItems: [
      "Quick snippet storage and retrieval from the command line",
      "Organized code management with tags and categories",
      <span key={"third"}>Written in <Pill text="golang"/></span>,
    ],
    projectLink: "https://github.com/hayzedd2/snippet-cli/",
  },
  {
    projectName: "Structo",
    projectDescription: (
      <span>
        A <Pill text="opensource" /> tool that helps generate realistic mock data:
      </span>
    ),
    listItems: [
      "Analyzes TypeScript interfaces or Go structs",
      "Ensures type safety in testing environments",
      "Generates realistic test data automatically",
        <span key={"third"}>Parser and generator written in <a href="https://github.com/hayzedd2/structo/"><Pill text="go" link/></a></span>,
    ],
    projectLink: "https://structo.alhameen.xyz/",
  },
];

export const repositoryArray = [
  {
    projectName: "Role-Based auth",
    projectDescription: (
      <span>
        An <Pill text="advanced auth" /> system for a Next.js app with
        role-based access control for secure authorization. Features include
        sign-up, login, OAuth, two-factor authentication (2FA), email
        verification, and password reset functionality.
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/RoleBased-Auth/",
  },
  {
    projectName: "Structo",
    projectDescription: (
      <span>
        Behind the scenes of{" "}
        <a href="https://structo.alhameen.xyz/" target="_blank">
          <Pill text="Structo" link />
        </a>
        - an application written in <Pill text="golang" /> to help parse
        interfaces or structs and generate type-safe mock data.
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/structo/",
  },
  {
    projectName: "Trace",
    projectDescription: (
      <span>
        A <Pill text="lightweight" /> event tracking library for capturing user
        interactions effortlessly. Trace supports unique event tracking and
        seamless data synchronization.
        <a
          href="https://www.npmjs.com/package/trace-everything"
          target="_blank"
        >
          <Pill text="See it on npm" link />
        </a>
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/trace",
  },
 
  {
    projectName: "My-playground",
    projectDescription: (
      <span>
        I try to create <Pill text="mini-web interactions" /> during my free
        time. See this repo for some of them (framer motion), documenting my
        interaction journey.
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/My-playground/",
  },
];
