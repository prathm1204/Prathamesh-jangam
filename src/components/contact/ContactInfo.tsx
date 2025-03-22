
import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2C10.6868 2 9.38647 2.25854 8.1731 2.76123C6.95996 3.26367 5.85742 4.00024 4.92896 4.92896C3.26367 6.59424 2 8.95262 2 12C2 16.1421 4.32251 19.8431 8 21.5388V22H16V21.5388C19.6775 19.8431 22 16.1421 22 12ZM8.5 8.5C8.5 6.843 9.843 5.5 11.5 5.5H12.5C14.157 5.5 15.5 6.843 15.5 8.5V9.5H11.5H8.5V8.5ZM10.5 15.5V18.5H8.5V15.5H10.5ZM15.5 18.5H13.5V15.5H15.5V18.5Z" fill="currentColor"/>
        </svg>
      ),
      label: "Email",
      value: "prathmeshjangam31@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 9172570509"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Location",
      value: "Pimple Gurav, Pune"
    }
  ];
  
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: <Instagram className="w-5 h-5" />
    }
  ];
  
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-xl shadow-xl">
      <h3 className="text-xl font-bold mb-8 text-white">Contact Information</h3>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-accent mt-1">{info.icon}</div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-1">{info.label}</h4>
              <p className="font-medium text-white">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10">
        <h4 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h4>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors interactive"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
