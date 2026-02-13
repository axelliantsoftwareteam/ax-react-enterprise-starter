import { describe, it, expect } from 'vitest';
import { canAccess } from '@/lib/auth/rbac';

describe('rbac', () => {
  it('allows admin access to admin permission', () => {
    expect(canAccess('admin', 'view:admin')).toBe(true);
  });

  it('denies user access to admin permission', () => {
    expect(canAccess('user', 'view:admin')).toBe(false);
  });
});
