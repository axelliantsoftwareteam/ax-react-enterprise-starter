# Lighthouse & Performance Checklist

## Build & Bundle
- Run `npm run build` locally before release.
- Ensure dynamic imports for heavy client components.
- Keep third-party scripts minimal and async.

## Core Web Vitals
- Avoid layout shifts: set width/height on images.
- Ensure LCP elements are server-rendered when possible.
- Keep TBT low by reducing client JS and hydration costs.

## Runtime
- Cache server responses where safe.
- Use React Query stale times for read-heavy endpoints.
- Disable debug logging in production.

## Monitoring
- Track Web Vitals and send to analytics provider.
- Alert on sustained LCP > 2.5s or INP > 200ms.
