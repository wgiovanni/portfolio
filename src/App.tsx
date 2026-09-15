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
import { ParticleBackground } from './components/ParticleBackground';
import { useLanguage } from './context/LanguageContext';

const SITE_URL = 'https://www.wgiovanni.com';

function MainApp() {
  const [activeSection, setActiveSection] = useState('home');
  const { language } = useLanguage();

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}/`;
    const seoContent = language === 'es'
      ? {
          title: 'Wilkel Giovanni | Ingeniero Full Stack y Backend',
          description: 'Portfolio de Wilkel Giovanni, ingeniero Full Stack y Backend especializado en Python, FastAPI, PHP, React, Node.js, AWS y sistemas fintech escalables.',
          ogDescription: 'Ingeniero Full Stack y Backend especializado en sistemas fintech, APIs de microservicios, datos en la nube y arquitecturas escalables.'
        }
      : {
          title: 'Wilkel Giovanni | Full Stack & Backend Engineer',
          description: 'Portfolio of Wilkel Giovanni, a Full Stack and Backend Engineer specializing in Python, FastAPI, PHP, React, Node.js, AWS, and scalable fintech systems.',
          ogDescription: 'Full Stack and Backend Engineer specializing in fintech systems, microservices APIs, cloud data, and scalable architectures.'
        };
    document.documentElement.lang = language;
    document.title = seoContent.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', seoContent.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seoContent.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seoContent.ogDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', seoContent.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seoContent.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.querySelector<HTMLScriptElement>('script[data-seo="person"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.seo = 'person';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Wilkel Giovanni',
      url: canonicalUrl,
      jobTitle: 'Full Stack & Backend Engineer',
      description: 'Full Stack and Backend Engineer specialized in scalable fintech systems, microservices APIs, cloud data pipelines, and enterprise platforms.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Valencia',
        addressCountry: 'VE'
      },
      sameAs: [
        'https://github.com/wgiovanni',
        'https://linkedin.com/in/wgiovanni',
        'https://instagram.com/wgiovanni95'
      ],
      knowsAbout: [
        'Python',
        'FastAPI',
        'PHP',
        'Laravel',
        'Symfony',
        'React',
        'Node.js',
        'AWS',
        'Docker',
        'Data Engineering'
      ]
    });
  }, [language]);

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
    <div className="min-h-screen flex flex-col bg-transparent text-[#e5e2e1] font-inter selection:bg-[#4cd7f6]/30 selection:text-[#4cd7f6]">
      <ParticleBackground />

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
