import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos com os mais altos padrões de qualidade",
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Suas necessidades são nossa prioridade máxima",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e certificados",
    },
    {
      icon: TrendingUp,
      title: "Inovação Contínua",
      description: "Sempre atualizados com as melhores técnicas",
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">Sobre Nós</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dedicados à Sua
              <span className="block gradient-primary bg-clip-text text-transparent">
                Transformação
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Com mais de 15 anos de experiência, somos referência em atendimento profissional 
              personalizado. Nossa missão é proporcionar uma experiência única, combinando 
              técnicas modernas com um atendimento humanizado.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Cada cliente é tratado de forma individual, respeitando suas particularidades 
              e objetivos. Nosso compromisso é com sua satisfação e bem-estar.
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                  500+
                </div>
                <div className="text-muted-foreground font-medium">Clientes Atendidos</div>
              </div>
              <div className="border-l border-border pl-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                  98%
                </div>
                <div className="text-muted-foreground font-medium">Satisfação</div>
              </div>
              <div className="border-l border-border pl-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                  15+
                </div>
                <div className="text-muted-foreground font-medium">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Side - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-soft">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
