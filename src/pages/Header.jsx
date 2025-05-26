import { Menu, X, Sun, Zap } from 'lucide-react';
import NavButton from '../components/NavButton';
import { sections } from '../data/data';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../context/ThemeContext';
import Logo from '../assets/Logo';

const Header = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo only */}
          <div className="group w-10 h-10 cursor-pointer relative" onClick={handleLogoClick}>
            <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-110">
              <Logo />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((section) => (
              <NavButton
                key={section.id}
                section={section}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            ))}
            <div className="flex items-center space-x-2">
              {['default', 'synthwave'].map((id) => (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className={`p-2 rounded-lg border transition-all duration-300
                    ${theme === id
                      ? id === 'default'
                        ? 'bg-blue-600 text-white border-blue-400'
                        : 'bg-pink-600 text-white border-pink-400'
                      : 'text-gray-400 border-gray-700 hover:bg-gray-800'}
                    `}
                  title={themes[id].label}
                >
                  {id === 'default' ? <Sun size={18} /> : <Zap size={18} />}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={
        `md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300 overflow-hidden
        ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-4 py-2 space-y-1">
          {sections.map((section) => (
            <NavButton
              key={section.id}
              section={section}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
              isMobile
            />
          ))}
          <div className="pt-2 flex items-center space-x-2">
            {['default', 'synthwave'].map((id) => {
              const isActive = theme === id;
              const Icon = id === 'default' ? Sun : Zap;
              const label = themes[id].label;

              return (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className={`p-2 rounded-lg border transition-all duration-300 w-full flex items-center justify-center
                    ${isActive
                      ? id === 'default'
                        ? 'bg-blue-600 text-white border-blue-400'
                        : 'bg-pink-600 text-white border-pink-400'
                      : 'text-gray-400 border-gray-700 hover:bg-gray-800'}
                    `}
                  title={label}
                >
                  <Icon size={18} className="mr-2" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;