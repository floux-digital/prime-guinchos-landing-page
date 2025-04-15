
export default function Services() {
  const services = [
    {
      icon: 'bi bi-truck',
      title: 'Reboque de Veículos',
      description: 'Reboque profissional para carros, motos e utilitários com segurança e rapidez.'
    },
    {
      icon: 'bi bi-droplet-fill',
      title: 'Pane Seca',
      description: 'Ficou sem combustível? Não se preocupe, levamos combustível até você chegar ao posto próximo.'
    },
    {
      icon: 'bi bi-battery-charging',
      title: 'Auxílio Bateria',
      description: 'A bateria do seu carro descarregou? Fazemos a recarga ou troca rápida da bateria no local.'
    },
    {
      icon: 'bi bi-disc',
      title: 'Troca de Pneu',
      description: 'O pneu furou? Vamos até o local e realizamos a troca pelo step. Não tem step? Não se preocupe!'
    },
    {
      icon: 'bi bi-box-seam',
      title: 'Transporte',
      description: 'Transporte de mercadorias, máquinas pesadas, equipamentos e veículos especiais.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Recuperação Veicular',
      description: 'Remoção de veículos com perda de freios e operações especiais, resgate e socorro.'
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma variedade de serviços para garantir que você nunca fique desamparado na estrada.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
              <button className="service-button">Solicitar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
