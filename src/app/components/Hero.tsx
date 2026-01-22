import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/global_dropset_4_power_training_ss26_launch_hp_and_catlp_banner_hero_d_14fe3d88e7.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 w-fit"
            >
              <Zap className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-white">Nouveau dans le stock</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transformez Votre
              <span className="block text-primary">Performance</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Des suppléments de qualité premium pour atteindre vos objectifs. 
              Force, muscle, récupération - tout ce dont vous avez besoin.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                  Découvrir les produits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Nos meilleures ventes
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-white">100% Authentique</p>
                  <p className="text-sm">Produits certifiés</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Livraison Rapide</p>
                  <p className="text-sm">Partout en Tunisie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
