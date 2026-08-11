# Calm Together website

This repository contains the early **Verified Static Website Baseline** for Calm Together. It is a prototype baseline, not a completed production service.

The authoritative frontend is the Next.js Pages Router application under `pages/`. See [ARCHITECTURE.md](ARCHITECTURE.md) for the source-of-truth and isolation decisions.

## Verified local environment

The baseline was installed and built with:

- Node.js 22.21.0
- npm 10.9.4

The root dependencies remain at the versions already declared in `package.json`:

- Next.js 13.5.4
- React 18.2.0
- React DOM 18.2.0

The root `package-lock.json` supports reproducible installation. Dependency upgrades are outside this baseline milestone.

## Local commands

Run these commands from the repository root:

```powershell
npm ci
npm run dev
npm run build
npm run start
```

- `npm ci` installs the exact root dependency tree recorded in `package-lock.json`.
- `npm run dev` starts the local Next.js development server.
- `npm run build` creates an optimized production build.
- `npm run start` serves a completed production build locally.

The Sanity Studio is a separate package. Root website setup does not require installing or running it.

## Repository structure

```text
.
|-- pages/                 Authoritative Next.js routes and static content
|-- styles/
|   `-- globals.css        Active website stylesheet
|-- studio/                Provisional, isolated Sanity Studio
|-- App.jsx                Legacy/reference material; not authoritative
|-- ARCHITECTURE.md        Architecture and source-of-truth record
|-- package.json           Root website dependencies and commands
|-- package-lock.json      Reproducible root dependency tree
`-- README.md              Setup, routes, status, and limitations
```

`App.jsx` is retained unchanged for historical reference. It is not used by the Next.js application and must not guide future development.

## Route inventory

| Route | Source file | Current type |
| --- | --- | --- |
| `/` | `pages/index.js` | Static |
| `/about` | `pages/about.js` | Static |
| `/access-bars` | `pages/access-bars.js` | Static |
| `/blog` | `pages/blog.js` | Static |
| `/book` | `pages/book.js` | Static |
| `/contact` | `pages/contact.js` | Static |
| `/facilitation` | `pages/facilitation.js` | Static |
| `/send-tutoring` | `pages/send-tutoring.js` | Static |

Next.js also supplies its standard `/404` route.

## Sanity status

`studio/` is retained provisionally as a separate Sanity application. It currently has an empty schema registry and is not connected to the website.

For this baseline:

- no website package depends on Sanity;
- no Sanity client or GROQ query exists in the website;
- no Sanity schema is implemented; and
- no file under `studio/` is changed as part of the baseline work.

## Verification status

Implementation began from the pre-change baseline commit `0ca6c1bd277445101c0650f2a2990b7076237451`. Tranche 1 then generated the root lockfile, establishing the deterministic dependency state used for verification:

- a clean root installation completed with `npm ci`; and
- `npm run build` completed successfully and statically generated all routes in the inventory above.

No existing website source file was modified to achieve the successful build.

npm reported one high and one critical dependency vulnerability and marked Next.js 13.5.4 as deprecated because of a security vulnerability. No dependency was upgraded or automatically fixed because upgrades are outside the authorised tranche. This must be resolved through a separately approved dependency decision before the website is treated as release-ready.

## Known limitations

- Website content is hard-coded in `pages/`; Sanity is not a content source.
- The contact form has no backend and is disabled.
- Online booking is not implemented.
- Blog content includes prototype/planned material rather than a content-management workflow.
- Placeholder contact information and related calls to action remain pending the authorised placeholder-review tranche.
- No forms processing, analytics, AI, authentication, payments, accounts, or personal-data backend exists.
- No automated test suite, CI workflow, accessibility verification, or responsive verification has yet been completed.
- No live website deployment, domain, preview environment, monitoring, or rollback process has been verified from this repository.
- Broader content and professional review remains required before public launch.
- Sanity permissions, CORS settings, access roles, backup/recovery arrangements, and other operational controls are not verified by this repository.
