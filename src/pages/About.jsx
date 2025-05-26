import React from 'react';
import { useTheme } from '../context/ThemeContext';

const profileImg = '/img/profile-img.png';

const About = ({ isVisible }) => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2022;
  const { themeStyles, theme } = useTheme();

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className={`
          transform transition-all duration-1000
          ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Profile Image */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className={`
                relative group transform transition-all duration-1000 delay-200
                ${isVisible.about ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
              `}>
                {/* Background outline that shifts on hover */}
                <div className={`absolute inset-0 ${theme === 'synthwave'
                  ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500'
                  : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'}
                  rounded-3xl transform rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 opacity-20`}></div>

                {/* Secondary background for depth */}
                <div className={`absolute inset-0 ${theme === 'synthwave'
                  ? 'bg-gradient-to-br from-pink-600 to-purple-600'
                  : 'bg-gradient-to-br from-blue-500 to-purple-500'}
                  rounded-3xl transform -rotate-2 transition-all duration-500 group-hover:-rotate-4 group-hover:scale-102 opacity-30`}></div>

                {/* Main card container */}
                <div className="relative bg-gray-800 p-6 rounded-3xl border border-gray-700 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:border-blue-400/50">
                  <img
                    src={profileImg}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400?text=Image+Not+Available";
                    }}
                    alt="Profile"
                    className="w-72 h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Subtle inner glow */}
                  <div className={`absolute inset-6 rounded-2xl ${theme === 'synthwave'
                    ? 'bg-gradient-to-br from-pink-400/10 to-purple-400/10'
                    : 'bg-gradient-to-br from-blue-400/10 to-purple-400/10'}
                    pointer-events-none transition-opacity duration-500 group-hover:opacity-20`}></div>
                </div>

                {/* Floating accent elements */}
                {theme === 'default' ? (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 transition-all duration-500 group-hover:scale-150 group-hover:opacity-80"></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-400 rounded-full opacity-40 transition-all duration-500 group-hover:scale-125 group-hover:opacity-70"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute -top-4 -right-5 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-pink-500 opacity-80 transition-all duration-700 ease-in-out group-hover:rotate-12 group-hover:scale-125 origin-bottom" />
                    <div className="absolute -bottom-4 -left-6 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[28px] border-l-transparent border-r-transparent border-b-purple-500 opacity-70 transition-all duration-700 ease-in-out group-hover:-rotate-12 group-hover:scale-110 origin-top" />
                  </>
                )}
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-7 space-y-6">
              <div className={`
                transform transition-all duration-1000 delay-300
                ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a Full-Stack Developer and AI enthusiast with over {experienceYears} years of experience transforming
                  complex data into smart, scalable solutions. Experienced in machine learning, computer vision,
                  and web development, with impactful projects spanning real-time monitoring systems, OCR data extraction,
                  and intelligent dashboards.
                </p>
              </div>
              <div className={`
                transform transition-all duration-1000 delay-400
                ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I love turning complex problems into simple, beautiful, and intuitive solutions.
                  I also have a keen eye for detail and a commitment to continuous learning, especially in new technologies.
                  I am always exploring new ways to push the boundaries of what's possible in IT.
                </p>
              </div>
              <div className={`
                transform transition-all duration-1000 delay-400
                ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Outside of work, you can find me playing games, watching movies and anime, and reading books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
