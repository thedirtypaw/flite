import Link from "next/link";
import * as React from "react";
import { HeaderProps } from "./types";

const HeaderItems: HeaderProps[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Knwledge Base", href: "/knowledge" },
  { label: "About Us", href: "/about" },
  { label: "Bio 2.0", href: "/bio" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#f8f8f1] ">
      <div className="flex flex-wrap justify-between items-center py-5 px-10 max-md:px-5 max-md:max-w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            loading="lazy"
            src="/logo.png"
            alt="Flite Protein Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-5 text-lg font-medium tracking-normal text-gray-800 whitespace-nowrap">
          {HeaderItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-3 py-2 rounded-lg transition ${
                item.isActive ? "text-[#e3176e] font-semibold" : "hover:text-[#d67482]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
