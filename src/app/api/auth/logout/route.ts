import { NextResponse } from 'next/server';
import { clearSessionCookie, SESSION_COOKIE } from '@/lib/auth/session';
import { log } from '@/lib/observability/logger';

export async function POST(request: Request) {
  const requestId = request.headers.get('x-request-id') || undefined;
  const cookie = clearSessionCookie();

  log({
    level: 'info',
    message: 'Mock logout',
    requestId
  });

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set(SESSION_COOKIE, cookie.value, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: cookie.maxAge,
    path: '/'
  });

  return response;
}
