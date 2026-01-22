import { useEffect, useState } from 'react';
import { ShopPage } from '@/app/components/ShopPage';
import { loadProductsAsync, getPacks } from '@/app/utils/products-loader';
import { Product } from '@/app/types/product';

interface PacksPageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function PacksPage({ onQuickView, onAddToCart, onToggleWishlist }: PacksPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadProductsAsync().then((allProducts) => {
      setProducts(getPacks(allProducts));
      setLoading(false);
    });
  }, []);

  return (
    <ShopPage
      products={products}
      loading={loading}
      onQuickView={onQuickView}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />
  );
}
