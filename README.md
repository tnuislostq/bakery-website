# 🍰 Cake & Crumb | Artisanal Home Bakery Website

A modern, responsive, and interactive bakery website template showcasing delicious custom cakes, cupcakes, and artisanal bakes. Built with React, Tailwind CSS, and features a beautiful glassmorphism design with smooth animations.

## 🌐 Live Demo

**[View Live Demo →](https://cake-and-crumb.netlify.app)**

Experience the fully interactive website featuring:
- Browse 8+ signature and specialty cakes with high-quality images
- Real-time custom cake builder with live price calculation
- Responsive design that works perfectly on mobile, tablet, and desktop
- Smooth animations and glassmorphism UI effects
- WhatsApp integration for order placement

---

## ✨ Key Features

### 🎂 **Cake Menu & Catalog**
- **8+ Signature Creations** - Korean Bento Cakes, Vintage Lambeth, Belgian Chocolate, Wild Berry, Biscoff Crunch, Cupcakes, Pistachio Rose, and more
- **Category Filtering** - Filter by All, Korean Bento, Signature Cakes, 100% Eggless, and Cupcakes & Treats
- **High-Quality Images** - Professional product photos with hover zoom effects
- **Detailed Descriptions** - Each cake includes pricing, ratings, customer reviews count, and flavor options
- **Quick Add to Cart** - One-click ordering with instant cart updates

### 🎨 **Interactive Custom Cake Builder**
- **6-Step Customization Process:**
  1. Choose cake flavor base (Belgian Chocolate, Vanilla Bean, Red Velvet, Biscoff, Pistachio Rose, Strawberry)
  2. Select frosting & aesthetic style (Korean Minimalist, Vintage Lambeth, Ombre, Wildflower)
  3. Pick size & weight (0.5kg - 2.0kg with serving sizes)
  4. Choose dietary preference (100% Eggless, Classic with Eggs, Sugar-Free)
  5. Add custom message for hand-piping (up to 30 characters)
  6. Select cake topper (Golden Birthday, Sparkles, Love Heart)

- **Live Price Calculator** - Real-time pricing updates based on selections
- **Visual Preview** - Animated cake emoji display with your custom message
- **Summary Card** - Sticky panel showing all your selections and final price

### 🌱 **100% Eggless Specialty**
- Dedicated section for vegan-friendly options
- Recipes section with step-by-step instructions
- Baker's specialized skills highlighted

### 📖 **Recipes & Baker's Skills**
- Detailed recipe cards with:
  - Time, difficulty level, servings
  - Complete ingredients list
  - Step-by-step instructions
  - Professional tips from the baker
- Showcase of baker's expertise:
  - Eggless Pastry Science
  - Lambeth & Vintage Piping Techniques
  - Custom Flavor Formulation
  - Hygienic Home Bakery Standards

### 🛒 **Shopping Cart & Checkout**
- Persistent shopping cart with quantity management
- Real-time cart total calculation
- Customer delivery form (name, phone, address, target date, special notes)
- WhatsApp integration for direct order submission
- Order confirmation with unique order ID

### 🎯 **User Experience**
- **Glassmorphism Design** - Modern, blurred glass effect panels with backdrop filters
- **Smooth Animations** - Floating orbs, hover effects, pulse animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop (768px+ breakpoints)
- **Accessibility** - Semantic HTML, proper color contrast, ARIA labels
- **Custom Typography** - Google Fonts: Plus Jakarta Sans, Playfair Display, Caveat

### 📱 **Mobile Optimized**
- Hamburger navigation menu
- Touch-friendly buttons and inputs
- Optimized image sizes
- Sticky header for easy navigation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Interactive UI with hooks (useState, useEffect, useMemo) |
| **Tailwind CSS** | Utility-first styling with custom configuration |
| **Google Fonts** | Custom typography (Plus Jakarta Sans, Playfair Display, Caveat) |
| **Babel Standalone** | JSX transformation in the browser |
| **Lucide Icons** | Icon library (optional for future enhancements) |
| **Netlify** | Deployment and hosting |

### Language Composition:
- **HTML**: 67.5%
- **JavaScript**: 31.4%
- **CSS**: 1.1%

---

## 📁 Project Structure

```
bakery-website/
├── index.html              # Single HTML file with embedded React app
├── README.md              # This file
└── [styles integrated via Tailwind CDN]
```

### Code Organization (Within index.html):
- **Tailwind Configuration** - Custom theme with pastel colors and animations
- **Custom Styles** - Glassmorphism effects, scrollbar, animations
- **React Component** - Main App with all features in one file
- **Data** - CAKE_CATALOG, RECIPES, SKILLS_LIST objects
- **State Management** - useState for cart, filters, custom cake, checkout
- **Event Handlers** - Add to cart, quantity updates, checkout submission

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or installation required

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/tnuislostq/bakery-website.git
cd bakery-website
```

2. **Open in browser:**
```bash
# Option 1: Direct file open
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Option 2: Use a local server (recommended for development)
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js with http-server
npx http-server

# Node.js with live-server (auto-reload)
npx live-server
```

3. **View in browser:**
Open [http://localhost:8000](http://localhost:8000) or [http://localhost:5500](http://localhost:5500) depending on your server.

---

## 🎨 Customization Guide

### 1. **Update Bakery Information**
Edit the HTML in the Hero section and Navbar:
```javascript
// Lines 530-533: Bakery name and tagline
<span class="font-serif text-2xl font-bold">Cake & Crumb</span>
<p class="text-[11px]">Artisanal • Cute • 100% Eggless Options</p>

// Lines 601: Location
<span>Freshly Baked In Hazaribagh • 100% Eggless Specialty</span>
```

### 2. **Modify Cake Catalog**
Edit the `CAKE_CATALOG` array (lines 188-285):
```javascript
const CAKE_CATALOG = [
  {
    id: 'cake-1',
    title: 'Your Cake Name',
    category: 'bento', // or 'signature', 'eggless', 'treats'
    price: 499,
    rating: 4.9,
    reviewsCount: 84,
    image: 'YOUR_IMAGE_URL',
    description: 'Description here',
    tags: ['Tag1', 'Tag2'],
    flavours: ['Flavor1', 'Flavor2']
  }
];
```

### 3. **Add/Edit Recipes**
Modify the `RECIPES` array (lines 288-367) with your baker's recipes and pro tips.

### 4. **Update Colors & Theme**
Tailwind custom theme (lines 21-60):
```javascript
colors: {
  brand: {
    pink: '#ff8fb1',
    cream: '#fffdfa',
    lavender: '#e8dcff',
    mint: '#d2f9ea',
    peach: '#ffe5d9',
    gold: '#eab308'
  }
}
```

### 5. **Add Your Images**
Replace Unsplash URLs with your own product photos:
- Update `image` fields in CAKE_CATALOG
- Update hero section image (line 668)

### 6. **Configure WhatsApp Integration**
Update the WhatsApp number in handleCheckout (line 504):
```javascript
const waUrl = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${waMessage}`;
// Replace with your actual WhatsApp Business number with country code
// Example: phone=919876543210 (India)
```

### 7. **Add Your Store Details**
- Navigation links (lines 544-546)
- About section placeholder
- Contact information

---

## 🎯 Features in Detail

### Custom Cake Builder Logic
- **Base Price**: ₹499 (0.5kg) → ₹1799 (2.0kg)
- **Premium Flavors**: +₹100 (Biscoff, Pistachio)
- **Vintage Lambeth**: +₹150
- **Cake Toppers**: +₹50 each

### Shopping Cart Features
- Add multiple items
- Adjust quantities
- View live total
- Clear cart on successful checkout
- Order ID generation

### WhatsApp Integration
- Automatic message formatting
- Order summary with items and quantities
- Customer details included
- Direct link to WhatsApp Business chat

---

## 📦 Deployment

### Deploy on Netlify (Recommended)
1. Push your code to GitHub
2. Connect to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Deploy!

### Deploy on Other Platforms
- **Vercel** - Similar to Netlify
- **GitHub Pages** - Free but requires workarounds for single-page app
- **Your Own Server** - Copy index.html to web root

---

## 🔧 Performance Optimization

- **CDN Delivery** - Tailwind CSS and React via CDN for fast loading
- **Image Optimization** - Use image compression tools for product photos
- **Minimal Dependencies** - No npm packages required
- **Lazy Loading** - Images lazy load naturally in browser

### Optimization Tips:
1. Compress cake images to <200KB each
2. Use WebP format for better compression
3. Consider self-hosting React/Tailwind for offline capability
4. Add service worker for PWA functionality
5. Minimize custom fonts to essential weights

---

## 🐛 Troubleshooting

### Cart not persisting after refresh?
- This is normal! Add localStorage to persist cart:
```javascript
// Save cart to localStorage
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

// Load cart from localStorage on mount
useEffect(() => {
  const saved = localStorage.getItem('cart');
  if (saved) setCart(JSON.parse(saved));
}, []);
```

### Images not loading?
- Verify image URLs are accessible
- Check CORS policy if using external images
- Use absolute URLs instead of relative paths

### WhatsApp link not working?
- Ensure phone number includes country code
- Use '+' format or country code only
- Test URL: `https://api.whatsapp.com/send?phone=919876543210`

### Styling issues?
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check Tailwind CDN is loading in Network tab
- Verify custom class names in CSS sections

---

## 📝 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 🤝 Contributing

Suggestions for improvements? Feel free to fork and submit pull requests or open issues!

---

## 📄 License

This project is open source. Feel free to use it for your bakery business.

---

## 💌 About

Built with ❤️ by [Tanu](https://github.com/tnuislostq) for artisanal home bakeries. Inspired by the love of freshly baked, handcrafted desserts and the joy of celebrating with sweet treats.

### Features Used:
- 🌱 100% Eggless Specialty Focus
- 🎨 Glassmorphism Modern Design
- ⚡ No Build Process Required
- 📱 Fully Responsive
- 🛒 Integrated Shopping Cart
- 💬 WhatsApp Order Integration
- 📖 Recipe Sharing Platform
- ✨ Interactive Cake Customization

---

## 🔗 Quick Links

- **Live Demo**: [cake-and-crumb.netlify.app](https://cake-and-crumb.netlify.app)
- **GitHub Repository**: [tnuislostq/bakery-website](https://github.com/tnuislostq/bakery-website)
- **Report Issues**: [GitHub Issues](https://github.com/tnuislostq/bakery-website/issues)

---

**Last Updated**: September 2026 | Made for Cake & Crumb 🍰✨
