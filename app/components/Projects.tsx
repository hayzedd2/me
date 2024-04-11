import React from 'react'
import { VscTriangleRight } from "react-icons/vsc";

const Projects = () => {
  return (
    <section>
        <div className="heading py-5">
        <h1 className="text-[0.85rem] py-1 bg-[#1b1c1d] tech gap-[0.18rem] w-[5.5rem] rounded-[5px] flex items-center justify-center">
          Projects <VscTriangleRight className=" font-[700] " />
        </h1>
        <p className="py-2 font-[500] underline underline-offset-2">
         My recent Projects
        </p>
      </div>
    </section>
  )
}

export default Projects