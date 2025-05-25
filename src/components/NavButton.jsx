import React from 'react';

const NavButton = ({ section, activeSection, onSectionClick, isMobile = false }) => {
  const Icon = section.icon;
  
  return (
    <button
      onClick={() => onSectionClick(section.id)}
      className={`
        group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${activeSection === section.id 
          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }
        ${isMobile ? 'w-full justify-start' : ''}
      `}
    >
      <Icon size={18} />
      <span className={isMobile ? 'block' : 'hidden lg:block'}>{section.label}</span>
      <div className={`
        absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 
        group-hover:opacity-20 transition-opacity duration-300 -z-10
      `} />
    </button>
  );
};

export default NavButton;
