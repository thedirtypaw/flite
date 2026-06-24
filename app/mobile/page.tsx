'use client';

import { useEffect, useState } from "react";
import { basic, gabarito } from "../../components/fliteProtein/fonts";
import FlowField from "../../components/fliteProtein/FlowField";
import  TeamCard  from '../about/TeamCard';

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
        <FlowField className="absolute inset-0 pointer-events-none" />
        <div className={`relative z-10 ${col} h-full flex flex-col justify-center text-white mix-blend-difference`}>
          <div className={`text-4xl md:text-6xl lg:text-8xl text-pink-700 font-black  ${gabarito.className}`}>
            Therapeutic Nutrition
          </div>
          <h2 className={`text-2xl md:text-4xl lg:text-6xl mt-4 text-[#a23865] ${basic.className}`}>
            We make superior quality plant-based therapeutic nutrition products for brain, metabolic and gastrointestinal health
          </h2>
          <p className={`mt-6 text-xl md:text-2xl lg:text-4xl text-[#d87294] ${basic.className}`}>
            With our zero-waste patentable process and whole-matrix formulation
            From organic yellow peas grown at nature-friendly farms, for healthcare practitioners and active patients
          </p>
        </div>
      </section>

      

      {/* CONTENT — one shared column for every remaining section */}
      <main className={col}>

      {/* Section 4 */}
      <section className="py-6">
          <img src="/ciconia.webp" alt="Section 4" className="w-full h-auto rounded-lg" />
          <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Whole-Matrix Protein Formulation  <br />
          Because your body wasn't designed to receive one nutrient at a time
          </div>
          
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
            Ciconia is sprouted and fermented before it reaches you. This breaks down the proteins that usually cause allergic reactions in pea products, and removes compounds that often cause bloating. People with IBS or sensitive digestion typically tolerate Ciconia much better. No dairy, no soy, no gluten, no eggs.
          </p>

          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Storytelling: The Bird Series</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Every product we make is named after a bird whose cultural meaning communicates the product’s purpose and properties. The bird names create a third brand territory — neither clinical nor wellness — that is distinctive, trademark-protectable, and regulation-proof.

          </p>
        </section>

        {/*
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
        */}

        {/* Section 3 */}
        <section className="py-6">
          <img src="/peas.webp" alt="Section 5" className="w-full h-auto mt-8 rounded-lg" />

          <div className={`mt-8 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Our Products
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}> Have therapeutic functions and target three NCD domains: brain/cognitive, gastrointestinal/oncology, metabolic/diabetes</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
           
          </p>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Besides the specialised therapeutics, the protein peptides repair muscles, 
          Slow-release resistant starch helps control blood sugar; prebiotic soluble fibres feed the good bacteria in the gut, and antioxidant postbiotics.
          </p>

          

          <h2 className={`text-2xl mt-8 text-[#a23865] ${basic.className}`}>Better digestion and bio-availability</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our process uses gentle technology – germination, enzymatic hydrolysis and lactic fermentation. This gives better bioavailability and digestion.
          
          
          Transparency to the source is due to our raw materials being organic yellow peas traceable to specific Romanian farms. Certified with proprietary biodiversity scorecard. Aligned with 10 UN SDGs.
          </p>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>The Science behind it: USAMV Cluj - A Cornerstone of Credible Research</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
        USAMV Cluj stands as one of Romania's premier research institutions, with decades of published work in food science, fermentation technology, and agricultural innovation. Its faculty, including members of the Romanian Academy, bridge rigorous academic inquiry with real-world application, making it a trusted partner for ventures that demand scientific 
        credibility rather than marketing claims. For years, collaborations with USAMV Cluj have grounded product development in peer-reviewed research, ensuring that what reaches the market is backed by genuine expertise and validated methodology.
          </p>

          <a href="https://www.usamvcluj.ro//" target="_blank" rel="noopener noreferrer">
            <img src="/usamv.webp" alt="Section 5" className="w-[15vw] h-auto rounded-lg mr-auto mt-8" />
          </a>

        </section>

        

        {/* Section 5 */}
        <section className="py-6">
          
          <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Biodiversity - integrated, not an add-on
          </div>
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
            We reward crop suppliers for increasing farmland biodiversity.
          </h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>Better soil, better crops, loyal suppliers, nutritional quality starts in the soil.
           Biodiverse farmland produces crops with higher protein content, richer micronutrient profiles and stronger bioactive compounds. Our tri-modal process amplifies what&apos;s in the pea — but input quality is everything. 
           Exclusive organic sourcing means our yellow peas come from organic farms in Romania with rich soils and high biodiversity. Long-term relationships with farmers, not opaque commodity market purchases.
          </p>
          
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Plus a premium for biodiversity performance means that farmers who score well on our scorecard receive a price premium. This rewards the practices that produce better crops — and creates real switching costs.
          </p>
          <img src="/new_island.webp" alt="Section 5" className="w-full h-auto rounded-lg" />

          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>5% of profits support biodiversity</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Embedded in our P&amp;L. Founding partner: SOR (BirdLife International Romania). Funds practical support for farmers improving their land. The Romanian Ornithological Society (SOR) is a non-governmental, non-profit organization that carries out activities for the protection of birds and nature with the support of its members and volunteers, funded through donations and projects.
            It operates nationwide in Romania through branches and school groups. Since 1997, it has been a partner of BirdLife International – a global network comprising over 115 national organizations dedicated to the conservation of birds and nature.
          </p>
          <a href="https://www.sor.ro/" target="_blank" rel="noopener noreferrer">
            <img src="/sor.webp" alt="Section 5" className="w-[15vw] h-auto rounded-lg mr-auto mt-8" />
          </a>

          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>Birds as the Thermometer of Farm Health</h2>
          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
          Birds are the first and most sensitive responders to ecological change on farmland. Their presence, diversity, and breeding success directly reflect the availability of insect prey, hedgerow habitat, soil invertebrate density, 
          and chemical load — factors that define a farm's biological health long before soil tests or yield reports catch up. A farm rich in bird species is not merely scenic; it is functionally biodiverse, with intact food webs, lower pesticide dependence, and resilient ecosystems. Where birds thrive, the land is working.
          </p>

          

        </section>

        {/* Section 6 */}
        <section className="py-6">
          <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
            Team and Advisors
          </div>

          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>
            At Flite, we're pioneering a revolution in sustainable agriculture through our innovative protein-rich crops. Our mission is to transform farming practices by introducing biodiverse solutions that benefit both farmers and the environment. We believe that the future of agriculture lies in working harmoniously with nature, not against it.
          </h2>

          <p className={`mt-6 text-lg text-[#d87294] ${basic.className}`}>
            Our approach combines traditional farming wisdom with cutting-edge scientific research, creating sustainable systems that enhance soil health, support biodiversity, and produce nutrient-dense crops. We're committed to developing solutions that make regenerative agriculture not just environmentally sound, but economically viable for farmers.
          </p>
          </section>
          
          {/* Team Section */}
          <section className="py-6">
              <div className={`mt-6 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
                Leadership
              </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 w-full">
                    <TeamCard
                        name="Rachel Sargent"
                        role="CEO and co-founder"
                        image="/team/rachel.webp"
                        linkedIn="https://www.linkedin.com/in/rachel-sargent-abb1972/"
                        description="Entrepreneur for 30 years in M&A, finance, consulting, HoReCa. Founded Osprey Partners M&A boutique, AICA global advisory network, a social enterprise restaurant, food writing. Electrical engineering degree from UCL,UK. UK Chartered accountant. Present: Masters degree in nutrition and food science at USAMV CN."
                    />
                    <TeamCard
                        name="James Atkins"
                        role="CSO and co-founder"
                        image="/team/james.webp"
                        linkedIn="https://www.linkedin.com/in/james-atkins-8928374a/"
                        description="Entrepreneur focussed on climate change and biodiversity. Founder of Vertis Environmental Finance. Co-founder of Zsmboki Biokert, Danube Kids and Planet League. Author and blogger."
                    />
                    <TeamCard
                        name="Mihai Anitei"
                        role="Head of Engineering"
                        image="/team/mihai.webp"
                        linkedIn="https://www.linkedin.com/in/mihai-anitei-305500b/"
                        description="Experienced CEO of large industrial facilities in Romania including Ameropa, Azo Mures, Agrana, Greiff, St Gobain. Degrees / Phd in electromechanical engineering, agribusiness and industrial outsourcing."
                    />
                    <TeamCard
                        name="Tudor Nicolau"
                        role="Communications"
                        image="/team/tudor.webp"
                        description="Degree in graphic design; functions of aesthetics and the aesthetic of functions. Worked in advertising, web design and marketing. Former chef, passionate about sports and sport nutrition."
                    />
                </div>

                <div className={`mt-16 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
                Advisors
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8 w-full">
                    <TeamCard
                        name="Máté Szász"
                        role="Sales and nutrition"
                        image="/team/mate.webp"
                        linkedIn="https://www.linkedin.com/in/mate-szasz-a35674145/"
                        description="Sports Diagnostics and Scientific lead for Synlab. Nutrition advisor to the Hungarian Olympic Committee. Former head of sales, Scitech."
                    />
                    <TeamCard
                        name="Dr Dan Vodnar"
                        role="Food science and technology"
                        image="/team/dan.webp"
                        linkedIn="https://www.linkedin.com/in/dan-c-vodnar-16739082/"
                        description="Professor, Faculty of Food, Science and Technology, USAMV Cluj-Napoca and member of the Romanian Academy. Gut microbiome and fermentation expert."
                    />
                    <TeamCard
                        name="Chris Butters"
                        role="Finance"
                        image="/team/chris.webp"
                        linkedIn="https://www.linkedin.com/in/chris-butters-b54b1718/"
                        description="Experienced M & A advisor in UK and Central Europe"
                    />
                    <TeamCard
                        name="Giovanni Quaglia"
                        role="Operations"
                        image="/team/gio.webp"
                        linkedIn="https://www.linkedin.com/in/giovanniquaglia/"
                        description="Manager and CFO roles in international agribusiness"
                    />
                    <TeamCard
                        name="Jennifer Austin"
                        role="Biodiversity Lead"
                        image="/team/jen.webp"
                        linkedIn="https://www.linkedin.com/in/austinjk/"
                        description="Social entrepreneur, healthcare, wildlife"
                    />
                </div>
            
         <div className={`mt-12 text-5xl text-pink-700 font-black leading-none ${gabarito.className}`}>
          Getting in touch
         </div>

        <a href="mailto:getintouch@fliteprotein.earth">
          <h2 className={`text-2xl mt-4 text-[#a23865] ${basic.className}`}>You can write to us at getintouch@fliteprotein.earth </h2>
        </a>      
        </section>

      </main>
    </div>
  );
}