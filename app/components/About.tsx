import React from "react";
import { Tangerine } from "next/font/google";
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
            Hi there, I am Alhameen. I&apos;m a creative frontend engineer with
            extensive experience crafting responsive and intuitive web
            applications.
          </p>
          <p className="mt-4 leading-[30px]">
            On the side, i am also interested in micro interactions. I try to
            craft/recreate wonderful interactions i see on the web
            <a
              href="https://playground.alhameen.xyz"
              target="_blank"
              className="underline underline-offset-2"
            >
              (see my playground)
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
