import { NextResponse } from 'next/server';
import { log } from '@/lib/observability/logger';

export async function GET(request: Request) {
  const requestId = request.headers.get('x-request-id') || undefined;

  const payload = {
    status: 'ok' as const,
    time: new Date().toISOString(),
    version: process.env.APP_VERSION || '0.1.0'
  };

  log({
    level: 'info',
    message: 'Status check',
    requestId,
    context: payload
  });

  return NextResponse.json(payload, { status: 200 });
}
