import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restez Informé
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter et recevez des offres exclusives, 
            des conseils fitness et les dernières nouveautés.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 bg-background"
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8">
              S'inscrire
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            En vous inscrivant, vous acceptez de recevoir nos emails marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
