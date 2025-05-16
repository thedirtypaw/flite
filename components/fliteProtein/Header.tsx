'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from "react";
import { HeaderProps } from "./types";

const HeaderItems: HeaderProps[] = [
  { label: "Home", href: "/homepage" },
  { label: "Knowledge Base", href: "/knowledge" },
  { label: "About Us", href: "/about" },
  { label: "Bio 2.0", href: "/bio" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <header className="w-full bg-[#f8f8f1]">
      <div className="flex flex-wrap justify-between items-center py-5 px-10 max-md:px-5 max-md:max-w-full">
        <div className="flex items-center">
          <img
            loading="lazy"
            src="/logo.png"
            alt="Flite Protein Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex gap-5 text-lg font-medium tracking-normal whitespace-nowrap">
          {HeaderItems.map((item, index) => {
            const isActive =
              (item.href === '/homepage' && (pathname === '/' || pathname === '/homepage')) ||
              pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition ${isActive
                    ? 'text-[#e3176e] font-semibold'
                    : 'text-gray-800 hover:text-[#f771aa]'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
