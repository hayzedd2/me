import React from "react";
import Pill from "./Pill";
const Technologies = () => {
  const technologies = [
    "Typescript",
    "Django",
    "Nextjs",
    "Golang",
    "Prisma",
    "Javascript",
  ];
  const middleIndex = Math.ceil(technologies.length / 2);
  const leftColumn = technologies.slice(0, middleIndex);
  const rightColumn = technologies.slice(middleIndex);
  return (
    <section>
      <div className="heading pt-3">
        <p className="py-2 underline underline-offset-2 ">
          Some of the Technologies i work with
        </p>
      </div>
      {/* <div className="flex flex-wrap gap-y-1">
        {technologies.map((t, i) => (
          <Pill text={t} key={i} />
        ))}
      </div> */}
      <div className="mb-5 mt-3 xl:w-[35vw] sm:w-full skills rounded-[0.9rem] flex">
        <div className="border-r-[#d9d9d9] border-r basis-[50%]">
          {leftColumn.map((l, i) => {
            return (
              <p key={i} className={`skillprop ${i+1 != leftColumn.length ? "border-b-[#d9d9d9] border-b" : ""} `}>
                {l}
              </p>
            );
          })}
        </div>
        <div className=" basis-[50%]">
          {rightColumn.map((l, i) => {
            return (
              <p key={i} className={`skillprop ${i+1 != rightColumn.length ? "border-b-[#d9d9d9] border-b" : ""} `}>
                {l}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
