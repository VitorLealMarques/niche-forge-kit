import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Início", "Serviços", "Galeria", "Depoimentos", "Contato"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent font-display">
              Profissional Premium
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item}
              </a>
            ))}
            <Button className="gradient-primary hover:shadow-medium transition-smooth">
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="gradient-primary hover:shadow-medium transition-smooth">
                Agendar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
