import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Coins,
  FileCheck2,
  FileText,
  FolderKanban,
  HelpCircle,
  Laptop,
  Scale,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface GenericAvatarProps {
  gender: 'female' | 'male';
  variant: 1 | 2 | 3;
  className?: string;
}

const GenericAvatar: React.FC<GenericAvatarProps> = ({ gender, variant, className = '' }) => {
  if (gender === 'female') {
    if (variant === 1) {
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${className}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fem-bg-1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#087F87" />
              <stop offset="1" stopColor="#24545A" />
            </linearGradient>
            <linearGradient id="fem-acc-1" x1="10" y1="26" x2="30" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8F2F1" />
              <stop offset="1" stopColor="#D5B76A" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="20" fill="url(#fem-bg-1)" />
          <path
            d="M20 7C14.8 7 12 10.8 12 16.5C12 21.2 14.5 24 16 25C16.8 25.5 17 26.5 17 27.5L16.2 36H23.8L23 27.5C23 26.5 23.2 25.5 24 25C25.5 24 28 21.2 28 16.5C28 10.8 25.2 7 20 7Z"
            fill="#24545A"
          />
          <ellipse cx="20" cy="16" rx="4.2" ry="5.2" fill="#E8F2F1" />
          <path
            d="M16 13C16.8 11.2 18.2 10.2 20 10.2C21.8 10.2 23.2 11.2 24 13C22.8 12.2 21.5 11.8 20 11.8C18.5 11.8 17.2 12.2 16 13Z"
            fill="#D5B76A"
          />
          <path
            d="M8 38C8.5 32 13 28 20 28C27 28 31.5 32 32 38"
            fill="url(#fem-acc-1)"
          />
          <path
            d="M17 28L18.5 38M23 28L21.5 38"
            stroke="#087F87"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    if (variant === 2) {
      return (
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${className}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fem-bg-2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#24545A" />
              <stop offset="1" stopColor="#087F87" />
            </linearGradient>
            <linearGradient id="fem-acc-2" x1="10" y1="26" x2="30" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D5B76A" />
              <stop offset="1" stopColor="#F5E8C7" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="20" fill="url(#fem-bg-2)" />
          <ellipse cx="20" cy="15.5" r="7" fill="#FFFFFF" fillOpacity="0.1" />
          <path
            d="M13 16C13 11 16 7.5 20 7.5C24 7.5 27 11 27 16C27 20 25 23 23 24.5V27H17V24.5C15 23 13 20 13 16Z"
            fill="#1A3E43"
          />
          <ellipse cx="20" cy="16" rx="4" ry="4.8" fill="#F8FAFA" />
          <path
            d="M14 14.5C15.5 12 17.5 10.5 20 10.5C22.5 10.5 24.5 12 26 14.5"
            stroke="#D5B76A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 38C9.5 31.5 14 27.5 20 27.5C26 27.5 30.5 31.5 31 38"
            fill="url(#fem-acc-2)"
          />
          <circle cx="20" cy="30" r="1.5" fill="#24545A" />
        </svg>
      );
    }
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fem-bg-3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#087F87" />
            <stop offset="1" stopColor="#3C8D93" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="20" fill="url(#fem-bg-3)" />
        <circle cx="20" cy="15" r="6.5" fill="#F8FAFA" fillOpacity="0.15" />
        <path
          d="M14 16C14 11.5 16.5 8 20 8C23.5 8 26 11.5 26 16C26 20.5 24 23.5 22.5 24.8V27H17.5V24.8C16 23.5 14 20.5 14 16Z"
          fill="#24545A"
        />
        <ellipse cx="20" cy="16" rx="4" ry="4.8" fill="#E8F2F1" />
        <path
          d="M8.5 38C9 32 13.5 28 20 28C26.5 28 31 32 31.5 38"
          fill="#FFFFFF"
        />
        <path
          d="M17 28L19 38M23 28L21 38"
          stroke="#087F87"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="male-bg-1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D5B76A" />
            <stop offset="1" stopColor="#24545A" />
          </linearGradient>
          <linearGradient id="male-thobe-1" x1="12" y1="26" x2="28" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F8FAFA" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="20" fill="url(#male-bg-1)" />
        <path
          d="M20 7C14.5 7 11.5 10.5 11.5 16C11.5 21 13 25.5 14 27.5L14.5 36H25.5L26 27.5C27 25.5 28.5 21 28.5 16C28.5 10.5 25.5 7 20 7Z"
          fill="#FFFFFF"
        />
        <path
          d="M15 11.5C16.5 10.5 18.2 10 20 10C21.8 10 23.5 10.5 25 11.5"
          stroke="#24545A"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse cx="20" cy="16.5" rx="3.8" ry="4.8" fill="#E8F2F1" />
        <path
          d="M8.5 38C9 31.5 13.5 27 20 27C26.5 27 31 31.5 31.5 38"
          fill="url(#male-thobe-1)"
        />
        <path
          d="M18.5 27V38M21.5 27V38"
          stroke="#D5B76A"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="male-bg-2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#087F87" />
          <stop offset="1" stopColor="#1E454A" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="20" fill="url(#male-bg-2)" />
      <circle cx="20" cy="14" r="5" fill="#E8F2F1" />
      <path
        d="M15 13.5C15 10.5 17 8.5 20 8.5C23 8.5 25 10.5 25 13.5C24 13 22.5 12.5 20 12.5C17.5 12.5 16 13 15 13.5Z"
        fill="#24545A"
      />
      <path
        d="M9 38C9.5 31 14 26.5 20 26.5C26 26.5 30.5 31 31 38"
        fill="#FFFFFF"
      />
      <path
        d="M17.5 26.5L20 31L22.5 26.5"
        fill="#D5B76A"
      />
      <path
        d="M20 31V38"
        stroke="#087F87"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface HrManagementPageProps {
  lang: Language;
  content: SiteContent;
  onNavigateHome: () => void;
  onNavigateToPricing: () => void;
  onNavigateToContact: () => void;
}

export const HrManagementPage: React.FC<HrManagementPageProps> = ({
  lang,
  content,
  onNavigateHome,
  onNavigateToPricing,
  onNavigateToContact,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('hr-faq-1');
  const [activeNetworkCard, setActiveNetworkCard] = useState<string | null>(null);

  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const page = content.hrManagementPage;

  const getServiceIcon = (
    iconKey: SiteContent['hrManagementPage']['servicesList'][number]['iconKey']
  ) => {
    switch (iconKey) {
      case 'files':
        return FolderKanban;
      case 'payroll':
        return Coins;
      case 'attendance':
        return CalendarClock;
      case 'gosi':
        return ShieldCheck;
      case 'platforms':
        return Laptop;
      case 'settlement':
        return Scale;
      case 'policies':
      default:
        return ScrollText;
    }
  };

  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'accurate-records':
        return FileCheck2;
      case 'wps-compliance':
        return Coins;
      case 'regulatory-alignment':
        return CheckCircle2;
      case 'reduced-overhead':
        return Wallet;
      case 'instant-dashboards':
        return Laptop;
      case 'dedicated-account-lead':
      default:
        return UserCheck;
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#F8FAFA] text-[#24545A]">
      <style>{`
        @keyframes subtleFloatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes subtleFloatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(7px); }
        }
        @keyframes subtleFloatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .anim-float-a {
          animation: subtleFloatA 5.5s ease-in-out infinite;
        }
        .anim-float-b {
          animation: subtleFloatB 6.2s ease-in-out infinite;
        }
        .anim-float-c {
          animation: subtleFloatC 4.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-float-a, .anim-float-b, .anim-float-c {
            animation: none !important;
          }
        }
      `}</style>

      {/* Section A: HR Management Hero Section (Single Permitted Processed Image + Interactive Employee Network) */}
      <section className="relative bg-[#E8F2F1]/75 border-b border-[#E9E5DC] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-[#24545A]/70 mb-8 select-none"
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
            {/* Primary Hero Content (5.5 Columns) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#087F87] text-[#F8FAFA] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D5B76A]" aria-hidden="true" />
                <span>{page.introTab}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#24545A] leading-tight">
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

              {/* Quick Network Highlight Counter */}
              <div className="pt-3 border-t border-[#087F87]/15 flex items-center gap-4 text-xs text-[#24545A]/80">
                <div className="flex items-center gap-1.5 text-[#087F87] font-semibold">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isRtl ? 'منظومة فريق موارد بشرية متكاملة' : 'Integrated HR Workforce System'}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F87]/30" />
                <span className="text-[#24545A]/70">
                  {isRtl ? 'حماية أجور · قوى · مدد · التأمينات' : 'WPS · Qiwa · Mudad · GOSI'}
                </span>
              </div>
            </div>

            {/* HR Management Hero Visual Asset with Interactive Employee Network */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-2xl select-none">
                {/* Central Clean Transparent Visual */}
                <div className="relative z-10 mx-auto">
                  <img
                    src={page.heroImageSrc}
                    alt={page.heroImageAlt}
                    width={1200}
                    height={896}
                    className="w-full h-auto object-contain block pointer-events-none drop-shadow-md"
                  />
                </div>

                {/* Desktop Floating Employee Profile Chips (Hidden on small screens to prevent overlap) */}
                <div className="hidden lg:block pointer-events-auto">
                  {/* Card 1: Top Right - HR Leadership */}
                  {page.employeeNetwork.items[0] && (
                    <div
                      onMouseEnter={() => setActiveNetworkCard(page.employeeNetwork.items[0].id)}
                      onMouseLeave={() => setActiveNetworkCard(null)}
                      className={`absolute -top-3 ${
                        isRtl ? '-right-6' : '-left-6'
                      } z-20 anim-float-a bg-white/95 backdrop-blur-xs border ${
                        activeNetworkCard === page.employeeNetwork.items[0].id
                          ? 'border-[#087F87] ring-2 ring-[#087F87]/20 shadow-lg'
                          : 'border-[#E9E5DC] shadow-sm'
                      } rounded-xl p-3 flex items-center gap-3 transition-all duration-200 cursor-pointer max-w-[220px]`}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-[#087F87]/20">
                        <GenericAvatar gender="female" variant={1} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#24545A] truncate">
                            {page.employeeNetwork.items[0].role}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-semibold text-[#087F87] bg-[#E8F2F1] px-2 py-0.5 rounded-sm">
                          {page.employeeNetwork.items[0].tag}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card 2: Top Left - Payroll Specialist */}
                  {page.employeeNetwork.items[1] && (
                    <div
                      onMouseEnter={() => setActiveNetworkCard(page.employeeNetwork.items[1].id)}
                      onMouseLeave={() => setActiveNetworkCard(null)}
                      className={`absolute top-12 ${
                        isRtl ? '-left-6' : '-right-6'
                      } z-20 anim-float-b bg-white/95 backdrop-blur-xs border ${
                        activeNetworkCard === page.employeeNetwork.items[1].id
                          ? 'border-[#087F87] ring-2 ring-[#087F87]/20 shadow-lg'
                          : 'border-[#E9E5DC] shadow-sm'
                      } rounded-xl p-3 flex items-center gap-3 transition-all duration-200 cursor-pointer max-w-[220px]`}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-[#D5B76A]/40">
                        <GenericAvatar gender="male" variant={1} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#24545A] truncate">
                            {page.employeeNetwork.items[1].role}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-semibold text-[#24545A] bg-[#D5B76A]/20 px-2 py-0.5 rounded-sm">
                          {page.employeeNetwork.items[1].tag}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card 3: Mid Right - Employee Relations */}
                  {page.employeeNetwork.items[2] && (
                    <div
                      onMouseEnter={() => setActiveNetworkCard(page.employeeNetwork.items[2].id)}
                      onMouseLeave={() => setActiveNetworkCard(null)}
                      className={`absolute top-[52%] ${
                        isRtl ? '-right-6' : '-left-6'
                      } z-20 anim-float-c bg-white/95 backdrop-blur-xs border ${
                        activeNetworkCard === page.employeeNetwork.items[2].id
                          ? 'border-[#087F87] ring-2 ring-[#087F87]/20 shadow-lg'
                          : 'border-[#E9E5DC] shadow-sm'
                      } rounded-xl p-3 flex items-center gap-3 transition-all duration-200 cursor-pointer max-w-[220px]`}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-[#087F87]/20">
                        <GenericAvatar gender="female" variant={2} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#24545A] truncate">
                            {page.employeeNetwork.items[2].role}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-semibold text-[#087F87] bg-[#E8F2F1] px-2 py-0.5 rounded-sm">
                          {page.employeeNetwork.items[2].tag}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card 4: Mid Left - Compliance & Portals */}
                  {page.employeeNetwork.items[3] && (
                    <div
                      onMouseEnter={() => setActiveNetworkCard(page.employeeNetwork.items[3].id)}
                      onMouseLeave={() => setActiveNetworkCard(null)}
                      className={`absolute top-[58%] ${
                        isRtl ? '-left-6' : '-right-6'
                      } z-20 anim-float-a bg-white/95 backdrop-blur-xs border ${
                        activeNetworkCard === page.employeeNetwork.items[3].id
                          ? 'border-[#087F87] ring-2 ring-[#087F87]/20 shadow-lg'
                          : 'border-[#E9E5DC] shadow-sm'
                      } rounded-xl p-3 flex items-center gap-3 transition-all duration-200 cursor-pointer max-w-[220px]`}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-[#087F87]/20">
                        <GenericAvatar gender="male" variant={2} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#24545A] truncate">
                            {page.employeeNetwork.items[3].role}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-semibold text-[#24545A] bg-[#D5B76A]/20 px-2 py-0.5 rounded-sm">
                          {page.employeeNetwork.items[3].tag}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card 5: Bottom Left Badge */}
                  {page.employeeNetwork.items[4] && (
                    <div
                      onMouseEnter={() => setActiveNetworkCard(page.employeeNetwork.items[4].id)}
                      onMouseLeave={() => setActiveNetworkCard(null)}
                      className={`absolute bottom-3 ${
                        isRtl ? 'right-1/4' : 'left-1/4'
                      } z-20 anim-float-b bg-white/95 backdrop-blur-xs border ${
                        activeNetworkCard === page.employeeNetwork.items[4].id
                          ? 'border-[#087F87] ring-2 ring-[#087F87]/20 shadow-lg'
                          : 'border-[#E9E5DC] shadow-sm'
                      } rounded-xl px-3 py-2 flex items-center gap-2.5 transition-all duration-200 cursor-pointer`}
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-2xs border border-[#087F87]/20">
                        <GenericAvatar gender="female" variant={3} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-xs font-semibold text-[#24545A]">
                          {page.employeeNetwork.items[4].role}
                        </span>
                        <span className="text-[10px] text-[#087F87] bg-[#E8F2F1] px-2 py-0.5 rounded-full font-medium">
                          {page.employeeNetwork.items[4].tag}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile / Tablet Employee Network Compact Cards */}
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
                {page.employeeNetwork.items.slice(0, 4).map((member, idx) => (
                  <div
                    key={member.id}
                    className="bg-white border border-[#E9E5DC] rounded-xl p-3 flex items-center gap-3 shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs border border-[#087F87]/20">
                      <GenericAvatar
                        gender={idx % 2 === 0 ? 'female' : 'male'}
                        variant={idx < 2 ? 1 : 2}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-[#24545A] truncate">
                          {member.role}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-[#087F87] bg-[#E8F2F1] px-1.5 py-0.5 rounded-sm">
                        {member.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: The 7 HR Services, Why AWN, and Join/Support Cards */}
      <section className="py-16 lg:py-24 border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Section B: الخدمات (The 7 HR Core Services — Pure Cards & Vector Icons, No Images) */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
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

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-[#24545A] group-hover:text-[#087F87] leading-snug transition-colors">
                        {service.title}
                      </h3>
                      {service.shortDesc && (
                        <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section C & D Combined Layout: Why AWN + Join & Support CTA Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Section D: لماذا عون لخدمات إدارة الموارد البشرية (7 Columns) */}
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

      {/* Section E: كيف تفيدك خدمة خبراء عون ؟ — مؤشرات النجاح (6 Reference Indicators — No Images) */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

      {/* Section F: الأسئلة الشائعة (FAQ Accordion — No Images) */}
      <section className="py-16 lg:py-24 bg-[#F8FAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <HelpCircle className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#087F87] tracking-wide">
                {page.faq.kicker}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
              {page.faq.heading}
            </h2>
          </div>

          <div className="space-y-4">
            {page.faq.items.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#087F87] shadow-xs'
                      : 'border-[#E9E5DC] hover:border-[#087F87]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87]"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#24545A]">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#087F87] text-[#F8FAFA] rotate-180'
                          : 'bg-[#E8F2F1] text-[#087F87]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-[#24545A]/85 leading-relaxed border-t border-[#E8F2F1]">
                      {item.answer.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
