import { useState } from 'react';
import { X, ShoppingCart, Star, Check } from 'lucide-react';
import { Product } from '@/app/types/product';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface QuickViewProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, flavor?: string, size?: string) => void;
}

export function QuickView({ product, open, onClose, onAddToCart }: QuickViewProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formatPrice = (price: number) => `${price} DT`;
  const originalPrice = product.discount 
    ? Math.round(product.price! / (1 - product.discount / 100))
    : null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedFlavor, selectedSize);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-primary">NEW</Badge>
              )}
              {product.discount && (
                <Badge variant="destructive">-{product.discount}%</Badge>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Category */}
            {product.category && (
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                {product.category}
              </p>
            )}

            {/* Name */}
            <h2 className="text-2xl font-bold">{product.name}</h2>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price!)}
              </span>
              {originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground">
              {product.description || 'Description du produit non disponible.'}
            </p>

            {/* Flavors */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Saveur</label>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <Button
                      key={flavor}
                      variant={selectedFlavor === flavor ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFlavor(flavor)}
                      className={selectedFlavor === flavor ? 'bg-primary' : ''}
                    >
                      {selectedFlavor === flavor && <Check className="h-3 w-3 mr-1" />}
                      {flavor}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Taille</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? 'bg-primary' : ''}
                    >
                      {selectedSize === size && <Check className="h-3 w-3 mr-1" />}
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`} />
              <span className={`text-sm font-medium ${product.inStock ? 'text-success' : 'text-destructive'}`}>
                {product.inStock ? 'En stock' : 'Rupture de stock'}
              </span>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Ajouter au panier
            </Button>

            {/* Info Tabs */}
            <Tabs defaultValue="features" className="mt-4">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="features">Avantages</TabsTrigger>
                <TabsTrigger value="usage">Utilisation</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="space-y-2 mt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Formule premium de haute qualité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Résultats rapides et efficaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Testé en laboratoire</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="usage" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Prendre 1-2 doses par jour selon vos besoins. 
                  Consulter l'étiquette pour les instructions détaillées.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
