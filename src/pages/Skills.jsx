import React from 'react';
import { skillsCategories } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const Skills = ({ isVisible }) => {
  const { themeStyles, theme } = useTheme();

  return (
    <section id="skills" className="min-h-screen flex items-center py-16">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        <div className={`
          transform transition-all duration-1000
          ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent`}>
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Left Column - Programming Languages */}
            <div className={`
              md:col-span-7 transform transition-all duration-1000 delay-200
              ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">💻</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Programming Languages
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skillsCategories.languages.map((skill, index) => (
                  <div key={skill.skill} className={`
                    bg-gray-800 px-3 py-3 rounded-xl border border-gray-700 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
                    ${theme === 'synthwave' ? 'hover:border-pink-500' : 'hover:border-blue-500'}
                    ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `} style={{
                      transitionDelay: '0ms'
                    }}>
                    <h4 className={`font-semibold mb-2 text-sm ${theme === 'synthwave' ? 'text-pink-400' : 'text-blue-400'}`}>
                      {skill.skill}
                    </h4>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1500 ease-out ${theme === 'synthwave' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}
                        style={{
                          width: isVisible.skills ? skill.level : '0%',
                          transitionDelay: `${500 + (index * 100)}ms`
                        }}
                      />
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-400 font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Tools & Machine Learning */}
            <div className={`
              md:col-span-5 transform transition-all duration-1000 delay-400
              ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}>
              {/* Tools & Frameworks */}
              <div className="mb-8">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">🛠️</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Tools & Frameworks
                    </h3>
                  </div>
                </div>

                <div className={`bg-gray-800 p-4 rounded-xl border border-gray-700 transition-all duration-300 ${theme === 'synthwave' ? 'hover:border-pink-500' : 'hover:border-blue-500'}`}>
                  <ul className="space-y-2">
                    {skillsCategories.tools.map((skill, index) => (
                      <li key={skill.skill} className={`
                        flex items-center justify-between transition-colors duration-200
                        transform ${isVisible.skills ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                        ${theme === 'synthwave' ? 'text-gray-300 hover:text-pink-400' : 'text-gray-300 hover:text-blue-400'}
                      `} style={{
                          transitionDelay: `${600 + (index * 100)}ms`
                        }}>
                        <span className="font-medium">{skill.skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Machine Learning & AI */}
              <div>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">🤖</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Machine Learning & AI
                    </h3>
                  </div>
                </div>

                <div className={`bg-gray-800 p-4 rounded-xl border border-gray-700 transition-all duration-300 ${theme === 'synthwave' ? 'hover:border-pink-500' : 'hover:border-blue-500'}`}>
                  <ul className="space-y-2">
                    {skillsCategories.machineLearning.map((skill, index) => (
                      <li key={skill.skill} className={`
                        flex items-center justify-between transition-colors duration-200
                        transform ${isVisible.skills ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                        ${theme === 'synthwave' ? 'text-gray-300 hover:text-pink-400' : 'text-gray-300 hover:text-blue-400'}
                      `} style={{
                          transitionDelay: `${800 + (index * 100)}ms`
                        }}>
                        <span className="font-medium">{skill.skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
