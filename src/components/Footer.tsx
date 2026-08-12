import React from 'react';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="w-full py-10 bg-[#1c1b1b] border-t border-[#3d494c]/20 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Tagline */}
        <div className="font-mono-code text-xs text-[#869397]">
          © {new Date().getFullYear()} {PERSONAL_INFO.name} — {t.copyright}
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap items-center gap-6 font-inter text-sm text-[#4cd7f6]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
          >
            Instagram
          </a>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#bcc9cd] hover:text-[#25D366] transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
          >
            {t.navContact}
          </button>
        </div>
      </div>
    </footer>
  );
};
