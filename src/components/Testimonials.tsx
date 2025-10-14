import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Profissional excepcional! O atendimento superou todas as minhas expectativas. Ambiente acolhedor e resultados incríveis.",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Melhor experiência que já tive. A atenção aos detalhes e o cuidado personalizado fazem toda a diferença.",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Equipe altamente qualificada e espaço maravilhoso. Me senti muito bem cuidada do início ao fim.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
