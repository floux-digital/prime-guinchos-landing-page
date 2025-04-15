
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/fcac430a-4f19-4849-966b-52b4bd4d422a.png" alt="Prime Guinchos" className="h-10" />
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
            <i className="bi bi-telephone-fill mr-2"></i> Emergência
          </Button>
          <Button size="icon" className="rounded-full" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp text-lg"></i>
            </a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full justify-center rounded-full">
              <i className="bi bi-telephone-fill mr-2"></i> Emergência
            </Button>
            <Button className="w-full justify-center rounded-full">
              <i className="bi bi-whatsapp mr-2"></i> WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
