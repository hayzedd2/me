import React from "react";
import { Tangerine } from "next/font/google";
import Pill from "./Pill";
const tangerine = Tangerine({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});
const About = () => {
  return (
    <section>
      <div className="pt-10 mt-10">
        <div>
          <h1 className={`text-[2.6rem] ${tangerine.className}`}>
            Frontend engineer
          </h1>
          <h6 className="text-[1.1rem]  opacity-70 mt-[-6px]">
            Azeez Alhameen
          </h6>
        </div>
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[16px] xl:leading-[30px] sm:leading-[27px] xl:text-[1.02rem] sm:text-[1.05rem]  ">
          <p className="leading-[30px]">
            Hi there, I’m <Pill text="Alhameen" />. I’m a{" "}
            <span className="relative line-through mr-1">
              frontend <span className="absolute top-[-1.5rem] text-purple-600 rotate-[-4deg] left-0">web</span>
            </span>
            engineer interested in building smooth and seamless web experiences.
            While I focus on frontend, I’m also interested in the bigger picture
            of how the web works.
          </p>

          <p className="mt-2 leading-[30px]">
            I enjoy building dev tools —there&apos;s something satisfying about
            making everyone&apos;s workflow smoother. Whenever I solve a problem
            that could save another developer time or frustration, I try to
            build my solution into a tool.
          </p>
          <p className="mt-4 leading-[30px]">
            On the side, i am also interested in{" "}
            <Pill text="micro interactions" />. I try to craft/recreate
            wonderful interactions i see on the web
            <a href="https://playground.alhameen.xyz" target="_blank">
              <Pill text="see my playground" link />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
