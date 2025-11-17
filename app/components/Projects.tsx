import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "../contents/content";
import { HeaderText } from "./header-text";

const Projects = () => {
  return (
    <section>
      <div className="heading pt-8 mb-3.5">
        <HeaderText text="Some of my Works" />
      </div>
      <div>
        {projects.map((project, i) => {
          return (
            <div key={i} className="mb-3">
              <a
                href={project.projectLink}
                target="
           _blank"
                className="w-max  text-[1.1rem] mb-1 underline underline-offset-2  flex items-center"
              >
                {project.projectName}
                <GoArrowUpRight className="h-4 flex mt-[3px]" />
              </a>
              <p className="text-[15px]">{project.projectDescription}</p>
              <ul className="ml-[1rem] md:ml-[2rem] mt-1">
                {project.listItems.map((item, i) => {
                  return (
                    <li key={i} className="flex gap-2 text-[15px] ">
                      <span className="w-[7px] h-[6px] mt-[6px] bg-[#c5c4c4] shrink-0"></span>{" "}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
