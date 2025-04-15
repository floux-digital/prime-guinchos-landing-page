
export default function Features() {
  const features = [
    {
      icon: 'bi bi-clock-fill',
      title: 'Disponível 24/7',
      description: 'Atendimento 24 horas por dia, 7 dias por semana.'
    },
    {
      icon: 'bi bi-lightning-fill',
      title: 'Atendimento Rápido',
      description: 'Chegamos ao local em tempo recorde.'
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
            <div key={index} className="flex items-center gap-4 p-4">
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
        <div className="mt-6 border-b border-gray-200"></div>
      </div>
    </section>
  );
}
