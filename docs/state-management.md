# State Management Standards

## When to Use What
- React Query: server state (remote data, caching, retries).
- Zustand: client state (UI preferences, local toggles, transient state).
- React state: component-local concerns only.

## Rules
- Keep Zustand stores small and focused.
- Prefer selectors and derived data over duplicating state.
- All server mutations must invalidate or update React Query caches.
- Do not store secrets or tokens in Zustand; rely on httpOnly cookies.

## Examples
- Server state: `/api/status` is fetched via React Query in `src/app/dashboard/page.tsx`.
- Client state: settings preferences are stored in `src/lib/state/useSettingsStore.ts`.
