import { Metadata } from 'next'
import { LegalPage } from '../../../components/fliteProtein/LegalPage'

export const metadata: Metadata = {
    title: 'GDPR Compliance - Flite Protein',
    description: 'Our GDPR compliance policy and your data protection rights.',
}

function GDPRPage() {
    const sections = [
        {
            title: "Introduction",
            content: [
                "This policy explains how Flite Protein SRL ('we', 'our',  or 'us') processes personal data in compliance with the General Data Protection Regulation (GDPR)."
            ]
        },
        {
            title: "Data Controller",
            content: [
                "Flite Protein SRL",
                "[Your registered address]",
                "Email: [contact email]"
            ]
        },
        {
            title: "Your Rights",
            content: [
                "Under GDPR, you have the following rights:",
                "• Access your personal data",
                "• Rectify inaccurate personal data",
                "• Request erasure of your personal data",
                "• Object to processing of your personal data",
                "• Request restriction of processing",
                "• Data portability"
            ]
        },
        {
            title: "Data We Collect",
            content: [
                "We collect the following types of data:",
                "• Contact information (name, email, phone number)",
                "• Technical data (IP address, browser type)",
                "• Usage data (how you use our website)"
            ]
        },
        {
            title: "Legal Basis for Processing",
            content: [
                "We process your data based on:",
                "• Your consent",
                "• Contractual necessity",
                "• Legal obligations",
                "• Legitimate interests"
            ]
        },
        {
            title: "Data Protection",
            content: [
                "We implement appropriate technical and organizational measures to ensure data security."
            ]
        },
        {
            title: "Contact Us",
            content: [
                "For any GDPR-related queries, contact our Data Protection Officer at [DPO email]."
            ]
        }
    ];

    return <LegalPage title="GDPR Compliance" sections={sections} />;
}

export default GDPRPage
