
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Code, Pen, PenSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Modern PJ Logo */}
        <a href="#" className="text-2xl font-bold font-display flex items-center gap-2 interactive">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-background rounded-full p-2 flex items-center justify-center border border-accent/20 shadow-md">
              <PenSquare className="h-5 w-5 text-accent" />
            </div>
          </div>
          <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-600 font-extrabold">PJ</span>
        </a>
        
        {/* Center section with profile and full name */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
          <Avatar className="w-10 h-10 border-2 border-accent/30 shadow-md">
            <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
            <AvatarFallback className="bg-accent/20">PJ</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Prathamesh Chandrashekhar Jangam
          </span>
        </div>
        
        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium link-underline hover:text-primary transition-colors interactive"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none interactive"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span 
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300", 
                mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
              )}
            />
            <span 
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300", 
                mobileMenuOpen ? "opacity-0" : "w-4"
              )}
            />
            <span 
              className={cn(
                "h-0.5 bg-foreground transition-all duration-300", 
                mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-6"
              )}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Mobile profile section with full name */}
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-20 h-20 border-4 border-accent/30 shadow-lg mb-4">
            <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
            <AvatarFallback className="bg-accent/20">PJ</AvatarFallback>
          </Avatar>
          <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center px-4">
            Prathamesh Chandrashekhar Jangam
          </span>
        </div>
        
        <div className="space-y-6 text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-2xl font-medium hover:text-primary transition-all duration-300 interactive",
                "transform transition-transform",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ 
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
