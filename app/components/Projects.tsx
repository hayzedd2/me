import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";
import { projectArray } from "../contents/content";
import Pill from "./Pill";
const Projects = () => {
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech bx-shadow gap-[0.18rem] w-[5.5rem] rounded-[5px] flex items-center justify-center">
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
                className="text-[1.2rem]  w-max  text-gray-800 underline underline-offset-2 flex items-center"
              >
                {project.projectName}
                <GoArrowUpRight className="h-4 flex mt-[3px]" />
              </a>
              <p className="xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.07rem] sm:text-[1.05rem]">
                {project.projectDescription}
                {project.span && <Pill text={project.span} />}
              </p>
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
