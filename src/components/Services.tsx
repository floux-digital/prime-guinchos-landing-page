import { Button } from './ui/button';


export default function Services() {
  const services = [
    {
      icon: 'bi bi-truck-flatbed',
      title: 'Reboque de Veículos',
      description: 'Reboque profissional para carros, motos e vans com segurança e cuidado.',
      message: 'Ol%C3%A1%2C%20estou%20precisando%20de%20um%20reboque'
    },
    {
      icon: 'bi bi-droplet-half',
      title: 'Pane Seca',
      description: 'Ficou sem combustível? Levamos o suficiente para você chegar ao posto mais próximo.',
      message: 'Ol%C3%A1%2C%20fiquei%20sem%20combust%C3%ADvel%20e%20preciso%20de%20assist%C3%AAncia'
    },
    {
      icon: 'bi bi-battery-charging',
      title: 'Auxílio Bateria',
      description: 'A bateria descarregou? Oferecemos serviço de recarga ou troca rápida da bateria no local.',
      message: 'Ol%C3%A1%2C%20a%20bateria%20do%20meu%20ve%C3%ADculo%20descarregou%20e%20preciso%20de%20assist%C3%AAncia'
    },
    {
      icon: 'bi bi-vinyl',
      title: 'Troca de Pneu',
      description: 'O pneu furou? Vamos até o local e fazemos a troca pelo seu step. Não realizamos conserto do pneu.',
      message: 'Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20para%20trocar%20um%20pneu'
    },
    {
      icon: 'bi bi-truck',
      title: 'Transporte',
      description: 'Translado de empilhadeiras, máquinas pesadas, implementos agrícolas e outros.',
      message:'Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20transportes%20especiais'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Recuperação Veicular',
      description: 'Remoção de veículo com pedido de busca e apreensão, medida cautelar ou recuperação fiduciária.',
      message: 'Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20servi%C3%A7o%20de%20recupera%C3%A7%C3%A3o%20veicular'
    },
  ];

  return (
    <section id="services" className="py-32 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-[800]">Serviços</h2>
        <p className="text-center text-gray-600 mb-12 w-full lg:w-1/2 mx-auto">
          Oferecemos uma variedade de serviços para garantir que você nunca fique desamparado na estrada.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card shadow-md py-8">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
              <Button variant="default" size='lg' className="conversion-click border-primary text-white hover:bg-primary rounded-full mt-8" asChild>
                <a href={`https://api.whatsapp.com/send?phone=554831792026&text=${service.message}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  Solicitar
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
