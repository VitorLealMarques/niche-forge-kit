import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto Para Começar
            <span className="block gradient-primary bg-clip-text text-transparent">
              Sua Jornada?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para atendê-lo. Agende sua consulta e descubra a diferença
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-strong animate-fade-in-up bg-card">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-2">Envie Sua Mensagem</h3>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário e retornaremos em breve
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <Input 
                        placeholder="Seu nome" 
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <Textarea 
                      placeholder="Como podemos ajudá-lo?" 
                      className="min-h-[150px] border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button className="w-full h-14 text-lg gradient-primary hover:shadow-strong transition-smooth group">
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth group bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua Exemplo, 123 - Centro<br />
                    Cidade - Estado, 00000-000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth group bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    (00) 0000-0000<br />
                    (00) 90000-0000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth group bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">E-mail</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    contato@exemplo.com<br />
                    agendamento@exemplo.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth group bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horário</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
