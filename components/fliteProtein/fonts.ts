import localFont from 'next/font/local';
import * as React from 'react';

export const basic = localFont({
  src: [
    {
      path: './fonts/Basic.woff2', // note: this path starts with '/' which refers to the public folder at the project root
      weight: '400',
      style: 'normal',
    },
    // If you have additional weights or formats, add them here.
  ],
  // Optionally, you can set a variable if you want to use it in your CSS:
  // variable: '--font-basic',
});

export const degular = localFont({
  src: [
    {
      path: './fonts/Degular.woff2', // note: this path starts with '/' which refers to the public folder at the project root
      weight: '700',
      style: 'normal',
    },
    // If you have additional weights or formats, add them here.
  ],
  // Optionally, you can set a variable if you want to use it in your CSS:
  // variable: '--font-basic',
});

// Global H2 Component for consistent styling
export const GlobalH2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <h2 className={`text-[min(max(2rem,6vw),80px)] tracking-tight leading-[1.2] text-[#a23865] ${basic.className} ${className}`}>
  {children}
  </h2>
  );
};