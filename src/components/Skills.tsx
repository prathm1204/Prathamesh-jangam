
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedSkillBar from './ui/AnimatedSkillBar';
import AnimatedCard from './ui/AnimatedCard';
import TechLogo from './ui/TechLogo';
import { Database, Code, CpuIcon, Server, TerminalSquare } from 'lucide-react';

const Skills = () => {
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
  
  // Technical Skills with icons
  const techSkills = [
    { name: "React.js", percentage: 90, icon: <Code size={18} /> },
    { name: "JavaScript", percentage: 85, icon: <Code size={18} /> },
    { name: ".NET", percentage: 80, icon: <Server size={18} /> },
    { name: "Java", percentage: 75, icon: <TerminalSquare size={18} /> },
    { name: "CSS", percentage: 85, icon: <Code size={18} /> },
    { name: "SQL", percentage: 75, icon: <Database size={18} /> }
  ];
  
  // Soft Skills
  const softSkills = [
    { name: "Problem Solving", percentage: 95 },
    { name: "Communication", percentage: 90 },
    { name: "Leadership", percentage: 80 },
    { name: "Teamwork", percentage: 85 }
  ];
  
  // Marquee skills with tech variants
  const marqueeSkills = [
    { name: "React", variant: "code" },
    { name: "JavaScript", variant: "code" },
    { name: "TypeScript", variant: "code" },
    { name: "Node.js", variant: "circuit" },
    { name: "Redux", variant: "cpu" },
    { name: "HTML", variant: "code" },
    { name: "CSS", variant: "code" },
    { name: "Tailwind CSS", variant: "code" },
    { name: "SQL", variant: "circuit" },
    { name: ".NET", variant: "cpu" },
    { name: "Java", variant: "circuit" },
    { name: "GitHub", variant: "code" },
    { name: "REST API", variant: "circuit" },
    { name: "React Native", variant: "code" }
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary inline-block rounded-full px-4 py-1 border border-primary/20 mb-6 font-medium animate-on-scroll">
            My Skills
          </p>
          <AnimatedText 
            text="Technologies & Competencies" 
            tag="h2" 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          />
        </div>
        
        {/* Marquee skills with logos */}
        <div className="mb-20 overflow-hidden animate-on-scroll">
          <div className="marquee py-6 bg-background/50 backdrop-blur-sm border-y border-primary/10">
            <div className="marquee-content">
              {marqueeSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center mx-8 gap-2"
                >
                  <TechLogo variant={skill.variant as 'circuit' | 'code' | 'cpu'} size={18} animated={false} />
                  <span className="text-xl font-medium text-primary/80">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {marqueeSkills.map((skill, index) => (
                <div 
                  key={`dup-${index}`} 
                  className="inline-flex items-center mx-8 gap-2"
                >
                  <TechLogo variant={skill.variant as 'circuit' | 'code' | 'cpu'} size={18} animated={false} />
                  <span className="text-xl font-medium text-primary/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <AnimatedCard className="animate-on-scroll" animateY={true} style={{ transitionDelay: '0.2s' }}>
            <div className="glass p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {techSkills.map((skill, index) => (
                  <AnimatedSkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </AnimatedCard>
          
          {/* Soft Skills */}
          <AnimatedCard className="animate-on-scroll" animateY={true} style={{ transitionDelay: '0.4s' }}>
            <div className="glass p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-8">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <AnimatedSkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index}
                  />
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
        
        {/* Programming Languages with TechLogo */}
        <div className="mt-20 animate-on-scroll" style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-xl font-bold mb-8 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "JavaScript", variant: "code" },
              { name: "TypeScript", variant: "code" },
              { name: "C#", variant: "cpu" },
              { name: "Java", variant: "circuit" },
              { name: "HTML/CSS", variant: "code" }
            ].map((lang, index) => (
              <AnimatedCard 
                key={lang.name} 
                className="aspect-square"
                glareOnHover={true}
              >
                <div className="glass h-full rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <TechLogo 
                      variant={lang.variant as 'circuit' | 'code' | 'cpu'} 
                      size={28} 
                      animated={true}
                      className="animate-pulse-slow"
                    />
                  </div>
                  <span className="font-medium">{lang.name}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
