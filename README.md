# Enshrouded Guide

The ultimate fan-made companion for **Enshrouded** — meticulously researched guides, comprehensive databases, and expert strategies covering every aspect of the game.

**Live preview:** _domain pending — see "Production Notes" below_

## Features

- **20 content categories, 190+ pages** — Beginner's Guide, Skills & Builds, Character Builds, Weapons, Armor Sets, Armor Pieces, Items & Materials, Crafting, Bosses, Enemies, Map & Locations, Quests, Lore & Story, Walkthrough, Tips & Tricks, Patch Notes, Fishing, Base Building, Game Mechanics, Troubleshooting
- **Full weapon database** — 200+ weapons with stats, drop locations, and thumbnails
- **Complete armor reference** — every armor set with tier rankings, piece lists, set bonuses, and locations
- **In-game imagery** — real screenshots and official art throughout all guides
- **Per-route SEO** — unique title, description, Open Graph, and canonical URL for all 190+ pages
- **Structured data** — WebSite, BreadcrumbList, and FAQ schema markup
- **Global search** — instant search across all guides, items, and bosses
- **Fully responsive** — optimized for desktop and mobile

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tooling
- **Tailwind CSS 3** + **shadcn/ui** — styling and components
- **React Router 7** — client-side routing
- **Lucide** — icons

## Getting Started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Deployment

The production build outputs to `dist/`. SPA rewrite rules are included for common hosts:

| Host | Config | Status |
|---|---|---|
| Netlify / Cloudflare Pages | `public/_redirects` | ✅ included |
| Vercel | `vercel.json` | ✅ included |
| Apache / cPanel | `public/.htaccess` | ✅ included |

> **Note:** This is a single-page application using `BrowserRouter`. Any static host must rewrite all routes to `index.html` (handled by the configs above). GitHub Pages does **not** support this natively — prefer Netlify, Vercel, or Cloudflare Pages.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. In Cloudflare Pages, connect the repository with:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Node 20 is pinned via `.nvmrc` and `package.json` engines — no extra setup needed
3. SPA rewrites are handled by `public/_redirects` (already included)

## Going Live on a Custom Domain — Zero Config

**Just bind the domain in Cloudflare Pages. Nothing else to do.**

The site is fully domain-agnostic:

- **Runtime:** canonical and Open Graph URLs are generated from the browser's current origin (`src/config.ts`) — always correct on any domain
- **Edge:** `functions/_middleware.js` rewrites the placeholder domain in `index.html`, `sitemap.xml`, and `robots.txt` to the live hostname on every request
- **www → apex:** the middleware also issues a 301 from `www.*` to the bare domain, so Google sees a single canonical host

Buy the domain, add it as a custom domain in Cloudflare Pages, wait for the certificate — the site, sitemap, and all SEO tags instantly use the new domain. No commits, no rebuilds, no scripts.

After go-live:

1. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console
2. Verify structured data with Google's Rich Results Test

## Disclaimer

Enshrouded Guide is an unofficial fan site. Not affiliated with or endorsed by Keen Games. All game content, imagery, and trademarks are property of their respective owners.

## Author

**GEBILAOWANG** — [X (Twitter)](https://x.com/GEBILAOWANG_WYF) · [about.me](https://about.me/GEBILAOWANG)
