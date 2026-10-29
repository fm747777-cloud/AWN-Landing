import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BellRing,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  HelpCircle,
  Landmark,
  MapPin,
  Receipt,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface GovernmentRelationsPageProps {
  lang: Language;
  content: SiteContent;
  onNavigateHome: () => void;
  onNavigateToPricing: () => void;
  onNavigateToContact: () => void;
}

export const GovernmentRelationsPage: React.FC<GovernmentRelationsPageProps> = ({
  lang,
  content,
  onNavigateHome,
  onNavigateToPricing,
  onNavigateToContact,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('gov-faq-1');
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const page = content.governmentRelationPage;

  const getServiceIcon = (
    iconKey: SiteContent['governmentRelationPage']['servicesList'][number]['iconKey']
  ) => {
    switch (iconKey) {
      case 'mc':
        return Landmark;
      case 'chamber':
        return Award;
      case 'misa':
        return TrendingUp;
      case 'balady':
        return Building2;
      case 'zatca':
        return Receipt;
      case 'civil-defense':
        return ShieldAlert;
      case 'spl':
      default:
        return MapPin;
    }
  };

  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'valid-licenses':
        return FileCheck2;
      case 'continuous-compliance':
        return CheckCircle2;
      case 'protect-interests':
        return ShieldCheck;
      case 'regulatory-updates':
      default:
        return BellRing;
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#F8FAFA] text-[#24545A]">
      {/* Section A: Government Relations Hero Section (Only Permitted Image in Hero) */}
      <section className="relative bg-[#E8F2F1]/75 border-b border-[#E9E5DC] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#24545A]/75 mb-8"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#087F87] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87] rounded-xs"
            >
              {page.breadcrumbHome}
            </button>
            <span aria-hidden="true" className="text-[#24545A]/40">
              /
            </span>
            <span className="text-[#24545A]/75">{page.breadcrumbServices}</span>
            <span aria-hidden="true" className="text-[#24545A]/40">
              /
            </span>
            <span className="text-[#087F87] font-semibold" aria-current="page">
              {page.pageTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Primary Hero Content (6 Columns) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#087F87] text-[#F8FAFA] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D5B76A]" aria-hidden="true" />
                <span>{page.introTab}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24545A] leading-tight">
                {page.pageTitle}
              </h1>

              <p className="text-base sm:text-lg text-[#24545A]/85 leading-relaxed">
                {page.whyAwn.paragraph1}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onNavigateToPricing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <Wallet className="w-4 h-4" aria-hidden="true" />
                  <span>{page.joinCard.ctaLabel}</span>
                </button>

                <button
                  type="button"
                  onClick={onNavigateToContact}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-white hover:bg-[#F8FAFA] border border-[#087F87]/30 hover:border-[#087F87] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.supportCard.supportingText}</span>
                  <DirectionalArrow className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Government Relations Hero Visual Asset (Transparent Alpha Blended Seamlessly into Background) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-xl lg:max-w-none select-none">
                <img
                  src={page.heroImageSrc}
                  alt={page.heroImageAlt}
                  width={1046}
                  height={666}
                  className="w-full h-auto object-contain block pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: The 7 Government Entities/Services, Why AWN, and Join/Support Cards */}
      <section className="py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Section B: الخدمات (The 7 Government Relation Entities — Pure Cards & Vector Icons, No Images) */}
          <div>
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#087F87]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#087F87]">
                  {page.introTab}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A]">
                {page.servicesHeading}
              </h2>
              <p className="text-base text-[#24545A]/80 mt-3 leading-relaxed">
                {page.servicesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {page.servicesList.map((service) => {
                const IconComponent = getServiceIcon(service.iconKey);
                return (
                  <div
                    key={service.id}
                    className="group bg-white hover:bg-[#E8F2F1]/45 border border-[#E9E5DC] hover:border-[#087F87]/45 rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all duration-150 shadow-2xs motion-safe:hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors duration-150">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#087F87]/85 bg-[#F8FAFA] border border-[#E9E5DC] px-2.5 py-1 rounded-md tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#24545A] group-hover:text-[#087F87] leading-snug transition-colors">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section C & D Combined Layout: Why AWN + Join & Support CTA Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Section D: لماذا عون لخدمات الالتزام بالمتطلبات الحكومية (7 Columns) */}
            <div className="lg:col-span-7 bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xs space-y-6">
              <div className="space-y-2 border-b border-[#E9E5DC] pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087F87]">
                  {page.introTab}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-snug">
                  {page.whyAwn.heading}
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-[17px] text-[#24545A]/90 leading-relaxed">
                <p>{page.whyAwn.paragraph1}</p>

                {/* Highlighted Reference Statement */}
                <div className="bg-[#24545A] text-[#F8FAFA] rounded-xl p-5 border-s-4 border-[#D5B76A]">
                  <div className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full bg-[#D5B76A] shrink-0 mt-2.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm sm:text-base font-medium text-[#D5B76A] leading-relaxed">
                      {page.whyAwn.highlightBullet}
                    </p>
                  </div>
                </div>

                <p>{page.whyAwn.paragraph2}</p>
              </div>
            </div>

            {/* Section C: الانضمام والتسعير + المساعدة والموعد المجاني (5 Columns — No Images) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Card: انضم إلينا / التسعير */}
              <div className="bg-[#E8F2F1] border border-[#087F87]/25 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#24545A]">
                      {page.joinCard.heading}
                    </h2>
                    <p className="text-base font-medium text-[#24545A]/85 leading-relaxed">
                      {page.joinCard.supportingText}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#087F87] text-[#F8FAFA] flex items-center justify-center shrink-0">
                    <Wallet className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onNavigateToPricing}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-xl transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                  >
                    <span>{page.joinCard.ctaLabel}</span>
                    <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Companion Reference Card: هل لديك أي سؤال؟ / احصل على موعد عمل مجاني */}
              <div className="bg-[#24545A] text-[#F8FAFA] rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D5B76A]">
                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{page.supportCard.kicker}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFA]">
                    {page.supportCard.headingStart}{' '}
                    <span className="text-[#D5B76A]">
                      {page.supportCard.headingHighlight}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#E8F2F1]/90">
                    {page.supportCard.supportingText}
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-[#D5B76A] hover:bg-[#E9E5DC] rounded-xl transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B76A]"
                  >
                    <span>{page.supportCard.ctaLabel}</span>
                    <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section E: كيف تفيدك خدمة خبراء عون ؟ — مؤشرات النجاح (4 Reference Indicators — No Images) */}
      <section className="bg-[#E8F2F1] py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <Scale className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#087F87] tracking-wide">
                {page.expertBenefits.subheading}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
              {page.expertBenefits.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {page.expertBenefits.points.map((point, idx) => {
              const BenefitIcon = getBenefitIcon(point.id);
              return (
                <div
                  key={point.id}
                  className="group h-full bg-[#F8FAFA] hover:bg-white border border-[#E9E5DC] hover:border-[#087F87]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-2xs hover:shadow-md hover:shadow-[#24545A]/6 motion-safe:hover:-translate-y-1 transition-all duration-200 motion-reduce:transition-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] border border-[#087F87]/15 flex items-center justify-center shrink-0 transition-colors duration-200">
                      <BenefitIcon className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
                    </div>
                    <span
                      className="text-xs font-mono font-bold text-[#D5B76A] bg-[#E8F2F1]/70 group-hover:bg-[#087F87]/10 group-hover:text-[#087F87] px-2.5 py-1 rounded-md shrink-0 tabular-nums transition-colors duration-200"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#24545A] group-hover:text-[#087F87] leading-snug transition-colors duration-200">
                    {point.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section F: الأسئلة الشائعة (The 3 Reference FAQ Items — Accessible Accordion) */}
      <section className="bg-[#F8FAFA] py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.faq.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A]">
              {page.faq.heading}
            </h2>
          </div>

          <div className="space-y-3.5">
            {page.faq.items.map((item, idx) => {
              const isOpen = openFaqId === item.id;
              const headingId = `gov-faq-heading-${item.id}`;
              const panelId = `gov-faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`border rounded-xl transition-colors duration-150 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#087F87] shadow-xs'
                      : 'bg-white border-[#E9E5DC] hover:border-[#087F87]/40'
                  }`}
                >
                  <h3 id={headingId}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(item.id)}
                      className="w-full text-start px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#087F87]"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#087F87] text-[#F8FAFA]'
                              : 'bg-[#E8F2F1] text-[#087F87]'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span
                          className={`text-base sm:text-lg font-bold leading-snug ${
                            isOpen ? 'text-[#087F87]' : 'text-[#24545A]'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#087F87]' : 'text-[#24545A]/60'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    hidden={!isOpen}
                    className={
                      isOpen
                        ? 'px-5 sm:px-6 pb-5 pt-1 border-t border-[#E9E5DC]/60'
                        : 'hidden'
                    }
                  >
                    <div className="ps-10.5 space-y-2 text-sm sm:text-base text-[#24545A]/85 leading-relaxed">
                      {item.answer.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
