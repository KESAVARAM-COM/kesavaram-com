# KESAVARAM.CO — Build Plan

A mobile-first Siddha & wellness brand site. All orders/bookings go through WhatsApp (+91 8124356824). No cart, no checkout, no backend — every CTA opens a prefilled WhatsApp chat.

## Routes (TanStack Start, file-based)

- `/` — Landing: lotus logo, tagline "Healing. Naturally. Delivered to You.", trust badges (Chat to Order · Secure & Safe · Natural & Trusted), big "Continue with WhatsApp" CTA.
- `/products` — Tabs: Massage Oils · Siddha Drugs · Hindu God Items. Each card: image, name, ₹price, ★rating, short description, "Chat on WhatsApp to Order" button (prefilled with product name).
- `/services` — Full Body Therapeutic Massage. Duration toggle (60 min ₹999 / 90 min ₹1499). Feature icons: Expert Therapists, Home Service, Hygienic & Safe, For Men & Women. "Chat on WhatsApp to Book" CTA.
- `/videos` — Embedded YouTube channel (@kesavaram252): channel link + responsive iframe grid of latest videos (using `youtube.com/embed/?listType=user_uploads&list=...` or curated video IDs as placeholders).
- `/contact` — WhatsApp link (wa.me/918124356824), phone +91 81243 56824, location Dindigul, Tamil Nadu, with a simple map embed.

Shared layout in `__root.tsx`: top bar with lotus logo + brand mark, bottom tab bar (Home · Products · Services · Videos · Contact) optimized for mobile, sticky floating WhatsApp button.

## Design System (`src/styles.css`)

- **Background**: soft beige `oklch(0.96 0.02 85)`
- **Primary (deep green)**: `oklch(0.32 0.06 145)`
- **Secondary (gold)**: `oklch(0.78 0.13 85)`
- **Accent (blue)**: `oklch(0.55 0.14 240)`
- **Foreground**: deep green on beige; cream on green
- Gold gradient tokens for buttons/cards; subtle gold filigree borders
- **Fonts** (Google Fonts via `<link>` in root head):
  - Headings: *Cinzel* (Sanskrit-inspired serif, gold)
  - Body: *Nunito* (modern rounded)
- Border radius: `1rem` (rounded, soft mobile feel)
- Card style: cream/gold gradient panels with soft shadow, matching the reference mockup

## Assets

- Copy uploaded logo → `src/assets/kesavaram-logo.png`
- Generate via `imagegen` (fast tier, jpg): hero botanical mortar-and-pestle, 3 massage oil bottles, 3 siddha drug jars, 3 pooja items (brass kit, rudraksha bracelet, god coin), massage service hero. Saved to `src/assets/`.

## WhatsApp helper

`src/lib/whatsapp.ts` — `waLink(message: string)` returns `https://wa.me/918124356824?text=<encoded>`. Used by every CTA with context-specific prefilled text (e.g. "Hi, I'd like to order Pain Relief Massage Oil (100ml) — ₹499").

## Sample seed data (`src/lib/catalog.ts`)

- **Massage Oils**: Pain Relief Massage Oil ₹499 · Nallennai Thailam ₹399 · Karpooradi Thailam ₹449
- **Siddha Drugs**: Kabasura Kudineer Choornam ₹299 · Nilavembu Kudineer ₹249 · Thripala Choornam ₹279
- **Hindu God Items**: Pooja Kit ₹599 · God Symbol Bracelet ₹199 · God Symbol Chain ₹349 · God Photo Coin ₹149

## SEO

Per-route `head()` with unique title/description/og tags. JSON-LD `LocalBusiness` on contact page (Dindigul address, phone, WhatsApp).

## Out of scope (this iteration)

No cart/checkout, no auth, no backend, no payments — pure WhatsApp commerce. Easy to add later if needed.