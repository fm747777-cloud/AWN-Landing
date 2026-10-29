import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileSpreadsheet,
  FolderCheck,
  Layers,
  ShieldCheck,
  UserCheck,
  Wallet,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface ServicesPageProps {
  lang: Language;
  content: SiteContent;
  onNavigateHome: () => void;
  onSelectServiceRoute: (routePath: string) => void;
  onNavigateToPricing: () => void;
  onNavigateToContact: (preselectedSubject?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  content,
  onNavigateHome,
  onSelectServiceRoute,
  onNavigateToPricing,
  onNavigateToContact,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const page = content.servicesPage;

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

  const getAdvisoryIcon = (
    iconKey: SiteContent['servicesPage']['advisorySection']['items'][number]['iconKey']
  ) => {
    switch (iconKey) {
      case 'consulting':
        return Compass;
      case 'other':
      default:
        return Layers;
    }
  };

  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'always-compliant':
        return ShieldCheck;
      case 'meets-schedule':
        return Clock;
      case 'no-pending-requests':
        return CheckCircle2;
      case 'share-all-docs':
        return FolderCheck;
      case 'activate-all-accounts':
        return FileSpreadsheet;
      case 'no-extra-cost':
      default:
        return BadgePercent;
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
      {/* Section 1: Hero & Architectural Service Directory Header (Zero Images) */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Primary Hero Copy & CTAs (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide">
                <span>{page.pageTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#24545A]/80">{page.introKicker}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24545A] leading-tight">
                {page.headlineStart}{' '}
                <span className="text-[#087F87] underline decoration-[#D5B76A] decoration-2 underline-offset-8">
                  {page.headlineHighlight}
                </span>{' '}
                {page.headlineEnd}
              </h1>

              <p className="text-base sm:text-lg text-[#24545A]/85 leading-relaxed max-w-2xl">
                {page.description}
              </p>

              {/* Key Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {page.overviewHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-[#24545A]/90"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#087F87] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onNavigateToPricing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <Wallet className="w-4 h-4" aria-hidden="true" />
                  <span>{page.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigateToContact(page.pageTitle)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-white hover:bg-[#F8FAFA] border border-[#087F87]/35 hover:border-[#087F87] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.secondaryCta}</span>
                  <DirectionalArrow
                    className="w-4 h-4 text-[#087F87]"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* Right Column: Pure CSS/Icon Quick Service Navigation Index (5 Columns) */}
            <div className="lg:col-span-5 bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="pb-4 mb-4 border-b border-[#E9E5DC] flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-[#087F87]">
                    {page.categoriesSection.kicker}
                  </p>
                  <h2 className="text-base sm:text-lg font-bold text-[#24545A] mt-0.5">
                    {isRtl
                      ? 'دليل خدمات عون الأساسية'
                      : 'AWN Core Services Directory'}
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-[#24545A]/55">
                  04 / 04
                </span>
              </div>

              <div className="divide-y divide-[#E9E5DC]">
                {page.categoriesSection.categories.map((cat) => {
                  const IconComponent = getCategoryIcon(cat.iconKey);
                  return (
                    <a
                      key={cat.id}
                      href={cat.routePath}
                      onClick={(e) => handleRouteClick(e, cat.routePath)}
                      className="group py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#087F87] rounded-xs"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className="text-xs font-mono font-bold text-[#087F87] tabular-nums shrink-0">
                          {cat.number}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors">
                          <IconComponent className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#24545A] group-hover:text-[#087F87] transition-colors truncate">
                            {cat.title}
                          </p>
                          <p className="text-xs text-[#24545A]/65 truncate mt-0.5">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>

                      <DirectionalArrow
                        className="w-4 h-4 text-[#24545A]/40 group-hover:text-[#087F87] shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Main 4 Service Categories Grid (Exact Order, Zero Images) */}
      <section className="py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 lg:mb-14">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.categoriesSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
              {page.categoriesSection.heading}
            </h2>
            <p className="text-base text-[#24545A]/80 mt-3 leading-relaxed">
              {page.categoriesSection.subtitle}
            </p>
          </div>

          {/* 4 Main Service Category Cards in Exact Required Order */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {page.categoriesSection.categories.map((category) => {
              const CategoryIcon = getCategoryIcon(category.iconKey);

              return (
                <article
                  key={category.id}
                  data-service-category={category.id}
                  className="group bg-white border border-[#E9E5DC] hover:border-[#087F87]/55 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {/* Card Header: Number, Simple SVG Icon, Title & Subtitle */}
                    <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#087F87]">
                          <span>{category.number}</span>
                          <span aria-hidden="true">·</span>
                          <span>{page.pageTitle}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#24545A] group-hover:text-[#087F87] transition-colors leading-snug">
                          <a
                            href={category.routePath}
                            onClick={(e) =>
                              handleRouteClick(e, category.routePath)
                            }
                            className="focus-visible:outline-2 focus-visible:outline-[#087F87] rounded-xs"
                          >
                            {category.title}
                          </a>
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#24545A]/70">
                          {category.subtitle}
                        </p>
                      </div>

                      <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors duration-200">
                        <CategoryIcon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Concise Description Based on Reference Content */}
                    <p className="text-sm sm:text-base text-[#24545A]/85 leading-relaxed my-5">
                      {category.description}
                    </p>

                    {/* Key Deliverables / Sub-services Included */}
                    <div className="pt-4 border-t border-[#E9E5DC]/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#24545A]/65 mb-3.5">
                        {page.categoriesSection.deliverablesHeading}
                      </h4>
                      <ul className="space-y-2.5">
                        {category.subServices.map((subItem) => (
                          <li
                            key={subItem}
                            className="flex items-start gap-2.5 text-sm text-[#24545A]/90 leading-snug"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#087F87] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Unboxed Value Pillars + Clear CTA to Corresponding Route */}
                  <div className="mt-7 pt-5 border-t border-[#E9E5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#24545A]/70">
                      {category.valuePillars.map((pillar, pIdx) => (
                        <React.Fragment key={pillar}>
                          {pIdx > 0 && (
                            <span
                              aria-hidden="true"
                              className="text-[#D5B76A] font-bold"
                            >
                              ·
                            </span>
                          )}
                          <span>{pillar}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <a
                      href={category.routePath}
                      onClick={(e) => handleRouteClick(e, category.routePath)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                    >
                      <span>{category.ctaLabel}</span>
                      <DirectionalArrow
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Additional Advisory & On-Demand Support Services (Zero Images) */}
      <section className="py-16 lg:py-20 bg-[#E8F2F1]/45 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.advisorySection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight">
              {page.advisorySection.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#24545A]/80 mt-2.5 leading-relaxed">
              {page.advisorySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.advisorySection.items.map((item) => {
              const AdvisoryIcon = getAdvisoryIcon(item.iconKey);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E9E5DC]">
                      <h3 className="text-lg sm:text-xl font-bold text-[#24545A]">
                        {item.title}
                      </h3>
                      <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                        <AdvisoryIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#24545A]/85 leading-relaxed my-4">
                      {item.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {item.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm text-[#24545A]/90"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#087F87] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E9E5DC] flex justify-end">
                    <button
                      type="button"
                      onClick={() => onNavigateToContact(item.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#087F87] hover:text-[#24545A] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87] rounded-xs"
                    >
                      <span>{page.advisorySection.ctaLabel}</span>
                      <DirectionalArrow
                        className="w-4 h-4"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: How AWN Experts Benefit Your Business (6 Indicators Grid, Zero Images) */}
      <section className="py-16 lg:py-20 bg-[#F8FAFA] border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.expertBenefits.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight">
              {page.expertBenefits.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#24545A]/80 mt-2.5 leading-relaxed">
              {page.expertBenefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.expertBenefits.points.map((point, idx) => {
              const BenefitIcon = getBenefitIcon(point.id);
              return (
                <div
                  key={point.id}
                  className="group bg-white border border-[#E9E5DC] hover:border-[#087F87]/45 rounded-xl p-6 flex items-center justify-between gap-4 shadow-2xs hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F2F1] group-hover:bg-[#087F87] text-[#087F87] group-hover:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors duration-200">
                      <BenefitIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#24545A] leading-snug">
                      {point.label}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#24545A]/40 shrink-0">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: 5-Step Connected Process Summary ("كيف نعمل") */}
      <section className="py-16 lg:py-20 bg-[#E8F2F1]/55 border-b border-[#E9E5DC]">
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

      {/* Section 6: Dual CTA Banner ("انضم إلينا" & "هل تحتاج أي مساعدة؟") */}
      <section className="py-16 lg:py-20 bg-[#F8FAFA]">
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
                  onClick={() => onNavigateToContact(page.pageTitle)}
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
