# Agentic Codex Capabilities

A Next.js application that showcases everything the autonomous Agentic Codex developer can deliver—from research and planning to production deployment.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally. The production build runs with:

```bash
npm run build
npm start
```

## Project Structure

- `app/` – App Router pages and global layout
- `components/` – Reusable UI building blocks for the capability sections
- `app/globals.css` – Global theme styling

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules-free global styling

## Deployment

This project is ready for Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-ae692373
```
