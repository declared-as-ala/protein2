# 🏋️ Protein.tn - Premium E-Commerce Platform

> A world-class sports nutrition e-commerce experience designed for the Tunisian and North African market with international-level quality.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue.svg)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-12.x-purple.svg)](https://motion.dev)

---

## 🎯 Overview

This is a **complete frontend redesign** of the Protein.tn sports nutrition e-commerce platform. Built with modern technologies and inspired by global brands like Nike, Gymshark, and MyProtein, it delivers a premium shopping experience that drives conversions and builds brand value.

### Key Highlights

✅ **Premium Design System** - Dark/Light mode with power orange accent
✅ **Video Hero Section** - Cinematic Adidas fitness video background  
✅ **Smart Shopping Features** - Quick view, wishlist, advanced filters  
✅ **Mobile-First Excellence** - Native app feel on all devices  
✅ **Performance Optimized** - Skeleton loaders, 60fps animations  
✅ **Conversion Focused** - Trust badges, social proof, smart UX  
✅ **Backend Ready** - Drop-in replacement for existing backend  

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or npm/pnpm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

---

## 📚 Documentation

- **[CEO Presentation](/CEO_PRESENTATION.md)** - Executive summary and business case
- **[Features Showcase](/FEATURES_SHOWCASE.md)** - Detailed visual tour of all features
- **[Project Overview](/PROJECT_OVERVIEW.md)** - Technical architecture and structure
- **[Quick Start Guide](/QUICK_START.md)** - Developer quick reference

---

## ✨ Features

### 🎨 Design & UX

#### Dual Theme System
- Complete light and dark mode support
- One-click toggle with smooth transitions
- Persistent preference (ready for localStorage)
- Premium color palette optimized for each mode

#### Video Hero
- Full-screen Adidas fitness video background
- Cinematic overlay and animations
- Clear value proposition and CTAs
- Mobile-optimized autoplay

#### Modern Product Cards
- Hover effects with image zoom
- Quick action buttons (wishlist, quick view)
- Discount badges and ratings
- Stock status indicators
- Smooth animations

### 🛍️ Shopping Experience

#### Quick View Modal
- Preview products without page reload
- Full product details and images
- Flavor/size selection
- Add to cart instantly
- Tabbed information (benefits, usage)

#### Smart Shopping Cart
- Slide-in drawer (no page reload)
- Quantity controls with live updates
- Free shipping threshold tracker
- Clear totals breakdown
- Mobile-optimized layout

#### Advanced Filters
- Price range slider
- Category multi-select
- Brand filtering
- Goal-based filtering
- In-stock only toggle
- Sort options (price, newest, best-selling)

#### Wishlist
- Save products for later
- Heart icon on all product cards
- Toast notifications
- Ready for backend integration

### 📱 Mobile Features

#### Mobile-First Design
- Responsive grid (2→3→4 columns)
- Touch-friendly controls
- Thumb-optimized navigation
- Native app feel

#### Mobile Quick Actions
- Floating action button
- Quick access to cart, wishlist, search
- Smooth expand/collapse animation
- Bottom-right positioning

#### Mobile Navigation
- Hamburger menu drawer
- Full-screen overlay
- Smooth slide-in animation
- Easy to close

### ⚡ Performance

#### Skeleton Loaders
- Product cards
- Category cards
- Images
- Smooth transitions to content

#### Smooth Animations
- 60fps transitions
- GPU-accelerated
- Motion/React powered
- Non-blocking

#### Optimized Code
- Component-based architecture
- Lazy loading ready
- Efficient re-renders
- Modern React patterns

### 🎯 Conversion Features

#### Trust Elements
- Trust banner (authenticity, shipping, support)
- Product ratings and reviews
- Stock status indicators
- Secure payment messaging

#### Social Proof
- Star ratings on products
- Review counts
- Best seller badges
- New arrival labels

#### Smart CTAs
- Clear primary actions
- Free shipping tracker
- Discount calculations
- Urgency indicators

---

## 🎨 Design System

### Colors

#### Light Mode
```css
Background: #ffffff
Foreground: #0a0a0a
Primary (Orange): #ff4d00
Secondary: #f5f5f5
Border: #e5e5e5
```

#### Dark Mode
```css
Background: #0a0a0a
Foreground: #fafafa
Primary (Orange): #ff6b35
Secondary: #1a1a1a
Border: #262626
```

### Typography
- **Font Stack**: System fonts (performance optimized)
- **Headings**: Bold (700 weight), tight line-height
- **Body**: Regular (400 weight), comfortable line-height
- **UI Elements**: Medium (600 weight)

### Spacing
- Base unit: 4px
- Consistent padding/margin scale
- Container max-width: 1280px
- Responsive gutters

---

## 🏗️ Architecture

### Tech Stack
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first styling
- **Motion (Framer Motion)** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Project Structure
```
/src
├── /app
│   ├── App.tsx                     # Main application
│   ├── /components
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Video hero section
│   │   ├── ProductCard.tsx         # Product card component
│   │   ├── CartDrawer.tsx          # Shopping cart
│   │   ├── QuickView.tsx           # Quick view modal
│   │   ├── Filters.tsx             # Product filters
│   │   ├── ShopPage.tsx            # Shop/category page
│   │   ├── ProductDetailPage.tsx   # Product detail page
│   │   └── ... (20+ components)
│   ├── /types
│   │   └── product.ts              # TypeScript interfaces
│   └── /utils
│       └── mock-data.ts            # Mock product data
├── /styles
│   ├── theme.css                   # Design tokens
│   ├── tailwind.css                # Tailwind directives
│   └── fonts.css                   # Font imports
```

### Component Pattern
```tsx
// Typical component structure
import { ComponentProps } from './types';
import { Button } from '@/app/components/ui/button';

export function Component({ prop1, prop2 }: ComponentProps) {
  return (
    <div className="container mx-auto">
      {/* Component content */}
    </div>
  );
}
```

---

## 🔌 Backend Integration

### API Endpoints Expected

```typescript
// Products
GET    /api/products              // List products
GET    /api/products/:id          // Product detail
GET    /api/products/featured     // Featured products

// Categories
GET    /api/categories            // List categories
GET    /api/categories/:id        // Category detail

// Cart
POST   /api/cart                  // Add to cart
GET    /api/cart                  // Get cart
PUT    /api/cart/:id              // Update quantity
DELETE /api/cart/:id              // Remove item

// User
POST   /api/auth/login            // Login
POST   /api/auth/register         // Register
GET    /api/user/profile          // User profile
```

### Data Structure

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  inStock?: boolean;
  flavors?: string[];
  sizes?: string[];
}
```

---

## 🎯 Customization

### Changing Brand Colors

Edit `/src/styles/theme.css`:
```css
:root {
  --primary: #ff4d00;  /* Your brand color */
}

.dark {
  --primary: #ff6b35;  /* Dark mode variant */
}
```

### Updating Logo

Replace logo URL in:
- `/src/app/components/Header.tsx`
- `/src/app/components/Footer.tsx`

### Modifying Products

Edit `/src/app/utils/mock-data.ts`:
```typescript
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Your Product",
    price: 150,
    // ... more fields
  }
];
```

### Adding New Pages

Create component and import in `App.tsx`:
```tsx
import { YourPage } from '@/app/components/YourPage';

// Add to render
<YourPage />
```

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Grid Columns |
|--------|-----------|--------------|
| Mobile | < 768px | 2 columns |
| Tablet | 768px - 1024px | 3 columns |
| Desktop | > 1024px | 4 columns |

---

## ⚡ Performance

### Optimization Features
- Component lazy loading ready
- Image optimization structure
- Skeleton loaders for perceived speed
- Efficient re-render patterns
- GPU-accelerated animations

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

---

## 🧪 Testing Checklist

- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS, Android)
- [ ] Dark/Light mode toggle
- [ ] Add to cart functionality
- [ ] Quick view modal
- [ ] Filters and sorting
- [ ] Cart drawer
- [ ] Responsive layouts
- [ ] Animations and transitions
- [ ] Form submissions
- [ ] Error states

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output: `/dist` directory

### Environment Variables (Example)
```env
VITE_API_URL=https://api.protein.tn
VITE_ANALYTICS_ID=your-ga-id
```

### Deployment Platforms
- **Vercel** - Recommended (zero config)
- **Netlify** - Easy deployment
- **AWS S3 + CloudFront** - Scalable
- **Traditional hosting** - Upload /dist folder

---

## 📊 Analytics Integration

Ready for:
- Google Analytics 4
- Meta Pixel
- Hotjar / FullStory
- Mixpanel / Amplitude

Add tracking in `/src/app/App.tsx`:
```tsx
useEffect(() => {
  // Track page view
  analytics.track('page_view', {
    page: window.location.pathname
  });
}, []);
```

---

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Code Style
- **Formatting**: Prettier (recommended)
- **Linting**: ESLint (configured)
- **Types**: Strict TypeScript

### Component Development
1. Create component in `/src/app/components/`
2. Export from component file
3. Import in App.tsx or other components
4. Use TypeScript for props

---

## 🤝 Contributing

This is a client project redesign. For internal team:

1. Follow existing component patterns
2. Use TypeScript for all new code
3. Maintain responsive design principles
4. Test on mobile devices
5. Optimize for performance

---

## 📄 License

Proprietary - © 2026 Protein.tn

---

## 📞 Support

For questions or issues:
- Check documentation files in project root
- Review component examples in `/src/app/components/`
- Consult TypeScript types in `/src/app/types/`

---

## 🎯 Roadmap

### Phase 1 - MVP (Current)
✅ Complete frontend redesign  
✅ All core components  
✅ Mobile-responsive  
✅ Dark mode  

### Phase 2 - Integration
- [ ] Backend API integration
- [ ] Real product data
- [ ] User authentication
- [ ] Payment processing

### Phase 3 - Enhancement
- [ ] Product reviews system
- [ ] Advanced search
- [ ] Multi-language support
- [ ] Loyalty program
- [ ] Mobile app

### Phase 4 - Growth
- [ ] Subscription products
- [ ] Personalization engine
- [ ] AI recommendations
- [ ] Social shopping features

---

## 🏆 Success Metrics

### Target KPIs
- **Conversion Rate**: +30%
- **Mobile Conversions**: +40%
- **Average Order Value**: +25%
- **Cart Abandonment**: -50%
- **Time on Site**: +60%
- **Pages per Session**: +35%

---

## 💪 Built With Excellence

**Frontend**: Modern, performant, accessible  
**Design**: Premium, international-level quality  
**UX**: Conversion-optimized, user-centered  
**Code**: Clean, maintainable, scalable  

---

## 🎉 Get Started Now

```bash
npm install && npm run dev
```

**Welcome to the future of Protein.tn e-commerce.** 🚀

---

*Transforming local e-commerce into international-level experiences.*

**Protein.tn - Transformez Votre Performance**
