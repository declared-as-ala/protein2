import { Product } from '@/app/types/product';

// Parse price from priceText
const parsePrice = (priceText: string | null): number | null => {
  if (!priceText) return null;
  const matches = priceText.match(/(\d+)\s*DT/);
  return matches ? parseInt(matches[1]) : null;
};

// Cache for products data
let productsCache: Product[] | null = null;
let loadingPromise: Promise<Product[]> | null = null;

// Filter out invalid products (categories, duplicates, etc.)
const processProducts = (products: any[]): Product[] => {
  if (!products || !Array.isArray(products)) {
    console.warn('processProducts: products is not an array', products);
    return [];
  }

  const filtered = products
    .filter((p) => {
      // Filter out category items and invalid products
      if (!p.name || p.name.includes('Nos categories') || p.name.includes('Nos Packs') || p.name.includes('Meilleurs Ventes') || p.name.includes('Nouveaux Produits')) {
        return false;
      }
      // Filter out promo badges and placeholders
      if (p.name.includes('Promo') || p.name.includes('Product ') || p.name === 'New' || p.name === 'Top Vendu') {
        return false;
      }
      // Must have a valid price or priceText
      if (!p.price && !p.priceText) {
        return false;
      }
      // Must have an image
      if (!p.image) {
        return false;
      }
      return true;
    })
    .map((p) => {
      const price = p.price || parsePrice(p.priceText);
      
      return {
        id: p.id,
        name: p.name,
        price: price,
        priceText: p.priceText,
        image: p.image,
        link: p.link || '#',
        category: p.category,
        description: p.description,
        inStock: true,
        isNew: p.name.includes('New') || false,
      } as Product;
    })
    .filter((p, index, self) => 
      // Remove duplicates by name
      index === self.findIndex((t) => t.name === p.name && t.price === p.price)
    );

  console.log(`Processed ${filtered.length} products from ${products.length} total`);
  return filtered;
};

// Load products using dynamic import
export const loadProductsAsync = async (): Promise<Product[]> => {
  if (productsCache) {
    console.log('Returning cached products:', productsCache.length);
    return productsCache;
  }

  if (loadingPromise) {
    console.log('Waiting for existing load promise...');
    return loadingPromise;
  }

  console.log('Starting to load products...');
  
  loadingPromise = (async () => {
    try {
      // Load from public folder using fetch
      const response = await fetch('/products.json');
      console.log('Fetch response status:', response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Products loaded from fetch:', data?.products?.length || 0);
      
      if (!data || !data.products) {
        throw new Error('Invalid data structure: missing products array');
      }

      const products = data.products;
      productsCache = processProducts(products);
      console.log('Final processed products:', productsCache.length);
      return productsCache;
    } catch (fetchError) {
      console.error('Failed to load products:', fetchError);
      // Reset promise so we can retry
      loadingPromise = null;
      return [];
    }
  })();

  return loadingPromise;
};

// Load products - synchronous version that uses cached data
export const loadProducts = (): Product[] => {
  // Return cached products if available
  if (productsCache) {
    return productsCache;
  }

  // Return empty array initially, will be populated async
  return [];
};

export const getProductsByCategory = (category: string, products: Product[]): Product[] => {
  if (!category) return products;
  return products.filter((p) => 
    p.category?.toLowerCase().includes(category.toLowerCase())
  );
};

export const getPacks = (products: Product[]): Product[] => {
  return products.filter((p) => 
    p.name.toUpperCase().includes('PACK')
  );
};
