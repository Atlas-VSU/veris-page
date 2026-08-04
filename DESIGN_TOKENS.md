# Design Tokens Reference (VERIS Website)

This document outlines the core design tokens (colors, typography, shadows, border radii, and animations) used in the VERIS system. These tokens are defined in `/globals.css` and are optimized for **Tailwind CSS v4** (using the `@theme` and `@theme inline` directives) and CSS custom properties.

Use this reference to align colors, styling patterns, and animations across other VERIS-related repositories.

---

## Color Palette

The design utilizes a warm, organic color palette centered around moss green, terracotta, and soft creams, designed for a tactile, natural, and premium feel.

### 1. Light Mode (Organic Theme)
Default theme applied to the application base.

| Token / CSS Variable | Tailwind Class | Value | Visual Preview / Description |
| :--- | :--- | :--- | :--- |
| `--background` | `bg-background` | `#FDFCF8` | Warm Soft Cream (Base Background) |
| `--foreground` | `text-foreground` | `#2C2C24` | Deep Charcoal Olive (Text) |
| `--card` | `bg-card` | `#FEFEFA` | Warm White (Card background) |
| `--card-foreground` | `text-card-foreground` | `#2C2C24` | Text inside cards |
| `--popover` | `bg-popover` | `#FEFEFA` | Popover Background |
| `--popover-foreground` | `text-popover-foreground` | `#2C2C24` | Popover Text |
| `--primary` | `bg-primary` | `#5D7052` | **Organic Moss Green** (Brand Primary) |
| `--primary-foreground` | `text-primary-foreground` | `#F3F4F1` | Off-white text on Primary |
| `--secondary` | `bg-secondary` | `#C18C5D` | **Organic Terracotta** (Brand Secondary) |
| `--secondary-foreground`| `text-secondary-foreground`| `#FFFFFF` | White text on Secondary |
| `--accent` | `bg-accent` | `#E6DCCD` | Warm Clay / Beige |
| `--accent-foreground` | `text-accent-foreground` | `#4A4A40` | Text on Accent |
| `--muted` | `bg-muted` | `#F0EBE5` | Light Sand |
| `--muted-foreground` | `text-muted-foreground` | `#78786C` | Muted Gray-Olive (Subtitles, labels) |
| `--border` | `border-border` | `#DED8CF` | Thin border lines |
| `--input` | `border-input` | `#DED8CF` | Form input borders |
| `--ring` | `ring-ring` | `#5D7052` | Focus Ring Color (Moss Green) |
| `--destructive` | `bg-destructive` | `#A85448` | Coral Red (Errors, destructive actions) |

### 2. Semantic States & Overrides
Consistent color codes for notifications, statuses, and validation.

| Token / CSS Variable | Tailwind Class | Value | Description |
| :--- | :--- | :--- | :--- |
| `--success` | `bg-success` | `#5D7052` | Success Moss Green |
| `--success-foreground`| `text-success-foreground`| `#F3F4F1` | Success Text |
| `--success-muted` | `bg-success-muted` | `#F0EBE5` | Success background/banner accent |
| `--warning` | `bg-warning` | `#C18C5D` | Warning Terracotta |
| `--warning-foreground`| `text-warning-foreground`| `#FFFFFF` | Warning Text |
| `--warning-muted` | `bg-warning-muted` | `#F0EBE5` | Warning background/banner accent |

---

## Typography

The application uses typography configured to match the brand identity.

| Font Token | Config Variable | CSS Fonts | Intent |
| :--- | :--- | :--- | :--- |
| Sans-Serif | `--font-sans` / `--font-mono` | `var(--font-nunito), system-ui, sans-serif` | Default text, headings, interface elements |
| Serif | `--font-serif` | `var(--font-fraunces), serif` | Editorial/Special headings |

*Font classes `.font-nunito` and `.font-fraunces` map explicitly to these families for design consistency.*

---

## Layout & Borders

### Border Radius
All custom layout components utilize a standardized base border radius of `1.5rem` (`--radius`), creating an organic, soft appearance.

*   **Small (`--radius-sm`)**: `calc(var(--radius) - 4px)` (approx. `1.25rem` / `20px`)
*   **Medium (`--radius-md`)**: `calc(var(--radius) - 2px)` (approx. `1.375rem` / `22px`)
*   **Large (`--radius-lg`)**: `var(--radius)` (`1.5rem` / `24px`)
*   **Extra Large (`--radius-xl`)**: `calc(var(--radius) + 4px)` (approx. `1.75rem` / `28px`)

### Asymmetric & Organic Card Radii
The interface uses organic, asymmetric card shapes to convey a tactile, custom look:

*   `.blob-shape-1`: `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;`
*   `.blob-shape-2`: `border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%;`
*   `.blob-shape-3`: `border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%;`

For card grids and decorative card designs, the following asymmetric border-radius classes are available:
*   `.organic-card-1`: `border-radius: 2rem 4rem 2rem 3rem;`
*   `.organic-card-2`: `border-radius: 3rem 2rem 4rem 2rem;`
*   `.organic-card-3`: `border-radius: 2rem 3rem 2rem 4rem;`
*   `.organic-card-4`: `border-radius: 4rem 2rem 3rem 2rem;`
*   `.organic-card-5`: `border-radius: 3rem 4rem 2rem 2rem;`
*   `.organic-card-6`: `border-radius: 2rem 2rem 4rem 3rem;`

---

## Shadows

Standard shadow variables configured for the organic theme.

| Token | CSS Value | Description / Usage |
| :--- | :--- | :--- |
| `shadow-soft` | `0 4px 20px -2px rgba(93, 112, 82, 0.15)` | Subtle green-tinted shadow for cards, boxes |
| `shadow-float` | `0 10px 40px -10px rgba(193, 140, 93, 0.2)`| Warm terracotta-tinted shadow for dropdowns, popups |
| `shadow-3xl` | `0 35px 60px -12px rgba(0, 0, 0, 0.25)` | Deep dramatic shadow |

---

## Animations & Keyframes

| Animation Class | Duration & Curve | Keyframe Action | Usage |
| :--- | :--- | :--- | :--- |
| `.animate-fade-in` | `0.6s ease-out` | `opacity: 0` ➔ `1` | Smooth text/image fade-in |
| `.animate-fade-in-up` | `0.6s ease-out` | `translateY(30px)` + opacity | Slide-up card entries |
| `.animate-fade-in-left`| `0.6s ease-out` | `translateX(-8px)` + opacity | Sliding menu elements |
| `.animate-fade-in-right`| `0.6s ease-out` | `translateX(8px)` + opacity | Slide-in elements |
| `.animate-fade-in-slow` | `0.8s ease-out` | `opacity: 0` ➔ `1` | Slower text/image fade-in |
| `.animate-page-enter` | `0.3s ease-out` | `translateY(6px)` + opacity | Quick page transitions |
| `.animate-float` | `6s ease-in-out infinite` | `translateY(0)` ➔ `translateY(-12px)` ➔ `0` | Floating decorative graphics |
| `.animate-float-delayed`| `6s ease-in-out infinite 2s` | `translateY(0)` ➔ `translateY(-12px)` ➔ `0` (delayed) | Layered floating graphics |
| `.animate-gentle-rotate`| `20s linear infinite` | `rotate(0deg)` ➔ `rotate(360deg)` | Rotating background shapes |

### Animation Delays
Use these utility classes to stagger entry animations:
*   `.animation-delay-100` (0.1s)
*   `.animation-delay-200` (0.15s)
*   `.animation-delay-300` (0.2s)
*   `.animation-delay-400` (0.25s)
*   `.animation-delay-500` (0.3s)
*   `.animation-delay-600` (0.35s)
*   `.animation-delay-700` (0.4s)
*   `.animation-delay-800` (0.45s)
*   `.animation-delay-900` (0.5s)
*   `.animation-delay-1000` (0.55s)

---

## Integration Example (Tailwind v4 vs v3 config)

### Option A: In a Tailwind CSS v4 Project (`globals.css`)
```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}
```

### Option B: In a Tailwind CSS v3 Project (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        destructive: 'var(--destructive)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(93, 112, 82, 0.15)',
        float: '0 10px 40px -10px rgba(193, 140, 93, 0.2)',
      }
    },
  },
}
```
