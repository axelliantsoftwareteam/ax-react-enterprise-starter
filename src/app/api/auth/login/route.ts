import { NextResponse } from 'next/server';
import { createMockSession } from '@/lib/auth/mock';
import { createSessionCookie, SESSION_COOKIE } from '@/lib/auth/session';
import { log } from '@/lib/observability/logger';

export async function POST(request: Request) {
  const requestId = request.headers.get('x-request-id') || undefined;
  const mode = process.env.AUTH_MODE || 'mock';

  if (mode !== 'mock') {
    return NextResponse.json(
      { error: { message: 'Auth provider not enabled', code: 'AUTH_DISABLED' } },
      { status: 503 },
    );
  }
  const body = (await request.json().catch(() => null)) as {
    role?: 'user' | 'admin';
    email?: string;
  } | null;

  if (!body?.role) {
    return NextResponse.json(
      { error: { message: 'Role is required', code: 'VALIDATION_ERROR' } },
      { status: 400 },
    );
  }

  const session = createMockSession(body.role, body.email);
  const cookie = createSessionCookie(session);

  log({
    level: 'info',
    message: 'Mock login issued',
    requestId,
    context: { role: session.role, email: session.email }
  });

  const response = NextResponse.json({ ok: true, session }, { status: 200 });
  response.cookies.set(SESSION_COOKIE, cookie.value, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: cookie.maxAge,
    path: '/'
  });

  return response;
}
