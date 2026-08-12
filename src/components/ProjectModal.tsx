import React from 'react';
import { Project } from '../types';
import { X, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#1c1b1b] border border-[#3d494c] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative text-[#e5e2e1]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#869397] hover:text-[#4cd7f6] bg-[#201f1f] rounded-lg border border-[#3d494c]/50 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono-code text-xs bg-[#201f1f] text-[#4cd7f6] px-3 py-1 rounded border border-[#4cd7f6]/40 uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          {project.badge && (
            <span className="font-mono-code text-xs text-[#c8c6c5] bg-[#201f1f] px-2.5 py-1 rounded border border-[#3d494c]/40">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-geist text-2xl md:text-3xl font-bold text-[#e5e2e1] mb-2">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="font-inter text-sm text-[#4cd7f6] font-medium mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 bg-[#131313] p-4 rounded-lg border border-[#3d494c]/50">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono-code text-[11px] text-[#869397]">{m.label}</span>
                <span className="font-geist text-base md:text-lg font-bold text-[#e5e2e1]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4 mb-6">
          <h4 className="font-mono-code text-xs text-[#869397] uppercase tracking-wider font-semibold">
            {t.overview}
          </h4>
          <p className="font-inter text-sm text-[#bcc9cd] leading-relaxed">
            {project.description}
          </p>

          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <>
              <h4 className="font-mono-code text-xs text-[#869397] uppercase tracking-wider font-semibold pt-2">
                {t.architectureHighlights}
              </h4>
              <ul className="space-y-2">
                {project.architectureHighlights.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-inter text-[#bcc9cd]">
                    <CheckCircle size={15} className="text-[#4cd7f6] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-mono-code text-xs text-[#869397] uppercase tracking-wider font-semibold mb-2">
            {t.techUsed}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-code text-xs bg-[#201f1f] text-[#e5e2e1] px-3 py-1 rounded border border-[#3d494c]/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#3d494c]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#4cd7f6] text-[#003640] font-inter text-sm font-semibold hover:bg-[#4cd7f6]/90 transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
