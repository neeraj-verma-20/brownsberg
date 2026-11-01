# BROWNSBERG — Modern AI Content & Learning Platform

A modern, premium, fully responsive single-page website for **BROWNSBERG**, an AI-powered creative content and learning company.

## 🚀 Built With
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark Obsidian Theme with Amber/Gold Cinematic Accents)
- **Icons:** Lucide React & Optimized Inline SVGs
- **Architecture:** Next.js React Server Components (RSC) for maximum Core Web Vitals & Lighthouse performance

---

## 🌟 Brand Offerings & Architecture

### What We Do
1. **Telling Stories with AI** — Cinematic AI video generation, character continuity, auteur-level direction, and emotional brand narratives.
2. **Ads with AI** — High-converting commercial video creative, multi-variant testing, and social-first multi-aspect ratio formats.
3. **Learning with AI** — Synthetic AI instructors, branching scenario simulations, and personalized microlearning experiences.

### Our Solutions – Content & Learning
1. **Instructional Design & Learning Strategy** — Competency mapping, cognitive load optimization, and ADDIE/Agile-backed corporate roadmaps.
2. **Content Digitization** — Transforming legacy manuals, PDFs, and slide decks into interactive SCORM/xAPI compliant modules.
3. **Training Courses** — Bespoke enterprise academies, executive AI literacy masterclasses, and certified upskilling.

---

## ⚡ Performance Optimizations
- **Next.js Server Components:** Main page rendered server-side with zero unnecessary client hydration.
- **Ultra-Lightweight JS Bundle:** Total First Load JS is only **121 kB**.
- **Hero Video & Fallback:** High-resolution lightweight poster image paints instantly to eliminate LCP delay and layout shifts (CLS). The video is lazy-loaded only when in view, and skipped on mobile or low-bandwidth connections.
- **Pure CSS Transitions:** Hardware-accelerated GPU hover effects without heavy animation runtime libraries.
- **Responsive Layout:** Optimized across 4K displays, laptops, tablets, and smartphones.

---

## 📋 Google Forms Configuration

The enquiry form is wired and prepared for direct Google Forms / Google Sheets integration without code modifications.

Configuration file: [`src/config/google-forms.ts`](./src/config/google-forms.ts)

### How to Connect Your Google Form:
1. Create a Google Form with the following fields:
   - Full Name
   - Email Address
   - Phone Number
   - Service Required (Dropdown or Short Answer)
   - Message
2. Click the three dots (top right) in Google Forms &rarr; **Get pre-filled link**.
3. Fill placeholder text into each field and click **Get link**.
4. Open the copied URL and extract the entry IDs:
   - `entry.XXXXXXXXX` for Name
   - `entry.XXXXXXXXX` for Email
   - `entry.XXXXXXXXX` for Phone
   - `entry.XXXXXXXXX` for Service
   - `entry.XXXXXXXXX` for Message
5. Update `src/config/google-forms.ts`:
   ```ts
   export const GOOGLE_FORMS_CONFIG = {
     isConfigured: true,
     formEndpoint: "https://docs.google.com/forms/d/e/{YOUR_FORM_ID}/formResponse",
     entryIds: {
       name: "entry.XXXXXXXXX",
       email: "entry.XXXXXXXXX",
       phone: "entry.XXXXXXXXX",
       service: "entry.XXXXXXXXX",
       message: "entry.XXXXXXXXX",
     },
   };
   ```

---

## 🛠️ Development & Deployment

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build Production Bundle
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

