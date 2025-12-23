"use client"
import Image from "next/image";
import Pill from "./Pill";

export const Header = () => {
  return (
    <div className="w-full items-center flex justify-between">
      <Image src={"/me.webp"} alt="me" width={80} height={80} className="ml-[-1rem]" />
      <a href="mailto:azeezalhameen1@gmail.com"><Pill text="Available for work" link/></a>
    </div>
  );
};
