# Anduril Website Style Guide

## When to use
When building or styling web pages, components, or UI elements for this project. Apply this style to all frontend code generated.

## Design Philosophy
Anduril's website conveys **military-grade technology with Silicon Valley polish** — dark, cinematic, and confident. The aesthetic is minimal yet powerful, designed to feel like a defense-tech command center.

## Color Palette

### Primary Colors
- **Background (Dark):** `#0A0A0A` (near-black)
- **Background (Secondary):** `#111111`, `#1A1A1A`
- **Primary Accent:** `#FFFFFF` (white — used for key text and CTAs)
- **Secondary Accent:** `#00FF85` or similar green for highlights/tech accents

### Text Colors
- **Heading Text:** `#FFFFFF`
- **Body Text:** `#A0A0A0` (muted gray)
- **Subtle Text:** `#666666`

### UI Colors
- **Border/Divider:** `#2A2A2A`
- **Hover State:** `rgba(255, 255, 255, 0.1)`
- **Card Background:** `#111111` or `#141414`

## Typography

### Font Stack
- **Primary:** `'Inter', 'Noto Sans TC', -apple-system, sans-serif`
- **Headings:** Inter (English) / Noto Sans TC (中文), geometric/grotesque style
- **Body:** Same stack, high readability for both English and Chinese
- **Chinese Font:** Noto Sans TC (思源黑體) — geometric, matches Anduril's sharp aesthetic
- **Monospace (optional for data):** `"JetBrains Mono"`, `"SF Mono"`, monospace

### Font Sizes (Desktop)
- **Hero Title:** 64–80px, font-weight: 700, letter-spacing: -0.02em
- **Section Title:** 40–56px, font-weight: 600
- **Subtitle:** 20–24px, font-weight: 400
- **Body:** 16–18px, font-weight: 400, line-height: 1.6
- **Caption/Label:** 12–14px, font-weight: 500, text-transform: uppercase, letter-spacing: 0.1em

## Layout

### Structure
- **Full-width sections** with max-content width ~1200–1440px
- **Generous whitespace** — sections separated by 120–160px vertical spacing
- **Grid:** 12-column grid with 24px gutters
- **Mobile:** Single column, responsive breakpoints at 768px and 1024px

### Hero Section
- Full-viewport height (100vh)
- Background video or large cinematic image
- Centered or left-aligned headline with brief tagline
- Single prominent CTA button

## UI Components

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: #FFFFFF;
  color: #0A0A0A;
  padding: 14px 32px;
  border: none;
  border-radius: 0; /* Sharp corners — military precision */
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.btn-primary:hover {
  opacity: 0.85;
}

/* Secondary/Ghost Button */
.btn-secondary {
  background: transparent;
  color: #FFFFFF;
  padding: 14px 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: border-color 0.2s ease;
}
.btn-secondary:hover {
  border-color: #FFFFFF;
}
```

### Navigation
- Fixed top navbar, transparent on hero, dark on scroll
- Logo left, links center or right
- Minimal items, clean spacing
- Mobile: hamburger menu with full-screen overlay

### Cards
```css
.card {
  background: #111111;
  border: 1px solid #2A2A2A;
  padding: 32px;
  border-radius: 0;
  transition: border-color 0.3s ease;
}
.card:hover {
  border-color: rgba(255, 255, 255, 0.2);
}
```

## Motion & Animation
- **Scroll-triggered fade-ins** — elements fade up with `translateY(20px)` to `translateY(0)`
- **Duration:** 0.6–0.8s with `ease-out`
- **Video backgrounds:** autoplay, muted, looped, covering full sections
- **Hover transitions:** subtle, 0.2–0.3s
- **No bouncy or playful animations** — everything is smooth and controlled

## Imagery
- **Cinematic, high-contrast photography** — defense hardware, landscapes, tech environments
- **Dark-toned imagery** that blends with the background
- **3D renders** of products (drones, systems) on dark backgrounds
- **Aspect ratios:** 16:9 for hero/video, 4:3 or 1:1 for cards

## General Rules
1. Always use **dark mode** as default
2. Keep designs **minimal and clean** — no clutter
3. Use **sharp corners** (border-radius: 0) for a military/precision feel
4. **Uppercase labels** with wide letter-spacing for small text
5. **Large, bold headlines** with tight letter-spacing
6. **High contrast** between text and background
7. Prefer **full-bleed sections** over boxed layouts
8. Use **subtle borders** instead of shadows for depth
9. **No rounded, friendly, or playful elements** — the tone is serious and authoritative
10. When in doubt, choose the more **restrained** option
