import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import LocalFont from "next/font/local";
import { GoArrowUpRight } from "react-icons/go";
const Projects = () => {
  const projectArray = [
    {
      projectName: "PicToPlate",
      projectDescription:
        "A web application that allows a user upload a picture of a dish, leverages AI to identify the type of dish and then generate cooking instruction on how to prepare the dish. Also generates suggested youtube videos on the meal preparation.",
      projectSkills: ["Nextjs", "Typescript", "HuggingFace AI", "Meta Llama"],
      projectLink: "https://pictoplate.vercel.app/",
    },
    {
      projectName: " Habeeb's portfolio",
      projectDescription:
        "Habeeb is a product designer . This is a portfolio i built for him, replicating the exact figma design he gave me. It showcases his casestudies, skills, experience, certfications and all that.",
      projectSkills: ["Reactjs", "Tailwind-css"],
      projectLink: "https://habeeb-azeez.vercel.app/",
    },
    {
      projectName: "WishGenie",
      projectDescription:
        "A web application that allows user rant about their wish, create one and have the ability to manage it Also giving room for philanthropists to explore and reach out to wishers regarding their wish.",
      projectSkills: ["Nextjs", "Typescript", "Supabase", "Prisma"],
      projectLink: "https://wish-genie.vercel.app/",
    },

    {
      projectName: "Restcountries",
      projectDescription:
        " Rest countries is a web application that allows users to get information about any country , see all countries and also search for countries.",
      projectSkills: ["Reactjs", "Chakra-UI", "Restcountries-API"],
      projectLink: "https://restcountries-tau.vercel.app/",
    },
  ];
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[5.5rem] rounded-[5px] flex items-center justify-center">
          Projects <VscTriangleRight className="font-[700] " />
        </h1>
        <p className="py-2 font-[400] underline underline-offset-2">
          My recent Projects
        </p>
      </div>
      <div className="project-body py-2 flex flex-col gap-5">
        {projectArray.map((project, index) => {
          return (
            <div className="project" key={index}>
              <a
                href={project.projectLink}
                target="
            _blank"
                className="text-[1.3rem] decoration-[#3a3a3a] underline underline-offset-2 flex items-center gap-[0.15rem]"
              >
                {project.projectName}
                <GoArrowUpRight />
              </a>
              <p className="xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.05rem] sm:text-[1.02rem]">
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
        <span className="tag">More projects coming soon!</span>
      </div>
    </section>
  );
};

export default Projects;
