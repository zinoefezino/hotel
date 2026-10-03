# Hotel project

## Stack
React, TypeScript, Vite, Tailwind CSS v4, Bricolage Grotesque, and Hugeicons.

## Development
- Run `npm run dev`; the local preview uses http://127.0.0.1:4321.
- Keep development servers in the background. On Windows, launch helpers with hidden windows.
- Run `npm run check` and `npm run build` after significant code changes.
- Verify interactive changes in the browser at desktop and mobile widths.

## Structure
- Compose the page in src/App.tsx using focused components from src/components.
- Use Tailwind utilities for component styling. Keep global.css limited to theme tokens and global defaults.
- Keep shared room details, rates, and capacity in src/data/hotel.ts.
- Preserve keyboard accessibility, reduced-motion support, and honest sample-booking messaging.

