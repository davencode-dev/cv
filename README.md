# David Vendrell — Interactive CV

A single-page, scroll-driven interactive résumé. Dark editorial design, built from scratch (no template, no framework, no build step).

**Live:** _add your GitHub Pages URL here once deployed_

---

## What it is

A static site that guides a recruiter through my experience **most-important-first**:

1. **Intro** — who I am in one line
2. **The difference** — what makes my profile uncommon for Big Tech
3. **Today** — current role as Cloud Team Lead at HP
4. **Impact** — measurable outcomes
5. **Stack** — how I build
6. **Journey** — the full timeline
7. **Patents** — 8 granted international patents
8. **Contact**

## Tech

- Plain HTML + CSS + vanilla JS — **zero dependencies**, loads instantly
- `IntersectionObserver` for scroll reveals, active-section rail, and count-up stats
- Fully responsive, `prefers-reduced-motion` aware, and print-friendly (the page prints to a clean PDF)
- Fonts: Fraunces (display) + Newsreader (body) + JetBrains Mono (accents)

## Deploy to GitHub Pages (≈2 minutes)

1. Create a new repository, e.g. `cv` (or `daventor.github.io` for a root URL).
2. Upload these three files to the repo root: `index.html`, `style.css`, `script.js` (plus this README).
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → branch `main` → folder `/ (root)` → **Save**.
5. Wait ~1 minute. Your site is live at:
   - `https://<username>.github.io/cv/` (project repo), or
   - `https://<username>.github.io/` (if named `<username>.github.io`)

That URL is what you share.

### Optional: custom domain

In **Settings → Pages → Custom domain**, add e.g. `david.dev` and point a CNAME record at `<username>.github.io`.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Edit

All content lives in `index.html` as plain markup — change text directly. Colours and type are CSS variables at the top of `style.css` (`:root`).

---

© David Vendrell Tornero
