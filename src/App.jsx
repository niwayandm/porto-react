import React, { useState } from 'react';
import './App.css';

// Import pages
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// Import data and hooks
import { sections } from './data/data';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible, activeSection } = useIntersectionObserver(sections);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <Home 
        isVisible={isVisible}
        scrollToSection={scrollToSection}
      />
      
      <About 
        isVisible={isVisible}
      />
      
      <Skills 
        isVisible={isVisible}
      />
      
      <Resume 
        isVisible={isVisible}
      />
      
      <Portfolio 
        isVisible={isVisible}
      />
      
      <Contact 
        isVisible={isVisible}
      />
      
      <Footer />
    </div>
  );
};

export default App;
