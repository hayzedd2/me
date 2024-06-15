import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { GrCss3 } from "react-icons/gr";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandPrisma } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

const Technologies = () => {
  return (
    <section>
      <div className="heading pt-3">
        <p className="py-2 underline underline-offset-2">
          Some of the Technologies i work with
        </p>
      </div>
      <div className="mb-5 mt-3 xl:w-[35vw] sm:w-full skills rounded-[0.9rem] flex">
        <div className="col-1 border-r-[#d9d9d9] border-r basis-[50%]">
          <p className="flex gap-1 items-center text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            Typescript
          </p>
          <p className="flex gap-1 items-center text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            Nextjs
          </p>
          <p className="flex gap-1 items-center text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]">
            Django
          </p>
        </div>
        <div className="col-1 basis-[50%]">
          <p className="flex gap-1 items-center text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
            Javascript
          </p> 
          <p className="flex gap-1 items-center  text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]  border-b-[#d9d9d9] border-b">
          Go <span className="tip">Learning</span>
          </p>
          <p className="flex gap-1 items-center text-black font-[400] xl:px-10 sm:px-6 py-[1.3rem]">
            Prisma
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Technologies;
