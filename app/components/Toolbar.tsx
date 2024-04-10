import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Toolbar = () => {
  return (
    <nav className='w-full flex items-center justify-center'>
        <div  className="fixed w-44 h-[3.2rem] bg-white flex text-[1.2rem] gap-[1.35rem]  items-center justify-center toolbar rounded-[9999px] bottom-10">
            <a href=""><FaGithub/></a>
            <a href=""><IoLogoLinkedin className='text-[1.5rem]'/></a>
            <a href=""><FaXTwitter/></a>
        </div>
    </nav>
  )
}

export default Toolbar