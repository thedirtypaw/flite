import Link from "next/link";
import * as React from "react";
import { FooterProps } from "./types";

interface FooterColumn {
  title: string;
  links: FooterProps[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Knowledge Base", href: "/knowledge" },
      { label: "About Us", href: "/about" },
      { label: "Bio 2.0", href: "/bio" },
      { label: "Contact", href: "/blog" },
    ],
  },
  
  {
    title: "Legal",
    links: [
      { label: "GDPR", href: "/privacy" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-7 gap-10">
        {footerColumns.map((column, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Flite Protein. All rights reserved.
      </div>
    </footer>
  );
};
