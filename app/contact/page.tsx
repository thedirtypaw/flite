import * as React from 'react'
import { Metadata } from 'next'
import { TwoColumns } from '../../components/fliteProtein/TwoColumns'

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch',
    description: 'Contact the Flite Protein team. Reach out to our founders Rachel Sargent and James Atkins for inquiries and partnerships.',
}

function ContactPage() {
    return (
        <div className="flex w-full overflow-hidden content-padding flex-col">

            {/* Talk to Us Section */}
            <div className="flex flex-wrap justify-center content-padding w-full mx-auto mb-16">
                <TwoColumns
                    title="Talk to us"
                    column1Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    column1Button={null}
                    column2Text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
                    column2Button={null}
                />
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-wrap content-padding w-full mx-auto">
                <TwoColumns
                    title="Contact Information"
                    column1Text={
                        <div className="space-y-2">
                            <h3 className="text-[#a23865] text-xl font-bold mb-4">Rachel Sargent, BEng FCA</h3>
                            <p className="text-gray-800 font-medium">Founder and CEO, Flite Protein SRL</p>
                            <p className="text-gray-700">
                                <a href="mailto:Rachel.Sargent@fliteprotein.earth" 
                                   className="text-[#a23865] hover:underline">
                                    Rachel.Sargent@fliteprotein.earth
                                </a>
                            </p>
                            <p className="text-gray-700">
                                <a href="tel:+40722661784" 
                                   className="text-[#a23865] hover:underline">
                                    +40 722 661 784
                                </a>
                            </p>
                        </div>
                    }
                    column1Button={null}
                    column2Text={
                        <div className="space-y-2">
                            <h3 className="text-[#a23865] text-xl font-bold mb-4">James Atkins</h3>
                            <p className="text-gray-800 font-medium">Founder and CSO, Flite Protein SRL</p>
                            <p className="text-gray-700">
                                <a href="mailto:James.Atkins@fliteprotein.earth" 
                                   className="text-[#a23865] hover:underline">
                                    James.Atkins@fliteprotein.earth
                                </a>
                            </p>
                            <p className="text-gray-700">
                                <a href="tel:+36302120982" 
                                   className="text-[#a23865] hover:underline">
                                    +36 30 212 0982
                                </a>
                            </p>
                        </div>
                    }
                    column2Button={null}
                />
            </div>
        </div>
    )
}

export default ContactPage
