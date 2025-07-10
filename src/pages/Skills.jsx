import React, { useState } from 'react';
import { skillsCategories } from '../data/data';
import { useTheme } from '../context/ThemeContext';

const categoryTitles = {
  languages: { label: 'Programming Languages', icon: '💻' },
  tools: { label: 'Tools & Frameworks', icon: '🛠️' },
  machineLearning: { label: 'Machine Learning & AI', icon: '🤖' },
};

const Skills = ({ isVisible }) => {
  const { themeStyles, theme } = useTheme();

  const categories = Object.keys(skillsCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);

  const activeSkills = skillsCategories[activeTab];

  const activeBgColor =
    theme === 'synthwave' ? 'bg-pink-500' : 'bg-blue-500';
  const borderColor =
    theme === 'synthwave' ? 'hover:border-pink-500' : 'hover:border-blue-500';
  const hoverTextColor =
    theme === 'synthwave' ? 'hover:text-pink-400' : 'hover:text-blue-400';

  return (
    <section id="skills" className="min-h-screen flex items-center py-16">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        <div
          className={`
            transform transition-all duration-1000
            ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent`}
          >
            Skills & Expertise
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((categoryKey) => {
              const { label, icon } = categoryTitles[categoryKey] || {
                label: categoryKey,
                icon: '',
              };

              return (
                <button
                  key={categoryKey}
                  onClick={() => setActiveTab(categoryKey)}
                  className={`
                    px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300
                    ${activeTab === categoryKey
                      ? `${activeBgColor} text-white border-transparent`
                      : `bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700`
                    }
                  `}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </button>
              );
            })}
          </div>

          {
            activeTab === 'machineLearning' ? (
              <>
                {/* Tools grid */}
                <h3 className="text-lg font-bold text-gray-300 mb-4">
                  Tools & Libraries
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                  {skillsCategories.machineLearning.tools.map((skill, index) => (
                    <div
                      key={skill.skill}
                      className={`
                        bg-gray-800 p-6 rounded-xl border border-gray-700
                        flex flex-col items-center justify-center text-center
                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                        ${borderColor}
                        ${hoverTextColor}
                        ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                      `}
                      style={{
                        transitionDelay: '50ms',
                      }}
                    >
                      {skill.devicon ? (
                        <i className={`${skill.devicon} text-5xl md:text-6xl`}></i>
                      ) : skill.customIcon ? (
                        typeof skill.customIcon === 'string' ? (
                          <img
                            src={skill.customIcon}
                            alt={skill.skill}
                            className="w-12 h-12 md:w-16 md:h-16 object-contain"
                          />
                        ) : (
                          <skill.customIcon className="w-12 h-12 md:w-16 md:h-16" />
                        )
                      ) : (
                        <span className="text-5xl md:text-6xl">🔧</span>
                      )}
                      <span className="mt-3 text-gray-300 text-sm font-medium">
                        {skill.skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Techniques badges */}
                <h3 className="text-lg font-bold text-gray-300 mb-4">
                  Techniques
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsCategories.machineLearning.techniques.map((skill, index) => (
                    <span
                      key={skill.skill}
                      className={`
                        bg-gray-800 px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm font-medium
                        transition-transform duration-300 hover:scale-105 hover:shadow
                        ${borderColor}
                        ${hoverTextColor}
                        ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                      `}
                      style={{
                        transitionDelay: '50ms',
                      }}
                    >
                      {skill.skill}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {activeSkills.map((skill, index) => (
                  <div
                    key={skill.skill}
                    className={`
                      bg-gray-800 p-6 rounded-xl border border-gray-700
                      flex flex-col items-center justify-center text-center
                      transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                      ${borderColor}
                      ${hoverTextColor}
                      ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}
                    style={{
                      transitionDelay: '50ms',
                    }}
                  >
                    {skill.devicon ? (
                      <i className={`${skill.devicon} text-5xl md:text-6xl`}></i>
                    ) : skill.customIcon ? (
                      <img
                        src={skill.customIcon}
                        alt={skill.skill}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    ) : skill.customIconComponent ? (
                      <skill.customIconComponent className="w-12 h-12 md:w-16 md:h-16" />
                    ) : (
                      <span className="text-5xl md:text-6xl">🔧</span>
                    )}
                    <span className="mt-3 text-gray-300 text-sm font-medium">
                      {skill.skill}
                    </span>
                  </div>
                ))}
              </div>
            )
          }

        </div>
      </div>
    </section>
  );
};

export default Skills;
