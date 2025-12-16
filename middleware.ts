import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = 'birdies'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authCookie = request.cookies.get('auth')?.value
  
  // Check password submission first
  const submittedPassword = request.nextUrl.searchParams.get('password')
  if (submittedPassword === PASSWORD) {
    const response = NextResponse.redirect(new URL('/homepage', request.url))
    response.cookies.set('auth', PASSWORD, { 
      maxAge: 60 * 60 * 24, // 24h
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    })
    return response
  }

  // If on auth page and not authenticated, allow access
  if (pathname === '/auth') {
    return NextResponse.next()
  }

  // If authenticated, allow access to all pages
  if (authCookie === PASSWORD) {
    return NextResponse.next()
  }

  // Not authenticated and not on auth page - redirect to auth
  return NextResponse.redirect(new URL('/auth', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ]
}
