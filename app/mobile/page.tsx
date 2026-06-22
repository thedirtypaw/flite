'use client';

import { useEffect, useState } from "react";
import { basic, gabarito } from "../../components/fliteProtein/fonts";
import FlowField from "../../components/fliteProtein/FlowField";

export default function MobilePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#ffffe1]">
      {/* Mobile Header - Logo with scroll animation */}
      <header className={`w-full bg-[#ffffe1] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className={`px-6 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-5'}`}>
          <img
            loading="lazy"
            src={isScrolled ? "/logo-small.png" : "/logo_dark.svg"}
            alt="Flite Protein Logo"
            className={`transition-all duration-300 origin-left ${isScrolled ? 'h-8 scale-100' : 'h-12 scale-100'}`}
          />
        </div>
      </header>

      {/* Section 1 */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <FlowField className="absolute inset-0 pointer-events-none mix-blend-multiply" />
        <div className={`text-5xl text-pink-700 font-black relative z-10 px-6 py-12 ${gabarito.className}`}>
          Your Title 1
        </div>
        <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
          Your Heading 1
        </h2>
        <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Your subheading text here for section 1
        </p>
        <div className="mt-6">
          <img
            src="/your-image-1.jpg"
            alt="Section 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-6 py-12">
        <div className={`text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Your Title 2
        </div>
        <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
          Your Heading 2
        </h2>
        <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Your subheading text here for section 2
        </p>
        <div className="mt-6">
          <img
            src="/your-image-2.jpg"
            alt="Section 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="px-6 py-12">
        <div className={`text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Your Title 3
        </div>
        <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
          Your Heading 3
        </h2>
        <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Your subheading text here for section 3
        </p>
        <div className="mt-6">
          <img
            src="/your-image-3.jpg"
            alt="Section 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 4 */}
      <section className="px-6 py-12">
        <div className={`text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Your Title 4
        </div>
        <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
          Your Heading 4
        </h2>
        <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Your subheading text here for section 4
        </p>
        <div className="mt-6">
          <img
            src="/your-image-4.jpg"
            alt="Section 4"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 5 */}
      <section className="px-6 py-12">
        <div className={`text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Your Title 5
        </div>
        <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
          Your Heading 5
        </h2>
        <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Your subheading text here for section 5
        </p>
        <div className="mt-6">
          <img
            src="/your-image-5.jpg"
            alt="Section 5"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}