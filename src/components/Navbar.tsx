import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'experience', label: t.navExperience },
    { id: 'projects', label: t.navProjects },
    { id: 'contact', label: t.navContact }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#131313]/90 backdrop-blur-xl border-[#3d494c]/50 shadow-md py-3'
          : 'bg-[#131313]/80 backdrop-blur-md border-[#3d494c]/30 py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 flex justify-between items-center h-12">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-[#201f1f] border border-[#3d494c] flex items-center justify-center text-[#4cd7f6] group-hover:border-[#4cd7f6] transition-colors">
            <Code2 size={18} />
          </div>
          <span className="font-geist text-xl md:text-2xl font-bold text-[#e5e2e1] tracking-tight group-hover:text-[#4cd7f6] transition-colors">
            Wilkel <span className="text-[#4cd7f6]">Giovanni</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center font-inter text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 cursor-pointer transition-colors ${
                  isActive
                    ? 'text-[#4cd7f6] font-semibold'
                    : 'text-[#bcc9cd] hover:text-[#4cd7f6]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4cd7f6] rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button & Language Switcher & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-[#1c1b1b] border border-[#3d494c] rounded-full p-1 text-xs font-mono-code">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-[#4cd7f6] text-[#003640] font-bold shadow-sm'
                  : 'text-[#869397] hover:text-[#e5e2e1]'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#4cd7f6] text-[#003640] font-bold shadow-sm'
                  : 'text-[#869397] hover:text-[#e5e2e1]'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:flex items-center gap-2 border border-[#4cd7f6]/60 bg-[#4cd7f6]/10 text-[#4cd7f6] px-4 py-2 rounded font-inter text-sm font-semibold hover:bg-[#4cd7f6] hover:text-[#003640] active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <span>{t.navContactBtn}</span>
            <Mail size={15} />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#4cd7f6] p-2 hover:bg-[#201f1f] rounded border border-[#3d494c]/40 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c1b1b] border-b border-[#3d494c] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 font-inter text-base">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 px-3 rounded transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#201f1f] text-[#4cd7f6] font-semibold border-l-2 border-[#4cd7f6]'
                    : 'text-[#bcc9cd] hover:bg-[#201f1f] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3d494c]/40 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 font-mono-code text-xs text-[#869397]">
              <Globe size={14} className="text-[#4cd7f6]" />
              <span>{language === 'es' ? 'Idioma:' : 'Language:'}</span>
            </div>
            <div className="flex items-center bg-[#131313] border border-[#3d494c] rounded-full p-1 text-xs font-mono-code">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'es'
                    ? 'bg-[#4cd7f6] text-[#003640] font-bold'
                    : 'text-[#869397]'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#4cd7f6] text-[#003640] font-bold'
                    : 'text-[#869397]'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#4cd7f6] text-[#003640] py-2.5 rounded font-inter font-semibold hover:bg-[#4cd7f6]/90 transition-all cursor-pointer"
            >
              <span>{t.navContactBtn}</span>
              <Mail size={15} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
