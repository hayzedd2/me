import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import LocalFont from "next/font/local";
const myfont = LocalFont({ src: "../fonts/test-epicene-text-medium.woff2" });
const Respositories = () => {
  return (
    <section>
      <div className="heading pt-8">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[10rem] rounded-[5px] flex items-center justify-center">
          Highlighted Repos <VscTriangleRight className=" font-[700] " />
        </h1>
        <p className="py-2 font-[500] underline underline-offset-2">
          Fun/Work stuffs i spend time on
        </p>
      </div>
      <div className="project-body py-2">
        <div className="project">
          <h2 className={`${myfont.className} text-[1.4rem]`}>
            Role-Based auth
          </h2>
          <p
            className={`xl:leading-[30px] sm:leading-[27px] max-w-[45rem] mt-2 xl:text-[1.05rem] sm:text-base `}
          >
            Advanced authentication system for a Nextjs app. This repository
            utilizes a role-based access control (RBAC) system to ensure secure
            collaboration. Some fun stuffs there include 2FA, email
            verification, password reset. Check it out and maybe give it a
            star😎.
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
            <div className="badge">
              <p>Next-auth</p>
            </div>
          </div>
          <a
            href="https://github.com/hayzedd2/RoleBased-Auth"
            target="
            _blank"
            className="text-[0.85rem] w-[8rem] py-2 bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            View Repo <IoIosArrowRoundForward className="text-[1rem]" />
          </a>
        </div>
        <div className="project py-5 ">
          <h2 className={`${myfont.className} text-[1.4rem]`}>
            Frontend Go-to template
          </h2>
          <p
            className={`xl:leading-[30px] sm:leading-[27px] xl:text-[1.05rem] sm:text-base  max-w-[45rem] mt-2 `}
          >
            A nextjs Typescript application template for fast-setup of complex
            web apps. Comes with prisma setup for ORM, clerk-auth for
            authentication, tailwind for styling. Give it a star😎
          </p>
          <div className="tags flex gap-2 flex-wrap">
            <div className="badge">
              <p>Nextjs</p>
            </div>

            <div className="badge">
              <p>Typescript</p>
            </div>
            <div className="badge border">
              <p>Prisma</p>
            </div>
            <div className="badge border">
              <p>Clerk-auth</p>
            </div>
          </div>
          <a
            href="https://github.com/hayzedd2/Goto-template/"
            target="_blank"
            className="text-[0.85rem] w-[8rem] py-2  bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            View repo <IoIosArrowRoundForward className="text-[1rem]" />
          </a>
        </div>
        <div className="project mb-6">
          <h2 className={`${myfont.className} text-[1.4rem]`}>
            My playground{" "}
            <span className=" bg-[#ebecfe] font-[500] text-[#7457df] py-[0.2rem] text-[0.7rem] px-[0.5rem] rounded-[0.2rem]">
              Experimental
            </span>
          </h2>
          <p
            className={`xl:leading-[30px] xl:text-[1.05rem] sm:text-base  sm:leading-[27px] max-w-[45rem] mt-2 `}
          >
           Check here for fun stuffs. Just a repo to document my interaction journey
          </p>
          <div className="tags flex gap-2 flex-wrap">
            <div className="badge">
              <p>Framer-motion</p>
            </div>
            <div className="badge">
              <p>Typescript</p>
            </div>
           
          </div>
          <a
            href="https://github.com/hayzedd2/My-playground"
            target="_blank"
            className="text-[0.85rem] w-[8rem] py-2 bg-[#1b1c1d] tech gap-[0.18rem] my-3 rounded-[5px] flex items-center justify-center"
          >
            Vew Repo<IoIosArrowRoundForward className="text-[1rem]" />
          </a>
        </div>

        <span className=" bg-[#ebecfe] font-[500] text-[#7457df] py-[0.2rem] text-[0.9rem] px-[1rem] rounded-[0.6rem]">
          More fun/work stuffs soon!
        </span>
      </div>
    </section>
  );
};

export default Respositories;
