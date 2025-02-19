import * as React from "react";
import { HeroTextProps } from "./types";
import { basic } from './fonts';
import { Geist, Geist_Mono } from "next/font/google";



export const HeroText: React.FC<HeroTextProps> = ({
  title,
  heading,
  subheading,
  
}) => {
  return (
    <div className={`flex flex-col justify-center pl-12 pr-24 max-lg:justify-stretch max-xl:text-center h-auto w-[45%] max-xl:w-[75%] ${basic.className}`}>
      <div className= "text-[min(max(2rem,6vw),120px)] tracking-tight leading-[1.2] text-[#a23865] ">
        {title}
      </div>
      <div className= "text-[min(max(1rem,2vw),36px)] tracking-normal leading-[1.2] text-[#d87294] max-md:text-24px">
        {heading}
      </div>
      <div className= "text-[min(max(1rem,2vw),24px)] tracking-normal leading-[1.2] text-pink-300 max-md:text-24px">
        {subheading}
      </div>
      
    </div>
  );
};
