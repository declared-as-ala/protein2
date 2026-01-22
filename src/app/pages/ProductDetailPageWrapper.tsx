import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductDetailPage } from '@/app/components/ProductDetailPage';
import { loadProductsAsync } from '@/app/utils/products-loader';
import { Product } from '@/app/types/product';

interface ProductDetailPageWrapperProps {
  onAddToCart: (product: Product, flavor?: string, size?: string) => void;
  onToggleWishlist?: (product: Product) => void;
}

export function ProductDetailPageWrapper({ onAddToCart, onToggleWishlist }: ProductDetailPageWrapperProps) {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadProductsAsync().then((allProducts) => {
      const foundProduct = allProducts.find(p => p.id === parseInt(id || '0'));
      setProduct(foundProduct || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement du produit...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <p className="text-muted-foreground mb-6">Le produit que vous recherchez n'existe pas.</p>
          <Link to="/products" className="text-primary hover:underline">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ProductDetailPage
      product={product}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />
  );
}
