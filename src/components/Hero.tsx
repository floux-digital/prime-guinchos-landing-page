
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-row items-center">
          <div className="w-full md:w-2/5">
            <h1 className="text-4xl md:text-5xl font-black mb-2 italic">
              ASSISTÊNCIA E<br />
              GUINCHO <span className="text-primary">24h</span>
            </h1>
            <p className="mb-6 text-gray-700">
              Atendimento rápido e eficiente para você não ficar na mão. Consulte nossa&nbsp; 
              <a href="#area">
                <span className="text-primary font-semibold">
                  área de serviço.
                </span>
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full conversion-click" size='lg' asChild>
                <a href="tel://08005550885" target="_blank" rel="noopener noreferrer" aria-label="Ligar">
                  <i className="bi bi-telephone-fill mr-2"></i> 0800 555 0885
                </a>
              </Button>
              <Button variant="outline" size='lg' className="conversion-click border-2 font-[800] border-primary text-primary hover:bg-primary hover:text-white rounded-full" asChild>
                <a href="https://api.whatsapp.com/send?phone=554831792026&text=Estou%20em%20uma%20emergencia%20e%20preciso%20de%20assistencia%21" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp text-lg"></i> WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-3/5 z-10">
            <img
              src="/lovable-uploads/prime-hero.png"
              alt="Prime Guinchos Truck"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
