import React from 'react';
import { getExperiences, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const experiences = getExperiences(language);

  return (
    <section id="experience" className="py-20 border-t border-[#3d494c]/30 relative bg-[#131313]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#e5e2e1] flex items-center gap-3">
            <Briefcase className="text-[#4cd7f6]" size={28} />
            <span>{t.expTitle}</span>
          </h2>
          <p className="font-inter text-sm text-[#bcc9cd] mt-2">
            {t.expSub}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#3d494c] ml-3 md:ml-0 space-y-12 pb-4">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                  idx === 0
                    ? 'bg-[#4cd7f6] glow-effect'
                    : 'bg-[#3d494c]'
                }`}
              />

              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-2">
                <h3 className="font-geist text-xl font-bold text-[#e5e2e1]">
                  {exp.role}
                </h3>
                <span
                  className={`font-mono-code text-xs px-2.5 py-1 rounded w-fit ${
                    idx === 0
                      ? 'text-[#4cd7f6] bg-[#4cd7f6]/10 font-semibold border border-[#4cd7f6]/30'
                      : 'text-[#bcc9cd] bg-[#201f1f]'
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Company & Location */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h4 className="font-inter text-sm md:text-base font-semibold text-[#4cd7f6]">
                  {exp.company}
                </h4>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 font-mono-code text-xs text-[#869397] bg-[#1c1b1b] px-2 py-0.5 rounded border border-[#3d494c]/30">
                    <MapPin size={11} className="text-[#4cd7f6]" />
                    <span>{exp.location}</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="font-inter text-sm text-[#bcc9cd] leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2 font-inter text-xs md:text-sm text-[#bcc9cd] mb-4">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 size={16} className={`${idx === 0 ? 'text-[#4cd7f6]' : 'text-[#869397]'} shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded border border-[#3d494c] bg-[#1c1b1b] font-mono-code text-[11px] text-[#c8c6c5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
