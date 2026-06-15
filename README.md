# Themezyo - Next.js App

A responsive website template library built with the Next.js App Router and Tailwind CSS.

Quick start (PowerShell / CMD):

```powershell
cd templify
npm install
npm run dev
```

Production:

```powershell
npm ci
npm run build
npm run start
```

Notes:
- `package.json` uses Next.js, React, and React DOM.
- `npm run build` creates a standalone server bundle for Node hosting.
- `npm run start` binds to `0.0.0.0` so it can receive traffic behind a server or reverse proxy.
- The `postbuild` step copies `public` and `.next/static` into `.next/standalone` for self-contained server deployment.
