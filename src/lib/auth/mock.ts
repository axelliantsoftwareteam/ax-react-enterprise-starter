import type { Session, UserRole } from '@/lib/auth/session';

export function createMockSession(role: UserRole, email?: string): Session {
  const safeEmail = email?.trim() || (role === 'admin' ? 'admin@axelliant.com' : 'user@axelliant.com');
  return {
    email: safeEmail,
    role
  };
}
