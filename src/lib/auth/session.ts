import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export type UserRole = 'user' | 'admin';
export type Session = {
  email: string;
  role: UserRole;
};

export const SESSION_COOKIE = 'ax_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const encode = (value: string) =>
  typeof Buffer !== 'undefined' ? Buffer.from(value, 'utf8').toString('base64') : btoa(value);
const decode = (value: string) =>
  typeof Buffer !== 'undefined' ? Buffer.from(value, 'base64').toString('utf8') : atob(value);

export function createSessionCookie(session: Session): { value: string; maxAge: number } {
  return {
    value: encode(JSON.stringify(session)),
    maxAge: SESSION_MAX_AGE
  };
}

export function parseSession(raw?: string | null): Session | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decode(raw)) as Session;
    if (!parsed?.email || !parsed?.role) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getSessionFromCookies(): Session | null {
  const store = cookies();
  return parseSession(store.get(SESSION_COOKIE)?.value);
}

export function getSessionFromRequest(request: NextRequest): Session | null {
  return parseSession(request.cookies.get(SESSION_COOKIE)?.value);
}

export function clearSessionCookie(): { value: string; maxAge: number } {
  return { value: '', maxAge: 0 };
}
