import * as React from 'react'
import { Metadata } from 'next'
import { TwoColumns } from '../../components/fliteProtein/TwoColumns'
import CTAButton from '../../components/fliteProtein/CTAbutton'
import { GlobalH2 } from '../../components/fliteProtein/fonts'
import { TeamCard } from './TeamCard'

export const metadata: Metadata = {
    title: 'About Us - Meet Our Team',
    description: 'Learn about the passionate team behind Flite Protein and our mission to revolutionize sustainable nutrition.',
}

// Main Partners Data (4 columns, 1st row)
const mainPartners = [
    {
        id: 1,
        image: "/grafica_pisica.png",
        name: "Sarah Johnson",
        title: "CEO & Founder",
        linkedinUrl: "https://linkedin.com/in/sarahjohnson"
    },
    {
        id: 2,
        image: "/grafica_pisica.png", 
        name: "Dr. Michael Chen",
        title: "Chief Science Officer",
        linkedinUrl: "https://linkedin.com/in/michaelchen"
    },
    {
        id: 3,
        image: "/grafica_pisica.png",
        name: "Emma Rodriguez",
        title: "Head of Operations",
        linkedinUrl: "https://linkedin.com/in/emmarodriguez"
    },
    {
        id: 4,
        image: "/grafica_pisica.png",
        name: "James Wilson",
        title: "Senior Advisor",
        linkedinUrl: null // No LinkedIn - no hover effect
    }
];

// Team Members Data (5 columns, 2nd row)
const teamMembers = [
    {
        id: 1,
        image: "/grafica_pisica.png",
        name: "Alex Thompson",
        title: "Product Manager",
        linkedinUrl: "https://linkedin.com/in/alexthompson"
    },
    {
        id: 2,
        image: "/grafica_pisica.png",
        name: "Lisa Park",
        title: "Marketing Director", 
        linkedinUrl: "https://linkedin.com/in/lisapark"
    },
    {
        id: 3,
        image: "/grafica_pisica.png",
        name: "David Kumar",
        title: "Lead Developer",
        linkedinUrl: "https://linkedin.com/in/davidkumar"
    },
    {
        id: 4,
        image: "/grafica_pisica.png",
        name: "Maria Santos",
        title: "Quality Assurance",
        linkedinUrl: "https://linkedin.com/in/mariasantos"
    },
    {
        id: 5,
        image: "/grafica_pisica.png",
        name: "Tom Anderson",
        title: "Business Development",
        linkedinUrl: "https://linkedin.com/in/tomanderson"
    }
];

function AboutPage() {
    return (
        <div className="flex w-full overflow-hidden content-padding flex-col">

            {/* The Team Two-Column Section */}
            <div className="flex flex-wrap justify-center content-padding w-full mx-auto mb-16">
                <TwoColumns
                    title="The Team"
                    column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    column1Button={null}
                    column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
                    column2Button={null}
                />
            </div>

            {/* Main Partners Section - 4 columns */}
            <div className="mt-12 content-padding w-full mx-auto">
                <GlobalH2>
                    Leadership
                </GlobalH2>
                <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
                    {mainPartners.map((partner) => (
                        <TeamCard
                            key={partner.id}
                            id={partner.id}
                            image={partner.image}
                            name={partner.name}
                            title={partner.title}
                            linkedinUrl={partner.linkedinUrl}
                            size="large"
                        />
                    ))}
                </div>
            </div>

            {/* Team Members Section - 5 columns */}
            <div className="mt-16 content-padding w-full mx-auto">
                <GlobalH2>
                    Advisors
                </GlobalH2>
                <div className="grid mt-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            id={member.id}
                            image={member.image}
                            name={member.name}
                            title={member.title}
                            linkedinUrl={member.linkedinUrl}
                            size="small"
                        />
                    ))}
                </div>
            </div>

            {/* Funding Two-Column Section */}
            <div className="flex flex-wrap justify-center content-padding w-full mx-auto mt-16">
                <TwoColumns
                    title="Funding"
                    column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    column1Button={null}
                    column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
                    column2Button={null}
                />
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10 content-padding">
                <CTAButton text="Get in Touch!" href="/contact" />
            </div>
        </div>
    )
}

export default AboutPage
