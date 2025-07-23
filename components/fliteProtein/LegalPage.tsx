import * as React from "react";

interface LegalPageProps {
    title: string;
    sections: {
        title: string;
        content: string[];
    }[];
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, sections }) => {
    return (
        <div className="flex w-full overflow-hidden content-padding flex-col mt-12">
            <div className="w-full content-padding">
                <h1 className="text-4xl font-bold mb-8">{title}</h1>
                
                <div className="space-y-8 max-w-4xl">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl font-semibold">{`${index + 1}. ${section.title}`}</h2>
                            <div className="space-y-4">
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-700">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
