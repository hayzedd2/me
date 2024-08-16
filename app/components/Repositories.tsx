import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";
const Respositories = () => {
  const repositoryArray = [
    {
      projectName: "Role-Based auth",
      projectDescription:
        "Advanced authentication system for a Nextjs app.A role-based access control system to ensure secure authorization. It includes sign-up and login functionality, O-auth, 2FA, email verification, password reset.",
      projectSkills: ["Nextjs", "Typescript", "Supabase", "Prisma" , "Next-auth"],
      projectLink: "https://github.com/hayzedd2/RoleBased-Auth/",
    },
    {
      projectName: "My playground",
      projectDescription:
        "I try to create mini-web interactions with my free time. See this repo for some of them(Framer motion), documenting my interaction journey.",
      projectSkills: ["Framer-motion", "Typescript"],
      projectLink: "https://github.com/hayzedd2/My-playground/",
    },
    {
      projectName: "Frontend Go-to template",
      projectDescription:
        "A nextjs Typescript application template for fast-setup of complex web apps. Comes with prisma setup for ORM, Complete setup of clerk auth for authentication , tailwind for styling",
      projectSkills: ["Nextjs", "Typescript" , "Prisma" , "Clerk auth"],
      projectLink: "https://github.com/hayzedd2/Goto-template/",
    },
    
  ];
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[10rem] rounded-[5px] flex items-center justify-center">
          Highlighted Repos <VscTriangleRight className="font-[700] " />
        </h1>
        <p className="py-2 font-[400] underline underline-offset-2">
          Some of my works on github
        </p>
      </div>
      <div className="project-body py-2 flex flex-col gap-5">
      {repositoryArray.map((project, index) => {
          return (
            <div className="project" key={index}>
              <a
                href={project.projectLink}
                target="
            _blank"
                className="text-[1.3rem] decoration-[#3a3a3a] underline underline-offset-2 flex items-center gap-[0.15rem]"
              > 
                {project.projectName}
                <GoArrowUpRight/>
                
              </a>
              <p
                className="xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.05rem] sm:text-[1.02rem]"
              >
                {project.projectDescription}
              </p>
              <div className="tags flex gap-2 flex-wrap">
                {project.projectSkills.map((skills, index) => {
                  return (
                    <div className="badge" key={index}>
                      <p>{skills}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-end">
        <span className="tag">Stay tuned for more stuffs!</span>
      </div>
    </section>
  );
};

export default Respositories;
