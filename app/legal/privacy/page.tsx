import { Metadata } from 'next'
import { LegalPage } from '../../../components/fliteProtein/LegalPage'

export const metadata: Metadata = {
    title: 'Privacy Policy - Flite Protein',
    description: 'Our privacy policy and how we handle your personal information.',
}

function PrivacyPage() {
    const sections = [
        {
            title: "Information We Collect",
            content: [
                "We collect the following types of information:",
                "• Personal identification information",
                "• Contact information",
                "• Technical information",
                "• Usage data"
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "Your information is used for:",
                "• Providing and maintaining our service",
                "• Notifying you about changes",
                "• Providing customer support",
                "• Gathering analysis or valuable information"
            ]
        },
        {
            title: "Information Sharing",
            content: [
                "We do not sell, trade, or rent users' personal identification information to others."
            ]
        },
        {
            title: "Data Security",
            content: [
                "We adopt appropriate data collection, storage, and processing practices and security measures."
            ]
        },
        {
            title: "Third-Party Websites",
            content: [
                "Users may find advertising or other content that link to third-party partners' sites."
            ]
        },
        {
            title: "Changes to This Policy",
            content: [
                "Flite Protein has the discretion to update this privacy policy at any time."
            ]
        },
        {
            title: "Contact Us",
            content: [
                "If you have questions about this Privacy Policy, please contact us at:",
                "[Your contact information]"
            ]
        }
    ];

    return <LegalPage title="Privacy Policy" sections={sections} />;
}

export default PrivacyPage
