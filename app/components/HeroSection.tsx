import React from "react";
import { Open_Sans } from "next/font/google";
const open_Sans = Open_Sans({ subsets: ["latin"], style: "italic" });
const HeroSection = () => {
  return (
    <section>
      <div className="pt-16">
        <div className={open_Sans.className}>
          <h1 className="text-[2rem] font-[500]">Frontend engineer</h1>
        </div>
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[14px] ">
          <p className="leading-[30px]">
            Hi there , I am 
            <span className=" bg-[#ebecfe] mx-1 font-[600] text-[#7457df] py-[0.1rem] text-[0.9rem] px-[0.5rem] rounded-[0.5rem]">
               Azeez Alhameen 
            </span>
            . I&apos;m a creative frontend developer with a zeal for translating
            ideas into beautiful, functional websites, I&apos;m  dedicated to
            enhancing user experiences through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
