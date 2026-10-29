import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface AboutSectionProps {
  lang: Language;
  content: SiteContent;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  content,
  onContactClick,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="about"
      className="bg-[#E8F2F1] py-16 lg:py-24 border-b border-[#E9E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Column 1 (7 Cols): Value Narrative & Open Hairline Pillars */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {content.aboutSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight mb-6">
              {content.aboutSection.title}
            </h2>

            <p className="text-base sm:text-[17px] text-[#24545A]/85 leading-relaxed mb-4">
              {content.aboutSection.description}
            </p>
            <p className="text-base text-[#24545A]/80 leading-relaxed mb-8">
              {content.aboutSection.secondaryDescription}
            </p>

            {/* Unboxed Highlights Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pb-8 border-b border-[#24545A]/15">
              {content.aboutSection.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-[#087F87] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-[15px] font-bold text-[#24545A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Open Hairline-Divided Value Pillars (No Nested Card Clutter) */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {content.aboutSection.pillars.map((pillar, idx) => {
                const Icon = idx === 0 ? ShieldCheck : Handshake;
                return (
                  <div key={pillar.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F8FAFA] text-[#087F87] border border-[#E9E5DC] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#24545A] mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#24545A]/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2 (5 Cols): Architectural Deep-Teal Emblem & Compliance Ledger */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#24545A] text-[#F8FAFA] rounded-2xl p-7 sm:p-9 overflow-hidden">
              {/* Official AWN White Geometric Emblem Accent */}
              <img
                src="/assets/official/awn-emblem.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-10 end-4 h-64 w-auto object-contain opacity-12"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#F8FAFA]/15">
                  <div>
                    <p className="text-xs font-semibold text-[#D5B76A] tracking-wide mb-1">
                      {isRtl
                        ? 'عون لخدمات الأعمال · الرياض'
                        : 'AWN Business Services · Riyadh'}
                    </p>
                    <h3 className="text-xl font-bold text-[#F8FAFA]">
                      {content.aboutSection.visualCardTitle}
                    </h3>
                  </div>
                  <img
                    src="/assets/official/awn-emblem.png"
                    alt="AWN Emblem"
                    className="h-12 w-auto object-contain shrink-0"
                  />
                </div>

                <p className="text-sm text-[#E8F2F1]/85 mt-4 mb-6">
                  {content.aboutSection.visualCardSubtitle}
                </p>

                {/* Open Hairline Governance Rows */}
                <dl className="divide-y divide-[#F8FAFA]/12 border-y border-[#F8FAFA]/12">
                  {content.aboutSection.visualCheckpoints.map((cp, index) => (
                    <div
                      key={cp.label}
                      className="py-3.5 flex items-center justify-between gap-4"
                    >
                      <dt className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-mono font-bold text-[#D5B76A] tabular-nums">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-medium text-[#F8FAFA] truncate">
                          {cp.label}
                        </span>
                      </dt>
                      <dd className="text-xs font-semibold text-[#D5B76A] shrink-0">
                        {cp.status}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#E8F2F1]/75">
                    {isRtl
                      ? 'أحد منتجات منصة نقاط للخدمات الإدارية'
                      : 'A product of DOTS Administrative Services'}
                  </span>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D5B76A] hover:text-[#F8FAFA] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{content.aboutSection.ctaLabel}</span>
                    <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Readiness Callout Strip */}
        <div className="bg-[#F8FAFA] border border-[#E9E5DC] rounded-xl p-7 sm:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#24545A] leading-snug mb-2">
              {content.aboutSection.bannerTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
              {content.aboutSection.bannerText}
            </p>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{content.aboutSection.bannerCta}</span>
            <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
