
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedCard from './ui/AnimatedCard';
import TechBackground from './ui/TechBackground';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import ResumeDownload from './contact/ResumeDownload';
import ContactFooter from './contact/ContactFooter';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Dark stylish background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 to-slate-900/90 -z-10"></div>
      <TechBackground className="opacity-30" color="var(--accent)" density={20} speed={0.5} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-accent/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-accent/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent inline-block rounded-full px-4 py-1 border border-accent/30 mb-6 font-medium animate-on-scroll">
            Get in Touch
          </p>
          <AnimatedText 
            text="Let's Work Together" 
            tag="h2" 
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
          />
          <p className="text-gray-300 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedCard className="animate-on-scroll" animateY={true} style={{ transitionDelay: '0.3s' }}>
            <ContactForm />
          </AnimatedCard>
          
          <div className="space-y-8">
            <AnimatedCard className="animate-on-scroll" animateY={true} style={{ transitionDelay: '0.4s' }}>
              <ContactInfo />
            </AnimatedCard>
            
            <AnimatedCard className="animate-on-scroll" animateY={true} style={{ transitionDelay: '0.5s' }}>
              <ResumeDownload />
            </AnimatedCard>
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </section>
  );
};

export default Contact;
