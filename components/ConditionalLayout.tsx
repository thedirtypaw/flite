'use client'

import { usePathname } from 'next/navigation'
import { Header } from './fliteProtein/Header'
import { Footer } from './fliteProtein/Footer'

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/auth'

  if (isAuthPage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
