import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_ACCESS_KEYS = process.env.ACCESS_KEYS?.split(',') || []

export function middleware(request: NextRequest) {
  const accessKey = request.cookies.get('access_key')?.value


  const isValidAccess = VALID_ACCESS_KEYS.includes(accessKey || '')


  if (!isValidAccess && !request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /auth (authentication page)
     * - /_next (Next.js internals)
     * - /images (static files)
     * - /favicon.ico (favicon file)
     */
    '/((?!auth|_next|images|favicon.ico).*)',
  ],
}

