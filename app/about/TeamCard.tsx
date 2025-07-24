'use client'

import * as React from 'react'
import { TeamCardProps } from '../../components/fliteProtein/types'

const TeamCard: React.FC<TeamCardProps> = ({ 
    name, 
    role, 
    image, 
    linkedIn,
    description
}) => {
    const handleClick = () => {
        if (linkedIn) {
            window.open(linkedIn, '_blank')
        }
    }

    return (
        <div className="group relative">
            <div
                className={`bg-[#f6ebd4] rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                    linkedIn 
                        ? 'hover:shadow-lg transform hover:-translate-y-1 cursor-pointer' 
                        : ''
                }`}
                onClick={handleClick}
            >
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4 text-center">
                    <h3 className="text-[#a23865] text-lg font-bold mb-1">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-700">
                        {role}
                    </p>
                </div>
            </div>
            
            {/* Description overlay on hover */}
            <div className="absolute inset-0 bg-[#f6ebd4] rounded-xl p-4 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TeamCard
