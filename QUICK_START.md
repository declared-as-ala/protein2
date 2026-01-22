# 🚀 Quick Start Guide - Protein.tn Redesign

## Instant Preview

Just open the application and you'll see:
- Premium video hero with Adidas fitness background
- Product categories with hover effects
- New arrivals and best sellers
- Dark/Light mode toggle (moon/sun icon, top right)
- Fully functional shopping cart
- Quick view modals
- Mobile-responsive design

## 🎨 Key Features to Test

### 1. Dark Mode
**Location**: Moon/Sun icon in header (top right)
**Action**: Click to toggle between light and dark themes
**Result**: Instant theme switch with smooth transition

### 2. Shopping Cart
**Location**: Cart icon in header (with badge count)
**Action**: 
- Click any "Add to Cart" button on products
- Click cart icon to open cart drawer
**Result**: Slide-in cart with quantity controls and totals

### 3. Quick View
**Location**: Eye icon on product cards (appears on hover)
**Action**: Click eye icon on any product
**Result**: Modal opens with product details, can add to cart without page change

### 4. Product Filters (Shop Page)
**Location**: Use the `ShopPage` component
**Action**: 
- Adjust price range slider
- Select categories, brands, goals
- Toggle "in stock only"
**Result**: Filtered product results

### 5. Wishlist
**Location**: Heart icon on product cards
**Action**: Click heart icon
**Result**: Toast notification confirming addition to wishlist

### 6. Responsive Design
**Action**: Resize browser window
**Result**: Layout adapts from mobile (2 cols) → tablet (3 cols) → desktop (4 cols)

## 📱 Mobile-Specific Features

### Mobile Quick Actions (Floating Button)
**Location**: Bottom right corner on mobile
**Action**: Click the plus (+) button
**Result**: Quick actions menu opens (Cart, Wishlist, Search)

### Mobile Navigation
**Location**: Menu icon (☰) in header on mobile
**Action**: Click menu icon
**Result**: Full-screen navigation drawer opens

## 🎯 Component Usage

### Using Different Pages

#### Home Page (Default)
Already loaded in `App.tsx`

#### Shop/Category Page
```tsx
import { ShopPage } from '@/app/components/ShopPage';

<ShopPage
  products={mockProducts}
  onQuickView={handleQuickView}
  onAddToCart={handleAddToCart}
  onToggleWishlist={handleToggleWishlist}
/>
```

#### Product Detail Page
```tsx
import { ProductDetailPage } from '@/app/components/ProductDetailPage';

<ProductDetailPage
  product={selectedProduct}
  onAddToCart={handleAddToCart}
  onToggleWishlist={handleToggleWishlist}
/>
```

## 🎨 Customization Quick Tips

### Change Brand Color
**File**: `/src/styles/theme.css`
```css
:root {
  --primary: #ff4d00; /* Change this */
}
```

### Update Logo
**Files**: 
- `/src/app/components/Header.tsx` (line ~70)
- `/src/app/components/Footer.tsx` (line ~45)

Replace URL: `https://admin.protein.tn/storage/coordonnees/September2023/OXC3oL0LreP3RCsgR3k6.webp`

### Change Hero Video
**File**: `/src/app/components/Hero.tsx`
Replace video URL in the `<source>` tag

### Modify Products
**File**: `/src/app/utils/mock-data.ts`
Edit the `mockProducts` array

## 🔧 Common Tasks

### Add a New Product
1. Open `/src/app/utils/mock-data.ts`
2. Add to `mockProducts` array:
```typescript
{
  id: 9,
  name: "YOUR PRODUCT NAME",
  price: 150,
  priceText: "180 DT 150 DT",
  image: "YOUR_IMAGE_URL",
  category: "Protéine Whey",
  description: "Product description",
  rating: 4.5,
  reviews: 100,
  discount: 17,
  isNew: true,
  inStock: true,
  flavors: ["Chocolate", "Vanilla"],
  sizes: ["1kg", "2kg"]
}
```

### Change Navigation Links
**File**: `/src/app/components/Header.tsx`
Edit the `navigation` array (around line 15)

### Modify Footer Links
**File**: `/src/app/components/Footer.tsx`
Edit the `footerLinks` object (around line 5)

### Add a New Category
**File**: `/src/app/utils/mock-data.ts`
Add to `categories` array

## 🎬 Animation Controls

### Disable Animations (for testing)
Add to any component:
```tsx
transition={{ duration: 0 }}
```

### Adjust Animation Speed
Change duration values in Motion components:
```tsx
transition={{ duration: 0.3 }} // Faster
transition={{ duration: 0.8 }} // Slower
```

## 📊 Data Structure Reference

### Product Object
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  priceText: string;
  image: string;
  link?: string;
  category: string;
  description: string;
  rating?: number;        // 0-5
  reviews?: number;       // Count
  discount?: number;      // Percentage
  isNew?: boolean;
  inStock?: boolean;
  flavors?: string[];
  sizes?: string[];
}
```

### Cart Item
Extends Product with:
```typescript
interface CartItem extends Product {
  quantity: number;
  selectedFlavor?: string;
  selectedSize?: string;
}
```

## 🐛 Troubleshooting

### Dark Mode Not Working
- Check if `dark` class is on `<html>` element
- Verify theme.css is loaded

### Animations Not Smooth
- Check browser hardware acceleration
- Reduce motion in OS settings might be enabled

### Cart Not Opening
- Check console for errors
- Verify state management (cartOpen, setCartOpen)

### Images Not Loading
- Verify image URLs are accessible
- Check CORS if loading from external domain
- Use ImageWithFallback component for new images

### Mobile Menu Not Working
- Check Sheet component from Radix UI is imported
- Verify mobile breakpoints in Tailwind

## 🎯 Performance Tips

### Optimize Images
- Use WebP format
- Compress before upload
- Lazy load below the fold

### Reduce Bundle Size
- Import only used components
- Use dynamic imports for heavy components

### Improve Load Time
- Implement proper lazy loading
- Use React.memo for expensive components
- Optimize re-renders with useMemo/useCallback

## 📝 Checklist for Going Live

- [ ] Replace mock data with real API calls
- [ ] Update logo to production version
- [ ] Add real product images
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test all forms
- [ ] Verify payment integration works
- [ ] Test on real mobile devices
- [ ] Check SEO metadata
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Browser compatibility testing
- [ ] SSL certificate configured
- [ ] Backup system in place

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion Documentation](https://motion.dev)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)

## 💡 Pro Tips

1. **Use the browser DevTools** - Chrome/Firefox DevTools for mobile testing
2. **Test in real conditions** - Slow network, small screens
3. **Start small** - Launch with MVP, iterate based on data
4. **Monitor analytics** - Watch user behavior, optimize accordingly
5. **A/B test** - Try different layouts for key pages
6. **Get feedback** - Real user testing is invaluable

## 🆘 Need Help?

Check these files for examples:
- **Component patterns**: `/src/app/components/ProductCard.tsx`
- **Data flow**: `/src/app/App.tsx`
- **Styling**: `/src/styles/theme.css`
- **Types**: `/src/app/types/product.ts`

## 🚀 You're Ready!

Everything is set up and ready to customize. Start exploring the components, tweak the design to your exact needs, and build something amazing!

**Happy coding!** 💪
