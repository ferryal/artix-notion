## ✨ Features
- ✅ Newsletter subscription via [Convertkit API](https://github.com/tuanphungcz/nextjs-notion-blog-starter/blob/main/pages/api/subscribe-convertkit.tsx)
- ✅ Simple analytics with [Umami](https://github.com/umami-software/umami)

- ✅ Automatic OG social images with [Tailwind template](https://github.com/tuanphungcz/nextjs-notion-blog-starter/blob/main/components/OgTemplate.tsx)
- ✅ Automatic pretty URLs
- ✅ Excellent page speed
- ✅ Optimized for Next.js and Vercel

## 🛠 Build with

- **Framework**: [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Notion API](https://developers.notion.com)
- **Newsletter**: [Convertkit](https://convertkit.com/)
- **Deployment**: [Vercel](https://vercel.com)

## 📕 Project Overview

- `layouts/*` - The different layouts used on each page.
- `components/*` - Components used throughout the site.
- `components/blocks/*` - Custom blocks made for Notion rendering.
- `utils/*` - Short for "utilities", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/og-image`](https://github.com/neg4n/next-api-og-image) dynamic OG image and [`/subscribe-convertkit`](https://github.com/tuanphungcz/nextjs-notion-blog-starter/blob/main/pages/api/subscribe-convertkit.tsx) newsletter subscription.
- `pages/blog/*` - Static pre-rendered blog pages that fetch information from the Notion API.
- `pages/*` - All other static pages.
- `public/*` - Static assets including images, fonts, and videos.
- `styles/*` - global styles and Tailwind.
- `siteData.ts` - a simple file containing global data about the site.

## 🏃‍♂️ Running Locally

```bash
pnpm install
pnpm run dev
```

Create a `.env` file similar to `.env.example` and include the appropriate keys.

## 🚀 Deploy to vercel

```
NOTION_SECRET=
BLOG_DATABASE_ID=

# ConvertKit is optional
NEXT_PUBLIC_CONVERTKIT_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_API_KEY=

# Umami is optional
NEXT_PUBLIC_UMAMI_ID=
NEXT_PUBLIC_UMAMI_URL=
```