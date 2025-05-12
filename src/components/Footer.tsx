
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/lovable-uploads/prime-logo.svg" alt="Prime Guinchos" className="h-12 mb-4" />
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Optimus Raster LTDA</p>
            <p>CNPJ: 58.275.789/0001-73</p>
            <p>Rua João Wesller, 150, Sala 202, São Ludgero, SC</p>
            <p>Tel: 0800-123-4567</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Prime Guinchos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
