import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-display gradient-primary bg-clip-text text-transparent">
              Profissional Premium
            </h3>
            <p className="text-background/80 max-w-md mb-6 leading-relaxed">
              Atendimento de excelência, com foco em você e seus objetivos. 
              Transforme sua experiência com nossos serviços personalizados e 
              profissionais altamente qualificados.
            </p>
            
            {/* Contact Quick Info */}
            <div className="space-y-3">
              <a href="tel:" className="flex items-center gap-3 text-background/80 hover:text-background transition-smooth group">
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>(00) 90000-0000</span>
              </a>
              <a href="mailto:" className="flex items-center gap-3 text-background/80 hover:text-background transition-smooth group">
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>contato@exemplo.com</span>
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Rua Exemplo, 123 - Cidade/Estado</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Galeria", "Depoimentos", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-background/80 hover:text-background transition-smooth hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Redes Sociais</h4>
            <p className="text-background/80 mb-4">Acompanhe nossas novidades</p>
            <div className="flex gap-3 mb-8">
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-medium group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-medium group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-medium group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-medium group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Trust Badge */}
            <div className="bg-background/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">15+ Anos</div>
              <div className="text-sm text-background/80">de Excelência</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-center md:text-left">
              &copy; {currentYear} Profissional Premium. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-background/80">
              <a href="#" className="hover:text-background transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-background transition-smooth">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
