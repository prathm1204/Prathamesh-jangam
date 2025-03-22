
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Moon, Sun, Instagram, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Switch } from './ui/switch';

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
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: <Github className="h-4 w-4" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <Linkedin className="h-4 w-4" />
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: <Instagram className="h-4 w-4" />
    }
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Stylish PJ Logo */}
        <a href="#" className="text-2xl font-bold font-display flex items-center">
          <div className="relative w-10 h-10 bg-gradient-to-br from-accent via-accent/70 to-primary/50 rounded-lg flex items-center justify-center mr-2 overflow-hidden">
            <span className="text-background font-display font-bold text-lg relative z-10">PJ</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
          </div>
          <span className="hidden sm:inline-block text-gradient">Prathamesh Jangam</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
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
            
            {/* Theme Toggle with both Button and Switch options */}
            <div className="flex items-center gap-2">
              <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value)}>
                <ToggleGroupItem value="light" size="sm" className="rounded-l-md p-1 h-8">
                  <Sun className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" size="sm" className="rounded-r-md p-1 h-8">
                  <Moon className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              
              <div className="hidden lg:flex items-center gap-2 pl-2">
                <Switch 
                  checked={theme === 'dark'} 
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} 
                  className="data-[state=checked]:bg-accent"
                />
                <span className="text-xs text-muted-foreground">
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="hidden lg:flex items-center">
              {socialLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors rounded-full"
                    >
                      {link.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
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
            <div className="w-20 h-20 bg-gradient-to-br from-accent via-accent/70 to-primary/50 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
              <span className="text-background font-display font-bold text-3xl relative z-10">PJ</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
            </div>
            <Avatar className="w-16 h-16 border-2 border-accent/30 mb-2">
              <AvatarImage src="/lovable-uploads/2b43f1a9-df36-45fd-9c9b-ea8d5b5e3c4e.png" alt="Prathamesh Chandrashekhar Jangam" />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <span className="text-lg font-medium">Prathamesh Chandrashekhar Jangam</span>
            
            {/* Theme toggles for mobile */}
            <div className="flex items-center gap-3 mt-4">
              <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value)}>
                <ToggleGroupItem value="light" size="sm" className="rounded-l-md p-1 h-8">
                  <Sun className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" size="sm" className="rounded-r-md p-1 h-8">
                  <Moon className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              
              <div className="flex items-center gap-2">
                <Switch 
                  checked={theme === 'dark'} 
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  className="data-[state=checked]:bg-accent"
                />
                <span className="text-xs text-muted-foreground">
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </div>
            </div>
            
            {/* Social links for mobile */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors interactive"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
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
