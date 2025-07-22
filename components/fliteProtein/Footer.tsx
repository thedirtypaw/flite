import Link from "next/link";
import * as React from "react";
import { FooterProps } from "./types";

interface FooterColumn {
  title: string;
  links: FooterProps[];
}

const companyLinksColumn1: FooterProps[] = [
  { label: "Home", href: "/" },
  { label: "Knowledge Base", href: "/knowledge" },
  { label: "Products", href: "/products" }
];

const companyLinksColumn2: FooterProps[] = [
  { label: "Bio 2.0", href: "/bio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const legalLinks: FooterProps[] = [
  { label: "GDPR", href: "/privacy" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            {/* Company Column 1 */}
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                {companyLinksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column 2 */}
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2 text-transparent">Company</h3>
              <ul className="space-y-1">
                {companyLinksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Copyright - Centered below on mobile */}
          <div className="mt-6 text-center">
            <div className="text-gray-500 text-xs">
              &copy; 2025 Flite Protein. All rights reserved.
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          {/* Company Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {companyLinksColumn1.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-transparent">Company</h3>
            <ul className="space-y-2">
              {companyLinksColumn2.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright - Right Aligned on desktop */}
          <div className="flex items-start justify-evenly">
            <div className="text-gray-500 text-sm text-left">
              &copy; 2025 Flite Protein. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
