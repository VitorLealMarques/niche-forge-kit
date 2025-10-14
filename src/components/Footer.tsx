import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-display">Profissional Premium</h3>
            <p className="text-background/80 max-w-md">
              Atendimento de excelência, com foco em você e seus objetivos. 
              Transforme sua experiência com nossos serviços personalizados.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Início</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Serviços</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Galeria</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; {new Date().getFullYear()} Profissional Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
