
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const AnimatedSkillBar = ({ name, percentage, delay = 0 }: AnimatedSkillBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const progressBar = progressRef.current;
    if (!progressBar) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            progressBar.style.setProperty('--progress-width', `${percentage}%`);
            observer.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(progressBar);
    
    return () => {
      observer.disconnect();
    };
  }, [percentage]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div 
        ref={progressRef}
        className="h-1 bg-secondary rounded-full overflow-hidden"
        style={{ transition: 'all 0.6s ease-out', transitionDelay: `${delay * 0.1}s` }}
      >
        <div 
          className={`h-full bg-primary rounded-full ${isInView ? 'animate-progress' : ''}`}
          style={{ 
            width: isInView ? `${percentage}%` : '0%',
            transitionDelay: `${delay * 0.1}s`
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
