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
              <span className="absolute top-[-1.5rem] text-purple-600  left-[-5px]">
                <Pill text="Software" />
              </span>
            </span>
            engineer interested in building performant, scalable web applications.
            While most of my time is spent on frontend, I&apos;m just as comfortable 
            architecting and building scalable backend applications.
          </p>

          <p className="leading-7 text-[15px]">
            I enjoy building dev tools —there&apos;s something satisfying about
            making everyone&apos;s workflow smoother. Whenever I solve a problem
            that could save another developer time or frustration, I try to
            build my solution into a tool.
          </p>
          <p className="leading-7 text-[15px]">
             Beyond functionality, I&apos;m also invested in the craft of interaction design.
             I study and recreate compelling interactions I encounter on the web in{" "}
             <a href="https://playground.alhameen.xyz" target="_blank">
               <Pill text="my playground" link />
             </a>
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
