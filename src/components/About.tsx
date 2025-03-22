
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedCard from './ui/AnimatedCard';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all animate-on-scroll elements
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background Image Watermark */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/lovable-uploads/7101e465-4679-42fd-b5c9-99434bffe996.png')"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary inline-block rounded-full px-4 py-1 border border-primary/20 mb-6 font-medium animate-on-scroll">
            About Me
          </p>
          <AnimatedText 
            text="Passionate Full Stack Developer with expertise in React JS and .NET" 
            tag="h2" 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedCard className="h-full rounded-2xl overflow-hidden animate-on-scroll">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-background p-1">
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{ 
                  backgroundImage: "url('/lovable-uploads/0fcb0ae3-c0b1-4d66-83b9-9e6847ade298.png')",
                  filter: "grayscale(20%)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          </AnimatedCard>
          
          <div className="space-y-8">
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <AnimatedText 
                text="Building scalable applications and contributing to innovative projects." 
                tag="h3" 
                className="text-2xl font-display font-semibold mb-4"
              />
              <p className="text-muted-foreground mb-6">
                I'm a passionate Full Stack Developer with extensive experience in React JS and .NET. With a strong foundation in both frontend and backend development, I enjoy creating seamless, user-friendly applications that deliver exceptional experiences.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="flex items-center gap-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H2M22 12L16 6M22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-medium">Problem Solving</h4>
              </div>
              <p className="text-muted-foreground pl-10">
                I excel at breaking down complex issues into manageable components, applying analytical thinking to find elegant solutions.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-medium">Communication & Leadership</h4>
              </div>
              <p className="text-muted-foreground pl-10">
                I have a proven track record of leading development teams and communicating complex technical concepts clearly to both technical and non-technical stakeholders.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center gap-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9L12 4L22 9L12 14L2 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11.5V16.5C6 18.1569 8.68629 19.5 12 19.5C15.3137 19.5 18 18.1569 18 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-medium">Continuous Learning</h4>
              </div>
              <p className="text-muted-foreground pl-10">
                I'm committed to staying current with the latest technologies and best practices in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
