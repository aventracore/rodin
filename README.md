# PulseTrack — Social Media Analytics SaaS

Production-ready Next.js 14 SaaS marketing site + dashboard. Deployed on Vercel.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (CSS variables) + Framer Motion
- React Three Fiber (3D hero) + Recharts
- Radix UI + next-themes (Light/Dark)
- MDX blog, next-seo, next-sitemap
- next-pwa (PWA), Jest + RTL

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Test
```bash
npm test
```

## Deploy
Push to GitHub and connect the repo in Vercel. Ensure `SITE_URL` env is set for sitemap generation.

## Notes
- Images pulled from Unsplash via Next Image remote patterns.
- PWA icons use SVG to avoid binary files in repo. Replace with PNGs for store-grade PWA if needed.