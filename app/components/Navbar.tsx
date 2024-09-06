import React from "react";
import { Josefin_Sans } from "next/font/google";
import PulsatingCircle from "./PulsatingCircle";
const josefin = Josefin_Sans({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <div className="z-50 fixed w-full right-0 left-0 top-0  backdrop-blur-sm bg-white/30">
      <nav className="flex items-center justify-between mx-auto max-w-[40rem] xl:px-5 sm:px-5 pt-10">
        <div className={josefin.className}>
          <h1 className="text-[1.7rem] font-[600]">Az</h1>
        </div>

        <a
          className="bx-shadow-light  text-[0.9rem] flex items-center gap-2 hover:translate-y-[-2px] cursor-pointer transition-all p-[0.175rem] rounded-[50px] work"
          href="mailto:azeezalhameen@gmail.com"
        >
          <PulsatingCircle  />
          Available for work
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
