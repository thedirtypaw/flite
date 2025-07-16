import localFont from 'next/font/local';
import * as React from 'react';

export const basic = localFont({
  src: [
    {
      path: './fonts/Basic.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const degular = localFont({
  src: [
    {
      path: './fonts/Degular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const gabarito = localFont({
  src: [
    {
      path: './fonts/Gabarito.ttf',
      weight: '100 900', // Variable font supports weights from 100 to 900
      style: 'normal',
    },
  ],
  variable: '--font-gabarito',
});

// Global H2 Component for consistent styling
export const GlobalH2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <h2 className={`text-[min(max(2rem,6vw),80px)] tracking-tight leading-[1.2] text-[#a23865] font-bold ${gabarito.className} ${className}`}>
      {children}
    </h2>
  );
};
