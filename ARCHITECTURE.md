# Calm Together architecture

## Status and authority

This repository is an early static website baseline. The authoritative frontend is the Next.js Pages Router application under `pages/`.

- `pages/` contains the active routes and public website content.
- `pages/_app.js` loads the active stylesheet.
- `styles/globals.css` is the active website stylesheet.
- Root `App.jsx` is legacy/reference material only. It is not an application entry point, must not guide future development, and should not be changed or removed without explicit review.
- `studio/` is a separate, provisional Sanity Studio. It is retained but is not part of the website runtime.

GitHub is the source of truth for source code and technical history. Material changes to this architecture require an approved decision rather than an implicit change during implementation.

## Current website architecture

The website uses Next.js 13.5.4, React 18.2.0, and the Pages Router. Each route is statically rendered from a JavaScript file under `pages/`. Public content is currently hard-coded in those page files. There is no website API layer, database, or content client.

The production build generates static HTML for the current public routes.

## Sanity isolation

The Studio under `studio/` is an independent package with its own dependencies and lockfile. It is configured for Sanity project `d36evxqp` and dataset `production`, but its schema registry is empty.

During the Verified Static Website Baseline milestone:

- no Sanity schemas are to be created;
- no Sanity dependency is to be added to the root website;
- no GROQ query or Sanity client is to be added;
- no website content is to be migrated to Sanity; and
- no file under `studio/` is to be changed.

The existence of the Studio does not make Sanity the current content source of truth. The active website content remains in `pages/` unless a later approved architecture decision changes that arrangement.

## Known architectural limitations

- Page navigation and public content are repeated directly in route files.
- `App.jsx` duplicates some older website concepts but is not authoritative.
- The repository contains no implemented test suite or continuous-integration workflow.
- Deployment, preview environments, monitoring, and rollback procedures are not documented or verified.
- The website does not currently connect to Sanity or another content-management system.
- No forms backend, booking service, analytics, AI, authentication, payments, or user-data system is implemented.

