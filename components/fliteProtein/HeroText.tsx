import * as React from "react";
import { HeroTextProps } from "./types";
import { degular } from "./fonts";
// import HeroTextAnimation from "./HeroTextAnimation"; // ✅ Fix Import (Default Export Now Exists)

export const HeroText: React.FC<HeroTextProps> = ({
  title,
  heading,
  subheading,
}) => {
  return (
    <div className={`relative flex flex-col justify-center max-lg:justify-stretch max-xl:text-center h-auto w-[45%] max-xl:w-[75%] ${degular.className}`}>
      {/* Brand name as div - animatable, not H1 for SEO */}
      <div className="text-[clamp(2rem,8vw,6rem)] text-pink-700 font-extra-bold leading-none">
        {title}
      </div>

      {/* Main page description as H1 - SEO priority */}
      <h1 className="text-[min(max(1rem,2vw),36px)] tracking-normal leading-[1.2] text-[#d87294] max-md:text-24px">
        {heading}
      </h1>
      
      {/* Supporting text remains as div */}
      <div className="text-[min(max(1rem,2vw),24px)] tracking-normal leading-[1.2] text-pink-300 max-md:text-24px">
        {subheading}
      </div>
    </div>
  );
};
