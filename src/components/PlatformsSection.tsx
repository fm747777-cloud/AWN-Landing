import React, { useState } from 'react';
import { ExternalLink, LayoutGrid, Play } from 'lucide-react';
import { Language, PlatformPartner, SiteContent } from '../data/content';

interface PlatformsSectionProps {
  lang: Language;
  content: SiteContent;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({
  lang,
  content,
}) => {
  const [staticView, setStaticView] = useState(false);
  const isRtl = lang === 'ar';
  const ps = content.platformsSection;

  const renderPlatformItem = (platform: PlatformPartner, isDuplicate = false) => (
    <a
      key={isDuplicate ? `${platform.id}-dup` : platform.id}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={isDuplicate ? -1 : 0}
      aria-hidden={isDuplicate ? 'true' : undefined}
      aria-label={`${platform.name} - ${platform.category}`}
      className="group w-60 sm:w-64 shrink-0 bg-white border border-[#E9E5DC] hover:border-[#087F87] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
    >
      {/* Official Logo Container — Preserves Original Proportions & Colors */}
      <div className="h-16 w-full flex items-center justify-center px-3 py-1 bg-white rounded-lg mb-4">
        <img
          src={platform.logoSrc}
          alt={isDuplicate ? '' : platform.name}
          loading="lazy"
          className="max-h-12 max-w-[165px] w-auto h-auto object-contain select-none"
        />
      </div>

      {/* Accessible Platform Name & Role */}
      <div className="pt-3 border-t border-[#E9E5DC]/80 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-[#24545A] group-hover:text-[#087F87] transition-colors truncate">
            {platform.name}
          </h3>
          <p className="text-xs text-[#24545A]/70 mt-0.5 truncate">
            {platform.category}
          </p>
        </div>
        <ExternalLink
          className="w-3.5 h-3.5 text-[#24545A]/35 group-hover:text-[#087F87] transition-colors shrink-0 mt-1"
          aria-hidden="true"
        />
      </div>
    </a>
  );

  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="bg-[#E8F2F1] py-16 lg:py-20 border-b border-[#E9E5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {ps.kicker}
            </p>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-[#087F87] font-mono tabular-nums">
                {ps.headingCount}
              </span>
              <h2
                id="platforms-heading"
                className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight"
              >
                {ps.headingTitle}
              </h2>
            </div>
            <p className="text-[15px] text-[#24545A]/80 mt-3 leading-relaxed">
              {ps.supportingText}
            </p>
          </div>

          {/* Interactive Marquee / Static Grid Toggle Control */}
          <div className="flex items-center gap-4 shrink-0">
            {!staticView && (
              <span className="hidden sm:inline-block text-xs text-[#24545A]/65">
                {ps.pauseHint}
              </span>
            )}
            <button
              type="button"
              onClick={() => setStaticView((prev) => !prev)}
              aria-pressed={staticView}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#24545A] bg-[#F8FAFA] hover:bg-white border border-[#E9E5DC] hover:border-[#087F87] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87]"
            >
              {staticView ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#087F87]" aria-hidden="true" />
                  <span>{ps.marqueeToggleLabel}</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-3.5 h-3.5 text-[#087F87]" aria-hidden="true" />
                  <span>{ps.staticToggleLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Continuous Seamless Marquee OR Static Responsive Grid */}
      {!staticView ? (
        <div className="relative awn-marquee-container py-2">
          {/* Subtle Edge Fade Masks */}
          <div
            className="pointer-events-none absolute inset-y-0 start-0 w-12 sm:w-24 z-10 bg-gradient-to-e from-[#E8F2F1] to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 end-0 w-12 sm:w-24 z-10 bg-gradient-to-s from-[#E8F2F1] to-transparent"
            aria-hidden="true"
          />

          <div
            className={
              isRtl ? 'awn-marquee-track-rtl' : 'awn-marquee-track-ltr'
            }
          >
            {/* Primary Track of 10 Official Logos */}
            <div className="flex items-stretch gap-5 pe-5">
              {content.platforms.map((platform) =>
                renderPlatformItem(platform, false)
              )}
            </div>

            {/* Duplicated Track for Seamless Loop (Hidden from Screen Readers & Keyboard Tab Order) */}
            <div
              className="flex items-stretch gap-5 pe-5 awn-marquee-duplicate"
              aria-hidden="true"
            >
              {content.platforms.map((platform) =>
                renderPlatformItem(platform, true)
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {content.platforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#E9E5DC] hover:border-[#087F87] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#087F87]"
              >
                <div className="h-16 w-full flex items-center justify-center px-2 py-1 bg-white rounded-lg mb-4">
                  <img
                    src={platform.logoSrc}
                    alt={platform.name}
                    loading="lazy"
                    className="max-h-12 max-w-[155px] w-auto h-auto object-contain select-none"
                  />
                </div>
                <div className="pt-3 border-t border-[#E9E5DC]/80 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#24545A] group-hover:text-[#087F87] transition-colors truncate">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-[#24545A]/70 mt-0.5 truncate">
                      {platform.category}
                    </p>
                  </div>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-[#24545A]/35 group-hover:text-[#087F87] transition-colors shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Honest Scope Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-xs text-[#24545A]/65 text-center sm:text-start">
          {ps.disclaimerText}
        </p>
      </div>
    </section>
  );
};
