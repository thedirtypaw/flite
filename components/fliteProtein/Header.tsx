'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from "react";
import { HeaderProps } from "./types";

const HeaderItems: HeaderProps[] = [
  { label: "Home", href: "/homepage" },
  { label: "Knowledge Base", href: "/knowledge" },
  { label: "Products", href: "/products" },
  { label: "Bio 2.0", href: "/bio" },
  { label: "About Us", href: "/about" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-[#f8f8f1] sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="flex flex-wrap justify-between items-center py-5 px-[5%] max-md:px-5 max-md:max-w-full">
        <div className="flex items-center">
          <img
            loading="lazy"
            src={isScrolled ? "/logo-small.png" : "/logo.png"}
            alt="Flite Protein Logo"
            className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-8' : 'h-10'
            }`}
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
