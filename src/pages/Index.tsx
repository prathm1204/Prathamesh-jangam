
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Cursor from '../components/ui/Cursor';
import TechBackground from '../components/ui/TechBackground';
import TechLogo from '../components/ui/TechLogo';

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Preload critical images
    const preloadImages = [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29',
      'https://images.unsplash.com/photo-1557821552-17105176677c'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Fixed tech logos in corners of the page
  const fixedLogos = [
    { variant: 'code', size: 20, position: 'top-4 left-4', delay: 0 },
    { variant: 'cpu', size: 18, position: 'top-4 right-4', delay: 1 },
    { variant: 'circuit', size: 22, position: 'bottom-4 left-4', delay: 2 },
    { variant: 'database', size: 16, position: 'bottom-4 right-4', delay: 3 },
  ];
  
  return (
    <div className="relative">
      {/* Technical Background */}
      <TechBackground density={25} speed={0.5} />
      
      {/* Fixed Tech Logos in corners */}
      {fixedLogos.map((logo, index) => (
        <div
          key={`fixed-logo-${index}`}
          className={`fixed ${logo.position} z-10 hidden md:block`}
          style={{ animationDelay: `${logo.delay * 0.5}s` }}
        >
          <TechLogo 
            variant={logo.variant as 'circuit' | 'code' | 'cpu' | 'database'} 
            size={logo.size} 
            animated={true} 
          />
        </div>
      ))}
      
      {/* Custom cursor */}
      <Cursor />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
