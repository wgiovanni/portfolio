import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Play, Copy, Check, RefreshCw, FileCode, MapPin } from 'lucide-react';
import { PERSONAL_INFO, UI_TRANSLATIONS, getTerminalTabs } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const [activeTabId, setActiveTabId] = useState('dev_env');
  const [tabs, setTabs] = useState(() => getTerminalTabs(language));
  const [activeTabContent, setActiveTabContent] = useState(() => getTerminalTabs(language)[0].content);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Update tabs when language changes
  useEffect(() => {
    const updatedTabs = getTerminalTabs(language);
    setTabs(updatedTabs);
    const active = updatedTabs.find((tab) => tab.id === activeTabId) || updatedTabs[0];
    setActiveTabContent(active.content);
    setOutput(null);
  }, [language]);

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    const found = tabs.find((t) => t.id === tabId);
    if (found) {
      setActiveTabContent(found.content);
      setOutput(null);
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (activeTabId === 'dev_env') {
        setOutput(
          language === 'es'
            ? '=> "Procesando datos financieros a gran escala y construyendo microservicios."\n=> Estado: Ejecutado exitosamente (1ms)\n=> Stack: FastAPI, Python, React.js, Node.js, AWS, Docker, PHP'
            : '=> "Processing large-scale financial data & building enterprise microservices."\n=> Status: Executed successfully (1ms)\n=> Stack: FastAPI, Python, React.js, Node.js, AWS, Docker, PHP'
        );
      } else if (activeTabId === 'skills') {
        setOutput(
          language === 'es'
            ? '=> Payload JSON verificado.\n=> Desarrollador: Wilkel Giovanni (Associate Engineer - Backend @ BITA GmbH)'
            : '=> JSON payload verified.\n=> Developer: Wilkel Giovanni (Associate Engineer - Backend @ BITA GmbH)'
        );
      } else {
        setOutput(
          language === 'es'
            ? '=> Wilkel Giovanni CLI status: Activo y Disponible\n=> Ubicación: Valencia, Venezuela'
            : '=> Wilkel Giovanni CLI status: Active & Available\n=> Location: Valencia, Venezuela'
        );
      }
    }, 400);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTabContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetCode = () => {
    const defaultTabs = getTerminalTabs(language);
    const original = defaultTabs.find((tab) => tab.id === activeTabId);
    if (original) {
      setActiveTabContent(original.content);
      setOutput(null);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 min-h-[85vh] flex items-center justify-center">
      {/* Background Dot Pattern Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4cd7f6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Typography & CTA */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#1c1b1b] border border-[#3d494c]/40 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] glow-effect animate-pulse" />
              <span className="font-mono-code text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
                {PERSONAL_INFO.status[language]}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#bcc9cd]">
              <MapPin size={13} className="text-[#4cd7f6]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#e5e2e1] leading-[1.15] tracking-tight">
            Wilkel <span className="text-[#4cd7f6]">Giovanni</span>
            <br />
            <span className="text-2xl sm:text-3xl font-semibold text-[#bcc9cd]">
              {PERSONAL_INFO.title[language]}
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="font-inter text-base md:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed">
            {PERSONAL_INFO.bio[language]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-[#4cd7f6] text-[#003640] px-6 py-3 rounded font-inter text-base font-semibold glow-effect transition-all flex items-center gap-2 group hover:bg-[#4cd7f6]/90 active:scale-95 cursor-pointer"
            >
              <span>{t.viewProjects}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="border border-[#3d494c] text-[#4cd7f6] px-6 py-3 rounded font-inter text-base font-semibold hover:bg-[#2a2a2a] transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{t.contactDetails}</span>
              <Mail size={18} />
            </button>
          </div>

          {/* Main Tech Stack Badges */}
          <div className="mt-2 flex flex-wrap gap-2 text-[#bcc9cd]">
            {['FastAPI', 'Python', 'Docker', 'React.js', 'Node.js', 'AWS', 'PHP', 'Laravel', 'Symfony', 'SQL'].map((tech) => (
              <span
                key={tech}
                className="font-mono-code text-xs bg-[#1c1b1b] text-[#e5e2e1] px-3.5 py-1.5 rounded border border-[#3d494c]/50 hover:border-[#4cd7f6]/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Terminal IDE Window */}
        <div className="col-span-1 lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-[#4cd7f6]/10 blur-2xl rounded-2xl pointer-events-none" />

          <div className="bg-[#1c1b1b] rounded-lg border border-[#3d494c] shadow-2xl overflow-hidden relative z-10 flex flex-col">
            {/* Terminal Top Window Bar */}
            <div className="bg-[#201f1f] h-10 flex items-center justify-between px-3 border-b border-[#3d494c]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                <div className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
              </div>

              {/* File Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-2.5 py-1 rounded text-xs font-mono-code flex items-center gap-1 transition-colors cursor-pointer ${
                      activeTabId === tab.id
                        ? 'bg-[#1c1b1b] text-[#4cd7f6] font-medium border border-[#3d494c]/60'
                        : 'text-[#869397] hover:text-[#e5e2e1]'
                    }`}
                  >
                    <FileCode size={12} />
                    <span>{tab.filename}</span>
                  </button>
                ))}
              </div>

              {/* Action utilities */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-[#869397] hover:text-[#4cd7f6] rounded hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  title={t.copyCode}
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
                <button
                  onClick={handleResetCode}
                  className="p-1 text-[#869397] hover:text-[#4cd7f6] rounded hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  title={t.resetCode}
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>

            {/* Code Text Editor Container */}
            <div className="p-5 font-mono-code text-xs md:text-sm text-[#bcc9cd] overflow-x-auto leading-relaxed bg-[#1c1b1b] min-h-[220px]">
              <textarea
                value={activeTabContent}
                onChange={(e) => {
                  setActiveTabContent(e.target.value);
                  setTabs((prev) =>
                    prev.map((t) => (t.id === activeTabId ? { ...t, content: e.target.value } : t))
                  );
                }}
                className="w-full h-[210px] bg-transparent text-[#e5e2e1] focus:outline-none resize-none font-mono-code selection:bg-[#4cd7f6]/30"
                spellCheck={false}
              />
            </div>

            {/* Terminal Output Footer */}
            <div className="bg-[#131313] border-t border-[#3d494c] p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#4cd7f6]" />
                  <span className="font-mono-code text-xs text-[#869397]">
                    {t.consoleHeader} ({activeTab.filename})
                  </span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 bg-[#4cd7f6] text-[#003640] px-3 py-1 rounded text-xs font-mono-code font-semibold hover:bg-[#4cd7f6]/90 disabled:opacity-50 cursor-pointer active:scale-95 transition-all"
                >
                  {isRunning ? (
                    <RefreshCw size={12} className="animate-spin" />
                  ) : (
                    <Play size={12} className="fill-current" />
                  )}
                  <span>{isRunning ? t.executingBtn : t.executeBtn}</span>
                </button>
              </div>

              {/* Output Display */}
              {output && (
                <div className="bg-[#0e0e0e] border border-[#3d494c]/60 rounded p-2.5 font-mono-code text-xs text-[#4cd7f6] whitespace-pre-wrap animate-in fade-in duration-200">
                  {output}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
