import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopPage } from '@/app/components/ShopPage';
import { loadProductsAsync, getProductsByCategory } from '@/app/utils/products-loader';
import { Product } from '@/app/types/product';

interface ProductsPageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
}

export function ProductsPage({ onQuickView, onAddToCart, onToggleWishlist }: ProductsPageProps) {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadProductsAsync()
      .then((allProducts) => {
        const category = searchParams.get('category');
        
        if (category) {
          setProducts(getProductsByCategory(category, allProducts));
        } else {
          setProducts(allProducts);
        }
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

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
