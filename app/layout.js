import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "../components/fliteProtein/Header";
import { Footer } from "../components/fliteProtein/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next generation protein",
  description: "Best Protein Ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        <div
          key={typeof window !== 'undefined' ? window.location.pathname : ''}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
