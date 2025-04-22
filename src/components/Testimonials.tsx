
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
      image: "/guinchados/guincho-santa-catarina-01.jpg",
      title: "Rápido e honesto",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-02.jpg",
      title: "Chegaram antes do previsto",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-03.jpg",
      title: "Toooop demais!!! Vlw!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-04.jpg",
      title: "Mto bons! Recomendo.",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-05.jpg",
      title: "Vlw pelo socorro na madrugada!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-06.jpg",
      title: "Muito antenciosos",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-07.jpg",
      title: "Mais rápido que eu imaginava",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-08.jpg",
      title: "Guincho top e atendimento 10",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-09.jpg",
      title: "Obrigado pessoal, vlw demais!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-10.jpg",
      title: "Trataram meu carro com cuidado",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-11.jpg",
      title: "Atendimento salvador!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-12.jpg",
      title: "Resolveram tudo rapidamente",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-13.jpg",
      title: "Super indico!!!!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-14.jpg",
      title: "Não eh facil guinchar meu carro, mas fizeram tudo direito! indico!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-15.jpg",
      title: "Recomendo!",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-16.jpg",
      title: "Preco e atendimento muito bons",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-17.jpg",
      title: "Muito mais do que eu esperava",
      description: ""
    },
    {
      image: "/guinchados/guincho-santa-catarina-18.jpg",
      title: "Recomendo de olhos fechados",
      description: ""
    }
  ];

  // Get slides per view settings for the carousel based on screen size
  const getCarouselOptions = () => {
    if (isMobile) {
      return { slidesToScroll: 1, containScroll: "trimSnaps" as const };
    } else if (isTablet) {
      return { slidesToScroll: 2, containScroll: "trimSnaps" as const };
    } else {
      return { slidesToScroll: 3, containScroll: "trimSnaps" as const };
    }
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
    <section className="py-32 bg-dark-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          Mais de 2 mil socorros
        </h2>
        <span className="text-2xl flex justify-center mb-4">
          <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
          <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
          <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
          <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
          <i className="bi bi-star-fill text-yellow-400"></i>
        </span>
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
              ...getCarouselOptions(),
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-4 ${isMobile ? 'basis-full' : isTablet ? 'basis-1/2' : 'basis-1/3'}`}
                >
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-black mb-2 mt-1">{item.title}</h3>
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
