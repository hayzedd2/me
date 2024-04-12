import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import project1 from "../image/Galileo design.png";
const Projects = () => {
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[5.5rem] rounded-[5px] flex items-center justify-center">
          Projects <VscTriangleRight className=" font-[700] " />
        </h1>
        <p className="py-2 font-[500] underline underline-offset-2">
          My recent Projects
        </p>
      </div>
      <div className="project-body py-2">
        <h2 className="font-[600] text-[1.4rem]">WishGenie</h2>
        <p className={`leading-[30px] max-w-[36rem] mt-2 `}>
          A web application that allows user rant about their wish , create one
          and have the ability to manage it . Also giving room for
          philanthropists to explore and reach out to wishers regarding their
          wish.
        </p>
        <div className="tags flex gap-2">
          <div className="badge">
            <p>NextJs</p>
          </div>
          <div className="badge">
            <p>Typescript</p>
          </div>
          <div className="badge">
            <p>Supabase</p>
          </div>
          <div className="badge">
            <p>Prisma</p>
          </div>
        </div>
        {/* <Image src={project1} width={300} height={300} alt="projects"/> */}
        <a
          href=""
          className="text-[0.85rem] w-[8rem] py-2 bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
        >
          Visit Website <IoIosArrowRoundForward className="text-[1rem]" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
