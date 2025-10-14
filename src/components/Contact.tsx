import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Agende sua consulta hoje mesmo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-none shadow-medium animate-fade-in-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Seu Nome" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Seu E-mail" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Seu Telefone" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Sua Mensagem" 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full h-12 text-lg gradient-primary hover:shadow-strong transition-smooth">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Exemplo, 123 - Centro<br />
                    Cidade - Estado, 00000-000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    (00) 0000-0000<br />
                    (00) 90000-0000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@exemplo.com<br />
                    agendamento@exemplo.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 9h às 14h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
