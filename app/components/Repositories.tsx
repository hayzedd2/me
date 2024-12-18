import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";
import { repositoryArray } from "../contents/content";
const Respositories = () => {
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] bx-shadow tech gap-[0.18rem] w-[10rem] rounded-[5px] flex items-center justify-center">
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
                className="text-[1.2rem]  text-gray-800 decoration-[#3a3a3a] underline underline-offset-2 flex items-center gap-[0.15rem]"
              > 
                {project.projectName}
                <GoArrowUpRight className="h-4 flex mt-[3px]" />
                
              </a>
              <p
                className="xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.07rem] sm:text-[1.05rem]"
              >
                {project.projectDescription}
              </p>
              
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
