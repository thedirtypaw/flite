import { Metadata } from 'next'
import { LegalPage } from '../../../components/fliteProtein/LegalPage'

export const metadata: Metadata = {
    title: 'Terms of Service - Flite Protein',
    description: 'Our terms of service and conditions of use.',
}

function TermsPage() {
    const sections = [
        {
            title: "Terms",
            content: [
                "By accessing this website, you agree to be bound by these terms of service."
            ]
        },
        {
            title: "Use License",
            content: [
                "Permission is granted to temporarily download one copy of the materials."
            ]
        },
        {
            title: "Disclaimer",
            content: [
                "The materials on Flite Protein's website are provided on an 'as is' basis."
            ]
        },
        {
            title: "Limitations",
            content: [
                "In no event shall Flite Protein or its suppliers be liable for any damages."
            ]
        },
        {
            title: "Revisions and Errata",
            content: [
                "The materials appearing on Flite Protein's website could include technical, typographical, or photographic errors."
            ]
        },
        {
            title: "Links",
            content: [
                "Flite Protein has not reviewed all of the sites linked to its website."
            ]
        },
        {
            title: "Site Terms of Use Modifications",
            content: [
                "Flite Protein may revise these terms of use for its website at any time without notice."
            ]
        },
        {
            title: "Governing Law",
            content: [
                "These terms and conditions are governed by and construed in accordance with the laws of Romania."
            ]
        }
    ];

    return <LegalPage title="Terms of Service" sections={sections} />;
}

export default TermsPage
