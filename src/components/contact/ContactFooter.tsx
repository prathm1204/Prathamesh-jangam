
import React from 'react';

const ContactFooter = () => {
  return (
    <footer className="mt-20 pt-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prathamesh Chandrashekhar Jangam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
