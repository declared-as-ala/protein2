import { useState } from 'react';
import { Plus, ShoppingCart, Heart, Search, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface MobileQuickActionsProps {
  onCartClick: () => void;
  onSearchClick?: () => void;
  onWishlistClick?: () => void;
}

export function MobileQuickActions({ onCartClick, onSearchClick, onWishlistClick }: MobileQuickActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: ShoppingCart, label: 'Panier', onClick: onCartClick, color: 'bg-primary' },
    { icon: Heart, label: 'Favoris', onClick: onWishlistClick, color: 'bg-destructive' },
    { icon: Search, label: 'Recherche', onClick: onSearchClick, color: 'bg-foreground' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  size="icon"
                  className={`h-12 w-12 rounded-full shadow-lg ${action.color} text-white`}
                  onClick={() => {
                    action.onClick?.();
                    setIsOpen(false);
                  }}
                >
                  <action.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="h-6 w-6" />
        </motion.div>
      </Button>
    </div>
  );
}
