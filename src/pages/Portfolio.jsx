import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';

const Portfolio = ({ isVisible }) => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_PROJECTS_COUNT = 4; // Show 4 projects initially
  
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Scroll to the top of the portfolio section
    document.getElementById('portfolio').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
      <section id="portfolio" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          transform transition-all duration-1000
          ${isVisible.portfolio ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
            {displayedProjects.map((project, index) => (
              <div 
                key={index}
                className={`
                  transform transition-all duration-500 ease-in-out
                  ${index >= INITIAL_PROJECTS_COUNT && showAll 
                    ? 'animate-fade-in-up' 
                    : ''
                  }
                `}
                style={{
                  animationDelay: showAll && index >= INITIAL_PROJECTS_COUNT 
                    ? `${(index - INITIAL_PROJECTS_COUNT) * 100}ms` 
                    : '0ms'
                }}
              >
                <ProjectCard 
                  project={project}
                  index={index}
                  isVisible={isVisible.portfolio}
                />
              </div>
            ))}
          </div>

          {/* Show More/Show Less Button */}
          {hasMoreProjects && (
            <div className="text-center mt-12">
              {!showAll ? (
                <button
                  onClick={handleShowMore}
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative">
                    Show More Projects
                  </span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full hover:from-gray-600 hover:to-gray-700 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative">
                    Show Less
                  </span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;