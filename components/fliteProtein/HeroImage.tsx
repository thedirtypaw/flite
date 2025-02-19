import * as React from "react";
import { HeroImageProps } from "./types";

export const HeroImage: React.FC<HeroImageProps> = ({
  mainImage,
  mainImageAlt,
  
}) => {
  return (
    <div className="flex flex-col relative px-12 items-center sm:mt-[60px] lg:mt-[40px] w-[45%] h-auto">
      <img
        loading="lazy"
        src={mainImage}
        alt={mainImageAlt}
        className="object-cover relative inset-0 w-full h-full"
      />
      
    </div>
  );
};
