"use client"
import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full items-center flex justify-between">
      <Image src={"/me.webp"} alt="me" width={90} height={90} />
      <a
      onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="mailto:azeezalhameen1@gmail.com"
        className="px-[14px] text-xs border border-[#dfdfdf] h-[25px] flex  items-center justify-center font-medium rounded-[32px] "
      >
        <span>Available for work</span>
        <GoArrowUpRight      
          className={`${isHovered ? "translate-y-[-2px]" : "translate-y-0"} inline-flex transition-all duration-300 pt-[2px] ml-1 ease-in-out`}
        />
      </a>
    </div>
  );
};
