
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glareOnHover?: boolean;
  tiltAmount?: number;
  animateY?: boolean;
  style?: React.CSSProperties;
  imageSrc?: string;
  imageAlt?: string;
  imageOverlay?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className = '',
  glareOnHover = true,
  tiltAmount = 5,
  animateY = false,
  style = {},
  imageSrc,
  imageAlt = "Card image",
  imageOverlay = false
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(!imageSrc);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate rotation based on mouse position
      const rotateX = tiltAmount * ((y - height / 2) / height);
      const rotateY = -tiltAmount * ((x - width / 2) / width);
      
      // Apply the rotation and glare effect
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      if (glareOnHover) {
        // Update the glare position
        const glare = card.querySelector('.card-glare') as HTMLElement;
        if (glare) {
          const glareX = (x / width) * 100;
          const glareY = (y / height) * 100;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 80%)`;
        }
      }
    };
    
    const handleMouseLeave = () => {
      // Reset card transform
      card.style.transform = '';
    };
    
    // Intersection Observer for initial animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(card);
    
    // Add event listeners for tilt effect
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [tiltAmount, glareOnHover]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative overflow-hidden transition-all duration-500 ease-out transform",
        animateY && !isInView ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100",
        !imageLoaded && imageSrc ? "min-h-[200px] bg-muted/20" : "",
        className
      )}
      style={{ 
        transformStyle: 'preserve-3d', 
        transition: 'transform 0.1s ease-out, opacity 0.6s ease-out, transform 0.6s ease-out',
        ...style 
      }}
    >
      {imageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            onLoad={handleImageLoad} 
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              imageOverlay ? "opacity-60" : "opacity-100"
            )}
          />
          {imageOverlay && <div className="absolute inset-0 bg-background/60" />}
        </div>
      )}
      <div className={cn("relative z-10", imageSrc ? "text-white" : "")}>
        {children}
      </div>
      {glareOnHover && (
        <div className="card-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out" />
      )}
    </div>
  );
};

export default AnimatedCard;
