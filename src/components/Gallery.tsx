import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { useState } from "react";

const images = [
  { id: 1, src: gallery1, alt: "Profissional em ação", category: "Atendimento" },
  { id: 2, src: gallery2, alt: "Ambiente moderno", category: "Estrutura" },
  { id: 3, src: gallery3, alt: "Clientes satisfeitos", category: "Clientes" },
  { id: 4, src: gallery4, alt: "Recepção acolhedora", category: "Estrutura" },
  { id: 5, src: gallery5, alt: "Produtos premium", category: "Produtos" },
  { id: 6, src: gallery6, alt: "Equipe profissional", category: "Equipe" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Atendimento", "Estrutura", "Clientes", "Produtos", "Equipe"];

  const filteredImages = selectedCategory === "Todos" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm">Nossa Galeria</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Conheça Nosso
            <span className="block gradient-primary bg-clip-text text-transparent">
              Espaço Premium
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ambiente moderno e acolhedor, preparado para oferecer a melhor experiência
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "gradient-primary text-white shadow-medium scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-3 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-white text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">{image.alt}</h3>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
