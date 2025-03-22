
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
    
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/50" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-display">
          <span className="text-gradient">PJ</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-6">
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

          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border border-accent/30">
                <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
                <AvatarFallback>PJ</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden lg:inline">Prathamesh Chandrashekhar Jangam</span>
            </div>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleTheme}
                  className="rounded-full bg-accent/10 hover:bg-accent/20"
                >
                  {mounted && theme === 'dark' ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
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
        <div className="space-y-6 text-center">
          <div className="flex flex-col items-center gap-2 mb-8">
            <Avatar className="w-16 h-16 border-2 border-accent/30 mb-2">
              <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <span className="text-lg font-medium">Prathamesh Chandrashekhar Jangam</span>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="mt-2 rounded-full bg-accent/10 hover:bg-accent/20"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          
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
