## IMUU Mebel — Premium Landing Page (Uzbek)

A single-page, mobile-first landing page positioned as a premium custom-furniture brand, built around the core promise: **"10 kunda tayyor mebel."** All copy in Uzbek, lead capture via call / Telegram / Instagram buttons (no form).

### Design direction

- **Mood:** elegant, spacious, editorial — inspired by the IMUU logo's serif character.
- **Palette:** ivory/off-white background, warm beige, soft wood tone, deep charcoal for text. Subtle gold-brown accent for hover/CTAs.
- **Typography:** serif display (Playfair Display) for headlines to echo the logo; clean sans (Inter) for body.
- **Layout:** generous whitespace, large imagery, thin dividers, soft fade-in animations on scroll.
- **Logo:** IMUU logo placed in header and footer (uploaded image moved into `src/assets`).

### Page sections

1. **Header (sticky, transparent → solid on scroll)**
   - Logo left; nav links (Biz haqimizda, Xizmatlar, Jarayon, Galereya, Aloqa); "Buyurtma berish" button right. Mobile: hamburger sheet.

2. **Hero**
   - Full-viewport, warm furniture interior background with soft overlay.
   - Headline: **"10 kunda tayyor — sizga atalgan mebel."**
   - Subheadline: sifat, tezlik va individual dizayn haqida bir jumla.
   - Two CTAs: **Buyurtma berish** (primary, scrolls to contact) · **Bog'lanish** (outline, tel: link).
   - Small trust strip: "Toshkent · 10 kun · Individual dizayn."

3. **About / Value proposition**
   - Short intro paragraph about IMUU Mebel.
   - Three value cards with icons: **Tez tayyorlash (10 kun)**, **Sifatli materiallar**, **Individual dizayn**.

4. **Services / Products**
   - 4-card grid with elegant imagery and short descriptions:
     - Oshxona mebellari
     - Yotoqxona
     - Shkaflar
     - Ofis mebellari

5. **Process — "Qanday ishlaymiz"**
   - Horizontal 4-step timeline (stacks vertically on mobile): Bog'lanish → Dizayn tanlash → Ishlab chiqarish (10 kun) → Yetkazib berish va o'rnatish. Numbered, with thin connecting line.

6. **Portfolio / Gallery**
   - Asymmetric masonry-style grid of tasteful placeholder furniture images with subtle hover zoom. Section heading: "Bizning ishlarimiz."

7. **Contact**
   - Two-column block: left = manzil, telefon (clickable `tel:`), ish vaqti; right = large Telegram and Instagram buttons + "Buyurtma berish" call CTA.
   - Address: Toshkent sh. Usta Shirin 114 (Jomiy bozor). Phone: +998 90 035 55 00.

8. **Footer**
   - Logo, short brand statement ("Sizning uyingiz uchun mukammal mebel"), social links (Telegram, Instagram), copyright.

### CTAs throughout

- Phone: `tel:+998900355500`
- Telegram: `https://t.me/imuu_mebel`
- Instagram: `https://www.instagram.com/imuu_mebel/`
- Floating WhatsApp/Telegram-style round button bottom-right on mobile linking to Telegram.

### Technical notes

- Stack: existing React + Vite + Tailwind + shadcn/ui.
- Design tokens added to `index.css` and `tailwind.config.ts` (ivory, beige, wood, charcoal, accent) — all HSL, no hardcoded colors in components.
- Fonts loaded via Google Fonts (Playfair Display + Inter) in `index.html`.
- Logo copied from upload to `src/assets/imuu-logo.jpg` and imported as ES module.
- Hero and gallery images generated as warm, neutral furniture visuals and stored in `src/assets`.
- New components under `src/components/landing/`: `Header`, `Hero`, `About`, `Services`, `Process`, `Gallery`, `Contact`, `Footer`, `FloatingContact`.
- `src/pages/Index.tsx` replaced to compose these sections.
- SEO: update `index.html` title, meta description (Uzbek), Open Graph tags, semantic `<h1>`/`<section>` structure.
- No backend, no form, no database changes.