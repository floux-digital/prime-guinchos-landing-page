
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/lovable-uploads/fcac430a-4f19-4849-966b-52b4bd4d422a.png" alt="Prime Guinchos" className="h-12 mb-4" />
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Prime Guinchos Ltda.</p>
            <p>CNPJ: xx.xxx.xxx/xxxx-xx</p>
            <p>Rua João Pedro de Souza, Londrina, SC</p>
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
