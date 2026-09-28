# Gearnix

Gearnix is a React storefront built with Vite.

## Getting started

```sh
npm install
npm run dev
```

## Project structure

- `src/pages` contains page-level composition.
- `src/components` contains reusable storefront sections and their styles.
- `src/data` contains product and display data.
- `src/hooks` contains React lifecycle and state integrations.
- `src/lib/interactions` contains DOM integrations that bridge existing storefront behavior into React.
- `src/styles` contains global styles, variables, and responsive utilities.
- `public/images` contains static storefront assets.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production bundle in `dist`.
- `npm run preview` serves the production bundle locally.
- `npm run lint` runs Oxlint.
- `npm run format` formats source files with Prettier.
