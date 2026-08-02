# AGENTS.md

Next.js 16 (App Router) + React 19 + Tailwind v4 + Framer Motion digital wedding invitation, deployed on Netlify. All UI content is in Spanish. Package manager is pnpm.

## Commands

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` / `pnpm start` — production build/run
- `pnpm lint` / `pnpm lint:fix` — ESLint (flat config)
- `pnpm test` — Jest (jsdom + ts-jest + Testing Library)
- Single test file: `pnpm test tests/ceremony/CountdownSection.test.tsx`
- Guest/utility scripts are plain Node:
  - `node src/guests/generateLinks.js` — prints all guest URLs (needs `NETLIFY_URL`)
  - `node src/guests/encrypt-guests.js` / `node src/guests/decrypt-guests.js`
  - `node src/_shared/extract-images.js` — re-extract PNGs from `public/wedding_edit.svg`
- `pnpm docs` — TypeDoc → `docs/` (gitignored). NOTE: `typedoc.json` entryPoints include a `scripts/` dir that no longer exists; docs generation is currently broken.

## Architecture

- `app/` contains only thin "framework adapter" files that re-export from `src/` — never put logic there.
- All real code lives in `src/` grouped by domain: `invitation/`, `ceremony/`, `guests/`, `rsvp/`, `venue/`, `_shared/`.
- Path aliases (`@/invitation/*`, `@/guests/*`, `@/ceremony/*`, `@/venue/*`, `@/rsvp/*`, `@/shared/*` → `src/_shared/*`) are defined in BOTH `tsconfig.json` and `jest.config.js` — keep them in sync when changing.
- Guest registry: `src/guests/guests.json`, entries `{ id, name, amount }` (`amount` is a string). Route `app/[id]/page.tsx` looks up by id; unknown ids render "Invitado no encontrado".
- All wedding content (names, date 18-04-2026, venues, map links, WhatsApp numbers, dress-code colors, RSVP deadline) is centralized in `src/invitation/invitation.constants.ts`. Edit constants, never hardcode text.

## Environment

- `.env` (gitignored) is required; copy `.env.example`. Vars: `NETLIFY_URL`, `ALGORITHM` (`aes-256-cbc`), `PASSWORD`.
- Next.js auto-loads `.env`, but the encrypt/decrypt scripts do NOT load dotenv (only `generateLinks.js` imports `dotenv/config`). Export `ALGORITHM`/`PASSWORD` in the shell before running them or they throw.

## Testing conventions

- Tests live in `tests/`, mirroring `src/` structure (e.g. `tests/ceremony/` → `src/ceremony/`).
- `jest.setup.js` globally mocks `framer-motion`, `next/dynamic`, `@/invitation/WeddingInvitation`, and `@/invitation/GradientOverlays`; tests render these as plain elements.
- Node-based script tests use `@jest-environment node`.

## Git / CI

- CI (`.github/workflows/ci.yml`) runs lint → test → build on Node 22 & 24, triggered on `master` and `feature-*` branches. Use `feature-*` branch names.
