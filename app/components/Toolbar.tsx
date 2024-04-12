import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Toolbar = () => {
  return (
    <nav className='w-full flex items-end justify-end'>
        <div  className="fixed xl:w-44 sm:w-[9.5rem] h-[3.2rem] bg-white flex text-[1.2rem] xl:gap-[1.35rem] sm:gap-[1.2rem]  items-center justify-center toolbar rounded-[7000px] sm:bottom-6 xl:bottom-10">
            <a href=""><FaGithub/></a>
            <a href=""><IoLogoLinkedin className='text-[1.5rem]'/></a>
            <a href=""><IoMail className='text-[1.4rem] text-black'/></a>
        </div>
    </nav>
  )
}

export default Toolbar