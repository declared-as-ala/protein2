import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/app/types/product';
import { ProductCard } from '@/app/components/ProductCard';
import { ProductCardSkeleton } from '@/app/components/ProductCardSkeleton';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  viewAllLink?: string;
  loading?: boolean;
}

export function ProductSection({
  title,
  subtitle,
  products,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  viewAllLink,
  loading = false
}: ProductSectionProps) {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Link to={viewAllLink}>
              <Button variant="ghost" className="group hidden md:flex">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {isLoading
            ? [...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
        </div>

        {/* View All Mobile */}
        {viewAllLink && (
          <div className="mt-8 md:hidden">
            <Link to={viewAllLink} className="block">
              <Button variant="outline" className="w-full">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
