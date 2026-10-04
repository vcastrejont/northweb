# Northweb Studio — Claude Code Instructions

## Identity

Northweb Studio is a digital design and development studio focused on websites, e-commerce, CRM/business systems and web applications.
Specializing in:

- Websites
- E-commerce
- CRM & business systems
- Web applications
- Integrations and automation
- Accessibility and UX

It is NOT positioned primarily as a social-media marketing agency.

## Required context

Before making design, UX, content, or frontend decisions, read:

- `design-system/DESIGN-SYSTEM.md`
- `design-system/tokens.json`
- `README.md`

Treat the design system as the source of truth.

## Technology

The production website lives in `/site`.

Preferred stack:

- Astro
- Tailwind CSS
- TypeScript
- Semantic HTML
- Lucide Icons
- Inter for UI/body
- Merriweather selectively for display/editorial headlines

Priorities:

1. Accessibility
2. Performance
3. SEO
4. Responsive design
5. Semantic HTML
6. Maintainability
7. Visual polish

## Package manager

Use npm for dependency management.

Do not use pnpm or yarn unless explicitly requested.

## Brand

Primary: `#F26522`
Secondary: `#4CAF50`
Dark: `#2F3E46`
Slate: `#6B7884`
Light gray: `#E9EEF2`
White: `#FFFFFF`

Do not introduce recurring brand colors without updating the design system.

## Visual direction

Modern, premium, editorial, technical, approachable, precise.

Avoid:

- Generic agency templates
- Excessive gradients
- Neon aesthetics
- Heavy glassmorphism
- Excessive pill-shaped UI
- Overly rounded interfaces
- Generic corporate stock photography
- Unnecessary animation

Favor strong typography, whitespace, clear hierarchy, subtle borders, restrained shadows, intentional orange accents, and editorial composition.

## Accessibility

Target WCAG 2.2 AA.

Always provide semantic HTML, logical heading hierarchy, keyboard navigation, visible focus states, accessible form labels, sufficient contrast, meaningful alt text, reduced-motion support, and 44x44px minimum interactive targets where practical.

Focus:
`outline: 3px solid #F26522;`
`outline-offset: 3px;`

Respect `prefers-reduced-motion`.

## Component architecture

Inside `/site/src`:

- `components/` — reusable UI primitives
- `sections/` — page-level sections
- `layouts/` — shared layouts
- `pages/` — routes
- `styles/` — global styles/tokens
- `assets/` — imported site assets

Avoid unnecessary duplication.

## Tailwind

Prefer semantic theme tokens over arbitrary hex values.

Avoid:
`bg-[#F26522]`

Prefer:
`bg-primary`

If a recurring token is missing, update the design system before introducing it throughout the codebase.

## Content voice

Clear, confident, knowledgeable, human, direct.

Prefer: Diseñamos, Construimos, Desarrollamos, Conectamos, Automatizamos, Mejoramos.

Avoid clichés such as: Revolucionamos, Disruptivo, Soluciones 360°, Sinergias, Los mejores.

Demonstrate expertise rather than claiming superiority.

## Implementation discipline

Inspect existing code before changing it. Prefer small, coherent changes. After implementation, check responsive behavior, keyboard interaction, focus states, contrast, semantic structure, and run available lint/build/type checks.
