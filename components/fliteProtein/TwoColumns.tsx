import * as React from "react";
import { TwoColumnProps } from "./types";
import { basic } from './fonts';


export const TwoColumns: React.FC<TwoColumnProps> = ({
  title,
  paragraph,
}) => {
  return (
    <div className={`flex flex-col justify-center p-4 max-lg:justify-stretch max-xl:text-center h-auto max-xl:w-[75%] ${basic.className}`}>
      <div className= "text-[min(max(2rem,6vw),80px)] tracking-tight leading-[1.2] text-[#a23865] ">
        {title}
      </div>
      
      <div className= "columns-2 gap-12 py-[2%] text-[min(max(1rem,2vw),24px)] tracking-normal leading-[1.2] text-pink-300 max-md:text-24px">
        {paragraph}
      </div>
    </div>
  );
};
