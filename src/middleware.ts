import { NextRequest, NextResponse } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/details', '/help', '/settingsPage', '/compaigns', '/contacts']

// Routes only for unauthenticated users
const authRoutes = ['/reports', '/login', '/signup']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Read token from cookie (we'll set it on login/signup)
  const token = request.cookies.get('accessToken')?.value

  const isProtected = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/reports', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public).*)'],
}
