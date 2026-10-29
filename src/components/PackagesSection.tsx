import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface PackagesSectionProps {
  lang: Language;
  content: SiteContent;
  onSelectPackage: (packageTitle: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  lang,
  content,
  onSelectPackage,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="packages"
      className="bg-[#F8FAFA] py-16 lg:py-24 border-b border-[#E9E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {content.packagesSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
              {content.packagesSection.title}
            </h2>
            <p className="text-base text-[#24545A]/80 mt-3 leading-relaxed">
              {content.packagesSection.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onSelectPackage(
                isRtl ? 'استفسار عام / أخرى' : 'General Inquiry / Other'
              )
            }
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#087F87] hover:text-[#24545A] underline underline-offset-8 decoration-[#D5B76A] transition-colors cursor-pointer shrink-0"
          >
            <span>{content.packagesSection.viewAllLabel}</span>
            <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* 3 Architectural Service Tracks with Compact 2-Column Feature Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {content.packagesSection.plans.map((plan, index) => {
            const isFeatured = Boolean(plan.featured);
            return (
              <div
                key={plan.id}
                className={`rounded-xl p-7 sm:p-8 flex flex-col justify-between h-full transition-colors border-t-4 ${
                  isFeatured
                    ? 'bg-[#24545A] text-[#F8FAFA] border-t-[#D5B76A] border-x border-b border-[#24545A]'
                    : 'bg-white text-[#24545A] border-t-[#087F87] border-x border-b border-[#E9E5DC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-mono font-bold tabular-nums ${
                        isFeatured ? 'text-[#D5B76A]' : 'text-[#087F87]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isFeatured ? 'text-[#D5B76A]' : 'text-[#24545A]/60'
                      }`}
                    >
                      {isRtl ? 'مسار مخصص للمنشآت' : 'Dedicated Enterprise Track'}
                    </span>
                  </div>

                  <div className="pb-6 mb-6 border-b border-current/10">
                    <h3
                      className={`text-xl font-bold leading-snug mb-2 ${
                        isFeatured ? 'text-[#F8FAFA]' : 'text-[#24545A]'
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isFeatured ? 'text-[#E8F2F1]/85' : 'text-[#24545A]/75'
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Scannable 2-Column Capability Matrix */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs sm:text-[13px] leading-snug"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#D5B76A]' : 'text-[#087F87]'
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={
                            isFeatured ? 'text-[#F8FAFA]/95' : 'text-[#24545A]/90'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(plan.title)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isFeatured
                        ? 'bg-[#D5B76A] text-[#24545A] hover:bg-[#E9E5DC] focus-visible:outline-[#D5B76A]'
                        : 'bg-[#087F87] text-[#F8FAFA] hover:bg-[#24545A] focus-visible:outline-[#087F87]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
