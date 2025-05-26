import React, { createContext, useContext, useState } from 'react';

export const themes = {
  default: {
    id: 'default',
    label: 'Ocean',
    gradient: 'from-blue-400 to-purple-400',
    text: 'text-white',
    button: 'bg-gradient-to-r from-blue-600 to-purple-600',
    svg: ['#3b82f6', '#8b5cf6'],
    showDots: true
  },
  synthwave: {
    id: 'synthwave',
    label: 'Synthwave',
    gradient: 'from-pink-600 to-purple-600',
    text: 'text-pink-400',
    button: 'bg-gradient-to-r from-pink-600 to-purple-600',
    svg: ['#db2777', '#9333ea'],
    showDots: false
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
