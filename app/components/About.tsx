import React from "react";
import Pill from "./Pill";


const About = () => {
  return (
    <section>
      <div >
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[16px] flex flex-col gap-3">
          <p className="leading-7 text-[15px]">
            Hey, I’m <Pill text="Alhameen" />. I’m a{" "}
            <span className="relative line-through   mr-1">
              frontend{" "}
              <span className="absolute top-[-1.5rem] text-purple-600  left-0">
                <Pill text="Software" />
              </span>
            </span>
            engineer interested in building smooth and seamless web experiences.
            While I focus on frontend, I’m also interested in the bigger picture
            of how the web works.
          </p>

          <p className="leading-7 text-[15px]">
            I enjoy building dev tools —there&apos;s something satisfying about
            making everyone&apos;s workflow smoother. Whenever I solve a problem
            that could save another developer time or frustration, I try to
            build my solution into a tool.
          </p>
          <p className="leading-7 text-[15px]">
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
