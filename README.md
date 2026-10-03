# Aurelia — hotel website

A React + TypeScript hotel website built with Vite and Tailwind CSS v4. Uses self-hosted Bricolage Grotesque and Hugeicons.

## Development

Requires Node.js 22.12+.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:4321. Run `npm run check` for TypeScript validation, `npm run build` for production, and `npm run preview` to preview the build (stop the dev server first; both use port 4321).

## Project structure

- `src/App.tsx`: page composition.
- `src/components/`: header, hero, story, room cards, experiences, stay planner, footer, and shared UI.
- `src/hooks/useScrollHeadline.ts`: reversible hero scroll transition with reduced-motion support.
- `src/data/hotel.ts`: shared room rates/capacities and hotel content.
- `src/styles/global.css`: Tailwind import, design tokens, and global accessibility defaults.
- `index.html`: document metadata and React entry point.

All component styling uses Tailwind utilities. The hero hook updates CSS custom properties consumed by Tailwind utilities, without re-rendering the page on every scroll event.

## Scope

Aurelia is fictional. Prices, amenities, and rooms are illustrative. Externally hosted Unsplash images do not depict a real Aurelia property.

The stay planner validates dates and guest capacity and calculates a sample subtotal. No real availability, reservations, payments, or personal-data storage is connected.

This is a client-rendered React app. A production hotel requiring indexable room pages should add a suitable prerendering or server-rendering strategy.

## Pages and hosting

React Router provides Home (`/`), Rooms (`/rooms`), individual room pages (`/rooms/:roomId`), Experiences (`/experiences`), Our story (`/about`), and the stay planner (`/stay`). Room-detail links preselect the room using a query parameter. Unknown URLs show a not-found page.

Page compositions live in `src/pages/`; shared UI remains in `src/components/`. HotelPhoto provides responsive Unsplash sources, eager hero loading, and lazy loading for supporting images.

Production hosting must rewrite non-file requests to `/index.html` for direct links and page refreshes. `public/_redirects` includes this rule for hosts supporting that format; configure the equivalent fallback on other hosts.

## Guest frontend additions

- `/rooms`: guest-capacity and sample-budget filters, reset/empty states, and room comparison.
- `/rooms/:roomId`: an interactive gallery showing room and resort inspiration, amenities, and a stay-planner link.
- `/experiences`: activity selector and topic-specific enquiry links.
- `/stay`: sample nightly breakdown and dates carried into the enquiry preview.
- `/contact`: Denver city map (OpenStreetMap), airport-rail reference, and a local-only validated enquiry preview. No message is sent or persisted.
- `/policies`: demo guest information and privacy notes; not final operating-hotel policies.

The Denver map is intentionally unpinned: no exact hotel street address has been provided. Photography remains illustrative resort imagery. Airport-rail guidance links to https://visitdenver.com/about-denver/transportation/denver-airport-rail/ for current information.
