import React from 'react';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Languages } from 'lucide-react';
import profilePhoto from '../assets/images/wilkel_giovanni_photo.jpg';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="about" className="py-20 border-t border-[#3d494c]/30 relative bg-[#131313]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3d494c] bg-[#1c1b1b] font-mono-code text-xs text-[#4cd7f6] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] glow-effect animate-pulse" />
              <span>{t.aboutTag}</span>
            </div>

            <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] leading-tight">
              {t.aboutHeadline}
            </h2>

            <p className="font-inter text-base text-[#bcc9cd] leading-relaxed">
              {PERSONAL_INFO.aboutBio[language]}
            </p>

            {/* Education & Languages Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Education Box */}
              <div className="bg-[#1c1b1b] border border-[#3d494c]/50 p-4 rounded-lg flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 flex items-center justify-center text-[#4cd7f6] shrink-0 mt-0.5">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#869397] block">
                    {t.educationTitle}
                  </span>
                  <h4 className="font-geist font-bold text-sm text-[#e5e2e1] mt-0.5">
                    {t.degreeTitle}
                  </h4>
                  <p className="font-inter text-xs text-[#bcc9cd] mt-1">
                    {t.univPeriod}
                  </p>
                </div>
              </div>

              {/* Languages Box */}
              <div className="bg-[#1c1b1b] border border-[#3d494c]/50 p-4 rounded-lg flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 flex items-center justify-center text-[#4cd7f6] shrink-0 mt-0.5">
                  <Languages size={18} />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#869397] block">
                    {t.langTitle}
                  </span>
                  <div className="space-y-1 mt-1 font-inter text-xs text-[#bcc9cd]">
                    <div className="flex justify-between gap-2">
                      <span className="font-medium text-[#e5e2e1]">{t.spanishLabel}</span>
                      <span className="font-mono-code text-[#4cd7f6]">{t.spanishLevel}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="font-medium text-[#e5e2e1]">{t.englishLabel}</span>
                      <span className="font-mono-code text-[#869397]">{t.englishLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image & Code Card Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-xl border border-[#3d494c] bg-[#201f1f] overflow-hidden relative group shadow-2xl">
              <img
                src={profilePhoto}
                alt="Wilkel Giovanni - Full Stack & Backend Engineer"
                referrerPolicy="no-referrer"
                className="object-cover object-top w-full h-full opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 border border-[#4cd7f6]/20 rounded-xl pointer-events-none" />
            </div>

            {/* Code Overlay Box */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a1919] border border-[#3d494c] p-4 rounded-lg shadow-xl font-mono-code text-xs text-[#bcc9cd] whitespace-pre hidden md:block">
              <span className="text-[#4cd7f6]">const</span> wilkelGiovanni = &#123;<br />
              &nbsp;&nbsp;role: <span className="text-[#adc6ff]">'Associate Engineer - Backend'</span>,<br />
              &nbsp;&nbsp;company: <span className="text-[#adc6ff]">'BITA GmbH'</span>,<br />
              &nbsp;&nbsp;stack: [<span className="text-[#adc6ff]">'FastAPI'</span>, <span className="text-[#adc6ff]">'Python'</span>, <span className="text-[#adc6ff]">'React.js'</span>, <span className="text-[#adc6ff]">'AWS'</span>],<br />
              &nbsp;&nbsp;<span className="text-[#4cd7f6]">getExperience</span>() &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4cd7f6]">return</span> <span className="text-[#adc6ff]">'Scalable Fintech Systems'</span>;<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
