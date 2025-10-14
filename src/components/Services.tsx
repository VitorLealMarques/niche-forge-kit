import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Desenvolvemos um plano específico para suas necessidades.",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Técnicas Modernas",
    description: "Utilizamos as melhores técnicas e produtos do mercado para resultados excepcionais.",
    color: "text-secondary"
  },
  {
    icon: Scissors,
    title: "Profissionais Qualificados",
    description: "Equipe altamente capacitada e em constante atualização profissional.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Ambiente Acolhedor",
    description: "Espaço confortável e relaxante, pensado para seu bem-estar.",
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excelência em cada detalhe, cuidado em cada atendimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
