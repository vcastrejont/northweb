---
name: Browser verification
description: Runtime mismatch when using shell Playwright for interactive checks in this environment.
---

The environment's shell-accessible Playwright package and installed browser revision may differ. Use the Chromium executable already running for the preview when the default Playwright browser path is absent.

**Why:** Browser checks failed because Playwright selected a missing headless-shell revision even though preview screenshots worked with an installed Chromium.

**How to apply:** When interactive verification needs shell Playwright, inspect running Chromium processes to locate the installed executable and pass it as `executablePath`. Do not install another browser or hardcode a Nix store path into application code.

Browser availability does not imply Playwright is installed. When an automation library is unavailable, interactive checks can use Chromium's DevTools protocol with Node's built-in WebSocket instead of adding application dependencies.

**Why:** The environment provides Chromium independently of browser automation packages.

**How to apply:** Check the provided Chromium launcher before searching large filesystem trees or installing testing packages.