# sartaj.dev

Personal portfolio and writing site for Sartaj Alam.

Live site: [sartajalam.in](https://sartajalam.in)

## Overview

This project is a Next.js portfolio focused on presenting Sartaj Alam as a full stack web developer. It includes a responsive landing page, project case studies, work experience, skills, contact details, and custom blog pages.

The production domain is configured in `src/lib/site.js`:

```js
export const SITE_URL = "https://sartajalam.in";
```

Keep this value aligned with the real public domain because it powers canonical URLs, sitemap links, RSS links, Open Graph metadata, and structured data.

## Tech Stack

- Next.js 15 with the App Router
- React 19
- SCSS and Tailwind CSS
- GitHub Pages deployment
- Google Analytics and webmaster verification support through environment variables

## Main Features

- Responsive portfolio homepage
- Project listing and project detail pages
- Work experience listing and detail pages
- Skills page
- Contact page
- Independent blog pages under `src/app/blogs/<slug>/page.js`
- SEO metadata, canonical URLs, sitemap, robots file, RSS feed, Open Graph image, and JSON-LD structured data

## Local Development

```bash
npm install
npm run dev
```

Before publishing:

```bash
npm run lint
npm run build
```

## Add a Blog Article

Each article is an independent Next.js page, so every blog can have its own layout and design.

1. Create `src/app/blogs/<article-slug>/page.js`.
2. Add that article's metadata and JSON-LD inside the page file.
3. Add the article's discovery-card data to `blogPosts` in `src/lib/site.js`.
4. The blog archive, homepage cards, sitemap, and RSS feed will pick it up from that registry.

## SEO Integrations

The project supports these optional free integrations:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

### Google Analytics ID

Use `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` for the GA4 measurement ID.

1. Open Google Analytics.
2. Go to Admin.
3. Open Data streams.
4. Select the Web stream for `sartajalam.in`.
5. Copy the Measurement ID, usually like `G-XXXXXXXXXX`.

This project already has `G-PVNFWHGN9B` as the default measurement ID in `src/components/GoogleAnalytics.js`. Adding `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` in GitHub Actions variables is still useful if the ID changes later.

### Google Search Console Verification

Use `GOOGLE_SITE_VERIFICATION` for the value inside Google's HTML meta tag.

Example tag from Google:

```html
<meta name="google-site-verification" content="abc123xyz" />
```

Use only this value:

```env
GOOGLE_SITE_VERIFICATION=abc123xyz
```

After deployment, verify the site in Search Console and submit:

```text
https://sartajalam.in/sitemap.xml
```

### Bing Webmaster Verification

Use `BING_SITE_VERIFICATION` for the value inside Bing's meta tag.

Example tag from Bing:

```html
<meta name="msvalidate.01" content="ABC123XYZ" />
```

Use only this value:

```env
BING_SITE_VERIFICATION=ABC123XYZ
```

## GitHub Pages Environment Variables

Do not commit `.env.local` to GitHub. For GitHub Pages deployment, add these values as GitHub Actions repository variables.

1. Open the GitHub repository.
2. Go to Settings.
3. Open Secrets and variables.
4. Open Actions.
5. Select the Variables tab.
6. Add these repository variables:

```text
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
GOOGLE_SITE_VERIFICATION
BING_SITE_VERIFICATION
```

The workflow in `.github/workflows/nextjs.yml` passes these variables into the Next.js build step. After updating variables, rerun the GitHub Pages workflow or push to the `prod` branch.

For local development, copy `.env.example` to `.env.local` and add the same values there.

`GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` are optional. If they are empty, deployment will still work; the site just will not include those verification meta tags until values are added.
