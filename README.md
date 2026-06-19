<div align="center">

# Bookify

**Turn PDFs into interactive, voice-driven reading experiences.**

[![Status](https://img.shields.io/badge/status-production_ready-16a34a?style=for-the-badge)]()
[![Branch](https://img.shields.io/badge/branch-main-111827?style=for-the-badge)]()
[![Phase](https://img.shields.io/badge/phase-project_complete-2563eb?style=for-the-badge)]()

</div>

<div align="center">

### Platform

[![Auth](https://img.shields.io/badge/auth-Clerk_live-16a34a?style=for-the-badge&logo=clerk)]()
[![Database](https://img.shields.io/badge/MongoDB-live-47a248?style=for-the-badge&logo=mongodb&logoColor=white)]()
[![Storage](https://img.shields.io/badge/Vercel_Blob-live-black?style=for-the-badge&logo=vercel)]()
[![PDF Pipeline](https://img.shields.io/badge/PDF_parse_&_segment-live-16a34a?style=for-the-badge)]()
[![AI Voice](https://img.shields.io/badge/AI_voice-live_conversation-16a34a?style=for-the-badge)]()

### Stack

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js)]()
[![React](https://img.shields.io/badge/React_19-20232a?style=for-the-badge&logo=react)]()
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)]()
[![Mongoose](https://img.shields.io/badge/Mongoose-9.7-880000?style=for-the-badge&logo=mongoose&logoColor=white)]()
[![Vapi](https://img.shields.io/badge/Vapi-voice_ai-f97316?style=for-the-badge)]()
[![PDF.js](https://img.shields.io/badge/PDF.js-included-d32f2f?style=for-the-badge)]()

</div>

---

<div align="center">

## Overview

</div>

Bookify is an AI-first reading platform that lets users upload PDF books, extract and segment their content, and converse with them through voice. The product flow is **Upload → Process → Voice Chat**.

The app ships with a polished UI, Clerk authentication, a protected route layer, a complete book ingestion pipeline, MongoDB persistence, a homepage library powered by live database data, a homepage search experience, and a live Vapi-powered conversation interface on each book page.

**Live demo:** https://bookify-three-coral.vercel.app/

<div align="center">

## What's New

</div>

> Latest on **`main`** — merged via PR #11 (`feature/search-box`)

| Commit | Feature |
| --- | --- |
| `7de1b63` | **Homepage search is live** — search across uploaded books directly from the library view |
| `251d695` | **Clerk subscriptions + billing are live** with a dedicated pricing page and plan upgrades |
| `752d9d0` | **Book search tool for voice sessions** — Vapi `searchBook` API over segmented content |
| `0b870ef` | **Book detail voice experience is now live** with Vapi conversation UI, streaming transcript, session timing, and plan-aware session enforcement |
| `be07bba` | Homepage library now renders **live books from MongoDB** instead of static sample data |
| `67ceacd` | **Vercel Blob** client upload API with authenticated, size-limited file handling |
| `90f0361` | Upload handler wiring for PDF and cover image ingestion |
| `1938512` | Book creation validation, duplicate detection, and session scaffolding |
| `623758d` | MongoDB schema — `books`, `book_segments`, `voice_sessions` models |

<div align="center">

## Product Flow

</div>

```mermaid
flowchart LR
    A[Upload PDF] --> B[Parse & Segment]
    B --> C[Store in Vercel Blob]
    C --> D[Persist to MongoDB]
    D --> E[Live Library]
    E --> F[Voice Chat]
    style A fill:#2563eb,color:#fff
    style B fill:#16a34a,color:#fff
    style C fill:#16a34a,color:#fff
    style D fill:#16a34a,color:#fff
    style E fill:#16a34a,color:#fff
    style F fill:#f59e0b,color:#fff
```

| Step | Status |
| --- | --- |
| Upload PDF + metadata | ✅ Live |
| Client-side PDF parsing & segmentation | ✅ Live |
| Cloud storage (Vercel Blob) | ✅ Live |
| MongoDB persistence | ✅ Live |
| Homepage library from database | ✅ Live |
| Plan-based book limits | ✅ Live |
| Book detail page (`/books/[slug]`) | ✅ Live |
| AI voice conversation (Vapi) | ✅ Live |
| Subscription / pricing page | ✅ Live |

<div align="center">

## Feature Snapshot

</div>

| Area | Status | Notes |
| --- | :---: | --- |
| Landing page & hero | ✅ | Branded marketing section with CTA |
| Clerk authentication | ✅ | Sign-in, sign-up, auth-aware navbar |
| Route protection | ✅ | Clerk middleware on all non-public routes |
| Live book library | ✅ | `getAllBooks()` server action drives homepage grid |
| Homepage search | ✅ | Search box filters the library by title/author |
| PDF upload form | ✅ | `/books/new` with Zod + react-hook-form validation |
| Drag-and-drop uploader | ✅ | `FileUploader` for PDF and optional cover image |
| Voice persona selector | ✅ | `VoiceSelector` for assistant voice presets |
| PDF parsing | ✅ | PDF.js extraction with automatic text segmentation |
| Vercel Blob storage | ✅ | `/api/upload` with auth, MIME, and size enforcement |
| MongoDB models | ✅ | Books, segments, and voice session schemas |
| Server actions | ✅ | CRUD, duplicate check, segment save, text search |
| Subscription limits | ✅ | Plan-based `maxBooks` enforced on creation |
| Book detail page | ✅ | Protected `/books/[slug]` route with per-book voice experience |
| Live voice conversation UI | ✅ | `VapiControls` + `useVapi()` power mic controls, statuses, and streaming transcript |
| Voice session tracking | ✅ | Sessions start/end in MongoDB with monthly caps and per-session duration enforcement |
| Vapi book search tool | ✅ | `/api/vapi/search-book` exposes `searchBook` over segmented content |
| Subscription / pricing page | ✅ | Clerk PricingTable with live plan upgrades |

<div align="center">

## Routes

</div>

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | Hero section + live book library from MongoDB |
| `/sign-in` | Public | Clerk sign-in |
| `/sign-up` | Public | Clerk sign-up |
| `/books/new` | Protected | Full PDF upload and book creation flow |
| `/api/upload` | Protected | Vercel Blob client upload handler |
| `/api/vapi/search-book` | Protected | Vapi tool endpoint for semantic search across book segments |
| `/books/[slug]` | Protected | Book detail page with live Vapi voice conversation UI |
| `/subscriptions` | Protected | Clerk pricing + subscription management |

<div align="center">

## Architecture

</div>

```text
app/
  (root)/page.tsx              Homepage — fetches live books via server action
  layout.tsx                   Root layout, fonts, Clerk provider, navbar
  sign-in/[[...sign-in]]       Clerk sign-in
  sign-up/[[...sign-up]]       Clerk sign-up
  books/new/page.tsx           Protected book upload page
  subscriptions/page.tsx       Clerk pricing + subscription management
  api/upload/route.ts          Vercel Blob authenticated upload handler
  api/vapi/search-book/route.ts Vapi tool endpoint for book search

components/
  HeroSection.tsx              Landing hero
  Navbar.tsx                   Auth-aware navigation
  BookCard.tsx                 Book grid card (links to /books/[slug])
  UploadForm.tsx               End-to-end upload orchestration
  FileUploader.tsx             Drag-and-drop file input
  VoiceSelector.tsx            AI persona voice picker
  LoadingOverlay.tsx           Full-screen submit state
  ui/                          shadcn/ui primitives (button, form, input, …)

database/
  mongoose.ts                  Cached MongoDB connection
  models/
    book.model.ts              Book entity
    book-segment.model.ts      Parsed text chunks
    voice-session.model.ts     Conversation session records

lib/
  actions/book.action.ts       Server actions — CRUD, segments, search
  constants.ts                 Voice presets, validation limits, sample data
  zod.ts                       Upload form validation schemas
  utils.ts                     Slug generation, PDF parsing, segmentation
  subscription-constants.ts    Free / Standard / Pro tier limits
  subscription.server.ts       Clerk plan detection utilities

proxy.ts                       Clerk middleware (route protection)
types.d.ts                     Shared TypeScript interfaces
diagrams/                      Schema design visualization
```

<div align="center">

## Data Model

</div>

![Book Voice Session Data Model](./diagrams/Bookify%20Schema%20Design.png)

### `books`

| Field | Type | Description |
| --- | --- | --- |
| `_id` | ObjectId | Primary key |
| `clerkId` | string | Owner's Clerk user ID |
| `title`, `author`, `slug` | string | Book metadata (slug is unique) |
| `persona` | string | Selected AI voice persona |
| `fileURL`, `fileBlobKey` | string | PDF storage reference (Vercel Blob) |
| `coverURL`, `coverBlobKey` | string | Cover image (uploaded or auto-generated) |
| `fileSize` | number | PDF size in bytes |
| `totalSegments` | number | Count of parsed text segments |
| `createdAt`, `updatedAt` | timestamp | Audit fields |

### `book_segments`

| Field | Type | Description |
| --- | --- | --- |
| `_id` | ObjectId | Primary key |
| `bookId` | ObjectId | Parent book reference |
| `clerkId` | string | Owner reference |
| `content` | string | Extracted text chunk |
| `segmentIndex` | number | Position in book |
| `pageNumber`, `wordCount` | number | Content metrics |

### `voice_sessions`

| Field | Type | Description |
| --- | --- | --- |
| `_id` | ObjectId | Primary key |
| `bookId` | ObjectId | Associated book |
| `clerkId` | string | User reference |
| `startedAt`, `endedAt` | timestamp | Session window |
| `durationSeconds` | number | Total session length |
| `billingPeriodStart` | timestamp | Billing cycle anchor |

<div align="center">

## Book Upload Pipeline

</div>

When a user submits the upload form at `/books/new`, the following happens server- and client-side:

1. **Validate** — Zod schema checks title, author, persona, PDF type, and file size (max 50 MB)
2. **Dedupe** — `checkBookExists()` prevents duplicate titles via slug matching
3. **Parse** — PDF.js extracts text; content is split into searchable segments
4. **Upload** — PDF and cover (custom or auto-generated from first page) go to Vercel Blob via `/api/upload`
5. **Persist** — `createBook()` writes metadata to MongoDB; `saveBookSegments()` stores text chunks
6. **Enforce limits** — Subscription tier caps the number of books per user
7. **Redirect** — User returns to the homepage library with their new book visible

<div align="center">

## Local Development

</div>

### Prerequisites

- Node.js 20+
- MongoDB instance (local or Atlas)
- Clerk application (for auth)
- Vercel Blob store (for file uploads)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (see below)
cp .env.example .env.local   # if available, or create manually

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

<div align="center">

## Environment Variables

</div>

| Variable | Required | Purpose |
| --- | :---: | --- |
| `MONGODB_URI` | ✅ | MongoDB connection string |
| `BLOB_READ_WRITE_TOKEN` | ✅ | Vercel Blob read/write access |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk client-side auth |
| `CLERK_SECRET_KEY` | ✅ | Clerk server-side auth |
| `NEXT_PUBLIC_ASSISTANT_ID` | 🟡 | Vapi AI assistant reference (voice chat) |

> Additional Clerk redirect URLs and Vapi credentials will be needed as voice chat and billing flows are completed.

<div align="center">

## Scripts

</div>

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

<div align="center">

## Advanced Docs

</div>

---

<div align="center">

### Testing Strategy

</div>

> **Current state:** No automated test suite is configured yet. Manual verification and `npm run lint` are the baseline quality gates today.

#### Recommended test pyramid

```text
        ┌─────────────┐
        │    E2E      │  Playwright — critical user journeys
        ├─────────────┤
        │ Integration │  Server actions + MongoDB + Blob (mocked)
        ├─────────────┤
        │    Unit     │  Pure utils, Zod schemas, segmentation logic
        └─────────────┘
```

#### What to test, by layer

| Layer | Target | Priority cases |
| --- | --- | --- |
| **Unit** | `lib/utils.ts`, `lib/zod.ts` | `generateSlug`, `escapeRegex`, `segmentText`, `parsePDFFile` output shape |
| **Unit** | `lib/subscription-constants.ts` | Plan limit boundaries (`maxBooks`, session caps) |
| **Integration** | `lib/actions/book.action.ts` | `createBook` auth guard, duplicate slug, plan limit rejection, `saveBookSegments` count update |
| **Integration** | `app/api/upload/route.ts` | Unauthenticated rejection, MIME whitelist, size cap enforcement |
| **Component** | `UploadForm`, `FileUploader`, `VoiceSelector` | Validation errors, disabled submit state, file type rejection |
| **E2E** | Full upload flow | Sign in → upload PDF → book appears on homepage |
| **E2E** | Auth boundaries | Unauthenticated user blocked from `/books/new` |

#### Suggested tooling

```bash
# Unit + integration (recommended)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# E2E (Next.js native support)
npm install -D @playwright/test
npx playwright install
```

#### Manual smoke test checklist

Before merging or deploying, verify:

- [ ] Homepage loads and displays books from MongoDB
- [ ] Sign-in / sign-up flows complete without redirect errors
- [ ] `/books/new` rejects unauthenticated access
- [ ] PDF upload succeeds and redirects to `/` with new book visible
- [ ] Duplicate title redirects to existing book slug
- [ ] Plan limit error surfaces when `maxBooks` is exceeded
- [ ] Cover image renders (uploaded or auto-generated from PDF)
- [ ] `npm run build` completes without runtime errors
- [ ] `npm run lint` passes

#### Test data conventions

- Use a dedicated MongoDB database (e.g. `bookify_test`) — never run destructive tests against production
- Seed minimal fixtures: one book, three segments, one voice session stub
- Mock Vercel Blob in integration tests; reserve real Blob uploads for E2E only
- Use Clerk test users or bypass tokens in CI via environment-specific keys

---

<div align="center">

### Deployment Checklist

</div>

Bookify is designed for **Vercel** (Next.js App Router + Vercel Blob). Use this checklist before every production deploy.

#### 1. Environment variables

Set all required variables in the Vercel project dashboard (or via `vercel env`):

| Variable | Environment | Notes |
| --- | --- | --- |
| `MONGODB_URI` | Production, Preview | Use MongoDB Atlas with IP allowlist `0.0.0.0/0` or Vercel IP ranges |
| `BLOB_READ_WRITE_TOKEN` | Production, Preview | Create a dedicated Blob store per environment |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Production, Preview | Match the Clerk instance for that environment |
| `CLERK_SECRET_KEY` | Production, Preview | Server-only — never expose client-side |
| `NEXT_PUBLIC_ASSISTANT_ID` | Production | Required when voice chat ships |

#### 2. Clerk configuration

- [ ] Add production domain to Clerk **Allowed Origins**
- [ ] Set sign-in / sign-up redirect URLs to your Vercel domain
- [ ] Configure Clerk **plans** (`free`, `standard`, `pro`) if billing limits are enforced
- [ ] Verify middleware (`proxy.ts`) protects `/books/new` and `/api/upload`

#### 3. MongoDB Atlas

- [ ] Cluster is running and connection string uses `retryWrites=true`
- [ ] Database user has read/write on the `bookify` database
- [ ] Indexes created for production queries:
  - `books.slug` (unique — enforced by Mongoose schema)
  - `book_segments.bookId` + `segmentIndex`
  - `book_segments.content` text index (for `searchBookSegments`)
- [ ] Network access allows Vercel outbound connections

#### 4. Vercel Blob

- [ ] Blob store linked to the Vercel project
- [ ] `BLOB_READ_WRITE_TOKEN` scoped to the correct store
- [ ] `next.config.ts` `images.remotePatterns` includes your Blob hostname
- [ ] Upload size limit aligns with `MAX_FILE_SIZE` (50 MB) and `serverActions.bodySizeLimit` (100 MB)

#### 5. Pre-deploy verification

```bash
npm run lint
npm run build
```

- [ ] Build succeeds locally with production env vars
- [ ] No secrets committed to the repository
- [ ] `.env.local` is gitignored

#### 6. Post-deploy verification

- [ ] Homepage renders live books (not empty due to DB connection failure)
- [ ] Auth flow works on the production domain
- [ ] Upload a test PDF end-to-end
- [ ] Blob URLs are accessible and images load in `BookCard`
- [ ] Check Vercel function logs for MongoDB connection errors
- [ ] Rollback plan: redeploy previous Vercel deployment if smoke tests fail

#### 7. Preview deployments (PRs)

- [ ] Preview environment has its own `MONGODB_URI` and `BLOB_READ_WRITE_TOKEN`
- [ ] Clerk preview instance or development keys configured for preview URLs
- [ ] Do not share production database credentials with preview branches

---

<div align="center">

### Development Guidelines

</div>

Conventions observed in the Bookify codebase. Follow these when contributing.

#### Project conventions

| Topic | Convention |
| --- | --- |
| **Framework** | Next.js 16 App Router — read `node_modules/next/dist/docs/` before changing routing or data APIs |
| **Language** | TypeScript strict mode; shared types in `types.d.ts` |
| **Styling** | Tailwind CSS 4 + CSS variables; reuse existing utility classes (`wrapper`, `form-input`, `book-card`) |
| **Components** | shadcn/ui primitives in `components/ui/`; feature components at `components/` root |
| **Imports** | Use `@/` path alias (maps to project root) |

#### Server vs client boundaries

```text
'use server'   →  lib/actions/*.ts        Server actions (DB, auth, business logic)
'use client'   →  components/*.tsx        Interactive UI (forms, hooks, Clerk client)
default        →  app/**/page.tsx         Server Components (data fetching at render)
```

- Fetch data in **Server Components** (`getAllBooks()` on the homepage)
- Keep MongoDB and Mongoose imports out of client components
- Client components call server actions — never import `database/` directly from the browser

#### Adding a new feature

1. **Types** — extend interfaces in `types.d.ts`
2. **Validation** — add Zod schemas in `lib/zod.ts` for any user input
3. **Data layer** — add Mongoose model in `database/models/` if persistence is needed
4. **Business logic** — implement server actions in `lib/actions/`
5. **UI** — build components; mark `'use client'` only when hooks or browser APIs are required
6. **Route** — add `app/` page or `app/api/` handler; update `proxy.ts` if public access is needed

#### Server actions pattern

All actions in `lib/actions/book.action.ts` follow a consistent return shape:

```typescript
// Success
{ success: true, data: ... }

// Failure
{ success: false, error: string | unknown, isBillingError?: boolean }
```

- Always call `connectToDatabase()` before Mongoose queries
- Use `serializeData()` before returning documents to the client (strips Mongoose internals)
- Validate `clerkId` against `auth()` for any user-scoped mutation
- Use `revalidatePath()` after mutations that affect cached Server Component data

#### Naming and file structure

| Artifact | Pattern | Example |
| --- | --- | --- |
| Server action file | `lib/actions/<domain>.action.ts` | `book.action.ts` |
| Mongoose model | `database/models/<name>.model.ts` | `book-segment.model.ts` |
| Route page | `app/<segment>/page.tsx` | `app/books/new/page.tsx` |
| API route | `app/api/<name>/route.ts` | `app/api/upload/route.ts` |
| Constants | `lib/constants.ts` or `lib/<domain>-constants.ts` | `subscription-constants.ts` |

#### Code quality rules

- Run `npm run lint` before opening a PR
- Do not commit `.history/` files or local editor artifacts
- Keep server action payloads small — large files go through Vercel Blob, not Server Actions body
- Prefer existing helpers (`generateSlug`, `escapeRegex`, `parsePDFFile`) over duplicating logic
- Add `console.error` in catch blocks for server-side failures; surface user-friendly messages via `toast` on the client

#### Branching and PRs

```text
main                              Production-ready branch
feature/<name>                    Feature branches (squash or merge via PR)
```

- Branch from `main` for new work: `feature/book-detail-page`
- Keep PRs focused — one feature or fix per PR
- Update this README when adding routes, env vars, or architectural changes
- Ensure smoke tests pass before requesting review

#### Security checklist for new code

- [ ] User input validated with Zod before reaching the database
- [ ] `auth()` checked on all mutations and upload handlers
- [ ] No secrets in `NEXT_PUBLIC_*` variables
- [ ] Regex search uses `escapeRegex()` to prevent injection
- [ ] File uploads restricted by MIME type and size in both client schema and `/api/upload`

---

<div align="center">

## Roadmap

</div>

- [x] Book detail page at `/books/[slug]` with segment-aware content view
- [x] Subscription and pricing page at `/subscriptions`
- [x] Vapi-powered voice conversation UI per book
- [x] Voice session tracking with billing-period enforcement
- [x] User dashboard for managing uploaded books
- [x] Full-text search UI across book segments
- [x] PostHog analytics for upload and session events

---

<div align="center">

Built with Next.js 16 · React 19 · TypeScript · MongoDB · Vercel Blob · Clerk · Vapi

</div>
