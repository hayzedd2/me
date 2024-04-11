import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { GrCss3 } from "react-icons/gr";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandPrisma } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";

const Technologies = () => {
  return (
    <section>
      <div className="heading pt-10">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[7rem] rounded-[5px] flex items-center justify-center">
          Technologies <VscTriangleRight className=" font-[700] " />
        </h1>
        <p className="py-2 font-[500] underline underline-offset-2">
          Some of the Technologies i work with
        </p>
      </div>
      <div className="mb-5 mt-3 xl:w-[35vw] sm:w-full skills rounded-[0.9rem] flex">
        <div className="col-1 border-r-[#d9d9d9] border-r basis-[50%]">
          <p className="flex gap-1 items-center text-black font-[500] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            <TbBrandHtml5 className="text-[1.3rem] " /> Html5
          </p>
          
          <p className="flex gap-1 items-center text-black font-[500]  xl:px-10 sm:px-6 py-[1.3rem] border-b-[#d9d9d9] border-b ">
            <RiJavascriptLine className="text-[1.35rem] " />
            Javascript
          </p>
          <p className="flex gap-1 items-center text-black font-[500] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            <TbBrandNextjs className="text-[1.4rem] " />
            Nextjs
          </p>
          <p className="flex gap-1 items-center  text-black font-[500] xl:px-10 sm:px-6 py-[1.3rem] ">
            <TbBrandDjango className="text-[1.3rem]" />
            Django
          </p>
        </div>
        <div className="col-1 basis-[50%]">
          <p className="flex gap-1 items-center  text-black font-[500] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            <GrCss3 className="text-[1.25rem]" />
            Css3
          </p>
          <p className="flex gap-1 items-center  text-black font-[500]  xl:px-10 sm:px-6 py-[1.3rem] border-b-[#d9d9d9] border-b ">
            <TbBrandTypescript className="text-[1.3rem]" />
            Typescript
          </p>
          
          <p className="flex gap-1 items-center  text-black font-[500] xl:px-10 sm:px-6 py-[1.3rem] border-b-[#d9d9d9] border-b  ">
            <BiLogoTailwindCss className="text-[1.3rem]" />
            Tailwind-Css
          </p>
          <p className="flex gap-1 items-center text-black font-[500]  xl:px-10 sm:px-6 py-[1.3rem] ">
            <TbBrandPrisma className="text-[1.3rem] " />
            Prisma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
