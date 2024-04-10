import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className={josefin.className}>
        <h1 className="text-[1.7rem] font-[600]">Az</h1>
      </div>

      <div className="bg-[#1b1c1d] hover:translate-y-[-2px] cursor-pointer transition-all p-1 rounded-[50px] text-[0.75rem] work">
        <a
          href="mailto:azeezalhameen@gmail.com"
          className="flex items-center gap-1"
        >
          Available for work{" "}
          <FaAngleRight className="text-[#99999a] font-[700] " />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
