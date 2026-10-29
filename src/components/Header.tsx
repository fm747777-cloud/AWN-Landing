import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Facebook, Globe, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Language, NavServiceCategory, SiteContent } from '../data/content';
import { BrandLogo } from './BrandLogo';

const XBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const OFFICIAL_SOCIAL_LINKS = [
  {
    id: 'instagram',
    label: 'AWN on Instagram',
    href: 'https://instagram.com/awn_business_services/',
    Icon: Instagram,
  },
  {
    id: 'facebook',
    label: 'AWN on Facebook',
    href: 'https://www.facebook.com/AWNbusiness',
    Icon: Facebook,
  },
  {
    id: 'linkedin',
    label: 'AWN on LinkedIn',
    href: 'https://www.linkedin.com/company/awn-business/',
    Icon: Linkedin,
  },
  {
    id: 'x',
    label: 'AWN on X',
    href: 'https://x.com/sa_awn',
    Icon: XBrandIcon,
  },
] as const;

interface HeaderProps {
  lang: Language;
  content: SiteContent;
  currentPath?: string;
  onToggleLanguage: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectServiceCategory?: (category: NavServiceCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  currentPath = '/',
  onToggleLanguage,
  onNavigate,
  onSelectServiceCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const hoverTimeoutRef = useRef<number | null>(null);

  const serviceCategories = content.nav.serviceCategories;
  const isOnServiceRoute =
    currentPath === '/services' ||
    serviceCategories.some((cat) => cat.routePath === currentPath);

  const navItems: Array<
    | { type: 'link'; id: string; label: string; routePath?: string }
    | { type: 'dropdown'; id: 'services'; label: string; routePath: string }
  > = [
    { type: 'link', id: 'home', label: content.nav.home, routePath: '/' },
    { type: 'link', id: 'platforms', label: content.nav.platforms },
    { type: 'link', id: 'about', label: content.nav.about, routePath: '/about' },
    { type: 'dropdown', id: 'services', label: content.nav.services, routePath: '/services' },
    { type: 'link', id: 'process', label: content.nav.process },
    { type: 'link', id: 'contact', label: content.nav.contact, routePath: '/contact' },
  ];

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
          triggerButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handlePointerDownOutside);
    document.addEventListener('touchstart', handlePointerDownOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDownOutside);
      document.removeEventListener('touchstart', handlePointerDownOutside);
      document.removeEventListener('keydown', handleKeyDown);
      clearHoverTimeout();
    };
  }, [servicesDropdownOpen, mobileMenuOpen]);

  const handleDesktopMouseEnter = () => {
    clearHoverTimeout();
    setServicesDropdownOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleDropdownBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      dropdownContainerRef.current &&
      !dropdownContainerRef.current.contains(e.relatedTarget as Node)
    ) {
      setServicesDropdownOpen(false);
    }
  };

  const focusMenuItem = (index: number) => {
    const count = serviceCategories.length;
    if (count === 0) return;
    const normalizedIndex = ((index % count) + count) % count;
    window.requestAnimationFrame(() => {
      menuItemsRef.current[normalizedIndex]?.focus();
    });
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setServicesDropdownOpen(true);
      focusMenuItem(0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setServicesDropdownOpen(true);
      focusMenuItem(serviceCategories.length - 1);
    }
  };

  const handleMenuItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusMenuItem(index + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusMenuItem(index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusMenuItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusMenuItem(serviceCategories.length - 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setServicesDropdownOpen(false);
      triggerButtonRef.current?.focus();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    onNavigate(id);
  };

  const handleCategorySelect = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: NavServiceCategory
  ) => {
    e.preventDefault();
    setActiveCategoryId(category.id);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);

    if (onSelectServiceCategory) {
      onSelectServiceCategory(category);
    } else {
      onNavigate(category.sectionId);
    }
  };

  const isNavItemActive = (itemId: string): boolean => {
    if (itemId === 'about') {
      return currentPath === '/about';
    }
    if (itemId === 'contact') {
      return currentPath === '/contact';
    }
    if (itemId === 'home') {
      return currentPath === '/';
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8FAFA]/95 backdrop-blur-sm border-b border-[#E9E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-6">
        {/* Zone 1: Prominent Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, 'home')}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F87] rounded-lg shrink-0"
          aria-label="AWN Business Services - عون لخدمات الأعمال"
        >
          <BrandLogo variant="dark" />
        </a>

        {/* Zone 2: Balanced Single-Line Navigation with Services Dropdown */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-4 lg:gap-7 text-sm lg:text-[15px] font-medium text-[#24545A]"
        >
          {navItems.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <div
                  key={item.id}
                  ref={dropdownContainerRef}
                  className="relative"
                  onMouseEnter={handleDesktopMouseEnter}
                  onMouseLeave={handleDesktopMouseLeave}
                  onBlur={handleDropdownBlur}
                >
                  <button
                    ref={triggerButtonRef}
                    type="button"
                    data-nav-tab={item.id}
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                    aria-current={isOnServiceRoute ? 'page' : undefined}
                    aria-controls="awn-services-dropdown-menu"
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    onKeyDown={handleTriggerKeyDown}
                    className={`inline-flex items-center gap-1.5 py-1 border-b-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F87] ${
                      servicesDropdownOpen || isOnServiceRoute
                        ? 'text-[#087F87] border-[#087F87] font-semibold'
                        : 'text-[#24545A]/85 hover:text-[#087F87] border-transparent hover:border-[#087F87]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-[#087F87]' : 'text-[#24545A]/65'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Services Dropdown Panel */}
                  <div
                    id="awn-services-dropdown-menu"
                    role="menu"
                    aria-label={item.label}
                    className={`absolute top-full start-0 pt-3 w-72 z-50 transition-all duration-150 origin-top ${
                      servicesDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 -translate-y-1 pointer-events-none invisible'
                    }`}
                  >
                    <div className="bg-white border border-[#E9E5DC] rounded-xl shadow-lg shadow-[#24545A]/8 py-2 overflow-hidden">
                      <a
                        href="/services"
                        onClick={(e) => handleNavClick(e, '/services')}
                        className="block px-4 py-2 border-b border-[#E9E5DC]/70 bg-[#F8FAFA] hover:bg-[#E8F2F1]/60 transition-colors focus-visible:outline-none focus-visible:bg-[#E8F2F1]"
                      >
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#087F87]">
                          {item.label}
                        </span>
                      </a>

                      <div className="py-1 divide-y divide-[#E9E5DC]/50">
                        {serviceCategories.map((category, index) => {
                          const isActive =
                            currentPath === category.routePath ||
                            (currentPath === '/' && activeCategoryId === category.id);
                          const itemHref = category.routePath;
                          return (
                            <a
                              key={category.id}
                              ref={(el) => {
                                menuItemsRef.current[index] = el;
                              }}
                              role="menuitem"
                              tabIndex={servicesDropdownOpen ? 0 : -1}
                              href={itemHref}
                              data-service-id={category.id}
                              data-route={category.routePath}
                              onClick={(e) => handleCategorySelect(e, category)}
                              onKeyDown={(e) => handleMenuItemKeyDown(e, index)}
                              className={`group flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:bg-[#E8F2F1] focus-visible:text-[#087F87] ${
                                isActive
                                  ? 'bg-[#E8F2F1]/75 text-[#087F87] font-semibold'
                                  : 'text-[#24545A] hover:bg-[#E8F2F1] hover:text-[#087F87]'
                              }`}
                            >
                              <span className="leading-snug text-start">
                                {category.label}
                              </span>
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150 ${
                                  isActive
                                    ? 'bg-[#087F87] scale-100'
                                    : 'bg-[#D5B76A] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                                }`}
                                aria-hidden="true"
                              />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = isNavItemActive(item.id);
            const itemHref = item.routePath ?? `#${item.id}`;
            return (
              <a
                key={item.id}
                href={itemHref}
                data-nav-tab={item.id}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, item.routePath ?? item.id)}
                className={`py-1 border-b-2 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F87] ${
                  isActive
                    ? 'text-[#087F87] border-[#087F87] font-semibold'
                    : 'text-[#24545A]/85 hover:text-[#087F87] border-transparent hover:border-[#087F87]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Official Social Media Icons, Language Switch & Primary CTA */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <ul
            aria-label="Official Social Media Links"
            className="flex items-center gap-0.5 lg:gap-1 pe-1.5 lg:pe-2 border-e border-[#E9E5DC]"
          >
            {OFFICIAL_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 lg:w-8 lg:h-8 inline-flex items-center justify-center rounded-lg text-[#24545A]/80 hover:text-[#087F87] hover:bg-[#E8F2F1] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                >
                  <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              setServicesDropdownOpen(false);
              onToggleLanguage();
            }}
            className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-3.5 py-2 text-xs lg:text-sm font-medium text-[#24545A] hover:text-[#087F87] hover:bg-[#E8F2F1] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
            aria-label={`Switch language to ${content.switchLangLabel}`}
          >
            <Globe className="w-4 h-4 text-[#087F87]" aria-hidden="true" />
            <span>{content.switchLangLabel}</span>
          </button>

          <a
            href="#appointment"
            onClick={(e) => handleNavClick(e, 'appointment')}
            className="inline-flex items-center justify-center px-4 lg:px-5 py-2.5 text-xs lg:text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
          >
            {content.nav.primaryCta}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileServicesOpen(false);
              onToggleLanguage();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#24545A] bg-[#E8F2F1] hover:bg-[#087F87]/15 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            aria-label={`Switch language to ${content.switchLangLabel}`}
          >
            <Globe className="w-3.5 h-3.5 text-[#087F87]" aria-hidden="true" />
            <span>{content.switchLangLabel}</span>
          </button>

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((prev) => {
                const next = !prev;
                if (!next) setMobileServicesOpen(false);
                return next;
              })
            }
            className="p-2.5 text-[#24545A] hover:bg-[#E8F2F1] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8FAFA] border-b border-[#E9E5DC] px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      type="button"
                      data-nav-tab={item.id}
                      aria-expanded={mobileServicesOpen}
                      aria-current={isOnServiceRoute ? 'page' : undefined}
                      aria-controls="awn-mobile-services-submenu"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 text-base font-medium rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                        mobileServicesOpen || isOnServiceRoute
                          ? 'bg-[#E8F2F1] text-[#087F87] font-semibold'
                          : 'text-[#24545A] hover:text-[#087F87] hover:bg-[#E8F2F1]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180 text-[#087F87]' : 'text-[#24545A]/70'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div
                        id="awn-mobile-services-submenu"
                        className="ms-3 ps-3 border-s-2 border-[#087F87]/30 space-y-1 py-1"
                      >
                        <a
                          href="/services"
                          onClick={(e) => handleNavClick(e, '/services')}
                          className={`block px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                            currentPath === '/services'
                              ? 'bg-[#E8F2F1] text-[#087F87]'
                              : 'text-[#087F87] hover:bg-[#E8F2F1]/70'
                          }`}
                        >
                          {item.label}
                        </a>
                        {serviceCategories.map((category) => {
                          const isActive =
                            currentPath === category.routePath ||
                            (currentPath === '/' && activeCategoryId === category.id);
                          const itemHref = category.routePath;
                          return (
                            <a
                              key={category.id}
                              href={itemHref}
                              data-service-id={category.id}
                              data-route={category.routePath}
                              onClick={(e) => handleCategorySelect(e, category)}
                              className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                                isActive
                                  ? 'bg-[#E8F2F1] text-[#087F87] font-semibold'
                                  : 'text-[#24545A]/90 hover:text-[#087F87] hover:bg-[#E8F2F1]/70'
                              }`}
                            >
                              {category.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = isNavItemActive(item.id);
              const itemHref = item.routePath ?? `#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={itemHref}
                  data-nav-tab={item.id}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, item.routePath ?? item.id)}
                  className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                    isActive
                      ? 'bg-[#E8F2F1] text-[#087F87] font-semibold'
                      : 'text-[#24545A] hover:text-[#087F87] hover:bg-[#E8F2F1]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E9E5DC] space-y-3">
            <ul
              aria-label="Official Social Media Links"
              className="flex items-center justify-center gap-2"
            >
              {OFFICIAL_SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#24545A] bg-[#E8F2F1]/70 hover:bg-[#087F87] hover:text-[#F8FAFA] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F87]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, 'appointment')}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#F8FAFA] bg-[#087F87] hover:bg-[#24545A] rounded-lg transition-colors"
            >
              {content.nav.primaryCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
