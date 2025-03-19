
import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    
    if (!cursor || !cursorRing) return;
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Position cursor dot
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Position cursor ring with slight delay for smooth effect
      setTimeout(() => {
        cursorRing.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }, 100);
    };
    
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    // Track hover on interactive elements
    const addHoverClass = () => setIsHovering(true);
    const removeHoverClass = () => setIsHovering(false);
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });
    
    // Add custom-cursor class to html
    document.documentElement.classList.add('has-custom-cursor');
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      document.documentElement.classList.remove('has-custom-cursor');
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-difference ${isClicking ? 'scale-150' : ''}`}
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      <div 
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-6 h-6 border border-primary rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference ${isClicking ? 'scale-75 opacity-50' : ''} ${isHovering ? 'scale-350 opacity-50' : ''}`}
        style={{ transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out' }}
      />
    </>
  );
};

export default Cursor;
