import { Product, Category } from '@/app/types/product';

// Parse price from priceText
const parsePrice = (priceText: string | null): number | null => {
  if (!priceText) return null;
  const matches = priceText.match(/(\d+)\s*DT/);
  return matches ? parseInt(matches[1]) : null;
};

// Mock product data with enriched information
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "MASS GAINER ZERO 7KG - ERIC FAVRE",
    price: 279,
    priceText: "300 DT 279 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "https://protein.tn/shop/mass-gainer-zero-7kg-eric-favre",
    category: "Gainers Haute Énergie",
    description: "Premium mass gainer formula for serious muscle growth",
    rating: 4.5,
    reviews: 124,
    discount: 7,
    isNew: true,
    inStock: true,
    flavors: ["Chocolate", "Vanilla", "Strawberry"],
    sizes: ["3.5kg", "7kg"]
  },
  {
    id: 2,
    name: "WHEY PROTEIN ISOLATE",
    price: 180,
    priceText: "200 DT 180 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/whey-protein-isolate",
    category: "Isolat de Whey",
    description: "100% pure whey isolate for lean muscle",
    rating: 4.8,
    reviews: 342,
    discount: 10,
    isNew: false,
    inStock: true,
    flavors: ["Chocolate", "Vanilla", "Cookies & Cream"],
    sizes: ["1kg", "2kg", "5kg"]
  },
  {
    id: 3,
    name: "BCAA 8:1:1 - 500G",
    price: 95,
    priceText: "110 DT 95 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/bcaa-811",
    category: "Bcaa",
    description: "Advanced BCAA ratio for maximum recovery",
    rating: 4.6,
    reviews: 89,
    discount: 14,
    isNew: false,
    inStock: true,
    flavors: ["Lemon", "Berry Blast", "Orange"],
    sizes: ["250g", "500g"]
  },
  {
    id: 4,
    name: "CREATINE MONOHYDRATE - 300G",
    price: 65,
    priceText: "75 DT 65 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/creatine-monohydrate",
    category: "Creatine",
    description: "Pure micronized creatine for strength & power",
    rating: 4.9,
    reviews: 567,
    discount: 13,
    isNew: false,
    inStock: true,
    flavors: ["Unflavored"],
    sizes: ["300g", "500g", "1kg"]
  },
  {
    id: 5,
    name: "FAT BURNER EXTREME",
    price: 120,
    priceText: "140 DT 120 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/fat-burner-extreme",
    category: "Fat Burner",
    description: "Thermogenic formula for maximum fat loss",
    rating: 4.3,
    reviews: 234,
    discount: 14,
    isNew: true,
    inStock: true,
    sizes: ["60 caps", "120 caps"]
  },
  {
    id: 6,
    name: "PRE-WORKOUT PUMP",
    price: 110,
    priceText: "130 DT 110 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/pre-workout-pump",
    category: "Pré-workout",
    description: "Explosive energy for intense workouts",
    rating: 4.7,
    reviews: 445,
    discount: 15,
    isNew: true,
    inStock: true,
    flavors: ["Blue Raspberry", "Green Apple", "Fruit Punch"],
    sizes: ["300g", "600g"]
  },
  {
    id: 7,
    name: "OMEGA 3 - 1000MG",
    price: 45,
    priceText: "55 DT 45 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/omega-3",
    category: "Omega 3",
    description: "Essential fatty acids for health & recovery",
    rating: 4.5,
    reviews: 178,
    discount: 18,
    isNew: false,
    inStock: true,
    sizes: ["90 caps", "180 caps"]
  },
  {
    id: 8,
    name: "GLUTAMINE - 500G",
    price: 85,
    priceText: "100 DT 85 DT",
    image: "https://admin.protein.tn/storage/produits/September2023/mass_gainer_zero_7kg_-_eric_favre.webp",
    link: "/shop/glutamine",
    category: "Glutamine",
    description: "L-Glutamine for muscle recovery",
    rating: 4.4,
    reviews: 156,
    discount: 15,
    isNew: false,
    inStock: true,
    flavors: ["Unflavored"],
    sizes: ["250g", "500g"]
  }
];

export const categories: Category[] = [
  {
    id: "complements-alimentaires",
    name: "COMPLÉMENTS ALIMENTAIRES",
    image: "https://protein.tn/assets/img/categories/AcidesAmines.webp",
    link: "/categorie/complements-alimentaires",
    productCount: 45
  },
  {
    id: "perte-de-poids",
    name: "PERTE DE POIDS",
    image: "https://protein.tn/assets/img/categories/PerteDuPoids.webp",
    link: "/categorie/perte-de-poids",
    productCount: 18
  },
  {
    id: "prise-de-masse",
    name: "PRISE DE MASSE",
    image: "https://protein.tn/assets/img/categories/PriseMasses.webp",
    link: "/categorie/prise-de-masse",
    productCount: 23
  },
  {
    id: "proteines",
    name: "PROTEINES",
    image: "https://protein.tn/assets/img/categories/Proteines.webp",
    link: "/categorie/proteines",
    productCount: 32
  },
  {
    id: "pre-workout",
    name: "PRE, INTRA & POST WORKOUT",
    image: "https://protein.tn/assets/img/categories/PostWorkout.webp",
    link: "/categorie/complements-d-entrainement",
    productCount: 27
  },
  {
    id: "equipements",
    name: "VETEMENTS ET ACCESSOIRES",
    image: "https://protein.tn/assets/img/categories/VetAccess.webp",
    link: "/categorie/equipements-et-accessoires-sportifs",
    productCount: 15
  }
];

export const subCategories = [
  "Acides Aminés", "Bcaa", "Citrulline", "Creatine", "EAA", "Glutamine", 
  "HMB", "L-arginine", "Mineraux", "Omega 3", "Boosters Hormonaux", 
  "Vitamines", "ZMA", "Beta alanine", "Ashwagandha", "Tribulus", 
  "Collagene", "Zinc", "Magnésium", "CLA", "Fat Burner", "L-Carnitine", 
  "Brûleurs de Graisse", "Gainers Haute Énergie", "Gainers Riches en Protéines",
  "Carbohydrates", "Protéine Whey", "Isolat de Whey", "Protéine de Caséine",
  "Protéines Complètes", "Protéine de bœuf", "Whey Hydrolysée",
  "Pré-workout", "Pendant l'entraînement", "Récupération Après Entraînement"
];

export const brands = [
  "Eric Favre", "Optimum Nutrition", "MyProtein", "Scitec Nutrition",
  "BSN", "Dymatize", "Universal Nutrition", "MuscleTech"
];

export const goals = [
  "Prise de Masse",
  "Perte de Poids",
  "Définition Musculaire",
  "Énergie & Performance",
  "Récupération",
  "Santé Générale"
];
