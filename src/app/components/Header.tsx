import { useState } from 'react';
import { Search, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  cartCount: number;
  onCartClick: () => void;
}

// Categories structure based on the design
const productCategories = {
  "COMPLÉMENTS ALIMENTAIRES": [
    "Acides Aminés", "Bcaa", "Citrulline", "Creatine", "EAA", "Glutamine",
    "HMB", "L-Arginine", "Mineraux", "Omega 3", "Boosters Hormonaux",
    "Vitamines", "ZMA", "Beta Alanine", "Ashwagandha", "Tribulus",
    "Collagene", "Zinc", "Magnésium"
  ],
  "PERTE DE POIDS": [
    "CLA", "Fat Burner", "L-Carnitine", "Brûleurs De Graisse"
  ],
  "PRISE DE MASSE": [
    "Gainers Haute Énergie", "Gainers Riches En Protéines", "Protéines", "Carbohydrates"
  ],
  "PROTÉINES": [
    "Protéine Whey", "Isolat De Whey", "Protéine De Caséine", "Protéines Complètes",
    "Protéine De Bœuf", "Protéines Pour Cheveux", "Whey Hydrolysée"
  ],
  "COMPLEMENTS D'ENTRAINEMENT": [
    "Pré-Workout", "Pendant L'entraînement", "Récupération Après Entraînement"
  ],
  "ÉQUIPEMENTS ET ACCESSOIRES SPORTIFS": [
    "Bandages De Soutien Musculaire", "Ceinture De Musculation",
    "Gants De Musculation Et Fitness", "Shakers Et Bouteilles Sportives",
    "T-Shirts De Sport", "Matériel De Musculation", "Équipement Cardio Fitness"
  ]
};

export function Header({ darkMode, toggleDarkMode, cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col gap-6 py-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="https://admin.protein.tn/storage/coordonnees/September2023/OXC3oL0LreP3RCsgR3k6.webp" 
                    alt="SOBITAS" 
                    className="h-8 w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-3">
                  <Link to="/" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    ACCUEIL
                  </Link>
                  <Link to="/products" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    NOS PRODUITS
                  </Link>
                  <Link to="/packs" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    PACKS
                  </Link>
                  <Link to="/blog" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    BLOG
                  </Link>
                  <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    CONTACT
                  </Link>
                  <Link to="/about" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                    QUI SOMMES NOUS
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img 
                src="https://admin.protein.tn/storage/coordonnees/September2023/OXC3oL0LreP3RCsgR3k6.webp" 
                alt="SOBITAS" 
                className="h-8 w-auto md:h-10"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                ACCUEIL
              </Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
                  NOS PRODUITS
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {productsMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-6xl bg-white border shadow-lg rounded-lg p-6 z-50">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Column 1 */}
                      <div>
                        <h3 className="font-bold text-red-600 mb-4 text-lg">COMPLÉMENTS ALIMENTAIRES</h3>
                        <ul className="space-y-2">
                          {productCategories["COMPLÉMENTS ALIMENTAIRES"].map((subcat) => (
                            <li key={subcat}>
                              <Link
                                to={`/products?category=${encodeURIComponent(subcat)}`}
                                className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                onClick={() => setProductsMenuOpen(false)}
                              >
                                {subcat}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-red-600 mb-4 text-lg">PERTE DE POIDS</h3>
                          <ul className="space-y-2">
                            {productCategories["PERTE DE POIDS"].map((subcat) => (
                              <li key={subcat}>
                                <Link
                                  to={`/products?category=${encodeURIComponent(subcat)}`}
                                  className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                  onClick={() => setProductsMenuOpen(false)}
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-red-600 mb-4 text-lg">PRISE DE MASSE</h3>
                          <ul className="space-y-2">
                            {productCategories["PRISE DE MASSE"].map((subcat) => (
                              <li key={subcat}>
                                <Link
                                  to={`/products?category=${encodeURIComponent(subcat)}`}
                                  className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                  onClick={() => setProductsMenuOpen(false)}
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-red-600 mb-4 text-lg">PROTÉINES</h3>
                          <ul className="space-y-2">
                            {productCategories["PROTÉINES"].map((subcat) => (
                              <li key={subcat}>
                                <Link
                                  to={`/products?category=${encodeURIComponent(subcat)}`}
                                  className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                  onClick={() => setProductsMenuOpen(false)}
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-red-600 mb-4 text-lg">COMPLEMENTS D'ENTRAINEMENT</h3>
                          <ul className="space-y-2">
                            {productCategories["COMPLEMENTS D'ENTRAINEMENT"].map((subcat) => (
                              <li key={subcat}>
                                <Link
                                  to={`/products?category=${encodeURIComponent(subcat)}`}
                                  className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                  onClick={() => setProductsMenuOpen(false)}
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-red-600 mb-4 text-lg">ÉQUIPEMENTS ET ACCESSOIRES SPORTIFS</h3>
                          <ul className="space-y-2">
                            {productCategories["ÉQUIPEMENTS ET ACCESSOIRES SPORTIFS"].map((subcat) => (
                              <li key={subcat}>
                                <Link
                                  to={`/products?category=${encodeURIComponent(subcat)}`}
                                  className="text-sm text-gray-700 hover:text-primary transition-colors block"
                                  onClick={() => setProductsMenuOpen(false)}
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t text-center">
                      <Link
                        to="/products"
                        className="text-red-600 font-semibold hover:underline inline-flex items-center gap-2"
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        Voir tous les produits →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/packs" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                PACKS
              </Link>

              <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                BLOG
              </Link>

              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                CONTACT
              </Link>

              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                QUI SOMMES NOUS
              </Link>
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher des produits..."
                className="w-full pl-10 pr-4 bg-gray-50 border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Mobile */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 bg-gray-50 border-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
