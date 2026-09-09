# 🍰 Cake & Crumb - Artisanal Bakery Website

Modern, interactive bakery website with custom cake builder and WhatsApp ordering.

## 🌐 [Live Demo](https://cake-and-crumb.netlify.app)

## ✨ Features

- 🎂 **8+ Signature Cakes** - Korean Bento, Vintage Lambeth, Belgian Chocolate, and more
- 🎨 **Custom Cake Builder** - 6-step interactive wizard with live price calculator
- 🌱 **100% Eggless Specialty** - Dedicated vegan-friendly options
- 📖 **Recipes & Skills** - Baker's secret recipes with pro tips
- 🛒 **Shopping Cart** - WhatsApp integration for easy ordering
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✨ **Glassmorphism Design** - Modern UI with smooth animations

## 🛠️ Tech Stack

- **React 18** (via CDN + Babel)
- **Tailwind CSS** (utility-first styling)
- **Google Fonts** (Plus Jakarta Sans, Playfair Display, Caveat)
- **No build process** - Single HTML file deployment

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/tnuislostq/bakery-website.git
cd bakery-website
```

### 2. Run a local server
```bash
# Python 3
python -m http.server 8000

# OR Node.js
npx live-server
```

### 3. Open in browser
```
http://localhost:8000
```

## ⚙️ Customize Your Bakery

Edit `index.html`:

**Update bakery info:**
- Line 530: Bakery name (`Cake & Crumb`)
- Line 601: Location/tagline
- Line 504: WhatsApp phone number (include country code)

**Add/edit cakes:**
- Lines 188-285: Modify `CAKE_CATALOG` array with your cakes

**Change theme colors:**
- Lines 21-60: Tailwind color configuration

**Replace images:**
- Update Unsplash URLs with your own product photos

## 🌐 Deploy to Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy! (auto-deploys on every commit)

## 📂 File Structure

```
bakery-website/
├── index.html          # Single-file React app
└── README.md          # This file
```

## 💡 Built With

- **React Hooks** - useState, useMemo for state management
- **Tailwind CSS** - Custom glassmorphism panels & animations
- **CDN Delivery** - No npm install needed
- **WhatsApp API** - Direct order messaging integration

## 📝 Features Breakdown

| Feature | Details |
|---------|---------|
| **Cake Menu** | Filter by category, view ratings & reviews |
| **Custom Builder** | Choose flavor, design, size, message, topper |
| **Price Calculator** | Real-time pricing based on customization |
| **Shopping Cart** | Add/remove items, adjust quantities |
| **Checkout** | Collect customer details, send via WhatsApp |
| **Recipes** | 3 featured recipes with ingredients & steps |

## 🎯 Customization Examples

### Add a new cake:
```javascript
// In CAKE_CATALOG array (lines 188-285)
{
  id: 'cake-9',
  title: 'Your Cake Name',
  category: 'signature',
  price: 999,
  rating: 5.0,
  reviewsCount: 10,
  image: 'https://your-image-url.jpg',
  description: 'Delicious description here',
  tags: ['Tag1', 'Tag2'],
  flavours: ['Flavor1', 'Flavor2']
}
```

### Update WhatsApp number:
```javascript
// Line 504
const waUrl = `https://api.whatsapp.com/send?phone=919876543210&text=...`;
// Replace 919876543210 with your WhatsApp number
```

## 🐛 Troubleshooting

**Images not loading?**
- Check image URLs are accessible
- Use absolute URLs (not relative paths)

**WhatsApp link not working?**
- Ensure phone number includes country code (e.g., 91 for India)
- Format: `phone=919876543210`

**Styling looks broken?**
- Clear browser cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check Tailwind CDN is loading

## 📱 Browser Support

✅ Chrome, Firefox, Safari, Edge
❌ Internet Explorer

## 📄 License

Open source - Use freely for your bakery business!

## 🤝 Contributing

Found a bug? Have a feature idea? Open an [issue](https://github.com/tnuislostq/bakery-website/issues)!

---

Made with ❤️ for artisanal bakeries | [Visit Demo](https://cake-and-crumb.netlify.app)
