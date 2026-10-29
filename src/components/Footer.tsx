import React, { useState } from 'react';
import {
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { OFFICIAL_SOCIAL_LINKS } from './Header';

interface FooterProps {
  lang: Language;
  content: SiteContent;
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  onNavigate,
  onSelectService,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'valid' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('valid');
  };

  const c = content.footer.contactCards;

  return (
    <footer className="bg-[#24545A] text-[#F8FAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Contact Info Strip with Official Mada Logo */}
        <div className="py-12 border-b border-[#F8FAFA]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div className="bg-[#F8FAFA]/5 border border-[#F8FAFA]/10 rounded-xl p-5 flex flex-col justify-between gap-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#087F87] text-[#F8FAFA] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-xs font-semibold text-[#D5B76A] tracking-wide">
                {c.callTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+966920015083"
                className="group/btn w-full inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-[#087F87] hover:bg-[#F8FAFA] text-[#F8FAFA] hover:text-[#24545A] border border-[#F8FAFA]/15 hover:border-[#F8FAFA] transition-colors duration-200 shadow-xs"
              >
                <span className="w-6 h-6 rounded-md bg-[#24545A]/35 group-hover/btn:bg-[#087F87]/15 text-[#F8FAFA] group-hover/btn:text-[#087F87] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span
                  dir="ltr"
                  className="text-sm sm:text-[15px] font-semibold tracking-wider tabular-nums font-['Plus_Jakarta_Sans','IBM_Plex_Sans_Arabic',sans-serif]"
                >
                  +966 9200 150 83
                </span>
              </a>

              <a
                href="tel:+966582940754"
                className="group/btn w-full inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-[#F8FAFA] hover:bg-[#087F87] text-[#24545A] hover:text-[#F8FAFA] border border-[#F8FAFA] hover:border-[#087F87] transition-colors duration-200 shadow-xs"
              >
                <span className="w-6 h-6 rounded-md bg-[#087F87]/12 group-hover/btn:bg-[#24545A]/35 text-[#087F87] group-hover/btn:text-[#F8FAFA] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span
                  dir="ltr"
                  className="text-sm sm:text-[15px] font-semibold tracking-wider tabular-nums font-['Plus_Jakarta_Sans','IBM_Plex_Sans_Arabic',sans-serif]"
                >
                  +966 582 940 754
                </span>
              </a>
            </div>
          </div>

          <a
            href="mailto:care@awn.sa"
            className="group bg-[#F8FAFA]/5 hover:bg-[#F8FAFA]/10 border border-[#F8FAFA]/10 rounded-xl p-5 flex items-start gap-4 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#087F87] text-[#F8FAFA] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-[#D5B76A] mb-1">
                {c.emailTitle}
              </h3>
              <p className="text-sm font-medium text-[#F8FAFA] font-mono">
                {c.emailValue}
              </p>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/zroLAsA8ModYpdK9A"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#F8FAFA]/5 hover:bg-[#F8FAFA]/10 border border-[#F8FAFA]/10 rounded-xl p-5 flex items-start gap-4 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#087F87] text-[#F8FAFA] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-[#D5B76A] mb-1">
                {c.locationTitle}
              </h3>
              <p className="text-sm font-medium text-[#F8FAFA]">
                {c.locationValue}
              </p>
            </div>
          </a>

          <a
            href="https://www.mada.com.sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#F8FAFA]/5 hover:bg-[#F8FAFA]/10 border border-[#F8FAFA]/10 rounded-xl p-5 flex items-center justify-between gap-4 transition-colors"
          >
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#087F87] text-[#F8FAFA] flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-[#D5B76A] mb-1">
                  {c.paymentTitle}
                </h3>
                <p className="text-sm font-medium text-[#F8FAFA]">
                  {c.paymentValue}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md px-2 py-1 shrink-0">
              <img
                src="/assets/official/mada.png"
                alt="Mada"
                className="h-6 w-auto object-contain"
              />
            </div>
          </a>
        </div>

        {/* Main Footer Link Groups */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Verified Social / Direct Contact Links */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="light" />
            <p className="text-sm text-[#E8F2F1]/85 leading-relaxed max-w-sm">
              {content.footer.brandDescription}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {OFFICIAL_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center text-[#F8FAFA] bg-[#F8FAFA]/10 hover:bg-[#087F87] border border-[#F8FAFA]/15 rounded-lg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B76A]"
                >
                  <Icon className="w-4 h-4 text-[#D5B76A]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#D5B76A] tracking-wide">
              {content.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.footer.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href.replace('#', ''));
                    }}
                    className="text-sm text-[#E8F2F1]/85 hover:text-[#F8FAFA] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#D5B76A] tracking-wide">
              {content.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.footer.serviceLinks.map((service) => (
                <li key={service.serviceId}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.label)}
                    className="text-start text-sm text-[#E8F2F1]/85 hover:text-[#F8FAFA] transition-colors cursor-pointer"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Mailing List Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#D5B76A] tracking-wide">
              {content.footer.subscribeTitle}
            </h4>
            <p className="text-sm text-[#E8F2F1]/85 leading-relaxed">
              {content.footer.subscribeDesc}
            </p>
            <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2.5">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  dir="ltr"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                  }}
                  placeholder={content.footer.subscribePlaceholder}
                  aria-label={content.footer.subscribePlaceholder}
                  className="w-full px-3.5 py-2.5 text-sm text-[#F8FAFA] placeholder-[#E8F2F1]/50 bg-[#F8FAFA]/10 border border-[#F8FAFA]/20 rounded-lg focus:outline-none focus:border-[#D5B76A]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#24545A] bg-[#D5B76A] hover:bg-[#E9E5DC] rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">{content.footer.subscribeButton}</span>
                </button>
              </div>
              {newsletterStatus === 'error' && (
                <p className="text-xs text-[#D5B76A]">
                  {content.footer.subscribeError}
                </p>
              )}
              {newsletterStatus === 'valid' && (
                <div className="text-xs text-[#E8F2F1] space-y-1">
                  <p>{content.footer.subscribeSuccess}</p>
                  <a
                    href={`mailto:care@awn.sa?subject=${encodeURIComponent(
                      'AWN Mailing List Subscription'
                    )}&body=${encodeURIComponent(
                      `Please subscribe ${newsletterEmail.trim()} to the AWN mailing list.`
                    )}`}
                    className="inline-block font-semibold text-[#D5B76A] underline underline-offset-4"
                  >
                    care@awn.sa
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & DOTS Administrative Services Attribution */}
        <div className="py-6 border-t border-[#F8FAFA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F2F1]/75">
          <p>{content.footer.copyright}</p>
          <p className="text-[#D5B76A] font-medium">
            {content.footer.parentCompanyNote}
          </p>
        </div>
      </div>
    </footer>
  );
};
