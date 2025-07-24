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
        <div className="w-full group relative">
            <div
                className={`bg-[#f6ebd4] rounded-xl overflow-hidden transition-all duration-300 p-4 ${
                    linkedIn 
                        ? 'transform hover:-translate-y-1 cursor-pointer' 
                        : ''
                }`}
                onClick={handleClick}
            >
                {/* Circular image */}
                <div className="flex justify-center mb-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
                
                <div className="text-center">
                    <h3 className="text-[#a23865] text-lg font-bold mb-1">{name}</h3>
                    <p className="text-gray-800 font-medium text-[13px] mb-2">{role}</p>
                </div>

                {/* Description on hover */}
                {description && (
                    <div className="absolute inset-0 bg-[#f6ebd4] bg-opacity-95 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-gray-700 text-sm leading-relaxed text-center">{description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TeamCard
