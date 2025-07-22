'use client'

import * as React from 'react'

interface TeamCardProps {
    id: number
    image: string
    name: string
    title: string
    linkedinUrl: string | null
    size?: 'large' | 'small'
}

export const TeamCard: React.FC<TeamCardProps> = ({ 
    image, 
    name, 
    title, 
    linkedinUrl, 
    size = 'large' 
}) => {
    const handleClick = () => {
        if (linkedinUrl) {
            window.open(linkedinUrl, '_blank')
        }
    }

    const imageHeight = size === 'large' ? 'h-48' : 'h-32'
    const padding = size === 'large' ? 'p-4' : 'p-3'

    return (
        <div
            className={`bg-[#f6ebd4] rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                linkedinUrl 
                    ? 'hover:shadow-lg transform hover:-translate-y-1 cursor-pointer' 
                    : ''
            }`}
            onClick={handleClick}
        >
            <img
                src={image}
                alt={name}
                loading="lazy"
                className={`w-full ${imageHeight} object-cover rounded-t-xl`}
            />
            <div className={`${padding} text-center`}>
                <h3 className="text-[#a23865] text-lg font-bold mb-1">
                    {name}
                </h3>
                <p className="text-sm text-gray-700">
                    {title}
                </p>
            </div>
        </div>
    )
}
