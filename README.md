# DevHub Developer Portal MVP

This is a brand-neutral developer portal MVP built with Next.js App Router,
TypeScript, and Tailwind CSS.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Main files

- `src/app/page.tsx`: homepage layout.
- `src/app/layout.tsx`: global app shell and metadata.
- `src/app/globals.css`: Tailwind setup and shared global styles.
- `src/data/site.ts`: all navigation, product, use case, news, and footer data.
- `src/components/*`: reusable page sections and UI components.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com and import the repository.
3. Keep the default Next.js settings.
4. Click Deploy.
