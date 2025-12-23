import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "../contents/content";
const Projects = () => {
  return (
    <section>
      <div className="heading pt-4 mb-3.5">
        <h3 className="text-[#949494] font-[500] w-max decoration-dotted  underline underline-offset-2 ">
          Some of my Works
        </h3>
      </div>

      <div>
        {projects.map((project, i) => {
          return (
            <div key={i} className="mb-3">
              <a
                href={project.projectLink}
                target="
           _blank"
                className="w-max underline underline-offset-2 decoration-1 decoration-[#949494] mb-1  flex items-center"
              >
                {project.projectName}
                <GoArrowUpRight className="h-4  mt-[5px]" />
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
