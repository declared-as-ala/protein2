export function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Article de Blog 1</h2>
            <p className="text-muted-foreground mb-4">
              Découvrez les dernières tendances en nutrition sportive...
            </p>
            <a href="#" className="text-primary hover:underline">Lire la suite →</a>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Article de Blog 2</h2>
            <p className="text-muted-foreground mb-4">
              Comment optimiser votre récupération après l'entraînement...
            </p>
            <a href="#" className="text-primary hover:underline">Lire la suite →</a>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Article de Blog 3</h2>
            <p className="text-muted-foreground mb-4">
              Guide complet sur les protéines et leurs bienfaits...
            </p>
            <a href="#" className="text-primary hover:underline">Lire la suite →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
