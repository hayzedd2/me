"use client"
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
interface PillProps {
  text: string;
  margin?: boolean;
  link?: boolean;
}
const Pill = ({ text, margin = true, link = false }: PillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        marginLeft: margin ? "4px" : 0,
      }}
      className={`whitespace-nowrap h-max border w-max border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[5px]`}
    >
      {text}
      {link && (
        <GoArrowUpRight
          
          className={`${isHovered ? "translate-y-[-2px]" : "translate-y-0"} inline-flex transition-all duration-300 ml-1 ease-in-out`}
        />
      )}
    </span>
  );
};

export default Pill;
