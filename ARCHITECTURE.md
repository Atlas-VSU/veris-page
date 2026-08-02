# VERIS Feature-Based Architecture (FBA) Guidelines

This document outlines the architectural patterns, directory organization rules, and coding conventions for the VERIS web repository. All contributors must follow these guidelines when creating or modifying features.

---

## Architectural Principles

### 1. Feature Isolation & Encapsulation
Code is organized by domain features (`src/features/<feature-name>`), NOT technical layers (`src/components/`, `src/services/`). Each feature folder contains everything needed for that domain:

- `components/`: UI components specific to this feature.
- `services/`: API and Firebase interaction functions.
- `types/`: TypeScript definitions and interfaces.
- `hooks/`: Custom React hooks specific to this domain logic.
- `index.ts`: The **public API barrel export** for the feature.

### 2. The Dependency Rule & Barrel Export Rule
- **Public API**: Other features or pages (`src/app/`) MUST only import from a feature's top-level barrel export:
  ```typescript
  //  GOOD: Importing from public feature barrel
  import { Hero, KeyBenefits } from "@/features/landing";

  //  BAD: Reaching into feature internals directly
  import { Hero } from "@/features/landing/components/Hero";
  ```
- **Internal Freedom**: Files *within* a feature folder may freely import sibling files inside the same feature.

### 3. Shared Primitives (`src/features/shared`)
Generic, domain-agnostic components (e.g. `Button`, `Input`, `Card`, `Navbar`, `Footer`) live in `src/features/shared`. Features can import shared components, but `shared` must never depend on domain-specific features.

---

## Directory Blueprint

```text
src/
├── app/                        # Route pages and layouts ONLY (Next.js App Router)
├── features/                   # Self-contained domain modules
│   ├── landing/                # Home / Landing page components & content
│   ├── services/               # Services (CORAL, USSC Connect, VERIS Systems, E-Passport)
│   ├── pricing/                # Subscription Tiers, Pricing table & FAQ
│   ├── about/                  # Mission, Vision, Team, Press
│   ├── faq/                    # Categorized FAQ module
│   ├── contact/                # Contact form & department details
│   ├── bug-report/             # Guest Bug Reporting flow
│   ├── legal/                  # Terms of Service & Privacy Policy
│   └── shared/                 # Reusable UI primitives & layouts
└── lib/                        # Third-party SDK initializations & infra
    └── supabase/               # Supabase Client initialization & helpers
```

---

## Supabase Integration Guidelines

- Supabase Client is initialized in `src/lib/supabase/config.ts`.
- Environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are required for the client to initialize; these are safe to expose publicly, as access control is enforced via Row Level Security (RLS) policies on the database itself.
- Guest bug report submissions are stored in the `bug_reports` table.
- Dynamic, editable site text (content that can be updated without a code change) is stored in the `site_content` table, using a key-value pattern.
- RLS policies enforce: guests can insert into `bug_reports` but cannot read/update/delete; guests can read `site_content` but cannot write to it. Schema and policies are version-controlled as migration files under `supabase/migrations/`.

---

## How to Add a New Feature Module

1. Create a new directory under `src/features/<feature-name>/`.
2. Add necessary subdirectories: `components/`, `services/`, `types/`.
3. Create `index.ts` to export public components and functions.
4. Create the route page under `src/app/<feature-name>/page.tsx` and import from `@/features/<feature-name>`.
