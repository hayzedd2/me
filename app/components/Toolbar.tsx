import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiLinkedinLogo } from 'react-icons/pi';
import { VscGithub, VscGithubAlt } from 'react-icons/vsc';

const Toolbar = () => {
  return (
    <nav className='w-full flex items-end justify-end'>
        <div  className="fixed xl:w-42 sm:w-[9.5rem] h-[3.2rem] bg-white flex text-[1.2rem] xl:gap-[1.2rem] sm:gap-[1.2rem]  items-center justify-center  bx-shadow-light rounded-[7000px] sm:bottom-6 xl:bottom-10">
            <a href="https://github.com/hayzedd2/"><VscGithubAlt/></a>
            <a href="http://linkedin.com/in/azeez-alhameen-9a604026a"><PiLinkedinLogo className='text-[1.3rem]'/></a>
            <a href="mailto:azeezalhameen1@gmail.com"><CiMail className='text-[1.4rem] text-black'/></a>
        </div>
        
    </nav>
  )
}

export default Toolbar