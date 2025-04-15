
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Testimonials() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  // Media queries for responsive design
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  
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

  // Calculate how many slides to show based on screen size
  const getSlidesPerView = () => {
    if (isMobile) return "w-full"; // 1 slide for mobile
    if (isTablet) return "w-1/2"; // 2 slides for tablet
    return "w-1/3"; // 3 slides for desktop
  };

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-dark-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Mais de 2 mil atendimentos</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Já são mais de 2 mil atendimentos emergenciais realizados pela Prime Guinchos, com muitos clientes satisfeitos e seguros.
        </p>
        
        <div className="relative px-4 sm:px-10 mb-12">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className={getSlidesPerView()}
                >
                  <div className="bg-gray-700 bg-opacity-30 rounded-lg overflow-hidden h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 text-primary bg-white" />
            <CarouselNext className="hidden md:flex -right-4 text-primary bg-white" />
          </Carousel>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full ${index === current ? 'bg-primary' : 'bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
