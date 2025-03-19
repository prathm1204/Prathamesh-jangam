
import React from 'react';
import { CircuitBoard, Code, Cpu } from 'lucide-react';

interface TechLogoProps {
  className?: string;
  variant?: 'circuit' | 'code' | 'cpu';
  size?: number;
  animated?: boolean;
}

const TechLogo: React.FC<TechLogoProps> = ({ 
  className = '', 
  variant = 'circuit', 
  size = 24,
  animated = true
}) => {
  const renderIcon = () => {
    switch(variant) {
      case 'circuit':
        return <CircuitBoard size={size} className="text-accent" />;
      case 'code':
        return <Code size={size} className="text-accent" />;
      case 'cpu':
        return <Cpu size={size} className="text-accent" />;
      default:
        return <CircuitBoard size={size} className="text-accent" />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`p-2 rounded-full glass ${animated ? 'animate-pulse-glow' : ''}`}>
        {renderIcon()}
      </div>
      {animated && (
        <>
          <div className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse"></div>
        </>
      )}
    </div>
  );
};

export default TechLogo;
