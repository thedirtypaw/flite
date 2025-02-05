import * as React from "react";
import { HeroImageProps } from "./types";

export const HeroImage: React.FC<HeroImageProps> = ({
  mainImage,
  overlayImage,
  mainImageAlt,
  overlayImageAlt,
}) => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center self-stretch my-auto h-[398px] min-h-[398px] min-w-[240px] w-[552px] max-md:max-w-full">
      <img
        loading="lazy"
        src={mainImage}
        alt={mainImageAlt}
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src={overlayImage}
        alt={overlayImageAlt}
        className="object-contain max-w-full aspect-[1.1] w-[440px]"
      />
    </div>
  );
};
