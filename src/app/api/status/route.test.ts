import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/status/route';

describe('status route', () => {
  it('returns ok payload', async () => {
    const request = new Request('http://localhost/api/status', {
      headers: { 'x-request-id': 'test-request' }
    });
    const response = await GET(request);
    expect(response.status).toBe(200);

    const body = (await response.json()) as { status: string; version: string; time: string };
    expect(body.status).toBe('ok');
    expect(body.version.length).toBeGreaterThan(0);
    expect(new Date(body.time).toString()).not.toBe('Invalid Date');
  });
});
