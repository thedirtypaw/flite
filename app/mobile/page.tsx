'use client';

import { useEffect, useState } from "react";
import { basic, gabarito } from "../../components/fliteProtein/fonts";
import FlowField from "../../components/fliteProtein/FlowField";

export default function MobilePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // shared column: side padding + max width, reused everywhere for alignment
  const col = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

  return (
    // OUTER: full width, no max-w here
    <div className="w-full bg-[#ffffe1]">

      {/* HEADER — full-width sticky bar, logo aligned to the column edge */}
      <header className={`w-full bg-[#ffffe1] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className={`${col} transition-all duration-300 ${isScrolled ? 'py-4' : 'py-5'}`}>
          <img
            loading="lazy"
            src={isScrolled ? "/logo-small.png" : "/logo_dark.svg"}
            alt="Flite Protein Logo"
            className={`origin-left transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`}
          />
        </div>
      </header>

      {/* HERO — full width; ALL its text lives inside the z-10 column */}
      <section className="relative h-[100svh] overflow-hidden">
        <FlowField className="absolute inset-0 pointer-events-none mix-blend-multiply" />
        <div className={`relative z-10 ${col} h-full flex flex-col justify-center`}>
          <div className={`text-5xl sm:text-7xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Therapeutic Nutrition
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
            We make superior quality plant-based therapeutic nutrition products for brain, metabolic and gastrointestinal health
          </h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            With our zero-waste patentable process and whole-matrix formulation
          </p>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            From organic yellow peas grown at nature-friendly farms, for healthcare practitioners and active patients
          </p>
        </div>
      </section>

      {/* CONTENT — one shared column for every remaining section */}
      <main className={col}>

        {/* Section 2 */}
        <section className="py-12">
          <h2 className={`text-2xl text-[#a23865] ${basic.className}`}>
            Nutritional products for non-communicable diseases
          </h2>
          <div className={`mt-4 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            What is Flite&apos;s whole matrix protein formulation?
          </div>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our three-way, natural processing optimises the therapeutic performance of yellow pea protein, fibre and starch, which act in tandem, matching the needs of practitioners and their patients.
          </p>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Why our Whole matrix? We make whole matrix protein formulations that use the whole pea — protein, starch and fibre together — because the body wasn&apos;t designed to receive one nutrient at a time.
          </p>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Single-fraction isolates leave consumers exposed to digestive distress from residual unrefined fibres. Resistant starch crystallinity and postbiotic synergies, essential for managing the three target NCDs are absent.
          </p>
          <img src="/pudra.webp" alt="Section 2" className="mt-6 w-full h-auto rounded-lg" />
        </section>

        {/* Section 3 */}
        <section className="py-12">
          <div className={`text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Your Title 3
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Therapeutic function:</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            One product range targets three NCD domains: brain/cognitive, gastrointestinal/oncology, metabolic/diabetes.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Protein peptides repair muscles:</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Slow-release resistant starch helps control blood sugar; prebiotic soluble fibres feed the good bacteria in the gut, and antioxidant postbiotics.
          </p>
          <img src="/pudra.webp" alt="Section 3" className="mt-6 w-full h-auto rounded-lg" />
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Better digestion and bio-availability:</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our process uses gentle technology – germination, enzymatic hydrolysis and lactic fermentation. This gives better bioavailability and digestion.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Transparency to the source:</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our raw materials are organic yellow peas traceable to Romanian farms. Certified with proprietary biodiversity scorecard. Aligned with 10 UN SDGs.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>The Science behind it:</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our partnership with USAMV Cluj grounds the product range in proprietary, published scientific research
          </p>
        </section>

        {/* Section 4 */}
        <section className="py-12">
          <img src="/ciconia.webp" alt="Section 4" className="w-full h-auto rounded-lg" />
          <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Ciconia - Flagship whole-matrix formulation
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>A complete meal in one serving</h2>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>What it does for you</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            One 50 gram serving of Ciconia gives you protein, slow-release starches, and prebiotic fibres — three things your body needs together, in the proportions that actually work. You don&apos;t need to take it alongside something else. Mix it with water, milk or a smoothie and you have a complete meal.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Steady energy, not a sugar spike</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            The starches in Ciconia are prepared in a special way — they&apos;re cooled and re-formed into shapes that release slowly into your bloodstream. This helps keep your blood sugar steady rather than spiking and crashing, which means more even energy and less hunger between meals.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Feeds the good bacteria in your gut</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            When the helpful bacteria in your gut are well-fed, they produce compounds that strengthen your gut lining, calm inflammation and even influence your mood. Ciconia delivers the kind of fibre these bacteria thrive on — fibre that most foods either lack or destroy during processing.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Gentle on sensitive digestion — and allergen-friendly</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Ciconia is sprouted and fermented before it reaches you. This breaks down the proteins that usually cause allergic reactions in pea products, and removes compounds that often cause bloating. People with IBS or sensitive digestion typically tolerate Ciconia much better. No dairy, no soy, no gluten, no eggs, no oats, no barley.
          </p>
        </section>

        {/* Section 5 */}
        <section className="py-12">
          <img src="/your-image-5.jpg" alt="Section 5" className="w-full h-auto rounded-lg" />
          <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Biodiversity - integrated, not an add-on
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
            We reward crop suppliers for increasing farmland biodiversity.
          </h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>Better soil, better crops, loyal suppliers</p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Nutritional quality starts in the soil.</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Biodiverse farmland produces crops with higher protein content, richer micronutrient profiles and stronger bioactive compounds. Our tri-modal process amplifies what&apos;s in the pea — but input quality is everything.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Exclusive organic sourcing</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our yellow peas come from organic farms in Romania with rich soils and high biodiversity. Long-term relationships with farmers, not opaque commodity market purchases.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Premium for biodiversity performance</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Farmers who score well on our scorecard receive a price premium. This rewards the practices that produce better crops — and creates real switching costs.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>5% of profits support biodiversity</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Embedded in our P&amp;L. Founding partner: SOR (BirdLife International Romania). Funds practical support for farmers improving their land.
          </p>
        </section>

      </main>
    </div>
  );
}