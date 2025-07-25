import * as React from "react";
import { TwoColumnProps } from "./types";
import { basic } from './fonts';
import { GlobalH2 } from './fonts';

export const TwoColumns: React.FC<TwoColumnProps> = ({
  title,
  column1Text,
  column1Button,
  column1Image,
  column1ImageAlt,
  column2Text,
  column2Button,
  column2Image,
  column2ImageAlt,
}) => {
  return (
    <div className={`flex flex-col justify-center mt-12 max-lg:justify-stretch max-xl:text-center h-auto max-xl:w-[75%] ${basic.className}`}>
      <GlobalH2>
        {title}
      </GlobalH2>

      {/* Two columns on large screens, single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-[2%]">
        {/* Column 1 */}
        <div className="flex flex-col">
          {column1Image && (
            <img
              src={column1Image}
              alt={column1ImageAlt || ""}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="tracking-normal leading-[1.2] max-md:text-24px mb-6">
            {typeof column1Text === 'string' ? <p>{column1Text}</p> : column1Text}
          </div>
          {column1Button}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          {column2Image && (
            <img
              src={column2Image}
              alt={column2ImageAlt || ""}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="tracking-normal leading-[1.2] max-md:text-24px mb-6">
            {typeof column2Text === 'string' ? <p>{column2Text}</p> : column2Text}
          </div>
          {column2Button}
        </div>
      </div>
    </div>
  );
};


