# Anesu Ticharambwa — Portfolio

A dark, cinematic portfolio site built with React, Tailwind CSS, and Framer Motion. Features an
animated circuit-board hero background, glassmorphism project cards, a scroll-triggered timeline,
an interactive academic results table, and a working contact form (via EmailJS).

## Stack

- **React 19** + **Vite** — build tooling
- **Tailwind CSS v4** — styling (config lives in `src/index.css` via `@theme`)
- **Framer Motion** — scroll reveals, page-load sequence, micro-interactions
- **React Router** — routing shell (single page today, ready to grow)
- **EmailJS** — contact form delivery, no backend required
- **lucide-react** — iconography

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Folder structure

```
src/
  components/   Reusable UI: Navbar, Hero, About, Projects, Experience,
                Academics, Contact, Footer, LoadingScreen, CustomCursor,
                CircuitBackground, SectionHeading, icons/
  pages/        Home.jsx composes all sections
  data/         projects.js, skills.js, experience.js, academics.js, socials.js
                — edit these files to update site content, no JSX changes needed
  hooks/        useTypewriter, useScrollReveal
  index.css     Design tokens (colors, fonts, animations) + global styles
  App.jsx       Router + loading screen + cursor
  main.jsx      Entry point
```

## Editing content

All personal content lives in `src/data/*.js` — update your projects, skills, experience, grades,
and social links there without touching component code.

- `data/socials.js` — **update the placeholder GitHub and LinkedIn URLs** with your real profiles.
- `data/projects.js` — swap in real GitHub repo links and live demo URLs once deployed.

## Setting up the contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with `user_name`, `user_email`, `subject`, and `message` variables,
   and note the **Template ID**.
4. Grab your **Public Key** from Account → API Keys.
5. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

Until these are filled in, the form will show a friendly fallback message pointing visitors to
your email address directly — it won't silently fail.

## Deployment

**Vercel:** `vercel.json` is already configured (SPA rewrites + asset caching). Push to a Git repo
and import it in Vercel, or run `vercel` from the project root.

**Netlify:** `netlify.toml` is already configured. Drag-and-drop the `dist/` folder after
`npm run build`, or connect the repo for continuous deploys.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (loading screen, cursor, and canvas background all degrade
  gracefully).
- Custom cursor and canvas circuit background only activate on devices with a fine pointer
  (skipped entirely on touch devices).
- Visible focus rings on all interactive elements.
- Semantic headings and alt-free decorative graphics marked `aria-hidden`.

## Notes

- Project GitHub/demo links in `data/projects.js` are placeholders (`#`) — point them at your real
  repos once they're public.
- The favicon is a small circuit-chip mark in `public/favicon.svg` — swap it for a headshot or logo
  if you'd prefer.
