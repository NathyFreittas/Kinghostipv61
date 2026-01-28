import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página inicial, navega primeiro
    if (window.location.pathname !== '/') {
      navigate('/');
      // Aguarda a navegação antes de rolar
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleClientAreaClick = () => {
    navigate('/area-cliente');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 bg-[rgba(255,255,255,0.95)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-semibold text-[rgb(255,140,0)] hover:opacity-80 transition-opacity"
            >
              IPv6 Tecnologia
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-[rgb(54,65,83)] hover:text-orange-400 transition-colors bg-[rgba(255,140,0,0)]">
              Home
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-[rgb(54,65,83)] hover:text-orange-400 transition-colors bg-[rgba(255,140,0,0)]">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-[rgb(54,65,83)] hover:text-orange-400 transition-colors bg-[rgba(255,140,0,0)]">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-[rgb(54,65,83)] hover:text-orange-400 transition-colors bg-[rgba(255,140,0,0)]">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[rgb(54,65,83)] hover:text-orange-400 transition-colors bg-[rgba(255,140,0,0)]">
              Contato
            </button>
            <a 
              href="https://wa.me/5544998137557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-[15px] py-[10px] bg-orange-400 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Fale com um especialista
            </a>
            <button 
              onClick={handleClientAreaClick}
              className="px-[20px] py-[10px] bg-orange-400 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Área do Cliente
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2">
                Contato
              </button>
              <a 
                href="https://wa.me/5544998137557" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-orange-400 text-white rounded-lg hover:bg-gray-600 transition-colors text-center mt-2"
              >
                Fale com um especialista
              </a>
               <button 
                onClick={handleClientAreaClick}
                className="px-4 py-2.5 bg-orange-400 text-white rounded-lg hover:bg-gray-600 transition-colors text-center mt-2"
              >
                Área do Cliente
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}