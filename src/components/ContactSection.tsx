import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Copy, Check, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactList = [
    {
      id: 'email',
      label: t.emailLabel,
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      actionText: t.sendEmail,
      color: '#4cd7f6'
    },
    {
      id: 'phone',
      label: t.phoneLabel,
      value: PERSONAL_INFO.phone,
      href: PERSONAL_INFO.whatsappUrl,
      icon: Phone,
      actionText: t.openWhatsapp,
      color: '#25D366'
    },
    {
      id: 'location',
      label: t.locationLabel,
      value: PERSONAL_INFO.location,
      href: '#',
      icon: MapPin,
      actionText: PERSONAL_INFO.location,
      color: '#ffb4ab'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/wgiovanni',
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      actionText: t.linkedinLabel,
      color: '#0a66c2'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/wgiovanni',
      href: PERSONAL_INFO.github,
      icon: Github,
      actionText: t.githubLabel,
      color: '#e5e2e1'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: 'instagram.com/wgiovanni95',
      href: PERSONAL_INFO.instagram,
      icon: Instagram,
      actionText: t.instagramLabel,
      color: '#e1306c'
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-[#3d494c]/30 relative bg-[#131313]/70 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3d494c] bg-[#1c1b1b] font-mono-code text-xs text-[#4cd7f6] mb-3 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] glow-effect animate-pulse" />
            <span>{t.contactTag}</span>
          </div>
          <h1 className="font-geist text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] mb-4 leading-tight">
            {t.contactTitle}
          </h1>
          <p className="text-[#bcc9cd] font-inter text-base max-w-2xl leading-relaxed">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Grid (2 columns on medium, 8 cols span) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactList.map((item) => {
              const IconComponent = item.icon;
              const isCopied = copiedField === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-[#1c1b1b] border border-[#353534] rounded-xl p-6 hover:border-[#4cd7f6]/50 transition-all duration-300 flex flex-col justify-between shadow-lg group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] border border-[#3d494c]/50 flex items-center justify-center text-[#4cd7f6] group-hover:scale-105 transition-transform">
                        <IconComponent size={20} style={{ color: item.color || '#4cd7f6' }} />
                      </div>
                      <div>
                        <span className="text-xs font-mono-code text-[#869397] block uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-sm font-geist font-bold text-[#e5e2e1] block mt-0.5 break-all">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    {/* Copy Button for Email and Phone */}
                    {(item.id === 'email' || item.id === 'phone') && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.id)}
                        className="p-2 text-[#869397] hover:text-[#4cd7f6] hover:bg-[#2a2a2a] rounded transition-colors cursor-pointer shrink-0"
                        title={t.copyTooltip}
                      >
                        {isCopied ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Direct Action Link */}
                  {item.href !== '#' ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="mt-4 pt-3 border-t border-[#3d494c]/30 font-mono-code text-xs text-[#4cd7f6] hover:underline flex items-center justify-between group-hover:text-[#4cd7f6] transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-[#3d494c]/30 font-mono-code text-xs text-[#bcc9cd] flex items-center justify-between">
                      <span>{item.actionText}</span>
                      <Globe size={14} className="text-[#869397]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Skills Terminal & Language Summary */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Skills JSON Card */}
            <div className="bg-[#121212] border border-[#3d494c] rounded-xl overflow-hidden flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.65),0_0_32px_rgba(76,215,246,0.16)]">
              <div className="flex items-center px-4 py-2.5 border-b border-[#3d494c] bg-[#201f1f]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                  <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                  <div className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
                </div>
                <div className="mx-auto font-mono-code text-xs text-[#bcc9cd]">wilkel_profile.json</div>
              </div>

              <div className="p-5 font-mono-code text-xs text-[#e5e2e1] leading-relaxed space-y-3">
                <div>
                  <span className="text-[#4cd7f6]">"developer"</span>: <span className="text-[#adc6ff]">"Wilkel Giovanni"</span>,
                </div>
                <div>
                  <span className="text-[#4cd7f6]">"current_role"</span>: <span className="text-[#adc6ff]">"Associate Engineer @ BITA GmbH"</span>,
                </div>
                <div>
                  <span className="text-[#4cd7f6]">"backend"</span>: [
                  <span className="text-[#a8a6a6] block ml-4">"FastAPI", "Python", "Node.js", "PHP (Laravel, Symfony)"</span>
                  ],
                </div>
                <div>
                  <span className="text-[#4cd7f6]">"frontend"</span>: [
                  <span className="text-[#a8a6a6] block ml-4">"React.js", "Vue.js", "JavaScript"</span>
                  ],
                </div>
                <div>
                  <span className="text-[#4cd7f6]">"cloud_data"</span>: [
                  <span className="text-[#a8a6a6] block ml-4">"AWS", "Docker", "Pandas", "Dask", "SQL"</span>
                  ]
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner CTA */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 p-5 rounded-xl transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-[#000] flex items-center justify-center font-bold">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="font-geist font-bold text-[#e5e2e1] text-sm block">
                    {t.waDirect}
                  </span>
                  <span className="font-mono-code text-xs text-[#bcc9cd] block">
                    +58 412 765 8802
                  </span>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
