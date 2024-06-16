import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });
//  xl:min-w-[40rem] backdrop-blur-md bg-white/30  sm:min-w-full xl:pr-0 sm:pr-10 fixed top-0 pt-10  flex items-center justify-between z-50
const Navbar = () => {
  return ( 
    <div className="z-50 fixed w-full right-0 left-0 top-0  backdrop-blur-sm bg-white/30">
      <nav className="flex items-center justify-between mx-auto max-w-[40rem] xl:px-5 sm:px-5 pt-10">
      <div className={josefin.className}>
        <h1 className="text-[1.7rem] font-[600]">Az</h1>
      </div>

      <a className="bg-[#1b1c1d] shiny-button flex items-center gap-1 hover:translate-y-[-2px] cursor-pointer transition-all p-1 rounded-[50px] text-[0.75rem] work" href="mailto:azeezalhameen@gmail.com">
        {/* <a */}
          Available for work
          <FaAngleRight className="text-[#99999a] font-[700] " />
        {/* </a> */}
      </a>
      </nav>
    </div>
  );
};

export default Navbar;
