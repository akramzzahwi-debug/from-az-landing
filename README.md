# From A/Z — Website

One-page conversion site for From A/Z studio. Built with Next.js 16, TailwindCSS v4, next-intl (EN/SL), and Framer Motion.

---

## Pre-launch checklist (your jobs)

- [ ] Register `from-az.com` at Namecheap / GoDaddy
- [ ] Set up `info@from-az.com` email (Zoho Mail free tier works)
- [ ] Create Cal.com link → replace all `href="#"` on CTA buttons
- [ ] Add real images to `FeaturedClient.tsx` (replace IMAGE PLACEHOLDER divs)
- [ ] Review Slovenian copy with a native speaker
- [ ] Add `public/og-image.png` (1200×630) — use Figma or Canva
- [ ] Add `public/favicon.ico` + `public/favicon.svg`
- [ ] Sign up for Plausible (plausible.io) → domain `from-az.com`

---

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial"
git remote add origin <your-github-repo-url>
git push -u origin main

# 2. Import to Vercel
# → vercel.com/new → Import Git Repository → Deploy

# 3. Add custom domain
# Vercel dashboard → Settings → Domains → Add → from-az.com
# Update DNS: A record → 76.76.21.21 (Vercel IP)
```

## Project structure

```
from-az/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      ← fonts, metadata, schema, Plausible
│   │   └── page.tsx        ← assembles all sections
│   ├── globals.css          ← CSS variables / design tokens
│   ├── layout.tsx           ← root shell (minimal)
│   ├── page.tsx             ← redirects / to /en
│   └── not-found.tsx        ← 404 page
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx             ← update Cal.com link
│   ├── ProblemBlock.tsx
│   ├── Pillars.tsx
│   ├── FeaturedClient.tsx   ← update images + Cal.com link
│   ├── Process.tsx
│   ├── Pricing.tsx          ← update Cal.com links
│   ├── About.tsx
│   ├── FinalCTA.tsx         ← update Cal.com link
│   ├── Footer.tsx
│   ├── LangToggle.tsx
│   └── FadeUp.tsx           ← scroll animation wrapper
├── messages/
│   ├── en.json              ← all English copy
│   └── sl.json              ← all Slovenian copy (needs native review)
├── i18n/
│   ├── routing.ts           ← locale config
│   └── request.ts           ← message loading
├── proxy.ts                 ← Next.js 16 locale routing proxy
└── next-sitemap.config.js
```

## Replacing placeholder content

### Cal.com booking link
Search for `href="#"` on all CTA buttons in `Hero.tsx`, `Pricing.tsx`, `FinalCTA.tsx`, `Nav.tsx`, `Footer.tsx`. Replace `"#"` with your Cal.com link.

### Project images
In `FeaturedClient.tsx`, replace the placeholder `<div>` blocks with:
```tsx
import Image from "next/image";
<Image src="/assets/369-place.jpg" alt="369 Place venue" fill className="object-cover" />
```
Drop images into `public/assets/`.

### Nano Banana 3D asset
In `Hero.tsx`, uncomment and populate the commented-out block marked `NANO BANANA ASSET HERE`.

---

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | Framework |
| TypeScript | 5 | Types |
| TailwindCSS | 4 | Styling |
| next-intl | 4 | EN/SL i18n |
| Framer Motion | 12 | Scroll animations |
| Plausible | — | Privacy-first analytics |
| next-sitemap | 4 | Sitemap generation |

---

## Cost breakdown

| Item | Cost |
|------|------|
| Domain (`from-az.com`) | ~£10/yr |
| Email (`info@from-az.com`, Zoho free) | £0 |
| Vercel hosting (free tier) | £0 |
| Plausible analytics (free 30 days, then £9/mo) | £0–9/mo |
| Cal.com (free tier) | £0 |
