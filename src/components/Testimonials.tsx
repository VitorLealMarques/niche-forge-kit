import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2020",
    text: "Simplesmente excepcional! O atendimento é impecável, o ambiente é maravilhoso e os resultados superaram minhas expectativas. A equipe realmente se importa com cada detalhe.",
    rating: 5,
    image: "MS"
  },
  {
    name: "João Santos",
    role: "Cliente desde 2019",
    text: "Profissionais altamente qualificados e um espaço incrível. A atenção personalizada e o cuidado com que tratam cada cliente fazem toda a diferença. Recomendo de olhos fechados!",
    rating: 5,
    image: "JS"
  },
  {
    name: "Ana Costa",
    role: "Cliente desde 2021",
    text: "Uma experiência única do início ao fim. Me senti muito bem cuidada, o ambiente é relaxante e o resultado foi exatamente o que eu esperava. Melhor investimento que já fiz!",
    rating: 5,
    image: "AC"
  },
  {
    name: "Pedro Oliveira",
    role: "Cliente desde 2022",
    text: "Equipe extremamente profissional e atenciosa. O espaço é moderno, limpo e acolhedor. Cada visita é uma experiência memorável. Não troco por nada!",
    rating: 5,
    image: "PO"
  },
  {
    name: "Carla Mendes",
    role: "Cliente desde 2018",
    text: "Anos de confiança e satisfação. A qualidade do serviço é incomparável e a equipe sempre me surpreende positivamente. É como estar em casa, mas melhor!",
    rating: 5,
    image: "CM"
  },
  {
    name: "Roberto Lima",
    role: "Cliente desde 2023",
    text: "Descobri recentemente e já me tornei cliente fiel. Atendimento de excelência, profissionais capacitados e um ambiente que transmite confiança e conforto.",
    rating: 5,
    image: "RL"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 px-4 gradient-soft relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            O Que Nossos Clientes
            <span className="block gradient-primary bg-clip-text text-transparent">
              Dizem Sobre Nós
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nosso maior orgulho e motivação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-none shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 bg-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-accent text-accent group-hover:scale-110 transition-transform" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-medium group-hover:scale-110 transition-transform">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 flex flex-wrap justify-center items-center gap-8 lg:gap-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
              4.9/5.0
            </div>
            <div className="text-muted-foreground text-sm">Avaliação Média</div>
          </div>
          <div className="text-center border-l border-border pl-8">
            <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
              500+
            </div>
            <div className="text-muted-foreground text-sm">Avaliações</div>
          </div>
          <div className="text-center border-l border-border pl-8">
            <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-muted-foreground text-sm">Recomendações</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
