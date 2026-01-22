import { CategoryCard } from '@/app/components/CategoryCard';
import { categories } from '@/app/utils/mock-data';

export function CategorySection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trouvez Votre Objectif
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorez nos catégories de produits premium pour atteindre vos objectifs fitness
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
