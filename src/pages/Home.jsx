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
    let w, h, animationId;

    const setCanvasSize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let gridOffset = 0;
    let time = 0;

    // Draw the sun
    const drawSun = () => {
      const sunX = w / 2;
      const sunY = h * 0.25;
      const sunRadius = Math.min(w, h) * 0.08;

      // Create gradient for sun
      const gradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
      gradient.addColorStop(0.5, '#ee4c7c');
      gradient.addColorStop(1, '#c200fb');

      // Draw sun circle
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw horizontal lines through sun
      ctx.strokeStyle = '#0d0221';
      ctx.lineWidth = 3;
      const lineSpacing = sunRadius / 4;
      for (let i = -3; i <= 3; i++) {
        const y = sunY + (i * lineSpacing);
        const lineWidth = Math.sqrt(sunRadius * sunRadius - (i * lineSpacing) * (i * lineSpacing)) * 2;
        ctx.beginPath();
        ctx.moveTo(sunX - lineWidth / 2, y);
        ctx.lineTo(sunX + lineWidth / 2, y);
        ctx.stroke();
      }
    };

    // Draw 3D perspective grid
    const gridSpacing = 100;
    const draw3DGrid = () => {
      const horizonY = h * 0.65;
      const vanishingPointX = w / 2;
      const vanishingPointY = horizonY;

      const fov = 300; // focal length for perspective

      const gridDepth = 2000; // how far grid extends into z space
      const numLines = Math.floor(gridDepth / gridSpacing);

      const referenceHeight = 1080;
      const baseSpeed = 1.5;
      const speed = baseSpeed * (h / referenceHeight);
      gridOffset += speed;
      if (gridOffset > gridSpacing) {
        gridOffset -= gridSpacing;
      }

      // Draw horizontal lines in perspective
      for (let i = 1; i < numLines; i++) {
        const z = i * gridSpacing - gridOffset;
        if (z <= 0) continue;

        const scale = fov / z;

        const y = vanishingPointY + scale * 275; // ground offset below horizon

        ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw vertical lines in perspective
      const referenceWidth = 1920;
      const baseNumVertical = 65; // tuned for 1920 width
      const numVertical = Math.round(baseNumVertical * (w / referenceWidth));

      for (let i = -numVertical; i <= numVertical; i++) {
        const xWorld = i * gridSpacing;

        const p0 = project3D(xWorld, gridSpacing - gridOffset, fov, vanishingPointX, vanishingPointY);
        const p1 = project3D(xWorld, gridDepth, fov, vanishingPointX, vanishingPointY);

        if (!p0 || !p1) continue;

        if (
          (p0.x < 0 && p1.x < 0) ||
          (p0.x > w && p1.x > w)
        ) {
          continue;
        }

        ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
    };

    function project3D(x, z, fov, cx, cy) {
      if (z <= 0) return null;
      const scale = fov / z;
      return {
        x: cx + x * scale,
        y: cy + scale * 300,
      };
    }

    let lastTime = performance.now();
    const draw = (now = performance.now()) => {
      const deltaTime = (now - lastTime) / 1000; // seconds
      lastTime = now;

      ctx.fillStyle = '#0d0221';
      ctx.fillRect(0, 0, w, h);

      const bgGradient = ctx.createLinearGradient(0, 0, 0, h);
      bgGradient.addColorStop(0, '#0d0221');
      bgGradient.addColorStop(0.5, '#1a0033');
      bgGradient.addColorStop(1, '#0d0221');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      drawSun();
      // drawMountains();

      // slower speed
      const speed = 2; // units per second
      gridOffset += speed * deltaTime;
      if (gridOffset > gridSpacing) gridOffset -= gridSpacing;

      draw3DGrid();

      animationId = requestAnimationFrame(draw);
    };


    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [themeStyles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {themeStyles.id === 'synthwave' ? (
        <canvas
          id="synthwave-canvas"
          className="absolute inset-0 w-full h-full z-0"
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