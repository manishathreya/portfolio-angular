# Manish Athreya — Portfolio (Angular)

A single-page, data-driven portfolio built from your resume, using Angular 17
standalone components and Tailwind CSS.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio-angular`. Deploy that folder to any static
host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Updating your content

You should almost never need to touch a template. Everything on the page —
your name, summary, skills, experience, projects, achievements, education,
and contact links — comes from one file:

```
src/app/core/data/portfolio-data.ts
```

Edit the arrays there and every section re-renders automatically.

## Adding a profile photo or resume PDF

Drop files into `src/assets/` (e.g. `src/assets/resume.pdf`) and reference
them with a root-relative path like `assets/resume.pdf` from any component.

## Folder structure

See the chat explanation for the full walkthrough of `core/`, `shared/`,
and `features/` and why the project is organized that way.
