# Clairvoyant

A stunning landing page for Clairvoyant — the AI assistant that thinks ahead.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Inter

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
└── components/
    ├── Navigation.tsx   # Floating pill header
    ├── Hero.tsx         # Hero section with app preview
    ├── Problem.tsx      # Pain points section
    ├── Solution.tsx     # Comparison section
    ├── Features.tsx     # Interactive features showcase
    ├── HowItWorks.tsx   # Step-by-step guide
    ├── Waitlist.tsx     # Email capture section
    ├── Footer.tsx       # Minimal footer
    └── SmoothScroll.tsx # Lenis scroll wrapper
```

## Design System

### Colors

| Name | Value | Usage |
|------|-------|-------|
| `void` | `#050505` | Background |
| `cream` | `#f8f4eb` | Primary text |
| `amber` | `#f59e0b` | Accent, CTAs |
| `violet` | `#7c3aed` | Secondary accent |
| `burgundy` | `#7f1d1d` | Error states |
| `emerald` | `#10b981` | Success states |

### Typography

- **Display**: Playfair Display (headings)
- **Body**: Inter (paragraphs, UI)

## Deployment

This project is configured for Vercel deployment. Push to `main` to trigger automatic deploys.

```bash
# Manual deployment
vercel --prod
```

## License

Private - All rights reserved.
