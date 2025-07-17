import * as React from "react";
import { HeroTextProps } from "./types";
import { basic, gabarito } from "./fonts"; // Import the fonts

export const HeroText: React.FC<HeroTextProps> = ({
  title,
  heading,
  subheading,
}) => {
  return (
    <div className="relative flex flex-col max-lg:justify-stretch max-xl:text-center w-[45%] max-xl:w-[75%]">
      {/* Brand name - using gabarito font */}
      <div className={`text-[clamp(2rem,8vw,6rem)] text-pink-700 font-black leading-none ${gabarito.className}`}>
        {title}
      </div>

      {/* Main page description as H1 - using basic font */}
      <h1 className={`text-[min(max(1rem,2vw),36px)] mt-2 tracking-normal leading-[1.2] text-[#a23865] max-md:text-24px ${basic.className}`}>
        {heading}
      </h1>
      
      {/* Supporting text - using basic font */}
      <div className={`body-text tracking-normal mt-8 leading-[1.2] text-[#d87294] max-md:text-24px ${basic.className}`}>
        {subheading}
      </div>
    </div>
  );
};
