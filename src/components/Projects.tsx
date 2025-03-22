
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedCard from './ui/AnimatedCard';
import { AspectRatio } from './ui/aspect-ratio';

const Projects = () => {
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
  
  const projects = [
    {
      title: "Seznik Printer Application",
      description: "A mobile application designed for controlling and managing thermal printers via Bluetooth. It allows users to connect directly from their mobile devices. The app integrates with Bluetooth-enabled devices with seamless device connection, and print preview.",
      technologies: ["React Native", "Bluetooth API", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop"
    },
    {
      title: "Smart College Management System",
      description: "Contributed to the development of a streamlined system for comprehensive student data management, improving general details and facilitating department-specific data collection.",
      technologies: [".NET", "SQL", "C#", "Entity Framework"],
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3432&auto=format&fit=crop"
    },
    {
      title: "E-Commerce Platform",
      description: "Developed a responsive e-commerce website with user authentication, product catalog, shopping cart, and secure payment processing.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=3432&auto=format&fit=crop"
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent inline-block rounded-full px-4 py-1 border-shimmer mb-6 font-medium animate-on-scroll">
            Portfolio
          </p>
          <AnimatedText 
            text="Featured Projects" 
            tag="h2" 
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient"
          />
          <p className="text-muted-foreground animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            Explore a selection of my recent work showcasing my skills and experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={index}
              className="animate-on-scroll h-full"
              animateY={true}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="glass rounded-xl overflow-hidden h-full flex flex-col shadow-lg shadow-accent/5">
                <AspectRatio ratio={16/9} className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors interactive animate-on-scroll shadow-lg shadow-accent/20"
            style={{ transitionDelay: '0.6s' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27 6.52 3.92 7.75 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 18C4.49 20 4 16 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* View All Projects on GitHub */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
