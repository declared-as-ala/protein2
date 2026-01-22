import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Information & Contact */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">SOBITAS</h2>
            <p className="text-sm text-gray-300 mb-6">
              PROTEINE TUNISIE - SOBITAS votre distributeur officiel d'articles de sport et de compléments alimentaires en Tunisie.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-sm">+216 73 200 500 / +216 73 200 169</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-sm">contact@protein.tn</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Rue Rihab, 4000 Sousse, Tunisie</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Suivez-nous</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Nos produits
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Packs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Ventes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services & Ventes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/conditions-generales" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link to="/politique-remboursement" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Politique de remboursement
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">
                  Qui sommes nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & App Downloads */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Abonnez-vous</h3>
              <p className="text-sm text-gray-300 mb-4">
                Recevez les dernières offres et nouveautés
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email..."
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  OK
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Télécharger notre application</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">GP</span>
                  </div>
                  <span className="text-sm">Disponible sur Google Play</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-800">AS</span>
                  </div>
                  <span className="text-sm">Télécharger sur App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Geolocation Map */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Géolocalisation</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1234567890123!2d10.6415!3d35.8254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzMxLjQiTiAxMMKwMzgnMjkuNCJF!5e0!3m2!1sfr!2stn!4v1234567890123!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 PROTEINE TUNISIE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
