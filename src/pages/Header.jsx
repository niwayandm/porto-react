import { Menu, X } from 'lucide-react';
import NavButton from '../components/NavButton';
import { sections } from '../data/data';
import Logo from '../assets/logo.svg';

const Header = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo only */}
          <div
            className="group w-10 h-10 cursor-pointer relative"
            onClick={handleLogoClick}
          >
            {/* Logo container with hover effect */}
            <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-110">
              <img src={Logo} alt="Logo" className="w-full h-full" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {sections.map((section) => (
              <NavButton 
                key={section.id} 
                section={section} 
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            ))}
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
        ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
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
        </div>
      </div>
    </nav>
  );
};

export default Header;


