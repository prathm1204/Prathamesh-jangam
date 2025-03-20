
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedCard from './ui/AnimatedCard';

const Experience = () => {
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
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "GeniaTEQ",
      companyUrl: "https://geniateq.com/",
      period: "March 2024 - Present",
      description: [
        "A mobile application designed for controlling and managing thermal printers via Bluetooth.",
        "The app integrates with Bluetooth-enabled devices.",
        "Designed the frontend of the Bluetooth connection, and print preview."
      ]
    },
    {
      title: "Intern",
      company: "GeniaTEQ",
      companyUrl: "https://geniateq.com/",
      period: "October 2023 - February 2024",
      description: [
        "Contributed to the development of mobile applications.",
        "Learned and implemented frontend design principles.",
        "Collaborated with senior developers on Bluetooth connectivity solutions."
      ]
    },
    {
      title: "Sernik Printer Application",
      company: "Full Stack Developer",
      period: "Sept 2022 - Oct 2023",
      description: [
        "A mobile application designed for controlling and managing thermal printers via Bluetooth.",
        "The app integrates with Bluetooth-enabled devices.",
        "Designed the frontend of the Bluetooth connection, and print preview."
      ]
    },
    {
      title: "Dut Net Intern",
      company: "Academic Internships - Pune",
      period: "Feb 2024 - July 2024",
      description: [
        "Contributed to the development of a streamlined system for comprehensive student data management.",
        "Improved general details and facilitating department-specific data collection.",
        "Collaborated with stakeholders to meet system requirements.",
        "Ensured data integrity, security, and system efficiency."
      ]
    },
    {
      title: "Master of Computer Application (MCA)",
      company: "Savitribai Phule Pune University",
      period: "CGPA: 8.46",
      description: [
        "Coursework focuses on advanced computer applications, programming, software development.",
        "Developed strong foundation in algorithms, data structures, and problem-solving techniques."
      ]
    }
  ];
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary inline-block rounded-full px-4 py-1 border border-primary/20 mb-6 font-medium animate-on-scroll">
            My Journey
          </p>
          <AnimatedText 
            text="Professional Experience & Education" 
            tag="h2" 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          />
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative md:grid md:grid-cols-2 gap-8 items-center animate-on-scroll ${index % 2 !== 0 ? 'md:rtl' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 top-6 hidden md:block" />
                
                <div className={`${index % 2 !== 0 ? 'md:text-right md:ltr' : ''}`}>
                  <span className="text-primary inline-block text-sm font-medium mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg text-muted-foreground mb-4 hover:text-primary transition-colors inline-block"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
                  )}
                </div>
                
                <AnimatedCard 
                  className={`glass p-6 rounded-lg ${index % 2 !== 0 ? 'md:ltr' : ''}`}
                  glareOnHover={true}
                  tiltAmount={3}
                >
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-primary/30 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
