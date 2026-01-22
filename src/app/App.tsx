import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { QuickView } from '@/app/components/QuickView';
import { BackToTop } from '@/app/components/BackToTop';
import { MobileQuickActions } from '@/app/components/MobileQuickActions';
import { Product, CartItem } from '@/app/types/product';
import { Toaster } from '@/app/components/ui/sonner';
import { toast } from 'sonner';
import { HomePage } from '@/app/pages/HomePage';
import { ProductsPage } from '@/app/pages/ProductsPage';
import { PacksPage } from '@/app/pages/PacksPage';
import { BlogPage } from '@/app/pages/BlogPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ProductDetailPageWrapper } from '@/app/pages/ProductDetailPageWrapper';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Cart functions
  const handleAddToCart = (product: Product, flavor?: string, size?: string) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && 
      item.selectedFlavor === flavor && 
      item.selectedSize === size
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && 
        item.selectedFlavor === flavor && 
        item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, selectedFlavor: flavor, selectedSize: size }
      ]);
    }

    toast.success('Produit ajouté au panier', {
      description: product.name,
      duration: 2000,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.info('Produit retiré du panier');
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const handleToggleWishlist = (product: Product) => {
    toast.success('Ajouté à la liste de souhaits', {
      description: product.name,
      duration: 2000,
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Toaster position="top-right" />
        
        {/* Header */}
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setCartOpen(true)}
        />

        {/* Routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
          <Route 
            path="/packs" 
            element={
              <PacksPage
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetailPageWrapper
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            } 
          />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Cart Drawer */}
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
        />

        {/* Quick View Modal */}
        <QuickView
          product={quickViewProduct}
          open={quickViewOpen}
          onClose={() => setQuickViewOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Back to Top */}
        <BackToTop />

        {/* Mobile Quick Actions */}
        <MobileQuickActions
          onCartClick={() => setCartOpen(true)}
          onWishlistClick={() => toast.info('Liste de souhaits')}
        />
      </div>
    </BrowserRouter>
  );
}
