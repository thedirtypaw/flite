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
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Soil Regeneration",
        description: "Advanced techniques that restore soil health and increase carbon sequestration naturally."
    },
    {
        id: 2,
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Pollinator Networks",
        description: "Creating habitats that support diverse pollinator species essential for ecosystem balance."
    },
    {
        id: 3,
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Water Conservation",
        description: "Innovative water management systems that preserve this precious resource for future generations."
    },
    {
        id: 4,
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Crop Diversity",
        description: "Implementing polyculture systems that increase resilience and reduce dependency on monocultures."
    },
    {
        id: 5,
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Circular Systems",
        description: "Closed-loop farming practices that minimize waste and maximize resource efficiency."
    },
    {
        id: 6,
        image: "/grafica_pisica.png",
        icon: "/link.svg", // Changed from emoji to SVG path
        title: "Data-Driven Insights",
        description: "Using technology and monitoring to optimize biodiversity outcomes and farm productivity."
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
                        column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        column1Button={null}
                        column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
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
                                        className="w-6 h-6 flex-shrink-0"
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
            <div className="flex flex-col items-center content-padding w-full mx-auto my-16">
                <img
                    src="/product_range.png"
                    alt="Biodiverse farm landscape"
                    className="w-full max-w-4xl h-auto object-contain mb-6"
                />
                <p className="text-center mb-8">
                    Example of a thriving biodiverse farming operation
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
