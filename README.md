# Whatbytes Frontend Assignment

A product listing, product detail, and cart flow built with Next.js (App Router), TypeScript, and Tailwind CSS.

**Live demo:** [whatbytes-sandy-mu.vercel.app](https://whatbytes-sandy-mu.vercel.app/)

## Features

- Product listing (`/`) with a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Category, price range, and brand filters, synced to the URL (`?category=&price=&brand=&search=`)
- Search by product title
- Product detail pages (`/product/[id]`) with quantity selector and reviews
- Cart (`/cart`) with quantity controls, item removal, and a price summary
- Cart state persisted to `localStorage` via React Context
- Empty-state messaging when no products match the current filters

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next available port) to view it.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [lucide-react](https://lucide.dev) for icons

## Project Structure

```
app/                 routes: / , /product/[id] , /cart
components/          UI components
context/             cart state (Context + localStorage)
data/                mock product dataset
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a new deployment.
