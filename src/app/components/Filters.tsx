import { useState, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { Slider } from '@/app/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/app/components/ui/sheet';
import { Separator } from '@/app/components/ui/separator';
import { FilterOptions } from '@/app/types/product';

interface FiltersProps {
  onFilterChange?: (filters: FilterOptions) => void;
  availableCategories?: string[];
  availableBrands?: string[];
}

const subCategories = [
  "Acides Aminés", "Bcaa", "Citrulline", "Creatine", "EAA", "Glutamine",
  "HMB", "L-arginine", "Mineraux", "Omega 3", "Boosters Hormonaux",
  "Vitamines", "ZMA", "Beta alanine", "Ashwagandha", "Tribulus",
  "Collagene", "Zinc", "Magnésium", "CLA", "Fat Burner", "L-Carnitine",
  "Brûleurs de Graisse", "Gainers Haute Énergie", "Gainers Riches en Protéines",
  "Carbohydrates", "Protéine Whey", "Isolat de Whey", "Protéine de Caséine",
  "Protéines Complètes", "Protéine de bœuf", "Whey Hydrolysée",
  "Pré-workout", "Pendant l'entraînement", "Récupération Après Entraînement"
];

const brands = [
  "Eric Favre", "Optimum Nutrition", "MyProtein", "Biotech USA", "Kevin Levrone",
  "HX Nutrition", "BPI Sports", "Dymatize", "MuscleTech", "BSN"
];

const goals = [
  "Prise de Masse", "Perte de Poids", "Récupération", "Performance", "Endurance"
];

export function Filters({ onFilterChange, availableCategories, availableBrands }: FiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Notify parent of filter changes in real-time
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        priceRange: priceRange as [number, number],
        categories: selectedCategories,
        brands: selectedBrands,
        goals: selectedGoals,
        inStock: inStockOnly,
        searchQuery: '',
        sortBy: 'featured'
      });
    }
  }, [priceRange, selectedCategories, selectedBrands, selectedGoals, inStockOnly, onFilterChange]);

  const handleReset = () => {
    setPriceRange([0, 500]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedGoals([]);
    setInStockOnly(false);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const categoriesToShow = availableCategories && availableCategories.length > 0 
    ? availableCategories 
    : subCategories;

  const brandsToShow = availableBrands && availableBrands.length > 0
    ? availableBrands
    : brands;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold">Prix</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]} DT</span>
            <span>{priceRange[1]} DT</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="font-semibold">Catégories</h3>
        <div className="space-y-2 max-h-60 overflow-auto">
          {categoriesToShow.slice(0, 20).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label
                htmlFor={`cat-${category}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div className="space-y-3">
        <h3 className="font-semibold">Marques</h3>
        <div className="space-y-2 max-h-60 overflow-auto">
          {brandsToShow.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="text-sm font-normal cursor-pointer"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Goals */}
      <div className="space-y-3">
        <h3 className="font-semibold">Objectifs</h3>
        <div className="space-y-2">
          {goals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2">
              <Checkbox
                id={`goal-${goal}`}
                checked={selectedGoals.includes(goal)}
                onCheckedChange={() => toggleGoal(goal)}
              />
              <Label
                htmlFor={`goal-${goal}`}
                className="text-sm font-normal cursor-pointer"
              >
                {goal}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* In Stock */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="in-stock"
          checked={inStockOnly}
          onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
        />
        <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
          Disponible en stock seulement
        </Label>
      </div>

      {/* Reset */}
      <Button variant="outline" className="w-full" onClick={handleReset}>
        Réinitialiser les filtres
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="sticky top-24 bg-card rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Filtres</h2>
            <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filters */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" className="w-full">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtres
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-auto">
          <SheetHeader className="mb-6">
            <SheetTitle>Filtres</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
