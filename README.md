# Focus Studio

Focus Studio is a static Next.js site with no database and no backend API.

## What this project is

- Static export only
- No server-side data fetching
- No database
- No API routes
- Ready for static hosting such as Netlify, Vercel Static, GitHub Pages, or Cloudflare Pages

## Open the site

To view the finished site without any server, open `out/index.html` directly in your browser.

If you want to regenerate the static files after editing, run:

```bash
npm run build
```

## Deploying as a static site

After building, upload the contents of the `out` folder to your static host.

## Edit the site

The homepage lives in `src/app/page.tsx` and the shared site settings live in `src/lib/siteConfig.ts`.

## Notes

- There is no database in this project.
- There are no server routes to configure.
- If you only want the live static files, open `out/index.html` directly.
