
export default function ServiceArea() {
  const primaryAreas = [
    'Braço do Norte',
    'Grão Pará',
    'Gravatal',
    'Lauro Muller',
    'Orleans',
    'Rio Fortuna',
    'São Ludgero',
    'Tubarão'
  ];
  
  
  const otherAreas = [
    'Paraná',
    'Rio Grande do Sul',
    'Santa Catarina'
  ];

  return (
    <section id="area" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6">Área de Serviço</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Estamos operando na Região Sudeste de Santa Catarina, de forma expressa para várias cidades de Santa Catarina e estados vizinhos.
        </p>
        
        <div className="mb-10">
          <h3 className="text-xl font-bold text-center mb-4">Assistência Emergencial</h3>
          <p className="text-center text-sm text-gray-600 mb-6">Apenas Santa Catarina</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {primaryAreas.map((area, index) => (
              <button key={index} className="location-button">
                {area}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-center mb-4">Outros Serviços Agendados</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {otherAreas.map((area, index) => (
              <button key={index} className="location-button">
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
