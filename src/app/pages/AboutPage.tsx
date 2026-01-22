export function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Qui Sommes Nous</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
              <p className="text-muted-foreground mb-4">
                PROTEINE TUNISIE - SOBITAS est votre distributeur officiel d'articles de sport et de compléments alimentaires en Tunisie.
              </p>
              <p className="text-muted-foreground mb-4">
                Depuis notre création, nous nous engageons à fournir les meilleurs produits de qualité premium pour accompagner vos objectifs de performance et de bien-être.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
              <p className="text-muted-foreground mb-4">
                Notre mission est de rendre accessible à tous les meilleurs compléments alimentaires et équipements sportifs, en garantissant qualité, authenticité et service client exceptionnel.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Pourquoi Nous Choisir</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Produits authentiques et certifiés</li>
                <li>Large gamme de produits premium</li>
                <li>Livraison rapide et sécurisée</li>
                <li>Service client réactif et professionnel</li>
                <li>Meilleurs prix du marché</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
