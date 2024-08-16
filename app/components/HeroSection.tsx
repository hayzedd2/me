"use client";

import React from "react";
import { useState } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };
  // I'm a frontend engineer with extensive experience crafting responsive and intuitive web applications, currently based in [Your City, Country]. With expertise in modern JavaScript frameworks and a keen eye for design implementation, I bring pixel-perfect user interfaces to life. My passion lies in creating performant, accessible, and scalable web solutions that enhance user engagement and drive business growth.
  // I specialize in translating complex design concepts into clean, efficient code, ensuring seamless interactions across devices and browsers. From startups to large enterprises, I've collaborated with diverse teams to deliver cutting-edge frontend solutions that push the boundaries of web technology. My obsession with code quality, performance optimization, and staying ahead of industry trends allows me to build robust, future-proof applications that users love to interact with.

  return (
    <section>
      <div className="pt-16 mt-10">
        <div>
          <h1 className="text-[2rem] font-[00] italic ">Frontend engineer</h1>
        </div>
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[12px] xl:text-[1.02rem] sm:text-base  ">
          <p className="leading-[30px]">
            Hi there , I am
            <span className="tag relative">
              <span className="absolute bottom-[-10px] right-[-10px] text-[1.2rem]">
                <HiOutlineCursorClick />
              </span>
              Azeez Alhameen
            </span>
            . I&apos;m a creative frontend engineer with extensive experience
            crafting responsive and intuitive web applications.
          </p>
          <p className="mt-4 leading-[30px]">
            My passion lies in creating performant, accessible, and scalable web
            solutions that enhance user engagement and drive business growth.
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
              within cross-functional teams. My obsession with code quality,
              performance optimization, and staying ahead of industry trends
              allows me to build robust, future-proof applications that users
              love to interact with.
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
