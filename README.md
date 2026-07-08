# Get Morganized — Resume Writing Business Website

[![CI](https://github.com/CydVilla/get-morganized/actions/workflows/ci.yml/badge.svg)](https://github.com/CydVilla/get-morganized/actions/workflows/ci.yml)

A modern, responsive single-page React website for **Get Morganized LLC**, a professional resume writing service. Live at **[getmorganizedtoday.com](https://getmorganizedtoday.com)**.

## Overview

The site is a single page with anchor-linked sections:

- **Hero** — headline, call to action, and headline stats
- **About** — company story, why-choose-us features, "Meet Morgan", and community partnerships
- **Reviews** — Google reviews embedded via an [Elfsight](https://elfsight.com/) widget
- **Instagram** — Instagram feed embedded via an Elfsight widget
- **Contact** — links to a Google Form where clients submit details and upload their resume
- **Header / Footer** — navigation and business contact info

## Tech Stack

- **React 19** + **TypeScript 5**
- **Create React App** (`react-scripts` 5) for build/dev tooling
- **CSS3** — one stylesheet per component, mobile-first responsive design
- **GitHub Pages** hosting with a custom domain, deployed automatically via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ (CI builds on Node 22)
- npm

### Installation

```bash
npm install
```

> This project pins TypeScript 5 while `react-scripts` still advertises an older
> optional TypeScript peer range. An `.npmrc` sets `legacy-peer-deps=true` so
> `npm install` and `npm ci` behave consistently — no extra flags needed.

### Run locally

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` — run the app in development mode with hot reload
- `npm test` — run the test suite (Testing Library + Jest)
- `npm run build` — produce an optimized production build in `build/`
- `npm run deploy` — build and publish to the `gh-pages` branch manually (see below)

## Project Structure

```
public/
├── index.html          # HTML template: meta tags, Open Graph, JSON-LD structured data
├── robots.txt          # Crawler directives
├── sitemap.xml         # Sitemap for search engines
├── manifest.json       # PWA metadata
├── CNAME               # Custom domain (getmorganizedtoday.com)
├── 404.html            # Fallback page + client-side redirects for old URLs
├── headshot.jpeg       # Morgan's photo (About section)
└── logo-morganized.png # Logo / social share image

src/
├── components/
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Reviews.tsx     # Elfsight Google reviews widget
│   ├── InstagramFeed.tsx # Elfsight Instagram widget
│   ├── Contact.tsx     # Google Form call to action
│   ├── Footer.tsx      # Footer with contact + social links
│   └── *.css           # Component-specific styles
├── App.tsx             # Composes the sections into the page
├── App.css             # Global styles (container, buttons, section headers)
└── index.tsx           # App entry point

.github/workflows/
├── ci.yml              # Build + test on every push/PR to main
└── deploy.yml          # Build + deploy to GitHub Pages on merge to main
```

## Deployment

The site is served by **GitHub Pages from the `gh-pages` branch**, at the custom
domain defined in `public/CNAME`.

- **Automatic:** on every merge to `main`, the **CI** workflow runs first
  (build + test). Only if it passes does `.github/workflows/deploy.yml` run —
  it is triggered by CI's successful completion — building the app and
  publishing `build/` to the `gh-pages` branch. You can also trigger a deploy
  manually from **Actions → Deploy to GitHub Pages → Run workflow**.
- **Manual (local):** `npm run deploy` does the same thing from your machine using
  the `gh-pages` package.

`public/CNAME` is copied into the build output, so the custom domain is preserved
on every deploy.

## Common Updates

### Business information

Phone (`914-786-2282`), email (`hello@getmorganizedtoday.com`), and location live
in `src/components/Footer.tsx`, `src/components/About.tsx`, and
`src/components/Contact.tsx`. Keep the matching values in the JSON-LD structured
data in `public/index.html` in sync.

### Reviews & Instagram widgets

Both are [Elfsight](https://elfsight.com/) apps loaded from
`static.elfsight.com`. Edit the widget content in the Elfsight dashboard; to swap
a widget, update its `elfsight-app-<id>` class in `Reviews.tsx` /
`InstagramFeed.tsx`.

### Contact form

`src/components/Contact.tsx` links to a Google Form for resume submissions. Update
the form URL there to change the destination.

### SEO

Metadata, Open Graph/Twitter tags, and JSON-LD structured data are in
`public/index.html`; crawler and indexing config is in `public/robots.txt` and
`public/sitemap.xml`.

## Browser Support

Latest Chrome, Firefox, Safari, and Edge, plus modern mobile browsers
(iOS Safari, Chrome for Android).

## License

Created for Get Morganized LLC. All rights reserved.
