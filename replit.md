# Northweb Studio on Replit

The imported website stays in `site/` and uses Astro, Tailwind CSS, TypeScript, and npm. Follow `CLAUDE.md` and the files in `design-system/` before making design or content changes.

## Running

- Runtime: Node.js 22 (22.19 or newer for the locked dependencies).
- Install dependencies: `cd site && npm ci`.
- The **Start application** workflow runs `cd site && npm run dev -- --ignore-lock`.
- `--ignore-lock` keeps Astro 7 in the foreground under Replit's workflow manager instead of auto-starting a detached background server.
- Astro listens on `0.0.0.0:5000` and accepts Replit's preview proxy hosts.
- Build: `cd site && npm run build` (output: `site/dist/`).
- Type check: `cd site && npm run typecheck`.

The current website is static and requires no API keys, database, or session secret.

## Design-system artifact

The separate visual guide lives in `design-system/visual/`. It has its own npm dependencies; installing the website's dependencies does not install this artifact's dependencies.

- Install: `cd design-system/visual && npm ci`.
- Managed workflow: **design-system/visual: web**, using the artifact's generated `pnpm --filter @workspace/northweb run dev` launcher from the artifact directory. Dependencies are installed with npm using its existing lockfile.
- Preview port: `23961` (the artifact router supplies `PORT` and `BASE_PATH`).
- Verify: `cd design-system/visual && npm run typecheck && npm run build`.