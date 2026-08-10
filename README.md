# Ilan Keselman Portfolio

Personal developer portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: react-icons
- **Language**: TypeScript
- **Deployment**: Vercel

---

## Running Locally

### Prerequisites

- Node.js 18.17 or later
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/tomr0m/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Editing Content

All text copy is in `lib/content.ts`.  
Tech stack data is in `lib/skills.ts`.  
Project cards are in `lib/projects.ts`.

Edit those files. No need to touch components.

---

## Deploying to Vercel

### Option 1: Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration (recommended)

1. Push your repo to GitHub (see commands below).
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repository.
4. Leave all settings at default. Vercel auto-detects Next.js.
5. Click **Deploy**.

Every push to `main` will auto-deploy.

---

## Adding a Custom Domain in Vercel

1. Go to your project on [vercel.com](https://vercel.com).
2. Navigate to **Settings → Domains**.
3. Click **Add Domain** and enter your domain (e.g. `ilankeselman.dev`).
4. Vercel will show you DNS records to add at your registrar:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. Add those records at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).
6. Wait for DNS propagation (usually under 10 minutes with Cloudflare).

---

## Pushing to GitHub

```bash
# 1. Create a new repo on GitHub (via gh CLI)
gh repo create portfolio --public --source=. --remote=origin --push

# OR manually

# 1a. Create repo at github.com/new, then:
git remote add origin https://github.com/tomr0m/portfolio.git
git push -u origin main
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout (fonts, metadata)
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + Tailwind directives
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── content.ts       # All text copy
│   ├── skills.ts        # Tech stack by category
│   └── projects.ts      # Project card data
├── public/
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

© 2024 Ilan Keselman
