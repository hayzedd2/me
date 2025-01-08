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
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[16px] xl:leading-[30px] sm:leading-[27px] xl:text-[1.07rem] sm:text-[1.05rem]  ">
          <p className="leading-[30px]">
            Hi there, I am <Pill text="Alhameen"/>. I&apos;m a  <Pill text="frontend engineer"/> with
            extensive experience crafting responsive and intuitive web
            applications.
          </p>
          <p className="mt-4 leading-[30px]">
            On the side, i am also interested in <Pill text="micro interactions"/>. I try to
            craft/recreate wonderful interactions i see on the web
            <a
              href="https://playground.alhameen.xyz"
              target="_blank"
            >
              <Pill text="see my playground"/>
            </a>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
