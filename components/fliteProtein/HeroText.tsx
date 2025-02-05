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
    <div className={`flex flex-col justify-center max-w-full h-52 w-[467px] ${basic.className}`}>
      <div className="text-7xl tracking-tighter leading-tight text-fuchsia-900 max-md:text-4xl">
        {title}
      </div>
      <div className={'mt-2 tracking-tight leading-7 text-rose-400 font-[number:var(--sds-typography-heading-font-weight)] text-[length:var(--sds-typography-heading-size-base)] ${basic.classname}'}>
        {heading}
      </div>
      <div className={'mt-2 leading-6 text-pink-300 font-[number:var(--sds-typography-subheading-font-weight)] text-[length:var(--sds-typography-subheading-size-medium)] ${basic.classname}'}>
        {subheading}
      </div>
    </div>
  );
};
