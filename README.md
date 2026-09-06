# etchJS Docs

Documentation site for [etchJS](https://github.com/PaulTreanor/etchjs-docs), built with [Vocs](https://vocs.dev).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/public` (static site) and `dist/server` (SSR bundle). The GitHub Actions workflow builds and deploys `dist/public` to GitHub Pages.

## Notes

- Requires Node.js `^20.19 || >=22.12` (Vocs / Vite 8 constraint).
- Pages live in `src/pages` as MDX; interactive demos are client components in `src/components`.