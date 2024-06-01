import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import LocalFont from "next/font/local";
const myfont = LocalFont({ src: "../fonts/test-epicene-text-medium.woff2" });
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
      <div className="project-body py-2 flex flex-col gap-4">
        <div className="project">
          <h2 className={`${myfont.className} text-[1.4rem]`}>WishGenie</h2>
          <p className={`xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.05rem] sm:text-base `}>
            A web application that allows user rant about their wish , create
            one and have the ability to manage it . Also giving room for
            philanthropists to explore and reach out to wishers regarding their
            wish.
          </p>
          <div className="tags flex gap-2 flex-wrap">
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
          <a
            href="https://wish-genie.vercel.app/"
            target="
            _blank"
            className="text-[0.85rem] w-[8rem] py-2 bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            Visit Website <IoIosArrowRoundForward className="text-[1rem] mt-[0.1rem]" />
          </a>
        </div>
        <div className="project">
          <h2  className={`${myfont.className} text-[1.4rem]`}>Habeeb&apos;s portfolio</h2>
          <p className={`xl:leading-[30px] xl:text-[1.05rem] sm:text-base  sm:leading-[27px] max-w-[45rem] mt-2 `}>
            Habeeb is a product designer . This is a portfolio i built for him,
            replicating the exact figma design he gave me. It showcases his
            case studies, skills, experience, certfications and all that.
          </p>
          <div className="tags flex gap-2 flex-wrap">
            <div className="badge">
              <p>React</p>
            </div>
            <div className="badge">
              <p>Javascript</p>
            </div>
            <div className="badge">
              <p>Tailwind-Css</p>
            </div>
          </div>
          <a
            href="https://habeeb-azeez.vercel.app/"
            target="_blank"
            className="text-[0.85rem] w-[8rem] py-2 bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            Visit Website <IoIosArrowRoundForward className="text-[1rem] mt-[0.1rem]" />
          </a>
        </div>
        <div className="project">
          <h2  className={`${myfont.className} text-[1.4rem]`}>RestCountries</h2>
          <p className={`xl:leading-[30px] sm:leading-[27px] xl:text-[1.05rem] sm:text-base  max-w-[45rem] mt-2 `}>
            Rest countries is a web application that allows users to get
            information about any country , see all countries and also search
            for countries.
          </p>
          <div className="tags flex gap-2 flex-wrap">
            <div className="badge">
              <p>React</p>
            </div>
          
            <div className="badge">
              <p>Chakra UI</p>
            </div>
            <div className="badge border">
              <p>RestCountries API</p>
            </div>
          </div>
          <a
            href="https://restcountries-tau.vercel.app/"
            target="_blank"
            className="text-[0.85rem] w-[8rem] py-2  bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            Visit Website <IoIosArrowRoundForward className="text-[1rem] mt-[0.1rem]" />
          </a>
        </div>
        
        {/*  */}
        
      </div>
      <span className=" bg-[#ebecfe] font-[500] text-[#7457df] py-[0.2rem] text-[0.9rem] px-[1rem] rounded-[0.6rem]">
          More projects coming soon!
        </span>
    </section>
  );
};

export default Projects;
