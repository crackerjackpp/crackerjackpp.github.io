# CrackerJack People Partners - Developer Reference

## Tech Stack
- **React 18** with TypeScript
- **React Router DOM** (HashRouter for GitHub Pages)
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **GitHub Pages** deployment

## Project Structure
```
src/
├── App.tsx              # Main app with routing (9 routes)
├── index.tsx           # Entry point
├── types.ts            # TypeScript interfaces
├── constants.ts        # Static data (nav, case studies, company info)
├── components/         # Reusable UI components
│   ├── Header.tsx      # Responsive nav with dropdowns
│   ├── Footer.tsx      # Site footer
│   ├── Button.tsx      # Polymorphic button (3 variants)
│   ├── Card.tsx        # Card component
│   └── ScrollToTop.tsx # UX enhancement
└── pages/              # Route components (9 pages)
    ├── HomePage.tsx
    ├── ServicesPage.tsx
    └── ... (7 more pages)
```

## Key Features
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Navigation**: Sticky header with dropdown menus
- **Routing**: HashRouter for static hosting compatibility
- **Components**: Polymorphic Button, responsive Header
- **Data**: Centralized in constants.ts (nav links, case studies)

## Business Model
**CrackerJack People Partners** - HR consulting services:
1. Fractional Talent (part-time executives)
2. HR Advisory (strategic guidance)
3. Leadership & Team Coaching

## Deployment
- **Source**: `source` branch (development)
- **Live**: `main` branch (built static files)
- **Domain**: `crackerjack-people.com`
- **Build**: `npm run build && npm run deploy`

## Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Build for production
npm run deploy      # Deploy to GitHub Pages
```

## Architecture Notes
- Uses HashRouter for GitHub Pages compatibility
- Tailwind with custom color scheme (slate/indigo)
- TypeScript interfaces for type safety
- Centralized data management in constants.ts
- Mobile-responsive with hamburger menu
