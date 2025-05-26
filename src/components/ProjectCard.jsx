import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, index, isVisible }) => {
  const { theme } = useTheme();

  return (
    <div className={`
      group bg-gray-800 rounded-xl overflow-hidden border 
      ${theme === 'synthwave' ? 'border-pink-700 hover:border-pink-400' : 'border-gray-700 hover:border-blue-500'}
      transition-all duration-500 hover:scale-105 hover:shadow-2xl
      transform delay-${index * 100}
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
    `}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400?text=Image+Not+Available";
          }}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 transition-colors ${theme === 'synthwave' ? 'text-pink-400 group-hover:text-pink-300' : 'text-blue-400 group-hover:text-blue-300'}`}>
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 text-sm rounded-full border 
                ${theme === 'synthwave'
                  ? 'bg-pink-600/20 text-pink-300 border-pink-500/30'
                  : 'bg-blue-600/20 text-blue-400 border-blue-600/30'}
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
