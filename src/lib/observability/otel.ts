import { log } from '@/lib/observability/logger';

export function initOpenTelemetry() {
  if (process.env.OTEL_ENABLED !== 'true') return;

  log({
    level: 'info',
    message: 'OpenTelemetry stub initialized',
    context: {
      exporter: 'stub',
      serviceName: process.env.NEXT_PUBLIC_APP_NAME || 'ax-enterprise-starter'
    }
  });
}
