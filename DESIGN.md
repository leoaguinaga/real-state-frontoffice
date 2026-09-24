# Design System — Montara Proptech Narrative

This project's design tokens live as Tailwind CSS v4 theme variables in
[`src/styles/global.css`](src/styles/global.css). Every token below is
generated into a real Tailwind utility class automatically — there is no
separate config file (Tailwind v4 is CSS-first, via `@theme`).

**Priority: use Tailwind utility classes, not native/inline CSS.** Only reach
for a `<style>` block or plain CSS when something genuinely can't be expressed
with utilities (e.g. a third-party icon font's `@font-face`-adjacent rules,
as in `Layout.astro`'s `.material-symbols-outlined`). Everything else —
color, spacing, radius, typography, shadows — should be a class built from
the tokens below.

## Brand & tone

High-end proptech for investors, luxury homebuyers, and tier-one developers.
**Architectural Minimalism** + **Tactile Glassmorphic Precision**: deep
botanical solidity, airy pristine canvas, editorial-gallery layout where
imagery/typography/metrics carry the design — no neon gimmicks, no generic
stock badges. Motion is fluid and restrained (150–250ms ease-out).

## Colors

| Token (`--color-*`) | Value | Tailwind classes | Use |
|---|---|---|---|
| `primary` | `#0B2824` | `bg-primary` `text-primary` `border-primary` | Dark institutional containers, headers, primary text on light surfaces |
| `primary-elevated` | `#153B36` | `bg-primary-elevated` | Hover state on dark containers, active nav pills |
| `accent` | `#0CA65D` | `bg-accent` `text-accent` | CTAs, active states, financial return callouts |
| `accent-hover` | `#098C4E` | `bg-accent-hover` | Hover/pressed state for accent elements |
| `background` | `#F7F9F8` | `bg-background` | Page canvas |
| `surface` | `#FFFFFF` | `bg-surface` | Cards, modals, tables |
| `surface-tinted` | `#EEF3F0` | `bg-surface-tinted` | Nested groupings, attribute grids, filter tracks |
| `text` | `#10231F` | `text-text` | Primary high-contrast copy |
| `text-muted` | `#65736F` | `text-text-muted` | Secondary/muted copy |
| `text-accent` | `#0CA65D` | `text-text-accent` | Emphasized inline copy |
| `outline` | `#E1E8E5` | `border-outline` | Default dividers/borders |
| `outline-strong` | `#E5EBE8` | `border-outline-strong` | Secondary dividers |
| `outline-accent` | `#A3E5C4` | `border-outline-accent` | Hover border on cards, available-status border |
| `error` / `on-error` / `error-container` / `on-error-container` | `#BA1A1A` / `#FFFFFF` / `#FFDAD6` / `#93000A` | `bg-error`, `text-on-error`, … | Form/system error states |

### Status palette

| Status | bg | text | border |
|---|---|---|---|
| Available | `bg-status-available-bg` | `text-status-available-text` | `border-status-available-border` |
| Upcoming | `bg-status-upcoming-bg` | `text-status-upcoming-text` | `border-status-upcoming-border` |
| Sold out | `bg-status-sold-bg` | `text-status-sold-text` | `border-status-sold-border` |

## Typography

Two families, loaded via Google Fonts in `Layout.astro`:

- **`font-display`** → Plus Jakarta Sans — headings, hero statements, development names. Tight negative tracking.
- **`font-body`** → Inter — body copy, spec sheets, legal disclosures, data tables.

Each named size below is a single Tailwind class carrying font size, line
height, letter spacing, and weight together (e.g. `text-headline-lg`):

`text-display`, `text-display-mobile`, `text-headline-lg`,
`text-headline-lg-mobile`, `text-headline-md`, `text-headline-sm`,
`text-title-lg`, `text-title-md`, `text-body-lg`, `text-body-md`,
`text-body-sm`, `text-label-md`, `text-label-sm`, `text-caption`.

Swap between the `-mobile` and desktop variant with responsive prefixes,
e.g. `class="text-display-mobile md:text-display"`.

For unit pricing, coordinates, and investment metrics, add the
`tabular-data` utility (maps to `font-variant-numeric: tabular-nums`) so
figures align vertically across comparison cards.

## Layout & spacing

- Page container: `container-page` utility — `max-width: 1440px`, centered,
  with responsive outer margins (20px mobile / 40px tablet / 80px desktop)
  matching the spec's mobile/tablet/desktop margin steps.
- Grid: rely on Tailwind's built-in `grid-cols-4` (mobile) /
  `grid-cols-8` (tablet, `md:`) / `grid-cols-12` (desktop, `lg:`).
- 8pt rhythm spacing tokens (usable on any spacing utility — `p-`, `gap-`,
  `m-`, etc.): `spacing-xs` (4px) → `spacing-sm` (8px) → `spacing-md` (16px)
  → `spacing-lg` (24px) → `spacing-xl` (40px) → `spacing-2xl` (64px) →
  `spacing-3xl` (96px). Example: `gap-spacing-lg`, `py-spacing-3xl`.
- Layout gutters/margins: `spacing-gutter(-mobile|-desktop)`,
  `spacing-margin(-mobile|-desktop)`.

## Elevation

- `shadow-level-1` — resting property/interactive cards.
- `shadow-level-2` — hover state on cards (pair with `hover:border-outline-accent`).
- `shadow-level-3` — sticky nav, lead-funnel modals (pair with a frosted
  surface: `bg-white/90 backdrop-blur-md border border-white/80`).
- `shadow-cta-hover` — hover shadow specifically for the accent CTA button.
- Level 4 (gallery lightbox/drawers) has no fixed shadow token — build the
  scrim directly with `bg-primary/75 backdrop-blur-sm`.

## Shape

- `rounded-input` (8px) — inputs, dropdowns, tabular cells.
- `rounded-card` (20px) — property cards and large layout containers wrapping imagery.
- `rounded-pill` (equivalent to Tailwind's built-in `rounded-full`) — CTAs, status badges, chips, modal dismiss buttons.

## Components (reference patterns)

- **Primary CTA**: `bg-accent text-white font-label-md rounded-pill px-6 py-3 hover:bg-accent-hover hover:shadow-cta-hover hover:-translate-y-px transition`.
- **Secondary (institutional) button**: `border-[1.5px] border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition`.
- **Ghost button**: `text-primary hover:bg-surface-tinted hover:text-accent transition`.
- **Property card**: `bg-surface border border-outline rounded-card` with a `16:10`/`21:9` media block (`hover:scale-[1.03] transition duration-400` on the image), `shadow-level-1` at rest, `shadow-level-2` + `border-outline-accent` on hover.
- **Status badge**: `h-[26px] rounded-pill px-2.5` + the relevant status color trio above.
- **Filter chip**: unselected `bg-surface border border-outline text-text`; selected `bg-primary border-primary text-white`.
- **Input**: `h-12 bg-surface border border-outline rounded-input focus:ring-2 focus:ring-accent focus:ring-offset-1`.
- **Header nav**: `fixed top-0 h-[72px] bg-white/90 backdrop-blur-md border-b border-outline`.

## Motion

Default transition timing for hover/interactive states: `duration-150` to
`duration-250` with `ease-out`. Card image zoom uses `duration-400`.
