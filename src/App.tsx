import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function MainApp() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e5e2e1] font-inter selection:bg-[#4cd7f6]/30 selection:text-[#4cd7f6]">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
      <SpeedInsights />
      <Analytics />
    </LanguageProvider>
  );
}
