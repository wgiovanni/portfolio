import React, { useState } from 'react';
import { getProjects, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { CheckCircle2, BarChart2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const projects = getProjects(language);

  return (
    <section id="projects" className="py-20 border-t border-[#3d494c]/30 relative bg-[#131313]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3d494c] bg-[#1c1b1b] font-mono-code text-xs text-[#4cd7f6] mb-3 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] glow-effect animate-pulse" />
            <span>{t.projectsTag}</span>
          </div>
          <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4">
            {t.projectsTitle}
          </h2>
          <p className="text-[#bcc9cd] font-inter text-base max-w-2xl leading-relaxed">
            {t.projectsSub}
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[#1c1b1b] border border-[#353534] rounded-xl overflow-hidden glow-effect transition-all duration-300 flex flex-col group relative"
            >
              <div className="p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="font-geist text-2xl font-bold text-[#e5e2e1] group-hover:text-[#4cd7f6] transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#353534]/50 border border-[#3d494c]/30 rounded text-xs font-mono-code text-[#4cd7f6] shrink-0 font-medium">
                    {project.badge}
                  </span>
                </div>

                <p className="text-[#bcc9cd] font-inter text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.architectureHighlights && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono-code uppercase tracking-widest text-[#4cd7f6] mb-3 font-semibold">
                      {t.keyHighlights}
                    </h4>
                    <ul className="text-xs font-inter text-[#bcc9cd] space-y-2">
                      {project.architectureHighlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-[#4cd7f6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#2a2a2a] text-[#e5e2e1] font-mono-code text-xs rounded border border-[#3d494c]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full border border-[#4cd7f6] text-[#4cd7f6] px-6 py-3 rounded font-inter font-bold text-sm hover:bg-[#4cd7f6] hover:text-[#003640] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.detailsBtn}</span>
                    <BarChart2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
