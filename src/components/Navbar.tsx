
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Caller } from './Caller';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } 
      else {
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
          <img src="/lovable-uploads/prime-logo.svg" alt="Prime Guinchos" className="h-8" />
        </div>
        
        <div className="flex items-center space-x-2">
          <Caller>
            <Button variant="outline" className="conversion-click border-primary text-primary hover:bg-primary hover:text-white rounded-full">
              <i className="bi bi-telephone-fill mr-2"></i> Emergência
            </Button>
          </Caller>
          <Button size="icon" className="rounded-full conversion-click" asChild>
            <a href="https://api.whatsapp.com/send?phone=554899670035&text=Estou%20em%20uma%20emergencia%20e%20preciso%20de%20assistencia%21" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp text-lg"></i>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
