import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiLinkedinLogo } from 'react-icons/pi';
import { VscGithub, VscGithubAlt } from 'react-icons/vsc';

const Toolbar = () => {
  return (
    <nav className='w-full flex items-end justify-end'>
      <div className="fixed w-auto bg-white flex text-[0.85rem] px-3 py-1 gap-[1.1rem]  items-center justify-center  bx-shadow-light rounded-[7000px] sm:bottom-6 xl:bottom-10">
        <a href="https://github.com/hayzedd2/">Github</a>
        <a href="http://linkedin.com/in/azeez-alhameen-9a604026a">Linkedin</a>
        <a href="mailto:azeezalhameen1@gmail.com">Mail</a>
      </div>

    </nav>
  )
}

export default Toolbar