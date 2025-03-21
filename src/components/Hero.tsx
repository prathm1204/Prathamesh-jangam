
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import TechLogo from './ui/TechLogo';

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
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
          data-speed-x="20"
          data-speed-y="10"
        />
        <div 
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          data-speed-x="-20"
          data-speed-y="-10"
        />
        <div 
          className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-2xl"
          data-speed-x="-10"
          data-speed-y="15"
        />
        
        {/* Tech elements */}
        <div 
          className="absolute top-40 right-1/3"
          data-speed-x="5"
          data-speed-y="15"
        >
          <TechLogo variant="circuit" size={32} />
        </div>
        <div 
          className="absolute bottom-40 left-1/3"
          data-speed-x="-8"
          data-speed-y="-10"
        >
          <TechLogo variant="code" size={28} />
        </div>
        <div 
          className="absolute top-1/2 right-1/5"
          data-speed-x="12"
          data-speed-y="-8"
        >
          <TechLogo variant="cpu" size={24} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
          {/* Left side - Content and profile */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="mb-8 flex flex-col md:items-start items-center">
              <h2 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
                Prathamesh Chandrashekhar Jangam
              </h2>
              
              <p className="text-accent inline-block rounded-full px-4 py-1 border-shimmer border-accent/20 mb-6 font-medium animate-fade-in">
                Full Stack Developer
              </p>
              
              <AnimatedText 
                text="Prathamesh Chandrashekhar Jangam" 
                tag="h1" 
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient"
              />
              <AnimatedText 
                text="Crafting digital experiences with code and creativity" 
                tag="p" 
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
                delay={0.5}
              />

              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a 
                  href="#contact"
                  className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors interactive shadow-lg shadow-accent/20"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects"
                  className="px-8 py-3 rounded-full font-medium border border-shimmer border-accent/20 hover:bg-accent/5 transition-colors interactive"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - New image and profile avatar */}
          <div className="relative order-1 md:order-2 flex flex-col items-center">
            {/* Profile avatar positioned on top */}
            <div className="relative mb-6 z-10">
              <Avatar className="w-32 h-32 border-4 border-accent/20 animate-pulse-glow">
                <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
                <AvatarFallback className="bg-accent/20">PT</AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2">
                <TechLogo variant="cpu" size={20} />
              </div>
            </div>
            
            {/* The new image in a nice frame */}
            <div className="rounded-lg overflow-hidden shadow-xl shadow-accent/10 border border-accent/20 transform transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/57287faa-6db0-44ec-8573-046e939d27d0.png" 
                alt="Prathamesh working on laptop" 
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 hover:bg-accent/5 transition-colors interactive"
          aria-label="Scroll down"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
