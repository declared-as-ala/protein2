import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/app/components/Hero';
import { TrustBanner } from '@/app/components/TrustBanner';
import { CategorySection } from '@/app/components/CategorySection';
import { ProductSection } from '@/app/components/ProductSection';
import { Newsletter } from '@/app/components/Newsletter';
import { loadProductsAsync } from '@/app/utils/products-loader';
import { Product } from '@/app/types/product';

interface HomePageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function HomePage({ onQuickView, onAddToCart, onToggleWishlist }: HomePageProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadProductsAsync()
      .then(setAllProducts)
      .catch((error) => {
        console.error('Error loading products:', error);
        setAllProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const newProducts = allProducts.slice(0, 8).map(p => ({ ...p, isNew: true }));
  const bestSellers = allProducts.slice(0, 8);

  return (
    <>
      <Hero />
      <TrustBanner />
      <CategorySection />
      
      <ProductSection
        title="Nouveautés"
        subtitle="Découvrez les derniers produits ajoutés à notre catalogue"
        products={newProducts}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        viewAllLink="/products"
        loading={loading}
      />

      <div className="bg-secondary/30">
        <ProductSection
          title="Meilleures Ventes"
          subtitle="Les produits préférés de nos clients"
          products={bestSellers}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          viewAllLink="/products"
          loading={loading}
        />
      </div>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Jusqu'à -30% sur les Protéines
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Offre limitée sur notre gamme complète de protéines premium
            </p>
            <Link to="/products" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Profiter de l'offre
            </Link>
          </div>
        </div>
      </section>

      <ProductSection
        title="Recommandé Pour Vous"
        subtitle="Sélection personnalisée selon vos préférences"
        products={allProducts.slice(2, 10)}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        viewAllLink="/products"
        loading={loading}
      />

      <Newsletter />
    </>
  );
}
