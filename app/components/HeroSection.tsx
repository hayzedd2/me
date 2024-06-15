"use client";

import React from "react";
import { useState } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };
  return (
    <section>
      <div className="pt-16 mt-10">
        <div>
          <h1 className="text-[2rem] font-[00] italic ">
            Frontend engineer
          </h1>
        </div>
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[12px] xl:text-[1.02rem] sm:text-base  ">
          <p className="leading-[30px]">
            Hi there , I am
            <span className="tag relative">
               <span className="absolute bottom-[-10px] right-[-10px] text-[1.2rem]"><HiOutlineCursorClick/></span>
              Azeez Alhameen
            </span>
            . I&apos;m a creative frontend developer with a zeal for translating
            ideas into beautiful, functional web-applications.
          </p>
          <p className="mt-4 leading-[30px]">
            Pushed by my curiosity, I&apos;ve always loved building things. I
            enjoy crafting user-centered interface through code.{" "}
            {!open ? (
              <span
                onClick={onOpen}
                className=" cursor-pointer ml-[0.15rem] text-[0.85rem] underline underline-offset-2"
              >
                Read more?
              </span>
            ) : null}
          </p>
          {open ? (
            <p className="mt-4 leading-[30px]">
              What sets me apart as a frontend developer is my commitment to
              user-centered design and my ability to collaborate effectively
              within cross-functional teams. When you bring me onto your
              project, you gain a collaborator who is not only a skilled coder
              but also a creative problem-solver. My goal is to turn your vision
              into reality and help your project reach new heights.{" "}
              <span
                onClick={onOpen}
                className=" cursor-pointer ml-[0.15rem] text-[0.85rem] underline underline-offset-2"
              >
                Read less
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
