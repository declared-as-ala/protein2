import { useState } from 'react';
import { Star, Heart, ShoppingCart, Check, Truck, RotateCcw, Shield, ChevronDown } from 'lucide-react';
import { Product } from '@/app/types/product';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Separator } from '@/app/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

interface ProductDetailPageProps {
  product: Product;
  relatedProducts?: Product[];
  onAddToCart: (product: Product, flavor?: string, size?: string) => void;
  onToggleWishlist?: (product: Product) => void;
}

export function ProductDetailPage({
  product,
  relatedProducts = [],
  onAddToCart,
  onToggleWishlist
}: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => `${price} DT`;
  const originalPrice = product.discount 
    ? Math.round(product.price! / (1 - product.discount / 100))
    : null;

  const images = [product.image, product.image, product.image]; // Mock multiple images

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedFlavor, selectedSize);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">Accueil</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary">Boutique</a>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary relative">
              <img
                src={images[selectedImage]}
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

              {/* Wishlist */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 right-4 rounded-full"
                onClick={() => onToggleWishlist?.(product)}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Category */}
            {product.category && (
              <p className="text-sm text-primary uppercase tracking-wide font-medium">
                {product.category}
              </p>
            )}

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

            {/* Rating & Reviews */}
            {product.rating && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <a href="#reviews" className="text-sm text-primary hover:underline">
                  {product.reviews} avis clients
                </a>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">
                {formatPrice(product.price!)}
              </span>
              {originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
              {product.discount && (
                <Badge variant="destructive" className="text-base px-3 py-1">
                  Économisez {product.discount}%
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`} />
              <span className={`font-medium ${product.inStock ? 'text-success' : 'text-destructive'}`}>
                {product.inStock ? 'En stock - Livraison rapide' : 'Rupture de stock'}
              </span>
            </div>

            <Separator />

            {/* Flavors */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="space-y-3">
                <label className="font-semibold">Saveur</label>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <Button
                      key={flavor}
                      variant={selectedFlavor === flavor ? 'default' : 'outline'}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={selectedFlavor === flavor ? 'bg-primary' : ''}
                    >
                      {selectedFlavor === flavor && <Check className="h-4 w-4 mr-2" />}
                      {flavor}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <label className="font-semibold">Taille</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? 'bg-primary' : ''}
                    >
                      {selectedSize === size && <Check className="h-4 w-4 mr-2" />}
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 px-4"
                >
                  -
                </Button>
                <span className="px-6 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-12 px-4"
                >
                  +
                </Button>
              </div>
              <Button
                size="lg"
                className="flex-1 h-12 bg-primary hover:bg-primary/90"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <p className="text-xs text-muted-foreground">Livraison gratuite dès 200 DT</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="h-6 w-6 text-primary" />
                <p className="text-xs text-muted-foreground">Retours gratuits sous 30 jours</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <p className="text-xs text-muted-foreground">100% authentique garanti</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Description
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Informations Nutritionnelles
              </TabsTrigger>
              <TabsTrigger value="usage" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Mode d'emploi
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                Avis ({product.reviews})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="py-8 space-y-4">
              <h3 className="text-2xl font-bold">Description du produit</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || 'Ce produit de qualité premium est conçu pour vous aider à atteindre vos objectifs fitness. Formulé avec les meilleurs ingrédients pour des résultats optimaux.'}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Formule premium de haute qualité</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Résultats rapides et efficaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Testé en laboratoire pour la qualité</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sans additifs artificiels</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="nutrition" className="py-8">
              <h3 className="text-2xl font-bold mb-6">Valeurs nutritionnelles</h3>
              <div className="bg-secondary rounded-lg p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Pour 100g</th>
                      <th className="text-right py-3">Valeur</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3">Énergie</td>
                      <td className="text-right py-3">380 kcal</td>
                    </tr>
                    <tr>
                      <td className="py-3">Protéines</td>
                      <td className="text-right py-3 font-semibold text-primary">80g</td>
                    </tr>
                    <tr>
                      <td className="py-3">Glucides</td>
                      <td className="text-right py-3">5g</td>
                    </tr>
                    <tr>
                      <td className="py-3">Lipides</td>
                      <td className="text-right py-3">6g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="py-8">
              <h3 className="text-2xl font-bold mb-6">Mode d'emploi</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Mélanger 30g (1 dose) avec 250-300ml d'eau ou de lait dans un shaker.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Quand prendre ce produit?</AccordionTrigger>
                    <AccordionContent>
                      Idéal après l'entraînement pour optimiser la récupération musculaire. 
                      Peut également être pris entre les repas comme collation protéinée.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Combien de doses par jour?</AccordionTrigger>
                    <AccordionContent>
                      1-2 doses par jour selon vos besoins en protéines et vos objectifs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Conservation</AccordionTrigger>
                    <AccordionContent>
                      Conserver dans un endroit frais et sec, à l'abri de la lumière directe du soleil.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="py-8" id="reviews">
              <h3 className="text-2xl font-bold mb-6">Avis clients</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        A
                      </div>
                      <div>
                        <p className="font-semibold">Client {review}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">Il y a 2 jours</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Excellent produit, résultats visibles après quelques semaines d'utilisation. 
                      Je recommande vivement!
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
