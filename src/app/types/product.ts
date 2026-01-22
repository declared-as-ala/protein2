export interface Product {
  id: number;
  name: string;
  price: number | null;
  priceText: string | null;
  image: string;
  link: string;
  category: string | null;
  description: string | null;
  rating?: number;
  reviews?: number;
  discount?: number;
  isNew?: boolean;
  inStock?: boolean;
  flavors?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  productCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedFlavor?: string;
  selectedSize?: string;
}

export interface FilterOptions {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  goals: string[];
  inStock: boolean;
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest' | 'best-selling';
}
