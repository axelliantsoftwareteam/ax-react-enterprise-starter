import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { buildApiUrl } from '@/lib/api/client';

describe('api client', () => {
  const original = process.env.NEXT_PUBLIC_API_BASE_URL;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = '';
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = original;
  });

  it('returns relative path when base url is empty', () => {
    expect(buildApiUrl('/api/status')).toBe('/api/status');
  });

  it('builds full url when base url is set', () => {
    process.env.NEXT_PUBLIC_API_BASE_URL = 'https://api.example.com';
    expect(buildApiUrl('/api/status')).toBe('https://api.example.com/api/status');
  });
});
