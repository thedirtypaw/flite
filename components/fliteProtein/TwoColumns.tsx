import * as React from "react";
import { TwoColumnProps } from "./types";
import { basic } from './fonts';
import { GlobalH2 } from './fonts';

export const TwoColumns: React.FC<TwoColumnProps> = ({
  title,
  paragraph,
}) => {
  return (
    <div className={`flex flex-col justify-center mt-12 max-lg:justify-stretch max-xl:text-center h-auto max-xl:w-[75%] ${basic.className}`}>
      <GlobalH2>
        {title}
      </GlobalH2>
      
      <div className= "columns-2 gap-12 py-[2%] tracking-normal leading-[1.2]  max-md:text-24px">
        {paragraph}
      </div>
    </div>
  );
};
