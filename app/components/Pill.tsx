import React from "react";
interface PillProps {
  text: string;
  margin? : boolean
}
const Pill = ({ text, margin= true }: PillProps) => {
  return (
    <span style={{
        marginLeft : margin ? "4px" : 0
    
    }} className="whitespace-nowrap border border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[4px]">
      {" "}
      {text}
    </span>
  );
};

export default Pill;
