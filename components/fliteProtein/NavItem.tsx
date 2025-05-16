'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { NavItemProps } from './types'

export const NavItem: React.FC<NavItemProps> = ({ label, isActive, width }) => {
  const router = useRouter()

  const go = useCallback(() => {
    router.push(`/${label.toLowerCase()}`)
  }, [label])

  return (
    <div
      className={`nav-item flex justify-center items-center transition-all ease-in-out duration-300 h-full font-bold uppercase tracking-wide ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
      onClick={go}
      style={{ width }}
    >
      {label}
    </div>
  )
}
