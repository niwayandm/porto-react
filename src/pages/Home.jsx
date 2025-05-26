import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const floatingDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  size: `${Math.random() * 30 + 10}px`,
  delay: `${Math.random() * 500}ms`,
  duration: `${Math.random() * 12 + 6}s`,
  bg: Math.random() > 0.5 ? 'from-purple-400 to-blue-400' : 'from-blue-500 to-purple-500',
}));

const Home = ({ isVisible, scrollToSection }) => {
  const { themeStyles } = useTheme();

  useEffect(() => {
    if (!themeStyles || themeStyles.id !== 'synthwave') return;

    const canvas = document.getElementById('synthwave-canvas');
    const ctx = canvas.getContext('2d');
    let w, h;
    const setCanvasSize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const lines = [];
    const spacing = 50;
    for (let i = -50; i < 50; i++) {
      lines.push({ x: i * spacing, y: 0 });
    }

    let offset = 0;

    const draw = () => {
      ctx.fillStyle = '#0d0221';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#ff00cc';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let i = 0; i < lines.length; i++) {
        let { x } = lines[i];
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, h);
      }
      for (let i = 0; i < h / spacing; i++) {
        ctx.moveTo(0, i * spacing);
        ctx.lineTo(w, i * spacing);
      }
      ctx.stroke();

      offset += 0.5;
      if (offset > spacing) offset = 0;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [themeStyles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {themeStyles.id === 'synthwave' ? (
        <canvas
          id="synthwave-canvas"
          className="absolute inset-0 w-full h-full z-0 mix-blend-screen opacity-30"
        />
      ) : null}

      {themeStyles.showDots && floatingDots.map(dot => (
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
          <h1 className={`text-5xl md:text-7xl font-bold leading-tight pb-1 mb-6 bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent animate-pulse`}>
            Ni Wayan Devina
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer crafting experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`group px-8 py-3 ${themeStyles.button} rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border rounded-lg font-semibold transition-all duration-300 hover:scale-105
                ${themeStyles.id === 'synthwave' 
                  ? 'border-pink-600 hover:border-pink-400 hover:text-pink-400' 
                  : 'border-gray-600 hover:border-blue-400 hover:text-blue-400'}
              `}              
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Home;
