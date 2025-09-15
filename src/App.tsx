import React from 'react';
import { Menu, X} from 'lucide-react';
import Home from "./Content/Home.tsx";
import Skills from './Content/Skills.tsx';
import Projects from './Content/Projects.tsx';
import Certificates from './Content/Certificates.tsx';
import Contact from './Content/Contact.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700/50">
        <nav className="container mx-auto px-8 lg:px-16 xl:px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
              MyPortofolio.
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 mt-4">
                {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Home Section */}
      <Home />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Certificates Section */}
      <Certificates />
      
      {/* Contact Section - Placeholder */}
      <Contact />

    </div>
  );
}

export default App;