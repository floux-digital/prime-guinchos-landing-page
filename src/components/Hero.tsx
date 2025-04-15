
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ASSISTÊNCIA E<br />
              GUINCHO <span className="text-primary">24h</span>
            </h1>
            <p className="mb-6 text-gray-700">
              Atendimento rápido e eficiente para você não ficar na mão. Consulte nosso <span className="text-primary font-semibold">área de serviço.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full">
                <i className="bi bi-telephone-fill mr-2"></i> 0800 123 4567
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                <i className="bi bi-whatsapp mr-2"></i> WhatsApp
              </Button>
            </div>
          </div>
          <div className="relative z-10">
            <img
              src="/lovable-uploads/0d588b3a-e485-4fef-8176-3fe3d83cf88f.png"
              alt="Prime Guinchos Truck"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
      {/* Background blob */}
      <div className="absolute top-20 right-0 w-[55%] h-[80%] bg-primary rounded-l-full -z-0 opacity-90"></div>
    </section>
  );
}
