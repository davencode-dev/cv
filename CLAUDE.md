# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

**Local preview:**
```
python3 -m http.server 8000
```
No build step, no package manager, no dependencies. Serve and open `http://localhost:8000`.

**Deploy:** Push to `main` → GitHub Pages serves it automatically (`.nojekyll` marker is present).

## Architecture

Zero-dependency static site — three files:

- `index.html` — All content and page structure. Eight scroll chapters: Intro, Hook, Now, Impact, Stack, Journey, Patents, Contact.
- `style.css` — Design system. All theming is through CSS custom properties at the top of `:root`. Edit colors, fonts, spacing there first before touching anything else.
- `script.js` — Four `IntersectionObserver`-driven features: scroll reveals, nav rail active-state tracking, count-up animations for stats, and desktop parallax on the intro counter.

**Navigation:** A fixed right-side rail with 8 dots maps 1:1 to the 8 `<section>` chapters. The JS updates the active dot by watching which section intersects the viewport.

**Responsive:** Breakpoints at 880px (tablet) and 560px (mobile) via `@media`. Fluid sizing uses `clamp()` throughout. Print layout is handled by `@media print` — it strips UI chrome and switches to black-on-white.

## Content Editing

- Text, links, dates, job descriptions → edit `index.html` directly in the relevant `<section>`.
- Colors, fonts, spacing → edit CSS custom properties in the `:root` block at the top of `style.css`.
- Patent links use direct Google Patents URLs embedded in `index.html`.
