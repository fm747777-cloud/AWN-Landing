import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Copy,
  CreditCard,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';
import { OFFICIAL_SOCIAL_LINKS } from './Header';

interface ContactPageProps {
  lang: Language;
  content: SiteContent;
  preselectedSubject?: string;
  onNavigateHome: () => void;
  onNavigateToServices: () => void;
  onNavigateToPricing: () => void;
}

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  content,
  preselectedSubject = '',
  onNavigateHome,
  onNavigateToServices,
  onNavigateToPricing,
}) => {
  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const page = content.contactPage;
  const formContent = content.appointmentSection;
  const f = formContent.fields;

  const formSectionRef = useRef<HTMLElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    phone: '',
    subject: preselectedSubject || '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<keyof ContactFormValues, boolean>>({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedSubject) {
      setValues((prev) => ({ ...prev, subject: preselectedSubject }));
      setErrors((prev) => ({ ...prev, subject: undefined }));
      setIsReadyToSend(false);
    }
  }, [preselectedSubject]);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 350);
  };

  const validateField = (
    field: keyof ContactFormValues,
    val: string
  ): string | undefined => {
    const trimmed = val.trim();
    const v = formContent.validation;

    switch (field) {
      case 'name':
        if (!trimmed) return v.nameRequired;
        return undefined;
      case 'email':
        if (!trimmed) return v.emailRequired;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return v.emailInvalid;
        return undefined;
      case 'phone': {
        if (!trimmed) return v.phoneRequired;
        const digitsOnly = trimmed.replace(/[\s\-()]/g, '');
        if (
          !/^(\+?966|0)?5\d{8}$/.test(digitsOnly) &&
          !/^\+?\d{8,15}$/.test(digitsOnly)
        ) {
          return v.phoneInvalid;
        }
        return undefined;
      }
      case 'subject':
        if (!trimmed) return v.subjectRequired;
        return undefined;
      case 'message':
        if (!trimmed) return v.messageRequired;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const nextErrors: ContactFormErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone),
      subject: validateField('subject', values.subject),
      message: validateField('message', values.message),
    };
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof ContactFormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setIsReadyToSend(true);
    }
  };

  const formattedBody = [
    `Name / الاسم: ${values.name.trim()}`,
    `Email / البريد الإلكتروني: ${values.email.trim()}`,
    `Phone / رقم الجوال: ${values.phone.trim()}`,
    `Subject / الموضوع: ${values.subject.trim()}`,
    '',
    `Message / الرسالة:`,
    values.message.trim(),
  ].join('\n');

  const mailtoHref = `mailto:care@awn.sa?subject=${encodeURIComponent(
    `AWN Appointment - ${values.subject.trim()}`
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedBody);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-[#F8FAFA] text-[#24545A]">
      {/* Section 1: Contact Us Hero & Direct Contact Directory Ledger (Zero Images) */}
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
                <span className="text-[#24545A]/75">{page.parentCompanyNote}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#24545A] leading-tight">
                {page.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-[#24545A]/85 leading-relaxed">
                {page.heroSubtitle}
              </p>

              <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                {page.heroDescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.primaryCta}</span>
                  <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onNavigateToPricing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-white hover:bg-[#F8FAFA] border border-[#087F87]/35 hover:border-[#087F87] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <span>{page.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Pure CSS & Typographic Direct Contact Ledger (5 Columns, Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#087F87] tracking-wide">
                      {page.directLedger.kicker}
                    </p>
                    <h2 className="text-lg sm:text-xl font-bold text-[#24545A]">
                      {page.directLedger.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#24545A]/75">
                      {page.directLedger.subtitle}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <ul className="divide-y divide-[#E9E5DC]/70">
                  {page.directLedger.items.map((item) => (
                    <li
                      key={item.label}
                      className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                    >
                      <span className="text-xs sm:text-sm font-medium text-[#24545A]/80">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          dir={item.isLtr ? 'ltr' : undefined}
                          className="text-sm font-semibold text-[#087F87] hover:text-[#24545A] transition-colors tabular-nums"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-[#24545A]">
                          {item.value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#E9E5DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#24545A]/75">
                  <span>{page.parentCompanyNote}</span>
                  <div className="flex items-center gap-1.5">
                    {OFFICIAL_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                      <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-[#24545A]/80 bg-[#F8FAFA] hover:bg-[#087F87] hover:text-[#F8FAFA] border border-[#E9E5DC] hover:border-[#087F87] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Verified Contact Methods Cards (4 Channels) */}
      <section className="py-16 lg:py-20 border-b border-[#E9E5DC] bg-[#F8FAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 lg:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
              {page.channelsSection.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight mb-3">
              {page.channelsSection.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
              {page.channelsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Card 1: Phone / Call Us */}
            <article className="bg-white border border-[#E9E5DC] hover:border-[#087F87]/40 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#24545A]/45 tabular-nums">
                    01
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#24545A]">
                    {page.channelsSection.callCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                    {page.channelsSection.callCard.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E5DC] space-y-2.5">
                <a
                  href={page.channelsSection.callCard.unifiedHref}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#F8FAFA] hover:bg-[#E8F2F1]/70 border border-[#E9E5DC] transition-colors"
                >
                  <span className="text-xs font-medium text-[#24545A]/80">
                    {page.channelsSection.callCard.unifiedLabel}
                  </span>
                  <span
                    dir="ltr"
                    className="text-sm font-bold text-[#087F87] tabular-nums"
                  >
                    {page.channelsSection.callCard.unifiedNumber}
                  </span>
                </a>

                <a
                  href={page.channelsSection.callCard.mobileHref}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#F8FAFA] hover:bg-[#E8F2F1]/70 border border-[#E9E5DC] transition-colors"
                >
                  <span className="text-xs font-medium text-[#24545A]/80">
                    {page.channelsSection.callCard.mobileLabel}
                  </span>
                  <span
                    dir="ltr"
                    className="text-sm font-bold text-[#24545A] tabular-nums"
                  >
                    {page.channelsSection.callCard.mobileNumber}
                  </span>
                </a>
              </div>
            </article>

            {/* Card 2: Email / Mail Us */}
            <article className="bg-white border border-[#E9E5DC] hover:border-[#087F87]/40 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#24545A]/45 tabular-nums">
                    02
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#24545A]">
                    {page.channelsSection.emailCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                    {page.channelsSection.emailCard.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E5DC] space-y-2.5">
                <a
                  href={page.channelsSection.emailCard.emailHref}
                  className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg bg-[#F8FAFA] hover:bg-[#E8F2F1]/70 border border-[#E9E5DC] transition-colors"
                >
                  <span className="text-xs font-medium text-[#24545A]/80">
                    {page.channelsSection.emailCard.emailLabel}
                  </span>
                  <span
                    dir="ltr"
                    className="text-sm font-mono font-bold text-[#087F87]"
                  >
                    {page.channelsSection.emailCard.emailValue}
                  </span>
                </a>
                <p className="text-xs text-[#24545A]/70 leading-relaxed">
                  {page.channelsSection.emailCard.responseNote}
                </p>
              </div>
            </article>

            {/* Card 3: Location & Address */}
            <article className="bg-white border border-[#E9E5DC] hover:border-[#087F87]/40 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#24545A]/45 tabular-nums">
                    03
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#24545A]">
                    {page.channelsSection.locationCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                    {page.channelsSection.locationCard.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E5DC] space-y-2.5">
                <div className="px-3.5 py-2.5 rounded-lg bg-[#F8FAFA] border border-[#E9E5DC]">
                  <span className="block text-[11px] font-medium text-[#24545A]/65">
                    {page.channelsSection.locationCard.addressLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#24545A]">
                    {page.channelsSection.locationCard.addressValue}
                  </span>
                </div>
                <a
                  href={page.channelsSection.locationCard.mapLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F87] hover:text-[#24545A] transition-colors"
                >
                  <span>{page.channelsSection.locationCard.mapLinkLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* Card 4: Working Hours */}
            <article className="bg-white border border-[#E9E5DC] hover:border-[#087F87]/40 rounded-2xl p-6 flex flex-col justify-between gap-5 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#24545A]/45 tabular-nums">
                    04
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#24545A]">
                    {page.channelsSection.hoursCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#24545A]/75 leading-relaxed">
                    {page.channelsSection.hoursCard.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E5DC] space-y-2.5">
                <div className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFA] border border-[#E9E5DC]">
                  <span className="text-xs font-medium text-[#24545A]/75">
                    {page.channelsSection.hoursCard.daysLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#24545A]">
                    {page.channelsSection.hoursCard.daysValue}
                  </span>
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-[#F8FAFA] border border-[#E9E5DC]">
                  <span className="block text-[11px] font-medium text-[#24545A]/65">
                    {page.channelsSection.hoursCard.timeLabel}
                  </span>
                  <span className="text-xs font-semibold text-[#087F87] tabular-nums">
                    {page.channelsSection.hoursCard.timeValue}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: Free Business Appointment Form & Headquarters Location Details (Zero Map Images) */}
      <section
        id="contact-appointment-form"
        ref={formSectionRef}
        className="py-16 lg:py-24 border-b border-[#E9E5DC] bg-[#E8F2F1]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form Column (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
                <div className="mb-8 pb-6 border-b border-[#E9E5DC]">
                  <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide mb-2">
                    {page.formSection.kicker}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight mb-2.5">
                    {page.formSection.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                    {page.formSection.subtitle}
                  </p>
                  <p className="text-xs text-[#24545A]/65 mt-2">
                    {page.formSection.requiredNote}
                  </p>
                </div>

                {!isReadyToSend ? (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name Field */}
                      <div>
                        <label
                          htmlFor="contact-page-name"
                          className="block text-sm font-semibold text-[#24545A] mb-2"
                        >
                          {f.nameLabel}{' '}
                          <span className="text-[#087F87]" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          ref={nameInputRef}
                          id="contact-page-name"
                          name="name"
                          type="text"
                          required
                          value={values.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          placeholder={f.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-error-name' : undefined}
                          className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                            errors.name
                              ? 'border-red-600 focus:ring-red-600/20'
                              : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                          }`}
                        />
                        {errors.name && (
                          <p
                            id="contact-error-name"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-page-email"
                          className="block text-sm font-semibold text-[#24545A] mb-2"
                        >
                          {f.emailLabel}{' '}
                          <span className="text-[#087F87]" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="contact-page-email"
                          name="email"
                          type="email"
                          dir="ltr"
                          required
                          value={values.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder={f.emailPlaceholder}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? 'contact-error-email' : undefined
                          }
                          className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                            errors.email
                              ? 'border-red-600 focus:ring-red-600/20'
                              : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                          }`}
                        />
                        {errors.email && (
                          <p
                            id="contact-error-email"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="contact-page-phone"
                          className="block text-sm font-semibold text-[#24545A] mb-2"
                        >
                          {f.phoneLabel}{' '}
                          <span className="text-[#087F87]" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          id="contact-page-phone"
                          name="phone"
                          type="tel"
                          dir="ltr"
                          required
                          value={values.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          placeholder={f.phonePlaceholder}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={
                            errors.phone ? 'contact-error-phone' : undefined
                          }
                          className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                            errors.phone
                              ? 'border-red-600 focus:ring-red-600/20'
                              : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                          }`}
                        />
                        {errors.phone && (
                          <p
                            id="contact-error-phone"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Subject / Service Track Field */}
                      <div>
                        <label
                          htmlFor="contact-page-subject"
                          className="block text-sm font-semibold text-[#24545A] mb-2"
                        >
                          {f.subjectLabel}{' '}
                          <span className="text-[#087F87]" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <select
                          id="contact-page-subject"
                          name="subject"
                          required
                          value={values.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          onBlur={() => handleBlur('subject')}
                          aria-invalid={Boolean(errors.subject)}
                          aria-describedby={
                            errors.subject ? 'contact-error-subject' : undefined
                          }
                          className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                            errors.subject
                              ? 'border-red-600 focus:ring-red-600/20'
                              : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                          }`}
                        >
                          <option value="">{f.subjectPlaceholder}</option>
                          {f.subjectOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <p
                            id="contact-error-subject"
                            className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.subject}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-page-message"
                        className="block text-sm font-semibold text-[#24545A] mb-2"
                      >
                        {f.messageLabel}{' '}
                        <span className="text-[#087F87]" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <textarea
                        id="contact-page-message"
                        name="message"
                        rows={4}
                        required
                        value={values.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        placeholder={f.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? 'contact-error-message' : undefined
                        }
                        className={`w-full px-4 py-3 text-sm text-[#24545A] bg-[#F8FAFA] border rounded-lg transition-colors focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.message
                            ? 'border-red-600 focus:ring-red-600/20'
                            : 'border-[#E9E5DC] focus:border-[#087F87] focus:ring-[#087F87]/20'
                        }`}
                      />
                      {errors.message && (
                        <p
                          id="contact-error-message"
                          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>{formContent.submitButton}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Honest Client-Side Validated Handoff State */
                  <div className="space-y-6" role="region" aria-live="polite">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#24545A]">
                          {formContent.readyState.heading}
                        </h3>
                        <p className="text-sm text-[#24545A]/80 mt-1 leading-relaxed">
                          {formContent.readyState.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#F8FAFA] border border-[#E9E5DC] rounded-lg p-4 text-xs sm:text-sm font-mono text-[#24545A] whitespace-pre-wrap leading-relaxed">
                      {formattedBody}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>{formContent.readyState.sendEmailButton}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#24545A] bg-[#E8F2F1] hover:bg-[#E9E5DC] rounded-lg transition-colors cursor-pointer"
                      >
                        <Copy className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
                        <span>
                          {copied
                            ? formContent.readyState.copiedLabel
                            : formContent.readyState.copyButton}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsReadyToSend(false)}
                        className="px-4 py-3 text-sm font-medium text-[#24545A]/80 hover:text-[#24545A] transition-colors cursor-pointer"
                      >
                        {formContent.readyState.editButton}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Location & Corporate Details Panel (5 Columns, Zero Map Images) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-[#087F87] tracking-wide">
                      {page.locationPanel.kicker}
                    </p>
                    <h3 className="text-xl font-bold text-[#24545A]">
                      {page.locationPanel.heading}
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#E8F2F1] text-[#087F87] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-sm text-[#24545A]/80 leading-relaxed">
                  {page.locationPanel.description}
                </p>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E9E5DC] flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#087F87] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-[#24545A]/70">
                        {page.locationPanel.addressTitle}
                      </h4>
                      <p className="text-sm font-bold text-[#24545A]">
                        {page.locationPanel.addressValue}
                      </p>
                      <p className="text-xs text-[#24545A]/75">
                        {page.locationPanel.cityValue}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E9E5DC] flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#087F87] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-[#24545A]/70">
                        {page.locationPanel.workingHoursTitle}
                      </h4>
                      <p className="text-sm font-bold text-[#24545A] tabular-nums">
                        {page.locationPanel.workingHoursValue}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E9E5DC] flex items-start gap-3.5">
                    <CreditCard className="w-5 h-5 text-[#087F87] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-[#24545A]/70">
                        {page.locationPanel.paymentTitle}
                      </h4>
                      <p className="text-sm font-bold text-[#24545A]">
                        {page.locationPanel.paymentValue}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFA] border border-[#E9E5DC] space-y-3">
                    <h4 className="text-xs font-semibold text-[#24545A]/70">
                      {isRtl
                        ? 'الحسابات الرسمية والتواصل المباشر'
                        : 'Official Social Media & Direct Contact'}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {OFFICIAL_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                        <a
                          key={id}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="w-9 h-9 inline-flex items-center justify-center text-[#24545A] hover:text-[#F8FAFA] bg-white hover:bg-[#087F87] border border-[#E9E5DC] hover:border-[#087F87] rounded-lg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <a
                        href="mailto:care@awn.sa"
                        aria-label="Email AWN at care@awn.sa"
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#24545A] hover:text-[#F8FAFA] bg-white hover:bg-[#087F87] border border-[#E9E5DC] hover:border-[#087F87] rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
                        <span dir="ltr" className="font-mono">
                          care@awn.sa
                        </span>
                      </a>

                      <a
                        href="tel:+966582940754"
                        aria-label="Call AWN at +966 582 940 754"
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#24545A] hover:text-[#F8FAFA] bg-white hover:bg-[#087F87] border border-[#E9E5DC] hover:border-[#087F87] rounded-lg transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
                        <span dir="ltr" className="tabular-nums">
                          +966 582 940 754
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={page.locationPanel.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#087F87] bg-[#E8F2F1] hover:bg-[#087F87] hover:text-[#F8FAFA] rounded-xl transition-colors duration-150"
                  >
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{page.locationPanel.mapCtaLabel}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Join Us & Explore Services CTA Strip */}
      <section className="py-16 lg:py-20 bg-[#F8FAFA] border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Join Us / Pricing Card */}
            <div className="bg-[#24545A] text-[#F8FAFA] rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#087F87] text-[#F8FAFA] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFA]">
                  {page.joinCard.heading}
                </h2>
                <p className="text-base text-[#E8F2F1]/85 leading-relaxed">
                  {page.joinCard.supportingText}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={onNavigateToPricing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#24545A] bg-[#D5B76A] hover:bg-[#E9E5DC] rounded-lg transition-colors cursor-pointer"
                >
                  <span>{page.joinCard.ctaLabel}</span>
                  <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Explore Services Card */}
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-8 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-[#087F87] tracking-wide">
                  {page.servicesCard.kicker}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24545A]">
                  {page.servicesCard.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#24545A]/80 leading-relaxed">
                  {page.servicesCard.supportingText}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={onNavigateToServices}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors cursor-pointer"
                >
                  <span>{page.servicesCard.ctaLabel}</span>
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
