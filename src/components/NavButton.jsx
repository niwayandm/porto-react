import React from 'react';
import { useTheme } from '../context/ThemeContext';

const NavButton = ({ section, activeSection, onSectionClick, isMobile = false }) => {
  const Icon = section.icon;
  const { themeStyles } = useTheme();

  return (
    <button
      onClick={() => onSectionClick(section.id)}
      className={`
        group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${activeSection === section.id 
          ? `${themeStyles.button} text-white shadow-lg transform scale-105` 
          : 'text-gray-300 hover:text-white hover:bg-gray-700'}
        ${isMobile ? 'w-full justify-start' : ''}
      `}
    >
      <Icon size={18} />
      <span className={isMobile ? 'block' : 'hidden lg:block'}>{section.label}</span>
      <div className={`
        absolute inset-0 bg-gradient-to-r ${themeStyles.gradient} rounded-lg opacity-0 
        group-hover:opacity-20 transition-opacity duration-300 -z-10
      `} />
    </button>
  );
};

export default NavButton;
