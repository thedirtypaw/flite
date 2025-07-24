import * as React from 'react'
import { Metadata } from 'next'
import BioHero from '../../components/fliteProtein/BioHero'
import { TwoColumns } from '../../components/fliteProtein/TwoColumns'
import CTAButton from '../../components/fliteProtein/CTAbutton'
import { GlobalH2 } from '../../components/fliteProtein/fonts'

export const metadata: Metadata = {
    title: 'Bio 2.0 - Biodiverse Farming Revolution',
    description: 'Discover the future of biodiverse farming and sustainable agriculture practices.',
}

// Local data for the grid items
const biodiversityFeatures = [
    {
        id: 1,
        image: "/bio/crops.webp",
        icon: "/bio/circles.svg", // Changed from emoji to SVG path
        title: "Biodiversity",
        description: "Creating diverse ecosystems that support multiple species, from beneficial insects to soil organisms."
    },
    {
        id: 2,
        image: "/bio/soil.webp",
        icon: "/bio/soil.svg", // Changed from emoji to SVG path
        title: "Soil quality & Microbiome",
        description: "Nurturing living soil through beneficial microorganisms that improve nutrient cycling and plant health"
    },
    {
        id: 3,
        image: "/bio/hedges.webp",
        icon: "/bio/puzzle.svg", // Changed from emoji to SVG path
        title: "Ecological infrastructure",
        description: "Building natural systems like hedgerows, wetlands, and wildlife corridors that support farm productivity."
    },
    {
        id: 4,
        image: "/bio/bee.webp",
        icon: "/bio/bee.svg", // Changed from emoji to SVG path
        title: "Natural Service Providers",
        description: "Partnering with pollinators, predatory insects, and soil organisms that provide essential services."
    },
    {
        id: 5,
        image: "/bio/tools.webp",
        icon: "/bio/eco.svg", // Changed from emoji to SVG path
        title: "Life Cycle Assessment (LCA)",
        description: "Measuring environmental impact from seed to harvest, optimizing resource use and minimizing waste."
    }
];

function Bio2Page() {
    return (
        <div className="flex w-full overflow-hidden content-padding flex-col">

            {/* Bio Hero Section */}
            <BioHero
                mainImage="/grafica_pisica.png"
                mainImageAlt="Biodiverse Farming Landscape"
            />

            {/* Philosophy Two-Column Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto mb-16">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="The Philosophy Behind Biodiverse Farming"
                        column1Text={
                            <>
                                <p>For millennia, farmers practiced biodiversity out of necessity. Without industrial fertilizers or pesticides, they relied on crop rotation, companion planting, and natural pest control. Mixed farming systems weren't just sustainable—they were survival. Diverse crops meant resilience against unpredictable weather, pest outbreaks, and market fluctuations that could devastate single-crop operations.</p>
                                <br />
                                <p>The industrial revolution promised efficiency through simplification. Monocultures maximized short-term yields, chemical inputs replaced natural processes, and farming became a factory model. We gained unprecedented productivity but lost the wisdom of working with nature's complexity. The soil, once teeming with life, became merely a medium for delivering synthetic nutrients to genetically uniform crops.</p>
                            </>
                        }
                        column1Button={null}
                        column2Text={
                            <>
                                <p>Today, we face a new necessity. Climate change demands resilient food systems. Depleted soils need regeneration. Consumers seek nutrient-dense foods free from chemical residues. The old industrial model, once revolutionary, now threatens the very foundation it was built to exploit.</p>
                                <br />
                                <p>Biodiverse farming bridges ancient wisdom with modern urgency. We're not returning to the past—we're evolving forward. Using scientific understanding to enhance traditional practices, we create systems that feed both people and planet. This isn't nostalgia; it's pragmatic adaptation for our survival.</p>
                            </>
                        }
                        column2Button={null}
                    />
                </div>
            </div>

            {/* Biodiversity Features Grid */}
            <div className="mt-12 content-padding w-full mx-auto">
                <GlobalH2>
                    Key Features of Biodiverse Farming
                </GlobalH2>
                <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                    {biodiversityFeatures.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-[#f6ebd4] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                loading="lazy"
                                className="w-full h-48 object-cover rounded-t-xl"
                            />

                            <div className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-10 h-10 flex-shrink-0"
                                    />
                                    <h3 className="text-[#a23865] text-lg font-bold group-hover:text-[#8a2d54] transition-colors">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Existing Biodiverse Farms Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="Existing Biodiverse Farms"
                        column1Image="/bio/polyfarm.webp"
                        column1ImageAlt="Polyface Farm cattle grazing in rotational pastures"
                        column1Text={
                            <>
                                <p>Polyface Farm in Virginia's Shenandoah Valley, led by Joel Salatin, is a pioneer in regenerative agriculture. Operating since 1961, they've perfected a multi-species rotational grazing system that mimics natural patterns.</p>
                                <br />
                                <p>Their 'salad bar beef' program rotates cattle through perennial pastures, followed by chickens that spread manure and reduce pest populations. This symbiotic system produces high-quality meat while building soil health and biodiversity. The farm's forest management also integrates pigs for natural tillage and acorn foraging.</p>
                            </>
                        }
                        column1Button={
                            <a
                                href="https://www.polyfacefarms.com"
                                className="flex items-center gap-2 text-[#e3176e] hover:underline body-text"
                            >
                                <img
                                    src="/link.svg"
                                    alt="Visit"
                                    className="w-8 h-8 flex-shrink-0"
                                />
                                Visit Their Website
                            </a>
                        }
                        column2Image="/bio/becfarm.webp"
                        column2ImageAlt="Bec Hellouin Farm permaculture garden with diverse vegetables"
                        column2Text={
                            <>
                                <p>The Bec Hellouin Farm in Normandy, France, founded by Perrine and Charles Hervé-Gruyer, demonstrates the power of permaculture principles. On just 1.5 acres of cultivated land, they produce over 800 varieties of vegetables, fruits, and herbs.</p>
                                <br />
                                <p>Their micro-farm combines intensive market gardening with forest gardening techniques. Using no-till methods and maintaining complex polycultures, they've created a highly productive ecosystem that supports local biodiversity while producing premium organic produce for local restaurants and markets.</p>
                            </>
                        }
                        column2Button={
                            <a
                                href="https://www.fermedubec.com"
                                className="flex items-center gap-2 text-[#e3176e] hover:underline body-text"
                            >
                                <img
                                    src="/link.svg"
                                    alt="Visit"
                                    className="w-8 h-8 flex-shrink-0"
                                />
                                Visit Their Website
                            </a>
                        }
                    />


                </div>
            </div>

            {/* Large Farm Image Section */}
            <div className="flex flex-col content-padding w-full mx-auto my-16">
                <img
                    src="/bio/farm2.webp"
                    alt="Biodiverse farm landscape"
                    className="w-full h-auto object-contain mb-6"
                />
                <p className="img-caption">
                    Illustration of a thriving biodiverse farming operation
                </p>
            </div>

            {/* Global Farmers Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="Farmers Around the World"
                        column1Text={
                            <>
                                <p>For these farmers, success isn't measured solely in yields or profits, but in the vitality of their land and communities. They speak of the profound satisfaction in watching beneficial insects return, seeing soil transform from lifeless dirt to rich, living earth, and hearing birds sing in restored hedgerows.</p>
                                <br />
                                <p>Many describe an unexpected sense of purpose - becoming not just food producers, but ecosystem stewards. Their farms have evolved into living classrooms where neighboring farmers, students, and urbanites come to learn about natural systems. This deeper connection to the land has sparked a renaissance of traditional knowledge, now enhanced by modern ecological understanding.</p>
                            </>
                        }
                        column1Button={null}
                        column2Text={
                            <>
                                <p>The pride these farmers feel extends beyond their fence lines. Their practices protect water sources for downstream communities, create wildlife corridors that benefit entire regions, and build soil carbon that helps fight climate change.</p>
                                <br />
                                <p>While their yields might not match industrial operations, they're building something more valuable - resilient food systems that can weather future challenges. As one farmer put it, 'When you work with nature instead of against it, you become part of something bigger than yourself. That's worth more than any profit margin.'</p>
                            </>
                        }
                        column2Button={null}
                    />


                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10 content-padding">
                <CTAButton text="Join the Movement" href="http://eepurl.com/i-ryhA" />
            </div>
        </div>
    )
}

export default Bio2Page
