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

            {/* Existing Biodiverse Farms Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="Existing Biodiverse Farms"
                        column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        column1Button={
                            <a
                                href="#"
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
                        column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                        column2Button={
                            <a
                                href="#"
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
            {/* Global Farmers Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto mt-16">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="Farmers Around the World"
                        column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        column1Button={null}
                        column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
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
