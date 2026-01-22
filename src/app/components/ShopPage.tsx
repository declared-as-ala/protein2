import { useState, useMemo } from 'react';
import { ProductCard } from '@/app/components/ProductCard';
import { ProductCardSkeleton } from '@/app/components/ProductCardSkeleton';
import { Filters } from '@/app/components/Filters';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Product, FilterOptions } from '@/app/types/product';
import { Grid, List, Search, X } from 'lucide-react';

interface ShopPageProps {
  products: Product[];
  loading?: boolean;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
}

export function ShopPage({
  products,
  loading = false,
  onQuickView,
  onAddToCart,
  onToggleWishlist
}: ShopPageProps) {
  const [sortBy, setSortBy] = useState<FilterOptions['sortBy']>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 500],
    categories: [],
    brands: [],
    goals: [],
    inStock: false,
    searchQuery: '',
    sortBy: 'featured'
  });

  // Extract available categories and brands from products
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    products.forEach(p => {
      if (p.category) {
        // Split category string and add individual categories
        const categoryParts = p.category.split(/\s+/).filter(c => c.length > 2);
        categoryParts.forEach(cat => cats.add(cat));
      }
    });
    return Array.from(cats).sort();
  }, [products]);

  const availableBrands = useMemo(() => {
    const brandSet = new Set<string>();
    products.forEach(p => {
      // Extract brand from product name (usually after the product name, before weight)
      const nameParts = p.name.split(' - ');
      if (nameParts.length > 1) {
        brandSet.add(nameParts[nameParts.length - 1].trim());
      }
    });
    return Array.from(brandSet).sort();
  }, [products]);

  // Filter and search products in real-time
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

    // Price filter
    filtered = filtered.filter(p => {
      const price = p.price || 0;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => {
        if (!p.category) return false;
        return filters.categories.some(cat =>
          p.category?.toLowerCase().includes(cat.toLowerCase())
        );
      });
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => {
        return filters.brands.some(brand =>
          p.name.toLowerCase().includes(brand.toLowerCase())
        );
      });
    }

    // Goal filter
    if (filters.goals.length > 0) {
      filtered = filtered.filter(p => {
        const goalMap: Record<string, string[]> = {
          'Prise de Masse': ['mass', 'gainer', 'prise', 'masse'],
          'Perte de Poids': ['perte', 'poids', 'fat', 'burner', 'brûleur'],
          'Récupération': ['récupération', 'recovery', 'post'],
          'Performance': ['pre', 'workout', 'performance'],
          'Endurance': ['endurance', 'energy']
        };
        
        return filters.goals.some(goal => {
          const keywords = goalMap[goal] || [];
          const nameLower = p.name.toLowerCase();
          const categoryLower = p.category?.toLowerCase() || '';
          return keywords.some(keyword =>
            nameLower.includes(keyword) || categoryLower.includes(keyword)
          );
        });
      });
    }

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock !== false);
    }

    return filtered;
  }, [products, searchQuery, filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price-high':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'newest':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'best-selling':
        return sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters Sidebar */}
          <aside>
            <Filters 
              onFilterChange={handleFilterChange}
              availableCategories={availableCategories}
              availableBrands={availableBrands}
            />
          </aside>

          {/* Products Area */}
          <div>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 h-12 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                  Tous les Produits
                </h1>
                <p className="text-muted-foreground">
                  {sortedProducts.length} produit{sortedProducts.length !== 1 ? 's' : ''} trouvé{sortedProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* View Mode Toggle */}
                <div className="hidden md:flex border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort */}
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as FilterOptions['sortBy'])}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">En vedette</SelectItem>
                    <SelectItem value="price-low">Prix croissant</SelectItem>
                    <SelectItem value="price-high">Prix décroissant</SelectItem>
                    <SelectItem value="newest">Nouveautés</SelectItem>
                    <SelectItem value="best-selling">Meilleures ventes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid/List */}
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {[...Array(12)].map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            )}

            {/* Load More */}
            {!loading && sortedProducts.length > 0 && sortedProducts.length >= 20 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Charger plus de produits
                </Button>
              </div>
            )}

            {/* No Results */}
            {!loading && sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery || filters.categories.length > 0 || filters.brands.length > 0
                    ? 'Essayez de modifier vos filtres ou votre recherche'
                    : 'Les produits sont en cours de chargement ou aucun produit disponible'}
                </p>
                {(searchQuery || filters.categories.length > 0 || filters.brands.length > 0) && (
                  <Button variant="outline" onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      priceRange: [0, 500],
                      categories: [],
                      brands: [],
                      goals: [],
                      inStock: false,
                      searchQuery: '',
                      sortBy: 'featured'
                    });
                  }}>
                    Réinitialiser les filtres
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
