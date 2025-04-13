import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ label, isActive, width }) => {
  return (
    <div
      className={`flex items-center self-stretch my-auto rounded-lg w-[${width}]`}
    >
      <div className="flex gap-2 items-center self-stretch py-2 my-auto">
        <div
          className={`gap-2 self-stretch my-auto ${
            isActive ? "text-blue-600" : ""
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
