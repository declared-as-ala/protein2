# Protein.tn - Premium Sports Nutrition E-Commerce Platform

## 🎯 Project Overview

A world-class, premium sports nutrition e-commerce platform redesigned for the Tunisian and North African market with an international-level user experience inspired by Nike, Gymshark, MyProtein, and Apple.

## ✨ Key Features

### Design System
- **Dual Theme**: Complete dark and light mode support with premium color palette
- **Power Orange Accent**: Energy-focused brand color (#ff4d00 light, #ff6b35 dark)
- **Modern Typography**: Bold headings, clear hierarchy, excellent mobile readability
- **Smooth Animations**: Motion/React for micro-interactions and page transitions

### Pages & Components

#### Home Page (`App.tsx`)
- Hero section with video background (Adidas fitness video)
- Trust banner with key USPs
- Category grid with hover effects
- New arrivals section
- Best sellers section
- Promotional banner
- Product recommendations
- Newsletter signup
- Comprehensive footer

#### Components Library
1. **Header** - Sticky navigation with search, cart, wishlist, user menu, dark mode toggle
2. **ProductCard** - Hover effects, discount badges, ratings, quick actions
3. **ProductCardSkeleton** - Elegant loading states
4. **CategoryCard** - Image-driven category navigation
5. **CartDrawer** - Slide-in cart with quantity controls, totals, free shipping indicator
6. **QuickView** - Modal for quick product preview with add to cart
7. **Filters** - Advanced filtering (price, category, brand, goals, stock status)
8. **ProductSection** - Reusable product grid sections
9. **ProductDetailPage** - Full product page with gallery, tabs, reviews
10. **ShopPage** - Category/shop listing with filters and sorting
11. **Newsletter** - Email capture component
12. **Footer** - Complete footer with links, social, contact info
13. **BackToTop** - Animated scroll-to-top button
14. **TrustBanner** - Trust indicators (authenticity, shipping, support)

### Smart UX Features

#### Shopping Experience
- **Quick View Modal**: Preview products without leaving the page
- **Smart Cart**: 
  - Quantity controls
  - Flavor/size selection tracking
  - Free shipping threshold indicator
  - Persistent cart state
- **Wishlist**: Save products for later
- **Toast Notifications**: Real-time feedback for all actions
- **Skeleton Loaders**: Smooth loading experience everywhere

#### Filtering & Sorting
- Price range slider
- Category multi-select
- Brand filtering
- Goal-based filtering (muscle gain, weight loss, etc.)
- In-stock only filter
- Sort by: featured, price (low/high), newest, best-selling

#### Mobile-First Design
- Responsive grid layouts (2 cols mobile → 4 cols desktop)
- Mobile-optimized navigation drawer
- Touch-friendly buttons and controls
- Sticky header on mobile
- Bottom sheet filters on mobile

### Performance Features
- Skeleton loaders for perceived performance
- Lazy loading ready structure
- Optimized animations (GPU accelerated)
- Smooth 60fps transitions
- Efficient re-renders with React best practices

## 🎨 Design Language

### Colors
**Light Mode:**
- Background: #ffffff
- Foreground: #0a0a0a
- Primary (Brand Orange): #ff4d00
- Secondary: #f5f5f5
- Success: #16a34a
- Destructive: #dc2626

**Dark Mode:**
- Background: #0a0a0a
- Foreground: #fafafa
- Primary (Brand Orange): #ff6b35
- Secondary: #1a1a1a
- Borders: #262626

### Typography
- System font stack for performance
- Bold headings (700 weight)
- Medium for UI elements (600 weight)
- Clear hierarchy with size scale

### Spacing & Layout
- Consistent 4px grid system
- Generous padding for premium feel
- Container max-width with responsive padding
- Smart use of whitespace

## 🛠 Technology Stack

### Core
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling

### UI Libraries
- **Radix UI** - Accessible primitives
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### State Management
- React Hooks (useState, useEffect)
- Local state (can easily integrate Zustand/Redux if needed)

## 📁 Project Structure

```
/src
├── /app
│   ├── App.tsx                          # Main application
│   ├── /components
│   │   ├── Header.tsx                   # Navigation header
│   │   ├── Hero.tsx                     # Video hero section
│   │   ├── ProductCard.tsx              # Product card component
│   │   ├── ProductCardSkeleton.tsx      # Loading skeleton
│   │   ├── CategoryCard.tsx             # Category card
│   │   ├── CartDrawer.tsx               # Shopping cart drawer
│   │   ├── QuickView.tsx                # Quick view modal
│   │   ├── Filters.tsx                  # Product filters
│   │   ├── ProductSection.tsx           # Product grid section
│   │   ├── CategorySection.tsx          # Category grid
│   │   ├── TrustBanner.tsx              # Trust indicators
│   │   ├── Newsletter.tsx               # Newsletter signup
│   │   ├── Footer.tsx                   # Site footer
│   │   ├── BackToTop.tsx                # Scroll to top button
│   │   ├── ShopPage.tsx                 # Shop/category page
│   │   ├── ProductDetailPage.tsx        # Product detail page
│   │   └── /ui                          # Radix UI components
│   ├── /types
│   │   └── product.ts                   # TypeScript types
│   └── /utils
│       └── mock-data.ts                 # Mock product data
├── /styles
│   ├── theme.css                        # Theme tokens & variables
│   ├── tailwind.css                     # Tailwind directives
│   └── fonts.css                        # Font imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm/pnpm/yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Key Differentiators

### vs. Current protein.tn
1. **Modern Design**: International-level UI/UX
2. **Performance**: Skeleton loaders, smooth animations
3. **Smart UX**: Quick view, wishlist, advanced filters
4. **Mobile-First**: Native app feel on mobile
5. **Dark Mode**: Complete dual-theme support
6. **Micro-interactions**: Hover effects, smooth transitions
7. **Trust Elements**: Prominent social proof and guarantees

### Inspired By Best Practices
- **Nike**: Bold typography, video hero, minimal design
- **Gymshark**: Category cards, product hover effects
- **MyProtein**: Filtering system, promotional banners
- **Apple**: Smooth animations, premium feel, whitespace

## 📱 Responsive Breakpoints
- Mobile: < 768px (2 col grid)
- Tablet: 768px - 1024px (3 col grid)
- Desktop: > 1024px (4 col grid)

## 🔄 Backend Integration Notes

This is a **FRONTEND ONLY** redesign. The component structure is designed to easily integrate with existing backend APIs:

### Expected API Endpoints
- `GET /api/products` - Product listing
- `GET /api/products/:id` - Product detail
- `GET /api/categories` - Category list
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items

### Data Structure
Components expect product data in this format:
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

## 🎨 Customization

### Changing Brand Colors
Edit `/src/styles/theme.css`:
```css
:root {
  --primary: #ff4d00; /* Your brand color */
}
```

### Adding New Products
Edit `/src/app/utils/mock-data.ts` or connect to your API

### Modifying Layouts
All components are modular and can be rearranged in `App.tsx`

## 📈 Future Enhancements

Ready for:
- [ ] User authentication
- [ ] Payment integration
- [ ] Order tracking
- [ ] Loyalty points system
- [ ] Subscription products
- [ ] Product reviews system
- [ ] Advanced search with autocomplete
- [ ] Product comparison
- [ ] Size guide modals
- [ ] Live chat support
- [ ] Multi-language support (Arabic/French)
- [ ] SEO optimization
- [ ] Analytics integration

## 🎯 CEO Presentation Highlights

### The WOW Factors:
1. **Video Hero**: Premium Adidas video background - instant impact
2. **Dark Mode**: Switch between themes - modern & sophisticated
3. **Smooth Animations**: Everything feels alive and premium
4. **Quick View**: Shop without page reloads - Amazon-level UX
5. **Smart Cart**: Free shipping indicators, real-time updates
6. **Mobile Excellence**: Feels like a native app on phones
7. **International Design**: Looks like a global brand

### Performance:
- Skeleton loaders everywhere
- 60fps animations
- Instant feedback on all interactions
- Lightning-fast perceived performance

### Conversion Optimized:
- Trust badges prominent
- Social proof (ratings/reviews)
- Clear CTAs throughout
- Free shipping threshold
- Discount badges visible
- Stock status indicators
- One-click quick view

---

**Built with ❤️ for Protein.tn**
*Transforming local e-commerce into international-level experiences*
