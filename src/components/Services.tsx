import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Sparkles, Users, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Desenvolvemos um plano específico para suas necessidades e objetivos individuais.",
    color: "from-primary to-primary-dark",
  },
  {
    icon: Sparkles,
    title: "Técnicas Modernas",
    description: "Utilizamos as melhores e mais atuais técnicas do mercado para garantir resultados excepcionais.",
    color: "from-secondary to-primary",
  },
  {
    icon: Scissors,
    title: "Profissionais Certificados",
    description: "Equipe altamente capacitada, com certificações e em constante atualização profissional.",
    color: "from-accent to-secondary",
  },
  {
    icon: Users,
    title: "Ambiente Acolhedor",
    description: "Espaço confortável, moderno e relaxante, cuidadosamente pensado para seu bem-estar.",
    color: "from-primary-light to-accent",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Adaptamos nossos horários às suas necessidades para proporcionar máxima comodidade.",
    color: "from-secondary to-accent",
  },
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Compromisso com a excelência em cada atendimento. Sua satisfação é nossa prioridade.",
    color: "from-primary to-secondary",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 px-4 gradient-soft relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Excelência em Cada
            <span className="block gradient-primary bg-clip-text text-transparent">
              Atendimento
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma experiência completa com foco em qualidade, conforto e resultados que superam expectativas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-none shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 bg-card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold">Saiba mais</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
