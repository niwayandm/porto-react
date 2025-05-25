import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/data';

const Contact = ({ isVisible }) => {
  const iconComponents = {
    Mail,
    Github,
    Linkedin
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`
          transform transition-all duration-1000
          ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = iconComponents[contact.icon];
              return (
                <a
                  key={index}
                  href={contact.href}
                  className={`
                    group block p-6 bg-gray-800 rounded-xl border border-gray-700 
                    hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl
                    transform delay-${index * 100}
                    ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}
                >
                  <Icon className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" size={32} />
                  <h3 className="font-semibold mb-2 text-blue-400">{contact.label}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
                </a>
              );
            })}
          </div>
          
          <button
            onClick={() => window.open('mailto:allen@example.com', '_blank')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Send Message
            <Mail className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
