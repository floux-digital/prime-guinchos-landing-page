
export default function Testimonials() {
  const testimonials = [
    {
      image: "/lovable-uploads/0d588b3a-e485-4fef-8176-3fe3d83cf88f.png",
      title: "Rápido e Responsável",
      description: "Prime Guinchos: Atendimento rápido, profissional e eficiente."
    },
    {
      image: "/lovable-uploads/0d588b3a-e485-4fef-8176-3fe3d83cf88f.png",
      title: "Ótimo Serviço",
      description: "Precisei de um guincho às 2h da manhã e eles chegaram em 20 minutos!"
    },
    {
      image: "/lovable-uploads/0d588b3a-e485-4fef-8176-3fe3d83cf88f.png",
      title: "Recomendo!",
      description: "Super atenciosos e prestativos, resolveram meu problema rapidamente."
    }
  ];

  return (
    <section className="py-16 bg-dark-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Mais de 2 mil atendimentos</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Já são mais de 2 mil atendimentos emergenciais realizados pela Prime Guinchos, com muitos clientes satisfeitos e seguros.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-30 rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-300">
                  <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
                  <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
                  <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
                  <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
                  <i className="bi bi-star-fill text-yellow-400"></i>
                </p>
                <h3 className="font-bold mb-2 mt-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((dot) => (
              <button 
                key={dot} 
                className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-primary' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${dot}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
