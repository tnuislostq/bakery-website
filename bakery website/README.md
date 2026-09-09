# 🎂 Cake & Crumb | Cute Artisanal Bakery Website

A fully responsive cake ordering website built with **HTML5, CSS3, Modern JavaScript, and React 18** featuring a **Cute Pastel Glassmorphism design**, an interactive custom cake builder, a live recipe & baking skills vault, and WhatsApp ordering integration.

Designed for [Cake & Crumb Bakery](https://github.com/tnuislostq/bakery-website).

---

## ✨ Features Included

1. **Cute Glassmorphism Aesthetic:**
   - Multi-layered frosted glass panels (`backdrop-filter: blur(16px)`), pastel glowing gradient orbs, and soft floating animations.
   - Dreamy typography pairing: *Plus Jakarta Sans*, *Playfair Display*, and *Caveat*.
2. **Interactive Cake Ordering System:**
   - Categorized menu: *Korean Bento*, *Signature Cakes*, *100% Eggless Specials*, and *Cupcakes & Treats*.
   - Filter pills, live pricing in ₹ INR, dietary indicators, and responsive grid.
3. **Interactive "Bake Your Dream Cake" Customizer:**
   - Flavour & base selector (Belgian Truffle, Vanilla Bean, Red Velvet, Biscoff, Rose Pistachio).
   - Aesthetic frosting styles (Vintage Lambeth Frills, Korean Bento, Ombre Buttercream).
   - Weight/tier selector with dynamic price recalculation.
   - Dietary choice (100% Eggless, Classic, Sugar-Free).
   - Custom hand-piped message input with live cake preview badge.
   - Optional acrylic topper selection (+₹50).
4. **Baker's Recipe & Secret Skills Academy:**
   - Core baking pillars (Eggless Pastry Science, Lambeth Piping, Moisture Retention, Home Bakery Standards).
   - 3 interactive secret recipe modals with ingredient measurements, chef's pro tips, and step-by-step instructions.
5. **Clean Navigation & Cart Drawer:**
   - Floating glass sticky navbar with live cart counter.
   - Slide-over cart drawer with quantity adjustment and checkout form.
   - Direct WhatsApp order generator (`https://api.whatsapp.com/send?text=...`) compiling the exact order items, customer address, and notes for instant bakery fulfillment.
6. **Zero-Dependency Instant Preview:**
   - `index.html` runs straight out of the box in any web browser without needing `npm install` or build tools, while full Vite/React source files are also included!

---

## 🚀 How to Host on Netlify

### Method 1: Instant Drag & Drop (Takes 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the extracted `bakery-website` folder directly into the designated area in your browser.
3. Your website goes live immediately with a free `.netlify.app` link!

---

### Method 2: Connect via GitHub (Automatic Updates)
1. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: cute glassmorphism cake ordering website with custom builder"
   git branch -M main
   git remote add origin https://github.com/tnuislostq/bakery-website.git
   git push -u origin main --force
   ```
2. Log into [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and choose your repository: `tnuislostq/bakery-website`.
4. Netlify will automatically read the included `netlify.toml` configuration:
   - **Publish directory:** `.` (or `dist` if building with Vite)
5. Click **Deploy Site**. Every time you push changes to GitHub in the future, Netlify will automatically update your live website!

---

## 💻 Local Preview
Double-click `index.html` to view the website locally in any browser.
