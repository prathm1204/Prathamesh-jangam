
import React, { useEffect, useRef } from 'react';

interface TechBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  color?: string;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ 
  className = '',
  density = 15,
  speed = 1,
  color = 'var(--accent)'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create nodes
    const nodes: { x: number; y: number; size: number; speed: number; connections: number[] }[] = [];
    
    for (let i = 0; i < density; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: (Math.random() - 0.5) * speed,
        connections: []
      });
    }
    
    // Animate
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach((node, index) => {
        node.x += node.speed;
        
        // Wrap around canvas
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        
        // Draw connections
        node.connections = [];
        
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              node.connections.push(otherIndex);
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = color;
              ctx.globalAlpha = 0.15 * (1 - distance / 150);
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, color]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
    />
  );
};

export default TechBackground;
