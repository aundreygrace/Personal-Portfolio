# Aundrey Grace — Developer Portfolio

A production-grade personal portfolio for **Aundrey Grace Taflora Wibowo**, a backend-focused junior
web developer (PHP · Laravel · PostgreSQL). Built with Next.js 16 (App Router), React 19, TypeScript
(strict), and Tailwind CSS 4, implementing the **Tectonic Parchment** design system.

## Tech stack

| Layer           | Choice                                                              |
| --------------- | ------------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router, static rendering)                           |
| UI              | React 19, Tailwind CSS 4                                            |
| Language        | TypeScript (strict mode)                                            |
| Icons           | lucide-react, plus two small local brand glyphs (GitHub/LinkedIn)   |
| Fonts           | Space Grotesk, Inter, IBM Plex Mono — self-hosted via `@fontsource` |
| Testing         | Vitest (unit/data), Playwright (e2e)                                |
| Package manager | pnpm                                                                |

No database, authentication, or server-side mutation endpoints are used — the site is fully static.
See `CLAUDE.md` for the reasoning and the standards to follow if that ever changes.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Command                        | What it does                                                         |
| ------------------------------ | -------------------------------------------------------------------- |
| `pnpm dev`                     | Start the dev server                                                 |
| `pnpm build`                   | Production build (static export of all routes)                       |
| `pnpm start`                   | Serve the production build                                           |
| `pnpm lint`                    | ESLint                                                               |
| `pnpm typecheck`               | `tsc --noEmit`                                                       |
| `pnpm format` / `format:check` | Prettier                                                             |
| `pnpm test`                    | Vitest unit tests (`src/**/*.test.ts`)                               |
| `pnpm test:e2e`                | Playwright smoke tests (`e2e/`) — run `npx playwright install` first |

## Project structure

```
src/
  app/            # routes, layout, metadata, robots/sitemap, error & not-found pages
  components/
    layout/       # Navbar, Footer, SectionWrapper
    sections/     # one file per homepage section (Hero, About, Expertise, Projects, ...)
    ui/           # Button, Badge, SectionHeading, WindowFrame, CopyButton, BrandIcons
    illustrations/# HeroTopology (hand-built SVG, not a copied asset)
  data/           # typed content modules — the single source of truth for page copy
  lib/            # constants, small utilities
  types/          # shared TypeScript interfaces for all content
public/
  images/         # real project screenshots supplied for this build
  certificates/   # real Dicoding certificate images supplied for this build
  documents/      # CV PDF
```

Content lives in `src/data/*.ts`, fully typed against `src/types/portfolio.ts`. To update copy,
edit the data module — never hardcode text inside a section component.

## Content & asset notes

- All project, experience, and certification copy comes directly from the supplied CV, PRD, and
  design spec. No metrics, dates, or claims were invented.
- The BNSP Junior Programmer certification has **no certificate image on file** — it renders as a
  text-only credential card rather than a fabricated image. Add `public/certificates/bnsp-junior-programmer.png`
  and wire it into `src/data/experience.ts` when the asset becomes available.
- The hero "topology" diagram is explicitly labeled **illustrative/conceptual** — it is a generic
  request-flow diagram, not a claimed reproduction of CariArena's actual production architecture.
- `NEXT_PUBLIC_SITE_URL` (see `.env.example`) is unset by default; canonical URLs, Open Graph, and
  the sitemap fall back to safe defaults until the production domain is confirmed.

## Security

- Headers set in `next.config.ts`: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`.
- `style-src 'unsafe-inline'` is required because Next.js and the inline SVG diagram use
  inline `style` attributes; everything else is scoped to `'self'`.
- No secrets, databases, or auth exist in this codebase. See `CLAUDE.md` for the standards to
  follow if any of that is added later.

## Known limitations in this build environment

- Playwright's browser binaries could not be downloaded in the sandboxed build environment used to
  generate this project (its CDN isn't network-reachable there). The e2e suite is written and will
  run normally with `npx playwright install && pnpm test:e2e` in a normal dev/CI environment.
- Lighthouse was not run in this environment (no headless Chrome available); the production build,
  lint, typecheck, and unit tests were all verified directly.
