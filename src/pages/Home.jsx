import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const Home = ({ isVisible, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      {/* Animated Gradient Layer */}
      {/* <div className="absolute inset-0 animated-bg opacity-30" /> */}
      
      {/* Floating Dots */}
      {floatingDots.map(dot => (
        <div
          key={dot.id}
          className={`absolute rounded-full animate-float pointer-events-none z-0 bg-gradient-to-br ${dot.bg}`}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
            opacity: 0.4,
            filter: 'blur(2px)',
          }}
        />
      ))}


      <div className="text-center z-10 px-4">
        <div className={`
          transform transition-all duration-1000 delay-300
          ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Ni Wayan Devina
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer crafting experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

const floatingDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  size: `${Math.random() * 30 + 10}px`,
  delay: `${Math.random() * 3}s`,
  duration: `${Math.random() * 12 + 6}s`,
  bg: Math.random() > 0.5 ? 'from-purple-400 to-blue-400' : 'from-blue-500 to-purple-500',
}));



export default Home;
