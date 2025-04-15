
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import '../App.css';

const Index = () => {
  useEffect(() => {
    // Add Bootstrap Icons CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <ServiceArea />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
