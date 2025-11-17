import { Instrument_Serif } from "next/font/google";
const instrument = Instrument_Serif({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  style: "italic",
});
export const HeaderText = ({text}:{text:string})=>{
  return(
    <h1 className={`text-[1.7rem]  ${instrument.className}`}>
      {text}
    </h1>
  )
}