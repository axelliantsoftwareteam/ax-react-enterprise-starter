# Repository Conventions

## Folder Structure
- `src/app`: Next.js App Router routes and layouts.
- `src/components`: Reusable UI and layout components.
- `src/lib`: Business logic, API clients, auth, state, and observability.
- `docs`: Engineering standards and operational guidance.

## Naming
- Files and folders use kebab-case for routes and lowerCamelCase for modules.
- Components use PascalCase filenames and exports.
- Hooks start with `use` and live in `src/lib` or `src/components`.

## Import Boundaries
- `app` can import from `components` and `lib` only.
- `components` can import from `lib` only.
- `lib` must not import from `app` or `components`.

## Styling
- Global styles live in `src/app/globals.css`.
- UI components expose a minimal API and accept `className` for extension.

## Environments
- All environment variables are documented in `.env.example` and README.
- Never commit real secrets or credentials.
