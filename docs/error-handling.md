# Error Handling Standards

## API Errors
- API handlers must return JSON in `{ error: { message, code } }` shape for failures.
- Log errors with structured context and a stable `code` for alerting.

## UI Errors
- Surface user-friendly messages, never raw stack traces.
- Log client errors via `logger` with `level: 'warn'` or `level: 'error'`.

## Observability
- Include `requestId` when available.
- Avoid logging PII or secrets; sanitize payloads.
