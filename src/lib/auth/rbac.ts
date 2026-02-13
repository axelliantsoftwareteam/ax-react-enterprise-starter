import type { UserRole } from '@/lib/auth/session';

export type Permission = 'view:dashboard' | 'view:settings' | 'view:admin';

const rolePermissions: Record<UserRole, Permission[]> = {
  user: ['view:dashboard', 'view:settings'],
  admin: ['view:dashboard', 'view:settings', 'view:admin']
};

export function canAccess(role: UserRole, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}
