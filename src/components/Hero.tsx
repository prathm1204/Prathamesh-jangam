
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<NodeListOf<Element> | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxElements.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate mouse position as percentage
      const mouseXPercent = clientX / windowWidth;
      const mouseYPercent = clientY / windowHeight;
      
      // Apply parallax effect to elements
      parallaxElements.current.forEach((el) => {
        const speedX = parseFloat(el.getAttribute('data-speed-x') || '0');
        const speedY = parseFloat(el.getAttribute('data-speed-y') || '0');
        
        const moveX = (mouseXPercent - 0.5) * speedX;
        const moveY = (mouseYPercent - 0.5) * speedY;
        
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    // Select all parallax elements
    parallaxElements.current = document.querySelectorAll('[data-speed-x], [data-speed-y]');
    
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          data-speed-x="20"
          data-speed-y="10"
        />
        <div 
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          data-speed-x="-20"
          data-speed-y="-10"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary inline-block rounded-full px-4 py-1 border border-primary/20 mb-6 font-medium animate-fade-in">
            Full Stack Developer
          </p>
          
          <div className="mb-8">
            <AnimatedText 
              text="Prathamesh Tangam" 
              tag="h1" 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            />
            <AnimatedText 
              text="Crafting digital experiences with code and creativity" 
              tag="p" 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
              delay={0.5}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors interactive"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="px-8 py-3 rounded-full font-medium border border-primary/20 hover:bg-primary/5 transition-colors interactive"
            >
              View My Work
            </a>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <a 
              href="#about"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary/5 transition-colors interactive"
              aria-label="Scroll down"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
