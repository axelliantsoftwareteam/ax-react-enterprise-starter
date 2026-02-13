import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionFromRequest } from '@/lib/auth/session';

const protectedPaths = ['/dashboard', '/settings', '/admin'];

function isProtected(pathname: string) {
  return protectedPaths.some((path) => pathname.startsWith(path));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestId = request.headers.get('x-request-id') || crypto.randomUUID();
  const headers = new Headers(request.headers);
  headers.set('x-request-id', requestId);

  if (isProtected(pathname)) {
    const session = getSessionFromRequest(request);
    if (!session) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith('/admin') && session.role !== 'admin') {
      const dashboardUrl = new URL('/dashboard', request.url);
      dashboardUrl.searchParams.set('error', 'forbidden');
      return NextResponse.redirect(dashboardUrl);
    }
  }

  const response = NextResponse.next({
    request: { headers }
  });
  response.headers.set('x-request-id', requestId);
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*', '/admin/:path*']
};
