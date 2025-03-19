
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import AnimatedSkillBar from './ui/AnimatedSkillBar';
import AnimatedCard from './ui/AnimatedCard';

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
  
  // Technical Skills
  const techSkills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: ".NET", percentage: 80 },
    { name: "Java", percentage: 75 },
    { name: "CSS", percentage: 85 },
    { name: "SQL", percentage: 75 }
  ];
  
  // Soft Skills
  const softSkills = [
    { name: "Problem Solving", percentage: 95 },
    { name: "Communication", percentage: 90 },
    { name: "Leadership", percentage: 80 },
    { name: "Teamwork", percentage: 85 }
  ];
  
  // Marquee skills
  const marqueeSkills = [
    "React", "JavaScript", "TypeScript", "Node.js", "Redux", "HTML", "CSS", 
    "Tailwind CSS", "SQL", ".NET", "Java", "GitHub", "REST API", "React Native"
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
        
        {/* Marquee skills */}
        <div className="mb-20 overflow-hidden animate-on-scroll">
          <div className="marquee py-6 bg-background/50 backdrop-blur-sm border-y border-primary/10">
            <div className="marquee-content">
              {marqueeSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block mx-8 text-xl font-medium text-primary/80"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {marqueeSkills.map((skill, index) => (
                <span 
                  key={`dup-${index}`} 
                  className="inline-block mx-8 text-xl font-medium text-primary/80"
                >
                  {skill}
                </span>
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
        
        {/* Programming Languages */}
        <div className="mt-20 animate-on-scroll" style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-xl font-bold mb-8 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {["JavaScript", "TypeScript", "C#", "Java", "HTML/CSS"].map((lang, index) => (
              <AnimatedCard 
                key={lang} 
                className="aspect-square"
                glareOnHover={true}
              >
                <div className="glass h-full rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  </div>
                  <span className="font-medium">{lang}</span>
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
