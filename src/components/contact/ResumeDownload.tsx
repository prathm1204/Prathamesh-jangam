
import React from 'react';

const ResumeDownload = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-xl shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-white">Download Resume</h3>
      <p className="text-gray-300 mb-6">
        Get a copy of my resume for more details about my experience and skills.
      </p>
      <a 
       href="/resume.pdf" 
        download="Prathamesh.Jangam Full Stack Developer.pdf"
        className="inline-flex items-center gap-2 bg-accent/20 text-accent hover:text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/40 transition-colors interactive"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Download CV
      </a>
    </div>
  );
};

export default ResumeDownload;
