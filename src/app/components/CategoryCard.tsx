import { Category } from '@/app/types/product';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
            {category.name}
          </h3>
          
          {category.productCount && (
            <p className="text-white/80 text-sm mb-3">
              {category.productCount} produits
            </p>
          )}
          
          <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
            <span className="text-sm font-medium">Explorer</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
