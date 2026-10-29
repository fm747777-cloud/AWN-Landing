import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface HeroProps {
  lang: Language;
  content: SiteContent;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
}

interface FloatingPlatformNode {
  id: string;
  nameAr: string;
  logoSrc: string;
  leftPct: string;
  topPct: string;
  emergeX: string;
  emergeY: string;
  nodeDelay: string;
  respondDelay: string;
  floatDuration: string;
  floatDelay: string;
  hideOnMobile?: boolean;
}

const ECOSYSTEM_PLATFORMS: FloatingPlatformNode[] = [
  {
    id: 'qiwa',
    nameAr: 'قوى',
    logoSrc: '/assets/official/qiwa.png',
    leftPct: '44%',
    topPct: '13%',
    emergeX: '18px',
    emergeY: '22px',
    nodeDelay: '0.55s',
    respondDelay: '2.0s',
    floatDuration: '5.2s',
    floatDelay: '2.5s',
  },
  {
    id: 'mudad',
    nameAr: 'مدد',
    logoSrc: '/assets/official/mudad.svg',
    leftPct: '66%',
    topPct: '10%',
    emergeX: '-8px',
    emergeY: '24px',
    nodeDelay: '0.70s',
    respondDelay: '2.45s',
    floatDuration: '5.8s',
    floatDelay: '2.7s',
  },
  {
    id: 'muqeem',
    nameAr: 'مقيم',
    logoSrc: '/assets/official/muqeem.png',
    leftPct: '86%',
    topPct: '19%',
    emergeX: '-22px',
    emergeY: '18px',
    nodeDelay: '0.85s',
    respondDelay: '2.9s',
    floatDuration: '5.5s',
    floatDelay: '2.9s',
  },
  {
    id: 'gosi',
    nameAr: 'التأمينات الاجتماعية',
    logoSrc: '/assets/official/gosi.png',
    leftPct: '86%',
    topPct: '41%',
    emergeX: '-24px',
    emergeY: '4px',
    nodeDelay: '1.00s',
    respondDelay: '3.35s',
    floatDuration: '6.0s',
    floatDelay: '3.1s',
  },
  {
    id: 'mc',
    nameAr: 'وزارة التجارة',
    logoSrc: '/assets/official/mc.png',
    leftPct: '85%',
    topPct: '61%',
    emergeX: '-20px',
    emergeY: '-12px',
    nodeDelay: '1.15s',
    respondDelay: '3.8s',
    floatDuration: '5.6s',
    floatDelay: '3.3s',
    hideOnMobile: true,
  },
];

export const Hero: React.FC<HeroProps> = ({
  lang,
  content,
  onPrimaryAction,
  onSecondaryAction,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative bg-[#F8FAFA] pt-10 pb-14 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 border-b border-[#E9E5DC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Desktop/Tablet ([direction:ltr]):
            - md:order-1 (Physical LEFT): Isolated Saudi businessman image + ambient animated ecosystem around laptop
            - md:order-2 (Physical RIGHT): Arabic/English headline, description, and CTAs (with dir={content.dir})
          Mobile:
            - order-1 (TOP): Headline, description, and CTAs
            - order-2 (BOTTOM): Isolated Saudi businessman image + scaled ecosystem
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center [direction:ltr]">
          {/* Text & CTAs: TOP on Mobile (order-1), Physical RIGHT on Desktop/Tablet (md:order-2) */}
          <div
            dir={content.dir}
            className="order-1 md:order-2 md:col-span-6 lg:col-span-5 flex flex-col justify-center animate-awn-fade-up"
          >
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-4">
              {content.hero.kicker}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#24545A] leading-[1.24] tracking-tight mb-6">
              {content.hero.headlineStart ? `${content.hero.headlineStart} ` : ''}
              <span className="text-[#087F87]">
                {content.hero.headlineHighlight}
              </span>
              {content.hero.headlineEnd ? ` ${content.hero.headlineEnd}` : ''}
            </h1>

            <p className="text-base sm:text-lg text-[#24545A]/80 leading-relaxed mb-9 animate-awn-fade-up-delay-1">
              {content.hero.supportingText}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-awn-fade-up-delay-2">
              <button
                type="button"
                onClick={onPrimaryAction}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
              >
                <span>{content.hero.primaryCta}</span>
                <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onSecondaryAction}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#24545A] bg-[#E8F2F1] hover:bg-[#E9E5DC] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
              >
                <span>{content.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Quiet Unboxed Editorial Capability Summary */}
            <div className="mt-10 pt-6 border-t border-[#E9E5DC] flex flex-wrap items-center gap-y-2 gap-x-3.5 text-xs sm:text-sm font-medium text-[#24545A]/75">
              {content.hero.trustItems.map((item, idx) => (
                <React.Fragment key={item}>
                  {idx > 0 && (
                    <span className="text-[#D5B76A] font-bold" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Businessman Visual + Ambient Ecosystem Overlay: BOTTOM on Mobile (order-2), Physical LEFT on Desktop/Tablet (md:order-1) */}
          <div className="order-2 md:order-1 md:col-span-6 lg:col-span-7 flex items-center justify-center md:justify-start animate-awn-fade-up-delay-1">
            <div className="relative w-full max-w-2xl lg:max-w-none select-none">
              {/* Base Isolated Saudi Businessman Image (Unchanged) */}
              <img
                src="/assets/aistudio/businessman-isolated.png"
                alt={
                  isRtl
                    ? 'رجل أعمال سعودي يدير أعماله عبر الحاسوب المحمول والهاتف الذكي بشراكته مع عون'
                    : 'Saudi businessman managing business operations at his desk with laptop and smartphone'
                }
                width={1260}
                height={708}
                className="w-full h-auto object-contain block relative z-10 pointer-events-none"
              />

              {/* Ambient Government-Services Ecosystem Overlay (No Visible Connector Lines) */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                aria-hidden="true"
              >
                {/* Soft, Restrained Teal Glow & Expanding Ripple Around the AWN Coordination Center */}
                <div
                  style={{ left: '57.5%', top: '36.5%' }}
                  className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-radial from-[#087F87]/18 via-[#E8F2F1]/45 to-transparent blur-xl awn-hero-aura"
                />
                <div
                  style={{ left: '57.5%', top: '36.5%' }}
                  className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#087F87]/20 bg-radial from-[#087F87]/10 to-transparent awn-hero-ripple"
                />

                {/* Central Hub — Official Cleaned Transparent AWN Logo */}
                <div
                  style={{ left: '57.5%', top: '36.5%' }}
                  className="absolute awn-hero-hub"
                >
                  <div
                    className="awn-hero-float flex items-center justify-center"
                    style={
                      {
                        '--float-duration': '5.5s',
                        '--float-delay': '2.2s',
                      } as React.CSSProperties
                    }
                  >
                    <img
                      src="/assets/aistudio/awn-logo-clean.png"
                      alt="AWN - عون"
                      width={492}
                      height={252}
                      className="w-16 sm:w-20 lg:w-24 h-auto object-contain drop-shadow-[0_4px_12px_rgba(8,127,135,0.10)]"
                    />
                  </div>
                </div>

                {/* Floating Official Government Platform Cards with Subtle Sequential Highlight Response */}
                {ECOSYSTEM_PLATFORMS.map((node) => (
                  <div
                    key={node.id}
                    style={
                      {
                        left: node.leftPct,
                        top: node.topPct,
                        '--emerge-x': node.emergeX,
                        '--emerge-y': node.emergeY,
                        '--node-delay': node.nodeDelay,
                      } as React.CSSProperties
                    }
                    className={`absolute -translate-x-1/2 -translate-y-1/2 awn-hero-node ${
                      node.hideOnMobile ? 'hidden sm:block' : ''
                    }`}
                  >
                    <div
                      dir="rtl"
                      style={
                        {
                          '--float-duration': node.floatDuration,
                          '--float-delay': node.floatDelay,
                          '--respond-delay': node.respondDelay,
                        } as React.CSSProperties
                      }
                      className="awn-hero-card-surface bg-[#F8FAFA]/95 backdrop-blur-[2px] border border-[#E8F2F1] shadow-[0_6px_18px_-4px_rgba(36,84,90,0.08)] rounded-lg px-2 sm:px-2.5 py-1.5 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-colors"
                    >
                      <div className="h-4 sm:h-5 w-auto flex items-center justify-center shrink-0">
                        <img
                          src={node.logoSrc}
                          alt={node.nameAr}
                          className="max-h-4 sm:max-h-5 max-w-[46px] sm:max-w-[56px] w-auto h-auto object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#24545A]">
                        {node.nameAr}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Single Infrequent Follow-up Notification ("تم تحديث حالة الطلب") */}
                <div
                  dir="rtl"
                  style={{ left: '61%', top: '65.5%' }}
                  className="hidden sm:flex absolute awn-hero-toast bg-[#24545A] text-[#F8FAFA] border border-[#087F87]/40 shadow-[0_6px_16px_-4px_rgba(36,84,90,0.16)] rounded-lg px-2.5 py-1 items-center gap-1.5 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#D5B76A] shrink-0" />
                  <span className="text-[10px] font-medium tracking-wide">
                    تم تحديث حالة الطلب
                  </span>
                </div>

                {/* Compact Animated Service Tracking Card */}
                <div
                  dir="rtl"
                  style={{ left: '58%', top: '74.5%' }}
                  className="absolute right-2 sm:right-auto max-w-[205px] sm:max-w-[235px] w-full awn-hero-tracking"
                >
                  <div
                    style={
                      {
                        '--float-duration': '6.2s',
                        '--float-delay': '3.0s',
                        '--respond-delay': '4.25s',
                      } as React.CSSProperties
                    }
                    className="awn-hero-card-surface bg-[#F8FAFA]/95 backdrop-blur-[2px] border border-[#E8F2F1] shadow-[0_8px_22px_-6px_rgba(36,84,90,0.12)] rounded-xl p-2.5 sm:p-3"
                  >
                    {/* Card Header: "تجديد رخصة" & "قيد المتابعة" */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] sm:text-xs font-bold text-[#24545A]">
                        تجديد رخصة
                      </span>
                      <span className="text-[10px] font-semibold text-[#087F87] bg-[#E8F2F1] px-1.5 py-0.5 rounded">
                        قيد المتابعة
                      </span>
                    </div>

                    {/* Gradual Animated Progress Line */}
                    <div className="relative h-1 w-full bg-[#E8F2F1] rounded-full overflow-hidden mb-2">
                      <div className="h-full w-full bg-[#087F87] rounded-full awn-hero-progress-bar" />
                    </div>

                    {/* Three-Stage Indicator: "استلام الطلب" → "قيد المتابعة" → "مكتمل" */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] leading-none">
                      <span className="text-[#24545A]/70 font-medium">
                        استلام الطلب
                      </span>
                      <span className="text-[#087F87] font-bold underline decoration-[#D5B76A] decoration-1 underline-offset-4">
                        قيد المتابعة
                      </span>
                      <span className="text-[#24545A]/45 font-medium">
                        مكتمل
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
