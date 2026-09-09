# 🍰 Cake & Crumb - Artisanal Bakery Website

A full-featured e-commerce bakery website built from scratch to showcase modern web development skills.

## 🌐 [Live Demo](https://cake-and-crumb.netlify.app)

## 🎯 Project Overview

This is a **production-ready single-page application** demonstrating:
- Modern React patterns (hooks, state management, performance optimization)
- Advanced CSS (glassmorphism, animations, responsive design)
- Full user experience (product catalog, custom builder, cart, checkout)
- Real-world API integration (WhatsApp Business)
- No build tools required (React via CDN)

## ✨ Key Features Built

- **Interactive Product Catalog** - 8+ signature cakes with filtering, ratings, and detailed descriptions
- **Custom Cake Builder** - 6-step interactive form with live price calculation
- **Shopping Cart** - Add/remove items, adjust quantities with real-time totals
- **Checkout Flow** - Customer form validation and WhatsApp API integration
- **Recipe Showcase** - 3 detailed recipes with ingredients, steps, and pro tips
- **Responsive Design** - Mobile-first approach (works seamlessly on all devices)
- **Modern UI** - Glassmorphism effects with smooth animations and custom theme

## 🛠️ Technologies & Skills Demonstrated

| Skill | Implementation |
|-------|-----------------|
| **React 18** | Functional components, hooks (useState, useMemo, useEffect), conditional rendering |
| **State Management** | Cart logic, product filtering, custom builder state, checkout handling |
| **Tailwind CSS** | Custom theme configuration, responsive utilities, animations, color palette |
| **JavaScript (ES6+)** | Array methods (map, filter, reduce), event handling, dynamic calculations |
| **UI/UX Design** | Mobile-responsive layouts, accessibility best practices, smooth animations |
| **API Integration** | WhatsApp Business API for order submission |
| **Deployment** | Netlify with CI/CD pipeline (auto-deploy on commit) |

## 🚀 How to Run

```bash
git clone https://github.com/tnuislostq/bakery-website.git
cd bakery-website

# Start local server
python -m http.server 8000
# Open http://localhost:8000
```

## 💡 Key Code Highlights

**Dynamic Price Calculation with useMemo (Performance Optimization):**
```javascript
const calculatedCustomPrice = useMemo(() => {
  let base = 499;
  if (customCake.weight.includes('1.0 kg')) base = 949;
  if (customCake.weight.includes('1.5 kg')) base = 1399;
  if (customCake.weight.includes('2.0 kg')) base = 1799;
  
  if (customCake.baseFlavour.includes('Biscoff') || 
      customCake.baseFlavour.includes('Pistachio')) {
    base += 100;
  }
  if (customCake.frostingStyle.includes('Vintage Lambeth')) {
    base += 150;
  }
  if (customCake.topper !== 'None') {
    base += 50;
  }
  return base;
}, [customCake]);
```

**Cart Management with State Updates:**
```javascript
const addToCart = (item) => {
  setCart(prev => {
    const existing = prev.find(i => i.id === item.id);
    if (existing) {
      return prev.map(i => 
        i.id === item.id 
          ? { ...i, quantity: i.quantity + 1 } 
          : i
      );
    }
    return [...prev, { ...item, quantity: 1 }];
  });
  setIsCartOpen(true);
};
```

**Filter & Memoization Pattern:**
```javascript
const filteredCakes = useMemo(() => {
  if (categoryFilter === 'all') return CAKE_CATALOG;
  return CAKE_CATALOG.filter(cake => cake.category === categoryFilter);
}, [categoryFilter]);
```

## 📊 Project Stats

- **8+ Products** with rich metadata (price, ratings, descriptions)
- **6-Step Custom Builder** with live preview and dynamic pricing
- **100% Responsive** - Optimized for 320px mobile to 4K displays
- **3 Featured Recipes** with detailed ingredients and instructions
- **Zero External Dependencies** - React & Tailwind via CDN (no npm needed)
- **Live Deployment** - Auto-deploys to Netlify on every GitHub commit
- **Smooth Animations** - Custom keyframes and Tailwind animations

## 🎨 Design & Architecture Decisions

✅ **Glassmorphism Design** - Modern aesthetic with blur effects and transparency
✅ **CDN-based React** - Demonstrates understanding of bundle optimization and quick prototyping
✅ **Single HTML File** - Shows ability to organize complex applications without build tools
✅ **Component State Patterns** - Clean separation of concerns with React hooks
✅ **Responsive Mobile-First** - Tailwind utilities for seamless cross-device experience
✅ **Performance Optimized** - useMemo for expensive calculations, efficient state management

## 🔮 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] User authentication & order history
- [ ] Admin dashboard for inventory management
- [ ] Email order confirmations
- [ ] Customer reviews & ratings system
- [ ] Firebase backend for data persistence

## 👨‍💻 About This Project

I built this project to demonstrate my ability to:

✅ **Build complete features** from UI design to functionality
✅ **Write clean React code** with hooks and state management
✅ **Create responsive, accessible interfaces** that work everywhere
✅ **Deploy to production** and maintain live applications
✅ **Think about user experience** and business requirements
✅ **Problem-solve independently** and make architectural decisions

## 📞 Connect With Me

I'm open to discussing the code, architecture decisions, or opportunities!

- **GitHub**: [github.com/tnuislostq](https://github.com/tnuislostq)
- **LinkedIn**: [linkedin.com/in/tanu-vishwakarma-b904b1308](https://www.linkedin.com/in/tanu-vishwakarma-b904b1308)
- **Email**: [tanu63867@gmail.com](mailto:tanu63867@gmail.com)
- **Live Demo**: [cake-and-crumb.netlify.app](https://cake-and-crumb.netlify.app)

---

**Feel free to reach out! I'd love to discuss web development, React patterns, or explore opportunities to build amazing projects together.** 🚀✨
