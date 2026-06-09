Tailwind setup and verification

1. Install dependencies:

```bash
npm install
```

2. Start dev server (Vite automatically uses PostCSS/Tailwind when packages are present):

```bash
npm run dev
```

3. Alternatively build Tailwind separately:

```bash
npm run tailwind:build
```

4. If your editor shows "Unknown at rule @tailwind":
- Ensure `node_modules` exists (`npm install`).
- Restart the editor / TypeScript server.
- Install Tailwind CSS IntelliSense (VS Code extension) for editor hints.

5. To verify Tailwind is active in the browser:
- Inspect an element that uses a Tailwind class (e.g., `bg-[#00969A]`).
- In DevTools, confirm the computed styles show the Tailwind-generated rules.

If you prefer, I can also add a one-off `postinstall` script to run `tailwind:build` automatically after `npm install`.