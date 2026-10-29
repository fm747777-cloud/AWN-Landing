import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  BellRing,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FolderCheck,
  Handshake,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface AboutPageProps {
  lang: Language;
  content: SiteContent;
  onNavigateHome: () => void;
  onNavigateToServices: () => void;
  onSelectServiceRoute: (routePath: string) => void;
  onNavigateToPricing: () => void;
  onNavigateToContact: (preselectedSubject?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  lang,
  content,
  onNavigateHome,
  onNavigateToServices,
  onSelectServiceRoute,
  onNavigateToPricing,
  onNavigateToContact,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const page = content.aboutPage;

  const getValueIcon = (
    iconKey: SiteContent['aboutPage']['valuesSection']['values'][number]['iconKey']
  ) => {
    switch (iconKey) {
      case 'shield':
        return ShieldCheck;
      case 'users':
        return Users;
      case 'clock':
        return Clock;
      case 'bell':
        return BellRing;
      case 'folder':
        return FolderCheck;
      case 'value':
      default:
        return BadgePercent;
    }
  };

  const getCategoryIcon = (
    iconKey: SiteContent['servicesPage']['categoriesSection']['categories'][number]['iconKey']
  ) => {
    switch (iconKey) {
      case 'setup':
        return Building2;
      case 'employees':
        return UserCheck;
      case 'compliance':
        return ShieldCheck;
      case 'hr':
      default:
        return Briefcase;
    }
  };

  const handleRouteClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    routePath: string
  ) => {
    e.preventDefault();
    onSelectServiceRoute(routePath);
  };

  return (
    <div className="bg-[#F8FAFA] text-[#24545A]">
      {/* Section 1: About Us Hero & Architectural Governance Card (Zero Images) */}
      <section className="bg-[#E8F2F1]/70 border-b border-[#E9E5DC] py-12 lg:py-18">
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
            <span className="text-[#087F87] font-semibold" aria-current="page">
              {page.pageTitle}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Primary Hero Introduction (7 Columns) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide">
                <span>{page.introKicker}</span>
                <span aria-hidden="true" className="text-[#D5B76A]">
                  ·
                </span>
                <span className="text-[#24545A]/75">
                  {page.parentCompanyNote}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24545A] leading-tight">
                {page.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-[#24545A]/85 leading-relaxed">
                {page.heroDescription}
              </p>

              <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                {page.heroSecondaryDescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onNavigateToContact()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.primaryCta}</span>
                  <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onNavigateToServices}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-white hover:bg-[#F8FAFA] border border-[#087F87]/35 hover:border-[#087F87] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Pure CSS & Typographic Governance Ledger (5 Columns, Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-[#24545A] text-[#F8FAFA] rounded-2xl p-7 sm:p-8 shadow-sm border border-[#24545A]">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#F8FAFA]/15">
                  <div>
                    <p className="text-xs font-semibold text-[#D5B76A] tracking-wide mb-1">
                      {page.governanceLedger.kicker}
                    </p>
                    <h2 className="text-lg sm:text-xl font-bold text-[#F8FAFA]">
                      {page.governanceLedger.title}
                    </h2>
                  </div>

                  {/* Pure Typographic Monogram Badge (No Image Files) */}
                  <div className="px-3 py-2 rounded-xl bg-[#087F87] text-[#F8FAFA] border border-[#F8FAFA]/15 flex items-baseline gap-1.5 shrink-0 select-none">
                    <span className="text-base font-bold tracking-tight">
                      عون
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D5B76A]">
                      AWN
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#E8F2F1]/85 mt-4 mb-5">
                  {page.governanceLedger.subtitle}
                </p>

                <dl className="divide-y divide-[#F8FAFA]/12 border-y border-[#F8FAFA]/12">
                  {page.governanceLedger.checkpoints.map((cp, index) => (
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

                <div className="mt-6 flex items-center justify-between gap-4 text-xs text-[#E8F2F1]/80">
                  <span>{page.parentCompanyNote}</span>
                  <button
                    type="button"
                    onClick={() => onNavigateToContact()}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#D5B76A] hover:text-[#F8FAFA] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[#D5B76A] rounded-xs"
                  >
                    <span>{content.aboutSection.ctaLabel}</span>
                    <DirectionalArrow
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Story & Value Proposition ("كن دائماً متوافقاً مع المتطلبات الحكومية") */}
      <section className="py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Narrative Column (7 Columns) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide">
                {page.storySection.kicker}
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
                {page.storySection.heading}
              </h2>

              <p className="text-base sm:text-[17px] text-[#24545A]/85 leading-relaxed">
                {page.storySection.paragraph1}
              </p>

              <p className="text-base text-[#24545A]/80 leading-relaxed">
                {page.storySection.paragraph2}
              </p>

              {/* Unboxed Highlights Row */}
              <div className="pt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
                {page.storySection.highlights.map((item) => (
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
            </div>

            {/* Two Core Pillars Column (5 Columns) */}
            <div className="lg:col-span-5 space-y-5">
              {page.storySection.pillars.map((pillar) => {
                const PillarIcon =
                  pillar.id === 'confidence' ? ShieldCheck : Handshake;
                return (
                  <div
                    key={pillar.id}
                    className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-2xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                      <PillarIcon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#24545A] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision ("الرسالة والرؤية") */}
      <section className="py-16 lg:py-20 bg-[#E8F2F1]/50 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.missionVisionSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight">
              {page.missionVisionSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Card */}
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#087F87]">
                      {page.missionVisionSection.mission.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#24545A] mt-1">
                      {page.missionVisionSection.mission.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#24545A]/85 leading-relaxed mt-5">
                  {page.missionVisionSection.mission.description}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#087F87]">
                      {page.missionVisionSection.vision.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#24545A] mt-1">
                      {page.missionVisionSection.vision.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#24545A]/85 leading-relaxed mt-5">
                  {page.missionVisionSection.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Key Differentiators & Values ("ما الذي يميز شراكتك مع خبراء عون؟") */}
      <section className="py-16 lg:py-24 bg-[#F8FAFA] border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.valuesSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
              {page.valuesSection.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#24545A]/80 mt-3 leading-relaxed">
              {page.valuesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.valuesSection.values.map((val, idx) => {
              const ValueIcon = getValueIcon(val.iconKey);
              return (
                <div
                  key={val.id}
                  className="group bg-white border border-[#E9E5DC] hover:border-[#087F87]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E9E5DC]">
                      <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors duration-200">
                        <ValueIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#24545A]/45">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#24545A] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#24545A]/80 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Core Service Domains Overview (Exact 4 Categories, Zero Images) */}
      <section className="py-16 lg:py-20 bg-[#E8F2F1]/40 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
                {content.servicesPage.categoriesSection.kicker}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight">
                {content.servicesPage.categoriesSection.heading}
              </h2>
            </div>

            <button
              type="button"
              onClick={onNavigateToServices}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#087F87] hover:text-[#24545A] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[#087F87] rounded-xs"
            >
              <span>{page.secondaryCta}</span>
              <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.servicesPage.categoriesSection.categories.map((cat) => {
              const CategoryIcon = getCategoryIcon(cat.iconKey);
              return (
                <a
                  key={cat.id}
                  href={cat.routePath}
                  onClick={(e) => handleRouteClick(e, cat.routePath)}
                  className="group bg-white border border-[#E9E5DC] hover:border-[#087F87]/55 rounded-xl p-6 flex flex-col justify-between gap-5 shadow-2xs hover:shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#087F87]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors">
                        <CategoryIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#087F87]">
                        {cat.number}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#24545A] group-hover:text-[#087F87] transition-colors leading-snug mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E9E5DC] flex items-center justify-between text-xs font-semibold text-[#087F87]">
                    <span>{cat.ctaLabel}</span>
                    <DirectionalArrow
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: 5-Step Process ("كيف نعمل — ننقل عملك إلى المستوى التالي") */}
      <section className="py-16 lg:py-20 bg-[#F8FAFA] border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {content.processSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight">
              {content.processSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[#24545A]/80 mt-2.5 leading-relaxed">
              {content.processSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.processSection.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-[#E9E5DC] rounded-xl p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E9E5DC]">
                    <span className="text-sm font-mono font-bold text-[#087F87]">
                      {step.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D5B76A]" />
                  </div>
                  <h3 className="text-base font-bold text-[#24545A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24545A]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Dual CTA Banner ("انضم إلينا" & "هل تحتاج أي مساعدة؟") */}
      <section className="py-16 lg:py-20 bg-[#E8F2F1]/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Join Us / Pricing Card */}
            <div className="bg-[#24545A] text-[#F8FAFA] rounded-2xl p-7 sm:p-9 flex flex-col justify-between gap-6 shadow-sm">
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D5B76A]">
                  AWN Business Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFA]">
                  {page.joinCard.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#F8FAFA]/85 leading-relaxed">
                  {page.joinCard.supportingText}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onNavigateToPricing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#24545A] bg-[#D5B76A] hover:bg-[#e2c77d] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B76A]"
                >
                  <Wallet className="w-4 h-4" aria-hidden="true" />
                  <span>{page.joinCard.ctaLabel}</span>
                </button>
              </div>
            </div>

            {/* Support / Free Business Appointment Card */}
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-7 sm:p-9 flex flex-col justify-between gap-6 shadow-2xs">
              <div className="space-y-2.5">
                <span className="text-xs font-semibold text-[#087F87]">
                  {page.supportCard.kicker}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A]">
                  {page.supportCard.headingStart}{' '}
                  <span className="text-[#087F87]">
                    {page.supportCard.headingHighlight}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                  {page.supportCard.supportingText}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigateToContact()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.supportCard.ctaLabel}</span>
                  <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
