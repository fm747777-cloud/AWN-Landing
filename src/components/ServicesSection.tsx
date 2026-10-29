import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Layers,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { Language, ServiceItem, SiteContent } from '../data/content';

interface ServicesSectionProps {
  lang: Language;
  content: SiteContent;
  onSelectServiceForAppointment: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  content,
  onSelectServiceForAppointment,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  const items = content.servicesSection.items;
  const activeService = items[selectedIndex] || items[0];

  const getIcon = (iconKey: ServiceItem['iconKey']) => {
    switch (iconKey) {
      case 'compliance':
        return ShieldCheck;
      case 'setup':
        return Building2;
      case 'consulting':
        return Compass;
      case 'employees':
        return UserCheck;
      case 'hr':
        return Briefcase;
      case 'other':
      default:
        return Layers;
    }
  };

  const ActiveIcon = getIcon(activeService.iconKey);

  // Resolve official platform objects for the active service
  const relatedPlatforms = activeService.platformIds
    .map((id) => content.platforms.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="services"
      className="bg-[#F8FAFA] py-16 lg:py-24 border-b border-[#E9E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
            {content.servicesSection.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
            {content.servicesSection.titleStart}{' '}
            <span className="text-[#087F87] underline decoration-[#D5B76A] decoration-2 underline-offset-8">
              {content.servicesSection.titleHighlight}
            </span>{' '}
            {content.servicesSection.titleEnd}
          </h2>
          <p className="text-base text-[#24545A]/80 mt-4 leading-relaxed">
            {content.servicesSection.subtitle}
          </p>
        </div>

        {/* Interactive Split Showcase: Editorial Index + Active Service Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Column 1 (5 Cols): Interactive Editorial Service Index */}
          <div
            role="tablist"
            aria-label={content.servicesSection.kicker}
            className="lg:col-span-5 divide-y divide-[#E9E5DC] border-y border-[#E9E5DC]"
          >
            {items.map((service, idx) => {
              const IconComponent = getIcon(service.iconKey);
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={service.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-start py-4.5 px-4 flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                    isSelected
                      ? 'bg-[#E8F2F1] text-[#24545A]'
                      : 'bg-transparent text-[#24545A]/80 hover:bg-[#E8F2F1]/50 hover:text-[#24545A]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold tabular-nums shrink-0 ${
                        isSelected ? 'text-[#087F87]' : 'text-[#24545A]/45'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#087F87] text-[#F8FAFA]'
                          : 'bg-[#E8F2F1] text-[#087F87]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-base font-bold truncate">
                      {service.title}
                    </span>
                  </div>

                  <DirectionalArrow
                    className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                      isSelected
                        ? 'text-[#087F87] translate-x-0.5 rtl:-translate-x-0.5'
                        : 'text-[#24545A]/30'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Column 2 (7 Cols): Active Service Architectural Stage */}
          <div
            role="tabpanel"
            className="lg:col-span-7 bg-white border border-[#E9E5DC] rounded-xl p-6 sm:p-9 lg:p-10 shadow-xs"
          >
            {/* Stage Top Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E9E5DC]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#087F87] mb-2">
                  <span>0{selectedIndex + 1} / 0{items.length}</span>
                  <span aria-hidden="true">·</span>
                  <span>{content.servicesSection.kicker}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-snug">
                  {activeService.title}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                <ActiveIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </div>

            {/* Service Narrative */}
            <p className="text-base sm:text-[17px] text-[#24545A]/85 leading-relaxed my-6">
              {activeService.shortDesc}
            </p>

            {/* Scope & Deliverables (Clean 2x2 Hairline Layout — Not Nested Boxes) */}
            <div className="pt-6 border-t border-[#E9E5DC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#24545A]/65 mb-4">
                {content.servicesSection.modalScopeTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {activeService.scopePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-[#24545A]/90 leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#087F87] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Official Government Logos for This Service */}
            <div className="mt-8 pt-6 border-t border-[#E9E5DC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#24545A]/65 mb-3.5">
                {content.servicesSection.modalPlatformsTitle}
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {relatedPlatforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={platform.name}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-[#F8FAFA] hover:bg-[#E8F2F1] border border-[#E9E5DC] rounded-lg transition-colors"
                  >
                    <img
                      src={platform.logoSrc}
                      alt={platform.name}
                      className="h-6 max-w-[72px] w-auto object-contain"
                    />
                    <span className="text-xs font-semibold text-[#24545A]">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Service Action */}
            <div className="mt-8 pt-6 border-t border-[#E9E5DC] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#24545A]/70">
                {isRtl
                  ? 'إشراف مباشر من مدير حساب متخصص لمنشأتك'
                  : 'Managed by a dedicated account specialist for your establishment'}
              </span>

              <button
                type="button"
                onClick={() =>
                  onSelectServiceForAppointment(activeService.title)
                }
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
              >
                <span>{content.servicesSection.modalSelectCta}</span>
                <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
