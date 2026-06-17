# Bookify

> An AI-first reading platform in active development, built to turn books into interactive voice and chat experiences.

![Status](https://img.shields.io/badge/status-active_development-2563eb?style=for-the-badge)
![Phase](https://img.shields.io/badge/phase-foundation_build-7c3aed?style=for-the-badge)
![UI](https://img.shields.io/badge/ui-implemented-16a34a?style=for-the-badge)
![Auth](https://img.shields.io/badge/auth-live-16a34a?style=for-the-badge)
![AI](https://img.shields.io/badge/ai-scaffolded-f59e0b?style=for-the-badge)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React_19-20232a?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6c47ff?style=for-the-badge)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-configured-111827?style=for-the-badge)
![Vapi](https://img.shields.io/badge/Vapi-voice_ai-f97316?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-ready-47a248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ready-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Vercel Blob](https://img.shields.io/badge/Vercel_Blob-ready-black?style=for-the-badge&logo=vercel)
![PDF.js](https://img.shields.io/badge/PDF.js-included-d32f2f?style=for-the-badge)

## Overview

Bookify is a modern web application designed to make reading more interactive. The long-term product direction is clear in the codebase: upload books, process content with AI, and enable voice-driven conversations around what users read.

As of now, the project has a polished front-end foundation, a working authentication flow, protected routing, reusable UI building blocks, and early AI-related configuration already in place.

## Current Build Status

### Implemented

- Marketing-style landing page with a branded hero section
- Responsive navigation with authentication-aware state
- Clerk sign-in and sign-up routes
- Route protection through Clerk middleware
- Sample book library grid driven by static data
- Reusable `BookCard` and shared UI primitives
- Remote image configuration for book cover rendering
- App-wide layout, font system, and design styling

### In Progress Or Prepared

- Book upload experience
- Book details route for individual titles
- Subscription and pricing flow
- AI book conversation workflow
- PDF parsing and voice interaction pipeline
- Persistence layer usage with MongoDB and Mongoose

### Important Note

Some UI links already point to future routes such as `/books/new`, `/books/[slug]`, and `/subscriptions`, but those pages are not implemented yet. The README intentionally reflects the codebase as it exists today.

## Feature Delivery Snapshot

| Area | Status | Notes |
| --- | --- | --- |
| Landing page | Complete | Home page and hero section are implemented |
| Authentication | Complete | Clerk sign-in, sign-up, and user state are wired |
| Protected routes | Complete | Middleware protects non-public routes |
| Sample library UI | Complete | Static sample books render on the homepage |
| Reusable components | Complete | Navbar, book cards, and shared UI setup exist |
| Book upload flow | Planned | UI direction exists, route not built yet |
| Book details page | Planned | Cards link to dynamic routes not yet created |
| Pricing/subscriptions | Planned | Navigation link exists, page not yet created |
| AI voice chat | Scaffolded | Constants and dependencies exist, full flow pending |
| PDF processing | Scaffolded | Validation and dependency groundwork exist |
| Database integration | Ready | Dependencies installed, feature usage not yet visible |

## Available Routes

The following routes currently exist:

- `/` - homepage with hero content and sample books
- `/sign-in` - Clerk sign-in experience
- `/sign-up` - Clerk sign-up experience

The middleware treats sign-in and sign-up as public routes and protects the rest of the app.

## Project Structure

```text
app/
  page.tsx                 Homepage
  layout.tsx               Root layout, fonts, Clerk provider, navbar
  sign-in/[[...sign-in]]   Sign-in route
  sign-up/[[...sign-up]]   Sign-up route

components/
  HeroSection.tsx          Landing page hero
  Navbar.tsx               Global navigation
  BookCard.tsx             Reusable book card
  ui/                      Shared UI components

lib/
  constants.ts             Sample books, validation, voice config
  utils.ts                 Shared utility helpers

public/assets/             Brand and UI assets
proxy.ts                   Clerk middleware
```

## What The Codebase Already Shows

### Product Direction

The homepage messaging already defines the intended product experience in three steps:

1. Upload PDF
2. AI Processing
3. Voice Chat

That product flow is not fully implemented yet, but it is clearly the central direction of the application.

### Authentication Foundation

Clerk is integrated into the app shell and route system, which means the project already supports:

- sign in
- sign up
- auth-aware navbar rendering
- protected non-public routes

### AI Preparation

The current codebase already includes:

- PDF file validation limits
- image file validation limits
- assistant id usage via `NEXT_PUBLIC_ASSISTANT_ID`
- voice presets and conversation-related configuration
- dependencies for Vapi, PDF processing, storage, and database work

This is strong groundwork for the upcoming AI and book ingestion features.

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the app

Visit [http://localhost:3000](http://localhost:3000).

## Environment Setup

Before running the full app experience, configure:

- Clerk environment variables for authentication
- `NEXT_PUBLIC_ASSISTANT_ID` for the public AI assistant reference

If you later wire up persistence, storage, and AI flows fully, additional environment variables will likely be needed for database, upload, and AI service credentials.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Next Milestones

- Build `/books/new` for PDF upload
- Create dynamic book detail pages
- Implement subscription and pricing screens
- Connect PDF ingestion to AI processing
- Launch voice-based conversations for uploaded books
- Persist book and user data with the backend stack
