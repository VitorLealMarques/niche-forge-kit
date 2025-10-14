const Gallery = () => {
  // Placeholder images - você pode gerar imagens específicas depois
  const images = [
    { id: 1, alt: "Ambiente moderno" },
    { id: 2, alt: "Atendimento profissional" },
    { id: 3, alt: "Resultado final" },
    { id: 4, alt: "Espaço acolhedor" },
    { id: 5, alt: "Equipe qualificada" },
    { id: 6, alt: "Técnicas avançadas" },
  ];

  return (
    <section className="py-20 px-4 gradient-soft">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e nosso ambiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-60 group-hover:opacity-40 transition-smooth"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
