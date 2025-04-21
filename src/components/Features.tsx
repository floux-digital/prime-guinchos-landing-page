
export default function Features() {
  const features = [
    {
      icon: 'bi bi-clock-fill',
      title: 'Disponível 24/7',
      description: 'Emergência não tem dia nem hora.'
    },
    {
      icon: 'bi bi-lightning-fill',
      title: 'Rápido Atendimento',
      description: 'Entendemos a sua urgência.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Equipe Qualificada',
      description: 'Profissionais treinados e experientes.'
    }
  ];

  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 p-4 ${ index < features.length - 1 ? 'sm:border-b sm:border-r-0 md:border-b-0 md:border-r border-gray-200' : ''}`}
            >
              <div className="text-primary text-2xl">
                <i className={feature.icon}></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
