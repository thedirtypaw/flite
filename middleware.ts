import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = 'birdies'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')?.value
  
  if (authCookie === PASSWORD) {
    return NextResponse.next()
  }

  // Check password submission
  const submittedPassword = request.nextUrl.searchParams.get('password')
  if (submittedPassword === PASSWORD) {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set('auth', PASSWORD, { maxAge: 60 * 60 * 24 }) // 24h
    return response
  }

  // Show password form
  if (request.nextUrl.pathname !== '/auth') {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!auth|_next/static|_next/image|favicon.ico).*)']
}