import { Shield, Truck, CreditCard, HeadphonesIcon } from 'lucide-react';

export function TrustBanner() {
  const features = [
    {
      icon: Shield,
      title: '100% Authentique',
      description: 'Produits certifiés et originaux'
    },
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Partout en Tunisie sous 48h'
    },
    {
      icon: CreditCard,
      title: 'Paiement Sécurisé',
      description: 'Transactions protégées'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Équipe à votre écoute'
    }
  ];

  return (
    <section className="py-12 border-y bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
