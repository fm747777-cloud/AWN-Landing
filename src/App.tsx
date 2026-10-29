/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutPage } from './components/AboutPage';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { BusinessSetupPage } from './components/BusinessSetupPage';
import { ContactPage } from './components/ContactPage';
import { EmployeeCompliancePage } from './components/EmployeeCompliancePage';
import { Footer } from './components/Footer';
import { GovernmentRelationsPage } from './components/GovernmentRelationsPage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HrManagementPage } from './components/HrManagementPage';
import { PackagesSection } from './components/PackagesSection';
import { PlatformsSection } from './components/PlatformsSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesPage } from './components/ServicesPage';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowHubSection } from './components/WorkflowHubSection';
import { CONTENT, Language, NavServiceCategory } from './data/content';

const normalizePathname = (pathname: string): string => {
  if (pathname === '/about' || pathname === '/about/') {
    return '/about';
  }
  if (pathname === '/contact' || pathname === '/contact/') {
    return '/contact';
  }
  if (pathname === '/services' || pathname === '/services/') {
    return '/services';
  }
  if (pathname === '/business-setup-services' || pathname === '/business-setup-services/') {
    return '/business-setup-services';
  }
  if (
    pathname === '/government-employees-services' ||
    pathname === '/government-employees-services/'
  ) {
    return '/government-employees-services';
  }
  if (
    pathname === '/government-relation-services' ||
    pathname === '/government-relation-services/'
  ) {
    return '/government-relation-services';
  }
  if (
    pathname === '/hr-management-services' ||
    pathname === '/hr-management-services/'
  ) {
    return '/hr-management-services';
  }
  return '/';
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePathname(window.location.pathname)
  );
  const [preselectedSubject, setPreselectedSubject] = useState<string>('');
  const [pendingScrollSection, setPendingScrollSection] = useState<string | null>(null);

  const content = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content.dir;
  }, [lang, content.dir]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Execute pending scroll once homepage sections are mounted after route transition
  useEffect(() => {
    if (currentPath === '/' && pendingScrollSection) {
      const targetId = pendingScrollSection;
      setPendingScrollSection(null);
      window.requestAnimationFrame(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [currentPath, pendingScrollSection]);

  const navigateToPath = (path: string) => {
    const normalized = normalizePathname(path);
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
  };

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
    setPreselectedSubject('');
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about' || sectionId === '/about') {
      navigateToPath('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'contact' || sectionId === '/contact') {
      navigateToPath('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'services' || sectionId === '/services') {
      navigateToPath('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home' || sectionId === '/') {
      if (currentPath !== '/') {
        navigateToPath('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPath !== '/') {
      navigateToPath('/');
      setPendingScrollSection(sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceCategory = (category: NavServiceCategory) => {
    if (
      category.id === 'business-setup-services' ||
      category.id === 'government-employees-services' ||
      category.id === 'government-relation-services' ||
      category.id === 'hr-management-services'
    ) {
      navigateToPath(category.routePath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(category.sectionId);
    }
  };

  const handleSelectServiceOrPackage = (serviceTitle: string) => {
    setPreselectedSubject(serviceTitle);
    scrollToSection('appointment');
  };

  return (
    <div
      dir={content.dir}
      className="min-h-screen flex flex-col bg-[#F8FAFA] text-[#24545A]"
    >
      <Header
        lang={lang}
        content={content}
        currentPath={currentPath}
        onToggleLanguage={handleToggleLanguage}
        onNavigate={scrollToSection}
        onSelectServiceCategory={handleSelectServiceCategory}
      />

      <main className="flex-1">
        {currentPath === '/about' ? (
          <AboutPage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToServices={() => scrollToSection('/services')}
            onSelectServiceRoute={(routePath) => {
              navigateToPath(routePath);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={(subject) => {
              if (subject) {
                setPreselectedSubject(subject);
              }
              scrollToSection('/contact');
            }}
          />
        ) : currentPath === '/contact' ? (
          <ContactPage
            lang={lang}
            content={content}
            preselectedSubject={preselectedSubject}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToServices={() => scrollToSection('/services')}
            onNavigateToPricing={() => scrollToSection('packages')}
          />
        ) : currentPath === '/services' ? (
          <ServicesPage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onSelectServiceRoute={(routePath) => {
              navigateToPath(routePath);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={(subject) => {
              if (subject) {
                setPreselectedSubject(subject);
              }
              scrollToSection('appointment');
            }}
          />
        ) : currentPath === '/business-setup-services' ? (
          <BusinessSetupPage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={() => {
              setPreselectedSubject(content.businessSetupPage.pageTitle);
              scrollToSection('appointment');
            }}
          />
        ) : currentPath === '/government-employees-services' ? (
          <EmployeeCompliancePage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={() => {
              setPreselectedSubject(content.employeeCompliancePage.pageTitle);
              scrollToSection('appointment');
            }}
          />
        ) : currentPath === '/government-relation-services' ? (
          <GovernmentRelationsPage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={() => {
              setPreselectedSubject(content.governmentRelationPage.pageTitle);
              scrollToSection('appointment');
            }}
          />
        ) : currentPath === '/hr-management-services' ? (
          <HrManagementPage
            lang={lang}
            content={content}
            onNavigateHome={() => scrollToSection('home')}
            onNavigateToPricing={() => scrollToSection('packages')}
            onNavigateToContact={() => {
              setPreselectedSubject(content.hrManagementPage.pageTitle);
              scrollToSection('appointment');
            }}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              lang={lang}
              content={content}
              onPrimaryAction={() => scrollToSection('packages')}
              onSecondaryAction={() => scrollToSection('appointment')}
            />

            {/* 2. Dedicated Official Saudi Government Platforms Marquee Section (Pale Teal #E8F2F1) */}
            <PlatformsSection lang={lang} content={content} />

            {/* 3. Relocated Administrative Workflow Hub ("منظومة الربط والمتابعة الإدارية") (White #F8FAFA) */}
            <WorkflowHubSection
              lang={lang}
              content={content}
              onActionClick={() => scrollToSection('appointment')}
            />

            {/* 4. Core Services Interactive Editorial Showcase (White #F8FAFA) */}
            <ServicesSection
              lang={lang}
              content={content}
              onSelectServiceForAppointment={handleSelectServiceOrPackage}
            />

            {/* 5. About AWN & Value Proposition Section (Pale Teal #E8F2F1) */}
            <AboutSection
              lang={lang}
              content={content}
              onContactClick={() => scrollToSection('appointment')}
            />

            {/* 6. Customized Service Tracks / Packages Section (White #F8FAFA) */}
            <PackagesSection
              lang={lang}
              content={content}
              onSelectPackage={handleSelectServiceOrPackage}
            />

            {/* 7. Five-Step Connected Process Timeline (Pale Teal #E8F2F1) */}
            <ProcessSection lang={lang} content={content} />

            {/* 8. Free Business Appointment Form Section (White #F8FAFA) */}
            <AppointmentSection
              lang={lang}
              content={content}
              preselectedSubject={preselectedSubject}
            />
          </>
        )}
      </main>

      {/* 9. Footer (Deep Teal #24545A with Restrained Gold #D5B76A Accents) */}
      <Footer
        lang={lang}
        content={content}
        onNavigate={scrollToSection}
        onSelectService={(serviceLabel) => {
          const matchedCategory = content.nav.serviceCategories.find(
            (c) =>
              (c.id === 'business-setup-services' ||
                c.id === 'government-employees-services' ||
                c.id === 'government-relation-services' ||
                c.id === 'hr-management-services') &&
              c.label === serviceLabel
          );
          if (matchedCategory) {
            handleSelectServiceCategory(matchedCategory);
          } else {
            handleSelectServiceOrPackage(serviceLabel);
          }
        }}
      />
    </div>
  );
}


