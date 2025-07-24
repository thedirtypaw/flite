import * as React from 'react'
import { Metadata } from 'next'
import { TwoColumns } from '../../components/fliteProtein/TwoColumns'
import { GlobalH2 } from '../../components/fliteProtein/fonts'
import  TeamCard  from './TeamCard'

export const metadata: Metadata = {
    title: 'About - Flite',
    description: 'Meet our team and connect with us.',
}

function AboutPage() {
    return (
        <div className="flex w-full overflow-hidden content-padding flex-col">
            {/* Vision Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto mb-16">
                <div className="w-full max-w-screen-xl">
                    <TwoColumns
                        title="Our Vision"
                        column1Text={
                            <>
                                <p>At Flite, we're pioneering a revolution in sustainable agriculture through our innovative protein-rich crops. Our mission is to transform farming practices by introducing biodiverse solutions that benefit both farmers and the environment. We believe that the future of agriculture lies in working harmoniously with nature, not against it.</p>
                                <br />
                                <p>Our approach combines traditional farming wisdom with cutting-edge scientific research, creating sustainable systems that enhance soil health, support biodiversity, and produce nutrient-dense crops. We're committed to developing solutions that make regenerative agriculture not just environmentally sound, but economically viable for farmers.</p>
                            </>
                        }
                        column1Button={null}
                        column2Text={
                            <>
                                <p>Through our work with farmers, scientists, and industry experts, we're building a network of knowledge and practice that's reshaping agricultural landscapes. We understand that true sustainability comes from creating systems that benefit all stakeholders - from the soil microbiome to the end consumer.</p>
                                <br />
                                <p>Our team brings together diverse expertise in agriculture, technology, nutrition, and business, united by a common goal: to create a more sustainable and resilient food system. We're not just growing crops; we're nurturing a movement towards a healthier, more biodiverse future in farming.</p>
                            </>
                        }
                        column2Button={null}
                    />
                </div>
            </div>

            {/* Team Section */}
            <div className="w-full content-padding mx-auto">
                <GlobalH2>Leadership</GlobalH2>
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
                        role="Marketing"
                        image="/team/tudor.webp"
                        description="Degree in graphic design; functions of aesthetics and the aesthetic of functions. Worked in advertising, web design and marketing. Former chef, passionate about sports and sport nutrition."
                    />
                </div>

                <GlobalH2 className="mt-16">Advisors</GlobalH2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8 w-full">
                    <TeamCard
                        name="Mt Szsz"
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
                        name="Gregor Tims"
                        role="Biodiversity advisor"
                        image="/team/gregor.webp"
                        linkedIn="https://www.linkedin.com/in/gregor-tims-30ba8a78/"
                        description="Masters thesis on incentivising Romanian farmers to farm for biodiversity."
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
