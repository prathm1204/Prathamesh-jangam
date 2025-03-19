
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
}

const AnimatedText = ({ 
  text, 
  tag = 'span', 
  className = '', 
  delay = 0
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spanElements = containerRef.current?.querySelectorAll('span > span');
            spanElements?.forEach((span, index) => {
              (span as HTMLElement).style.setProperty('--index', `${index + delay}`);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay]);
  
  const createSplitText = () => {
    // Split text by words
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block mr-[0.25em]">
        <span>{word}</span>
      </span>
    ));
  };
  
  const Tag = tag;
  
  return React.createElement(
    Tag,
    { 
      ref: containerRef, 
      className: `split-lines ${className}`,
      "data-testid": "animated-text" 
    },
    createSplitText()
  );
};

export default AnimatedText;
