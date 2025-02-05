import * as React from "react";
import { NavItem } from "./NavItem";
import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";

const navItems = [
  { label: "Landing", width: "54px", isActive: true },
  { label: "Account", width: "57px" },
  { label: "Work", width: "35px" },
  { label: "Blog", width: "30px" },
  { label: "Docs", width: "35px" },
];

export const FliteProtein: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex flex-wrap gap-10 justify-between items-center py-5 pr-10 pl-5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-center items-start self-stretch py-2.5 my-auto min-h-[61px] w-[130px]">
          <div className="flex justify-between items-start py-0.5 pr-3 pl-3 min-h-[44px] w-[130px]">
            <div className="flex gap-3 items-center h-10 w-[107px]">
              <img
                loading="lazy"
                src="/logo.png"
                alt="Flite Protein Logo"
                className="object-contain self-stretch my-auto aspect-[2.61] w-[107px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center self-stretch my-auto text-sm font-medium tracking-normal leading-none text-gray-800 whitespace-nowrap min-h-[36px] min-w-[240px] w-[303px]">
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center py-28 pr-16 pl-24 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center self-stretch pt-8 pb-40 my-auto bg-white min-h-[398px] min-w-[240px] w-[486px] max-md:pb-24 max-md:max-w-full">
          <HeroText
            title="Flite Protein"
            heading="Creating the best vegan protein powder in a biodiverse setting"
            subheading="Cras porta, ante vel ullamcorper mollis, est libero eleifend orci, et posuere nisl arcu sodales mi."
          />
        </div>
        <HeroImage
          mainImage="/grafica_pisica.png"
          overlayImage="/grafica_pisica.png"
          mainImageAlt="Protein powder background"
          overlayImageAlt="Protein powder product"
        />
      </div>
    </div>
  );
};
