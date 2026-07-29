# VERIS Campus Marketing & Informational Site

The official campus-wide marketing and informational web application for **VERIS**, showcasing its core software ecosystem: **CORAL**, **USSC Connect**, **VERIS Student Portal**, and the **E-Passport** campus tour platform. Includes guest bug reporting via email/Firebase.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend / Services**: Firebase SDK (Guest Bug Report submission & future Firestore database)
- **Architecture**: Feature-Based Architecture (`src/features/`)

---

## Repository Architecture

```text
src/
├── app/                        # Next.js App Router (Routes & Layouts)
│   ├── about/                  # About VERIS route
│   ├── bug-report/             # Guest Bug Report route
│   ├── contact/                # Contact route
│   ├── faq/                    # Frequently Asked Questions route
│   ├── pricing/                # Subscription Tiers & Pricing route
│   ├── privacy/                # Privacy Policy route
│   ├── services/               # Services overview route
│   ├── terms/                  # Terms of Service route
│   ├── layout.tsx              # Root layout with global navigation & footer
│   └── page.tsx                # Home / Landing page route
├── features/                   # Feature-Based Architecture (FBA)
│   ├── landing/                # Hero, Call-to-Action, Testimonials, Key Benefits
│   ├── services/               # Overview, CORAL, USSC Connect, VERIS Systems, E-Passport
│   ├── pricing/                # Pricing Table, Tiers, Feature Comparison, FAQ
│   ├── about/                  # Mission, Vision, Team Profiles, Press Mentions
│   ├── faq/                    # General, Billing, Tech, Account, Security FAQ
│   ├── contact/                # Contact Form, Department Info, Map Embed
│   ├── bug-report/             # Guest Bug Reporting (Email / Firebase)
│   ├── legal/                  # Terms of Service & Privacy Policy
│   └── shared/                 # Shared UI (Navbar, Footer, Button, Input, Card)
└── lib/                        # Core Infrastructure & Services
    └── firebase/               # Firebase SDK client initialization & Firestore services
```

---

## Data Model (Firebase / Guest Bug Report)

- **`bug_reports` collection**:
  - `id`: unique submission identifier
  - `guest_email`: guest contact email
  - `subject`: brief summary of the issue
  - `description`: detailed bug description
  - `category`: `general` | `technical` | `ui_ux` | `billing`
  - `status`: `pending` | `in_review` | `resolved`
  - `created_at`: timestamp of submission

*Note: Guest bug reports operate without account creation for friction-free communication.*

---

## Core Task Checklist & Progress

Contributors can claim tasks from the checklist below:

### 1. Home / Landing Page
- [ ] Hero Section
- [ ] Navigation Bar
- [ ] Call to Action Buttons
- [ ] Footer
- [ ] Social Links
- [ ] Testimonials Section
- [ ] Key Benefits Section
- [ ] Responsive Design

### 2. Services / What VERIS Does
- [ ] Service Overview
- [ ] CORAL System Overview
- [ ] USSC Connect Integration
- [ ] VERIS Systems (CORAL Instance)
- [ ] E-Passport Campus Tour Platform

### 3. Subscription Tiers / Pricing
- [ ] Pricing Table
- [ ] Basic Tier Details
- [ ] Plus Tier Details
- [ ] Premium Tier Details
- [ ] Feature Comparison Matrix
- [ ] Pricing FAQ Section

### 4. About VERIS
- [ ] Mission Statement
- [ ] Vision Statement
- [ ] Team Profiles
- [ ] Press Mentions

### 5. Frequently Asked Questions (FAQ)
- [ ] General Questions
- [ ] Billing Questions
- [ ] Technical Questions
- [ ] Account Management
- [ ] Security Questions
- [ ] Contact Support Link

### 6. Contact Information
- [ ] Contact Form
- [ ] Department Address
- [ ] Phone Number
- [ ] Email Address
- [ ] Google Maps Embed

### 7. Guest Bug Reporting
- [ ] Guest Bug Report Form (No login required)
- [ ] Email & Firebase Firestore Sync
- [ ] Submission Confirmation Feedback

### 8. Legal Pages
- [ ] **Terms of Service**: Introduction, User Responsibilities, Account Terms, Payment Terms, Cancellation Policy, Modifications, Copyright, General Conditions, Limitation of Liability, Governing Law, Contact Info.
- [ ] **Privacy Policy**: Information Collection, Usage, Protection, Cookie Policy, Third-Party Disclosure, User Rights, Policy Changes, Contact Info.

---

## Run Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup Steps
1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Firebase project credentials in `.env.local` if testing guest bug report Firestore integration.

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify Code Quality**:
   ```bash
   npm run lint
   npm run build
   ```
