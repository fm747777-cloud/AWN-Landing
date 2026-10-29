export type Language = 'ar' | 'en';

export interface ServiceItem {
  id: string;
  iconKey: 'compliance' | 'setup' | 'consulting' | 'employees' | 'hr' | 'other';
  title: string;
  shortDesc: string;
  linkLabel: string;
  scopePoints: string[];
  platformsCovered: string[];
  platformIds: string[];
}

export interface PackagePlan {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PlatformPartner {
  id: string;
  name: string;
  category: string;
  url: string;
  code: string;
  logoSrc: string;
}

export interface HeroWorkflowNode {
  id: string;
  stepIndex: string;
  title: string;
  subtitle: string;
  activePortals: string[];
  outcomeLabel: string;
}

export interface NavServiceCategory {
  id: string;
  label: string;
  routePath: string;
  sectionId: string;
}

export interface SiteContent {
  dir: 'rtl' | 'ltr';
  langName: string;
  switchLangLabel: string;
  nav: {
    home: string;
    platforms: string;
    services: string;
    about: string;
    process: string;
    packages: string;
    contact: string;
    primaryCta: string;
    serviceCategories: NavServiceCategory[];
  };
  hero: {
    kicker: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    trustItems: string[];
    visualHeaderLabel: string;
    visualTitle: string;
    visualSubtitle: string;
    workflowNodes: HeroWorkflowNode[];
    connectedPortalsLabel: string;
  };
  platformsSection: {
    kicker: string;
    headingCount: string;
    headingTitle: string;
    supportingText: string;
    disclaimerText: string;
    pauseHint: string;
    staticToggleLabel: string;
    marqueeToggleLabel: string;
  };
  platforms: PlatformPartner[];
  servicesSection: {
    kicker: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    modalScopeTitle: string;
    modalPlatformsTitle: string;
    modalSelectCta: string;
    modalCloseLabel: string;
    items: ServiceItem[];
  };
  aboutSection: {
    bannerTitle: string;
    bannerText: string;
    bannerCta: string;
    kicker: string;
    title: string;
    description: string;
    secondaryDescription: string;
    highlights: string[];
    pillars: {
      title: string;
      description: string;
    }[];
    ctaLabel: string;
    visualCardTitle: string;
    visualCardSubtitle: string;
    visualCheckpoints: {
      label: string;
      status: string;
    }[];
  };
  packagesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAllLabel: string;
    plans: PackagePlan[];
  };
  processSection: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  appointmentSection: {
    kicker: string;
    title: string;
    subtitle: string;
    contactDirectTitle: string;
    contactDirectNote: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      subjectOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
    };
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      subjectRequired: string;
      messageRequired: string;
    };
    submitButton: string;
    readyState: {
      heading: string;
      description: string;
      sendEmailButton: string;
      copyButton: string;
      copiedLabel: string;
      editButton: string;
    };
  };
  footer: {
    brandDescription: string;
    parentCompanyNote: string;
    contactCards: {
      callTitle: string;
      callValue: string;
      emailTitle: string;
      emailValue: string;
      locationTitle: string;
      locationValue: string;
      paymentTitle: string;
      paymentValue: string;
    };
    quickLinksTitle: string;
    quickLinks: { label: string; href: string }[];
    servicesTitle: string;
    serviceLinks: { label: string; serviceId: string }[];
    subscribeTitle: string;
    subscribeDesc: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    subscribeSuccess: string;
    subscribeError: string;
    copyright: string;
  };
  businessSetupPage: {
    introTab: string;
    pageTitle: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
    heroImageSrc: string;
    heroImageAlt: string;
    servicesHeading: string;
    servicesSubtitle: string;
    servicesList: {
      id: string;
      number: string;
      title: string;
      iconKey:
        | 'trade-name'
        | 'cr'
        | 'chamber'
        | 'address'
        | 'gosi'
        | 'zatca'
        | 'vat'
        | 'qiwa'
        | 'hrdf'
        | 'muqeem';
      platformLogoSrc?: string;
      platformName?: string;
    }[];
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
    whyAwn: {
      heading: string;
      paragraph1: string;
      highlightBullet: string;
      paragraph2: string;
    };
    expertBenefits: {
      heading: string;
      subheading: string;
      imageSrc: string;
      imageAlt: string;
      indicators: {
        id: string;
        label: string;
      }[];
    };
    faq: {
      kicker: string;
      heading: string;
      items: {
        id: string;
        question: string;
        answer: string[];
      }[];
    };
  };
  employeeCompliancePage: {
    introTab: string;
    pageTitle: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
    heroImageSrc: string;
    heroImageAlt: string;
    servicesHeading: string;
    servicesSubtitle: string;
    servicesList: {
      id: string;
      number: string;
      title: string;
      iconKey:
        | 'hrdf'
        | 'gosi'
        | 'absher'
        | 'muqeem'
        | 'qiwa'
        | 'mudad'
        | 'medical';
    }[];
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
    whyAwn: {
      heading: string;
      paragraph1: string;
      highlightBullet: string;
      paragraph2: string;
    };
    benefitsSection: {
      kicker: string;
      heading: string;
      points: {
        id: string;
        label: string;
      }[];
    };
    faq: {
      kicker: string;
      heading: string;
      items: {
        id: string;
        question: string;
        answer: string[];
      }[];
    };
  };
  governmentRelationPage: {
    introTab: string;
    pageTitle: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
    heroImageSrc: string;
    heroImageAlt: string;
    servicesHeading: string;
    servicesSubtitle: string;
    servicesList: {
      id: string;
      number: string;
      title: string;
      iconKey:
        | 'mc'
        | 'chamber'
        | 'misa'
        | 'balady'
        | 'zatca'
        | 'civil-defense'
        | 'spl';
    }[];
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
    whyAwn: {
      heading: string;
      paragraph1: string;
      highlightBullet: string;
      paragraph2: string;
    };
    expertBenefits: {
      heading: string;
      subheading: string;
      points: {
        id: string;
        label: string;
      }[];
    };
    faq: {
      kicker: string;
      heading: string;
      items: {
        id: string;
        question: string;
        answer: string[];
      }[];
    };
  };
  hrManagementPage: {
    introTab: string;
    pageTitle: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
    heroImageSrc: string;
    heroImageAlt: string;
    employeeNetwork: {
      items: {
        id: string;
        name?: string;
        role: string;
        gender: 'male' | 'female';
        statusText: string;
        tag: string;
      }[];
    };
    servicesHeading: string;
    servicesSubtitle: string;
    servicesList: {
      id: string;
      number: string;
      title: string;
      shortDesc?: string;
      iconKey:
        | 'files'
        | 'payroll'
        | 'attendance'
        | 'gosi'
        | 'platforms'
        | 'settlement'
        | 'policies';
    }[];
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
    whyAwn: {
      heading: string;
      paragraph1: string;
      highlightBullet: string;
      paragraph2: string;
    };
    expertBenefits: {
      heading: string;
      subheading: string;
      points: {
        id: string;
        label: string;
      }[];
    };
    faq: {
      kicker: string;
      heading: string;
      items: {
        id: string;
        question: string;
        answer: string[];
      }[];
    };
  };
  servicesPage: {
    breadcrumbHome: string;
    pageTitle: string;
    introKicker: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    overviewHighlights: string[];
    categoriesSection: {
      kicker: string;
      heading: string;
      subtitle: string;
      deliverablesHeading: string;
      categories: {
        id:
          | 'business-setup-services'
          | 'government-employees-services'
          | 'government-relation-services'
          | 'hr-management-services';
        number: string;
        title: string;
        subtitle: string;
        description: string;
        routePath: string;
        iconKey: 'setup' | 'employees' | 'compliance' | 'hr';
        subServices: string[];
        valuePillars: string[];
        ctaLabel: string;
      }[];
    };
    advisorySection: {
      kicker: string;
      heading: string;
      subtitle: string;
      ctaLabel: string;
      items: {
        id: string;
        iconKey: 'consulting' | 'other';
        title: string;
        description: string;
        points: string[];
      }[];
    };
    expertBenefits: {
      kicker: string;
      heading: string;
      subtitle: string;
      points: {
        id: string;
        label: string;
      }[];
    };
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
  };
  aboutPage: {
    breadcrumbHome: string;
    pageTitle: string;
    introKicker: string;
    parentCompanyNote: string;
    heroTitle: string;
    heroDescription: string;
    heroSecondaryDescription: string;
    primaryCta: string;
    secondaryCta: string;
    storySection: {
      kicker: string;
      heading: string;
      paragraph1: string;
      paragraph2: string;
      highlights: string[];
      pillars: {
        id: 'confidence' | 'hassle-free';
        title: string;
        description: string;
      }[];
    };
    missionVisionSection: {
      kicker: string;
      heading: string;
      mission: {
        label: string;
        title: string;
        description: string;
      };
      vision: {
        label: string;
        title: string;
        description: string;
      };
    };
    valuesSection: {
      kicker: string;
      heading: string;
      subtitle: string;
      values: {
        id: string;
        iconKey: 'shield' | 'users' | 'clock' | 'bell' | 'folder' | 'value';
        title: string;
        description: string;
      }[];
    };
    governanceLedger: {
      kicker: string;
      title: string;
      subtitle: string;
      checkpoints: {
        label: string;
        status: string;
      }[];
    };
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    supportCard: {
      kicker: string;
      headingStart: string;
      headingHighlight: string;
      supportingText: string;
      ctaLabel: string;
    };
  };
  contactPage: {
    breadcrumbHome: string;
    pageTitle: string;
    introKicker: string;
    parentCompanyNote: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    primaryCta: string;
    secondaryCta: string;
    directLedger: {
      kicker: string;
      title: string;
      subtitle: string;
      items: {
        label: string;
        value: string;
        href?: string;
        isLtr?: boolean;
      }[];
    };
    channelsSection: {
      kicker: string;
      heading: string;
      subtitle: string;
      callCard: {
        title: string;
        description: string;
        unifiedLabel: string;
        unifiedNumber: string;
        unifiedHref: string;
        mobileLabel: string;
        mobileNumber: string;
        mobileHref: string;
      };
      emailCard: {
        title: string;
        description: string;
        emailLabel: string;
        emailValue: string;
        emailHref: string;
        responseNote: string;
      };
      locationCard: {
        title: string;
        description: string;
        addressLabel: string;
        addressValue: string;
        mapLinkLabel: string;
        mapLinkHref: string;
      };
      hoursCard: {
        title: string;
        description: string;
        daysLabel: string;
        daysValue: string;
        timeLabel: string;
        timeValue: string;
      };
    };
    formSection: {
      kicker: string;
      heading: string;
      subtitle: string;
      requiredNote: string;
    };
    locationPanel: {
      kicker: string;
      heading: string;
      description: string;
      addressTitle: string;
      addressValue: string;
      cityValue: string;
      workingHoursTitle: string;
      workingHoursValue: string;
      paymentTitle: string;
      paymentValue: string;
      mapCtaLabel: string;
      mapUrl: string;
    };
    joinCard: {
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
    servicesCard: {
      kicker: string;
      heading: string;
      supportingText: string;
      ctaLabel: string;
    };
  };
}

export const CONTENT: Record<Language, SiteContent> = {
  ar: {
    dir: 'rtl',
    langName: 'العربية',
    switchLangLabel: 'English',
    nav: {
      home: 'الرئيسية',
      platforms: 'المنصات الحكومية',
      services: 'خدماتنا',
      about: 'من نحن',
      packages: 'الباقات',
      process: 'كيف نعمل',
      contact: 'تواصل معنا',
      primaryCta: 'احجز موعد عمل',
      serviceCategories: [
        {
          id: 'business-setup-services',
          label: 'خدمات تأسيس عملك التجاري',
          routePath: '/business-setup-services',
          sectionId: 'services',
        },
        {
          id: 'government-employees-services',
          label: 'خدمات الالتزام بمتطلبات العاملين',
          routePath: '/government-employees-services',
          sectionId: 'services',
        },
        {
          id: 'government-relation-services',
          label: 'خدمات الالتزام بالمتطلبات الحكومية',
          routePath: '/government-relation-services',
          sectionId: 'services',
        },
        {
          id: 'hr-management-services',
          label: 'خدمات إدارة الموارد البشرية',
          routePath: '/hr-management-services',
          sectionId: 'services',
        },
      ],
    },
    hero: {
      kicker: 'بناء نجاحك · خدمات الأعمال والعلاقات الحكومية',
      headlineStart: 'ركّز بشكل أكبر على عملك التجاري بشراكتك مع',
      headlineHighlight: 'عون',
      headlineEnd: '',
      supportingText:
        'نحن نعمل على تسهيل الأمور. ندير كافة خدمات تأسيس الأعمال، والالتزام بالمتطلبات الحكومية ومتطلبات العاملين، وإدارة الموارد البشرية في المملكة العربية السعودية عبر نافذة إدارية واحدة.',
      primaryCta: 'انضم إلينا',
      secondaryCta: 'احصل على موعد عمل مجاني',
      trustItems: [
        'تأسيس الشركات والسجلات التجارية',
        'إدارة الالتزام الحكومي والعاملين',
        'حلول الموارد البشرية والاستشارات',
      ],
      visualHeaderLabel: 'منظومة الربط والمتابعة الإدارية',
      visualTitle: 'إدارة متكاملة لرحلة منشأتك عبر المنصات الحكومية',
      visualSubtitle: 'اختر مسار العمل لاستعراض آلية المتابعة والتنفيذ في عون:',
      workflowNodes: [
        {
          id: 'setup',
          stepIndex: '01',
          title: 'تأسيس العمل التجاري',
          subtitle: 'إصدار السجل التجاري وتفعيل ملفات المنشأة الرسمية',
          activePortals: ['mc', 'gosi', 'qiwa', 'spl'],
          outcomeLabel: 'تأسيس نظامي متكامل وجاهزية للتشغيل',
        },
        {
          id: 'gov-compliance',
          stepIndex: '02',
          title: 'الالتزام بالمتطلبات الحكومية',
          subtitle: 'تجديد التراخيص ومتابعة المتطلبات النظامية بشكل استباقي',
          activePortals: ['mc', 'hrsd', 'absher', 'moi', 'spl'],
          outcomeLabel: 'استمرارية الأعمال دون غرامات أو تعطل',
        },
        {
          id: 'employee-hr',
          stepIndex: '03',
          title: 'الالتزام بالعاملين والموارد البشرية',
          subtitle: 'إدارة العقود، رخص العمل، التأمينات، وحماية الأجور',
          activePortals: ['qiwa', 'muqeem', 'gosi', 'mudad', 'hrdf'],
          outcomeLabel: 'انتظام ملفات الموظفين والرواتب والتوطين',
        },
      ],
      connectedPortalsLabel: 'المنصات الحكومية المشمولة في هذا المسار:',
    },
    platformsSection: {
      kicker: 'منظومة الأعمال الحكومية',
      headingCount: '+10',
      headingTitle: 'منصات حكومية نتعامل معها لإدارة متطلبات منشأتك',
      supportingText:
        'يتولى خبراء عون متابعة وإنجاز معاملات منشأتك عبر المنصات الحكومية الرسمية في المملكة العربية السعودية بعد إتمام التفويض النظامي.',
      disclaimerText:
        'جميع الشعارات المعروضة هي علامات رسمية مملوكة للجهات والمنصات الحكومية المعنية، وتُعرض لتوضيح نطاق خدمات المتابعة الإدارية والتفويض.',
      pauseHint: 'مرّر المؤشر أو ركّز لإيقاف الحركة',
      staticToggleLabel: 'عرض شبكي ثابت',
      marqueeToggleLabel: 'عرض الشريط المتحرك',
    },
    platforms: [
      {
        id: 'qiwa',
        name: 'منصة قوى',
        category: 'قطاع الأعمال ومنظومة العمل',
        url: 'https://www.qiwa.sa/',
        code: 'QIWA',
        logoSrc: '/assets/official/qiwa.png',
      },
      {
        id: 'muqeem',
        name: 'بوابة مقيم',
        category: 'خدمات الجوازات والإقامات للمنشآت',
        url: 'https://muqeem.sa/',
        code: 'MUQEEM',
        logoSrc: '/assets/official/muqeem.png',
      },
      {
        id: 'hrsd',
        name: 'وزارة الموارد البشرية والتنمية الاجتماعية',
        category: 'الأنظمة واللوائح العمالية',
        url: 'https://www.hrsd.gov.sa/',
        code: 'MHRSD',
        logoSrc: '/assets/official/mhrsd.png',
      },
      {
        id: 'gosi',
        name: 'المؤسسة العامة للتأمينات الاجتماعية',
        category: 'تسجيل والتزام العاملين',
        url: 'https://www.gosi.gov.sa/',
        code: 'GOSI',
        logoSrc: '/assets/official/gosi.png',
      },
      {
        id: 'mc',
        name: 'وزارة التجارة',
        category: 'السجلات التجارية وتأسيس الشركات',
        url: 'https://mc.gov.sa/',
        code: 'MC',
        logoSrc: '/assets/official/mc.png',
      },
      {
        id: 'mudad',
        name: 'منصة مدد',
        category: 'الالتزام بحماية الأجور والرواتب',
        url: 'https://mudad.com.sa/',
        code: 'MUDAD',
        logoSrc: '/assets/official/mudad.svg',
      },
      {
        id: 'absher',
        name: 'أبشر أعمال',
        category: 'الخدمات الإلكترونية لأصحاب الأعمال',
        url: 'https://www.absher.sa/wps/portal/business/Home',
        code: 'ABSHER',
        logoSrc: '/assets/official/absher-business.jpg',
      },
      {
        id: 'spl',
        name: 'سبل · البريد السعودي',
        category: 'العنوان الوطني للمنشآت التجارية',
        url: 'https://splonline.com.sa',
        code: 'SPL',
        logoSrc: '/assets/official/spl.png',
      },
      {
        id: 'hrdf',
        name: 'صندوق تنمية الموارد البشرية (هدف)',
        category: 'برامج دعم التوظيف والتوطين',
        url: 'https://www.hrdf.org.sa/',
        code: 'HRDF',
        logoSrc: '/assets/official/hrdf.png',
      },
      {
        id: 'moi',
        name: 'وزارة الداخلية',
        category: 'الخدمات والتراخيص الرسمية',
        url: 'https://www.moi.gov.sa',
        code: 'MOI',
        logoSrc: '/assets/official/moi.png',
      },
    ],
    servicesSection: {
      kicker: 'خدماتنا الأساسية',
      titleStart: 'ركز على عملك التجاري : دع',
      titleHighlight: 'عون',
      titleEnd: 'يدعم رحلة مشروعك',
      subtitle:
        'حلول متكاملة ومصممة لتلبية الاحتياجات الإدارية والتنظيمية للمنشآت في المملكة العربية السعودية بدقة وموثوقية.',
      modalScopeTitle: 'نطاق العمل ومخرجات الخدمة:',
      modalPlatformsTitle: 'المنصات الحكومية المرتبطة بهذه الخدمة:',
      modalSelectCta: 'احجز موعداً لهذه الخدمة',
      modalCloseLabel: 'إغلاق',
      items: [
        {
          id: 'government-relation-services',
          iconKey: 'compliance',
          title: 'خدمات الالتزام بالمتطلبات الحكومية',
          shortDesc:
            'إدارة شاملة لكافة معاملات العلاقات الحكومية وتجديد التراخيص والسجلات لضمان استمرارية أعمالك دون عوائق تنظيمية.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'متابعة وتجديد السجلات التجارية واشتراكات الغرف التجارية',
            'إدارة ملف المنشأة لدى وزارة الموارد البشرية والتنمية الاجتماعية',
            'التنسيق المباشر من خلال مدير حساب متخصص لمعالجة المعاملات الرسمية',
            'تنبيهات استباقية قبل انتهاء التراخيص والوثائق النظامية',
          ],
          platformsCovered: ['وزارة التجارة', 'منصة قوى', 'سبل (العنوان الوطني)', 'أبشر أعمال'],
          platformIds: ['mc', 'qiwa', 'spl', 'absher', 'hrsd'],
        },
        {
          id: 'business-setup-services',
          iconKey: 'setup',
          title: 'خدمات تأسيس عملك التجاري',
          shortDesc:
            'مرافقة متكاملة من الفكرة حتى الإطلاق الرسمي، تشمل حجز الاسم التجاري وإصدار السجل وتفعيل حسابات المنصات الحكومية.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'حجز الاسم التجاري وإصدار السجل التجاري وعقد التأسيس',
            'تفعيل اشتراك الغرفة التجارية وتسجيل العنوان الوطني للمنشأة',
            'فتح وتفعيل ملفات المنشأة في التأمينات الاجتماعية وقوى ومقيم',
            'إرشادات متكاملة لمتطلبات فتح الحساب البنكي التجاري',
          ],
          platformsCovered: ['وزارة التجارة', 'التأمينات الاجتماعية', 'منصة قوى', 'سبل'],
          platformIds: ['mc', 'gosi', 'qiwa', 'spl', 'muqeem'],
        },
        {
          id: 'government-employees-services',
          iconKey: 'employees',
          title: 'خدمات الالتزام بمتطلبات العاملين',
          shortDesc:
            'إدارة كافة الإجراءات النظامية الخاصة بالموظفين من عقود العمل والتأمينات والإقامات والتنبيهات الدورية.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'توثيق وإدارة عقود العمل عبر منصة قوى والتأمينات الاجتماعية',
            'إصدار وتجديد رخص العمل والإقامات والتأشيرات عبر مقيم وأبشر أعمال',
            'مراقبة مستمرة وإشعارات مبكرة لكافة مستندات الموظفين',
            'متابعة متطلبات حماية الأجور عبر منصة مدد',
          ],
          platformsCovered: ['منصة قوى', 'بوابة مقيم', 'التأمينات الاجتماعية', 'منصة مدد'],
          platformIds: ['qiwa', 'muqeem', 'gosi', 'mudad', 'absher'],
        },
        {
          id: 'hr-management-services',
          iconKey: 'hr',
          title: 'خدمات إدارة الموارد البشرية',
          shortDesc:
            'حلول موارد بشرية مرنة ومصممة حسب حجم منشأتك لتنظيم شؤون الموظفين والسياسات الداخلية بكفاءة عالية.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'تنظيم ملفات الموظفين وإجراءات المباشرة وإخلاء الطرف',
            'إعداد ومراجعة لوائح تنظيم العمل المعتمدة',
            'الاستفادة من برامج الدعم والتوطين عبر صندوق هدف',
            'تقارير دورية ولوحة معلومات واضحة لأصحاب القرار',
          ],
          platformsCovered: ['منصة قوى', 'صندوق هدف (HRDF)', 'منصة مدد', 'التأمينات الاجتماعية'],
          platformIds: ['qiwa', 'hrdf', 'mudad', 'gosi', 'hrsd'],
        },
        {
          id: 'consulting-services',
          iconKey: 'consulting',
          title: 'خدمات استشارية',
          shortDesc:
            'إرشادات متخصصة في اللوائح والأنظمة السعودية لمساعدة أصحاب الأعمال على اتخاذ قرارات إدارية وتنظيمية سليمة.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'مراجعة وضع الالتزام الحالي للمنشأة وتحديد الفجوات التنظيمية',
            'تقديم توصيات عملية للتوافق مع أنظمة العمل والتوطين',
            'جلسات توضيحية مع خبراء العلاقات الحكومية والموارد البشرية',
            'خطط عمل مخصصة لتخفيف المخاطر وتوفير الوقت والتكاليف',
          ],
          platformsCovered: ['وزارة الموارد البشرية', 'منصة قوى', 'هدف', 'التأمينات الاجتماعية'],
          platformIds: ['hrsd', 'qiwa', 'hrdf', 'gosi', 'mc'],
        },
        {
          id: 'other-services',
          iconKey: 'other',
          title: 'خدمات أخرى مضافة',
          shortDesc:
            'باقة من الخدمات الإدارية المساندة عند الطلب لتلبية الاحتياجات الخاصة والطارئة لمنشأتك في مختلف المراحل.',
          linkLabel: 'استعراض نطاق الخدمة',
          scopePoints: [
            'خدمات المعاملات الحكومية المفردة على الطلب',
            'تحديث بيانات المنشآت والتراخيص الفرعية',
            'معالجة الطلبات الروتينية والطارئة عبر القنوات الرسمية',
            'دعم مخصص للشركات الناشئة والمنشآت الصغيرة والمتوسطة',
          ],
          platformsCovered: ['كافة المنصات الحكومية المرتبطة بقطاع الأعمال'],
          platformIds: ['mc', 'qiwa', 'muqeem', 'moi', 'spl'],
        },
      ],
    },
    aboutSection: {
      bannerTitle: 'نحن على استعداد لدعمك للوصول إلى مستويات قياسية جديدة',
      bannerText:
        'يدعمك فريقنا ذو الخبرة من خلال المتطلبات التنظيمية والمعقدة، مما يوفر لك الوقت، ويخفف المخاطر، ويطلق العنان لإمكانياتك الكاملة.',
      bannerCta: 'ابقى على تواصل',
      kicker: 'من نحن · انضم إلينا',
      title: 'كن دائماً متوافقاً مع المتطلبات الحكومية',
      description:
        'يمكن أن يكون التعامل مع اللوائح الحكومية مرهقًا ويستغرق الكثير من الوقت. دعنا ندير كل خدمات العلاقات الحكومية في مكان واحد، حتى تتمكن من التركيز على تشغيل مشروعك بسلاسة.',
      secondaryDescription:
        'مديرو الحسابات لدينا خبراء في التعامل مع الجهات والتنظيمات الحكومية، مما يضمن معالجة أوراقك الرسمية بكفاءة وفعالية. ودّع تعاملك المباشر مع تعقيدات تسجيل الموظفين والعمليات الروتينية الأخرى مع عون.',
      highlights: [
        'خبرة وتوجيهات استثنائية للحصول على أفضل قيمة',
        'التذكيرات والإجراءات الآلية',
      ],
      pillars: [
        {
          title: 'إدارة عملك بثقة',
          description: 'تضمن عون أن عملك يلبي جميع المتطلبات الحكومية والتراخيص القانونية.',
        },
        {
          title: 'تجربة خالية من المتاعب',
          description: 'شريك موثوق به لجميع خدمات العلاقات الحكومية المتعلقة بعملك.',
        },
      ],
      ctaLabel: 'احجز استشارة مجانية',
      visualCardTitle: 'إدارة حسابات الأعمال في مكان واحد',
      visualCardSubtitle: 'إشراف مباشر من فريق متخصص في الأنظمة السعودية',
      visualCheckpoints: [
        { label: 'التراخيص والسجلات التجارية', status: 'متابعة مستمرة' },
        { label: 'الالتزام بمتطلبات قوى والتأمينات ومدد', status: 'تحديث منتظم' },
        { label: 'تذكيرات آلية قبل مواعيد التجديد', status: 'مفعّل' },
        { label: 'مدير حساب مخصص لمنشأتك', status: 'دعم مباشر' },
      ],
    },
    packagesSection: {
      kicker: 'خدماتنا المخصصة',
      title: 'تخلص من الضغوطات.. كن شريكاً مع عون اليوم',
      subtitle:
        'اختر مسار الخدمة المتوافق مع احتياج منشأتك، وسيقوم فريقنا بمرافقتك في كافة الخطوات التنفيذية.',
      viewAllLabel: 'تواصل معنا لتخصيص باقة لمنشأتك',
      plans: [
        {
          id: 'new-business',
          title: 'خدمات تأسيس عملك التجاري',
          subtitle: 'مخصصة لرواد الأعمال والشركات في مرحلة التأسيس والانطلاق في السوق السعودي',
          features: [
            'إرشادات الخبراء',
            'حلول سريعة',
            'خدمات مخصصة',
            'الدعم الاستشاري',
            'سهولة التواصل',
            'توفير التكلفة والوقت',
            'أسعار تنافسية',
            'عملية متكاملة',
          ],
          ctaLabel: 'البدء في هذا المسار',
        },
        {
          id: 'government-employee',
          title: 'خدمات الالتزام بمتطلبات العاملين',
          subtitle: 'متابعة شاملة ودقيقة لكافة الشؤون التنظيمية الخاصة بفريق عملك',
          featured: true,
          features: [
            'فريق من الخبراء',
            'توجيهات واضحة',
            'مراقبة مستمرة',
            'الإشعارات والتنبيهات',
            'توفير التكلفة والوقت',
            'إنشاء الخدمات تلقائياً',
            'خدمات على الطلب',
            'الدعم الاستشاري',
            'سهولة التواصل',
            'التقارير ولوحة المعلومات',
          ],
          ctaLabel: 'البدء في هذا المسار',
        },
        {
          id: 'general-government',
          title: 'خدمات الالتزام بالمتطلبات الحكومية',
          subtitle: 'إدارة متكاملة للعلاقات الحكومية والتراخيص لضمان استمرارية أعمالك',
          features: [
            'فريق من الخبراء',
            'الدعم الفوري',
            'فريق متخصص',
            'كفاءة عالية',
            'الحفاظ على المصداقية',
            'البيانات في متناول يدك',
            'أفضل قيمة مقابل السعر',
            'استشارة الخبراء',
            'جلسات توضيحية',
          ],
          ctaLabel: 'البدء في هذا المسار',
        },
      ],
    },
    processSection: {
      kicker: 'كيف نعمل',
      title: 'ننقل عملك إلى المستوى التالي',
      subtitle: 'خمس خطوات واضحة ومنظمة لبدء شراكتك مع عون وإدارة متطلبات منشأتك بكل سلاسة.',
      steps: [
        {
          number: '01',
          title: 'اشتراك',
          description:
            'اختر الخدمة المفضلة لديك واشترك عبر موقع عون، مع الموافقة على الشروط والأحكام.',
        },
        {
          number: '02',
          title: 'الاتفاقية',
          description:
            'أكمل الدفعة الأولى وقم بالتوقيع على الاتفاقية وبيان العمل.',
        },
        {
          number: '03',
          title: 'الاجتماع الافتتاحي',
          description:
            'التقِ بأحد خبراء عون الذي سيقدم لك تفاصيل الخدمات، ويفهم متطلباتك، ويبدأ العملية.',
        },
        {
          number: '04',
          title: 'التفويض ومشاركة الوصول',
          description:
            'قم بتفويض عون للتصرف نيابة عنك في المنصات الحكومية.',
        },
        {
          number: '05',
          title: 'ابدأ الخدمة',
          description:
            'ابدأ معالجة المتطلبات وإدارة الطلبات الروتينية بكفاءة على النحو المتفق عليه.',
        },
      ],
    },
    appointmentSection: {
      kicker: 'احجز الآن',
      title: 'احصل على موعد عمل مجاني',
      subtitle:
        'شاركنا بياناتك ومتطلبات منشأتك لترتيب جلسة استشارية مع أحد خبراء عون لخدمات الأعمال.',
      contactDirectTitle: 'قنوات التواصل المباشر',
      contactDirectNote:
        'فريق عون متواجد في الرياض لخدمتكم والإجابة على كافة استفسارات تأسيس الأعمال والالتزام الحكومي.',
      fields: {
        nameLabel: 'الاسم الكامل *',
        namePlaceholder: 'أدخل اسمك الكامل',
        emailLabel: 'البريد الإلكتروني *',
        emailPlaceholder: 'name@company.sa',
        phoneLabel: 'رقم الجوال *',
        phonePlaceholder: '+966 5X XXX XXXX',
        subjectLabel: 'العنوان / الخدمة المطلوبة *',
        subjectPlaceholder: 'اختر أو اكتب موضوع الموعد',
        subjectOptions: [
          'خدمات تأسيس عملك التجاري',
          'خدمات الالتزام بمتطلبات العاملين',
          'خدمات الالتزام بالمتطلبات الحكومية',
          'خدمات إدارة الموارد البشرية',
          'خدمات استشارية',
          'استفسار عام / أخرى',
        ],
        messageLabel: 'الرسالة *',
        messagePlaceholder: 'اذكر نبذة مختصرة عن نشاط منشأتك أو المتطلبات التي ترغب بمناقشتها...',
      },
      validation: {
        nameRequired: 'يرجى إدخال الاسم الكامل.',
        emailRequired: 'يرجى إدخال البريد الإلكتروني.',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
        phoneRequired: 'يرجى إدخال رقم الجوال.',
        phoneInvalid: 'يرجى إدخال رقم جوال صحيح (مثال: 05XXXXXXXX أو +9665XXXXXXXX).',
        subjectRequired: 'يرجى تحديد العنوان أو الخدمة المطلوبة.',
        messageRequired: 'يرجى كتابة تفاصيل الرسالة أو الاستفسار.',
      },
      submitButton: 'أرسل طلب الموعد',
      readyState: {
        heading: 'تم تجهيز تفاصيل طلب الموعد بنجاح',
        description:
          'نظراً لأن هذه الواجهة لا تحفظ البيانات في خادم خلفي وهمي، يمكنك الآن إرسال تفاصيل موعدك مباشرة إلى فريق عون عبر البريد الرسمي (care@awn.sa) بضغطة واحدة أو نسخ الملخص.',
        sendEmailButton: 'إرسال عبر البريد الإلكتروني (care@awn.sa)',
        copyButton: 'نسخ تفاصيل الطلب',
        copiedLabel: 'تم نسخ التفاصيل',
        editButton: 'تعديل البيانات',
      },
    },
    footer: {
      brandDescription:
        'منصة عون لخدمات الأعمال تقدم حلولاً متكاملة لتأسيس الشركات، إدارة العلاقات الحكومية، والالتزام بمتطلبات العاملين والموارد البشرية في المملكة العربية السعودية.',
      parentCompanyNote: 'أحد منتجات منصة نقاط للخدمات الإدارية',
      contactCards: {
        callTitle: 'اتصل بنا',
        callValue: '+966 9200 150 83 / +966 582 940 754',
        emailTitle: 'راسلنا بالبريد الإلكتروني',
        emailValue: 'care@awn.sa',
        locationTitle: 'الموقع',
        locationValue: 'حي العارض، الرياض، السعودية',
        paymentTitle: 'دعم الدفع',
        paymentValue: 'مدى',
      },
      quickLinksTitle: 'روابط سريعة',
      quickLinks: [
        { label: 'الصفحة الرئيسية', href: '/' },
        { label: 'المنصات الحكومية', href: '#platforms' },
        { label: 'من نحن', href: '/about' },
        { label: 'كيف نعمل', href: '#process' },
        { label: 'تواصل معنا', href: '/contact' },
      ],
      servicesTitle: 'خدماتنا',
      serviceLinks: [
        { label: 'خدمات تأسيس عملك التجاري', serviceId: 'business-setup-services' },
        { label: 'خدمات الالتزام بمتطلبات العاملين', serviceId: 'government-employees-services' },
        { label: 'خدمات الالتزام بالمتطلبات الحكومية', serviceId: 'government-relation-services' },
        { label: 'خدمات إدارة الموارد البشرية', serviceId: 'hr-management-services' },
      ],
      subscribeTitle: 'اشترك',
      subscribeDesc: 'انضم إلى قائمتنا البريدية وتصلك أخبارنا وتحديثات الأنظمة.',
      subscribePlaceholder: 'بريدك الإلكتروني هنا',
      subscribeButton: 'اشترك',
      subscribeSuccess: 'تم تجهيز طلب اشتراكك في القائمة البريدية عبر care@awn.sa.',
      subscribeError: 'يرجى إدخال بريد إلكتروني صحيح.',
      copyright: '© جميع الحقوق محفوظة لمنصة عون لخدمات الأعمال',
    },
    businessSetupPage: {
      introTab: 'عن الخدمة',
      pageTitle: 'خدمات تأسيس عملك التجاري',
      breadcrumbHome: 'الرئيسية',
      breadcrumbServices: 'خدماتنا',
      heroImageSrc: '/assets/aistudio/services-hero-clean.png',
      heroImageAlt: 'خدمات تأسيس عملك التجاري - عون لخدمات الأعمال',
      servicesHeading: 'الخدمات',
      servicesSubtitle:
        'استكمال كافة إجراءات التسجيل والتأسيس النظامي لمنشأتك عبر الجهات والمنصات الحكومية المعتمدة:',
      servicesList: [
        {
          id: 'trade-name',
          number: '01',
          title: 'حجز اسم تجاري',
          iconKey: 'trade-name',
          platformLogoSrc: '/assets/official/mc.png',
          platformName: 'وزارة التجارة',
        },
        {
          id: 'cr-issuance',
          number: '02',
          title: 'إصدار السجل التجاري',
          iconKey: 'cr',
          platformLogoSrc: '/assets/official/mc.png',
          platformName: 'وزارة التجارة',
        },
        {
          id: 'chamber-of-commerce',
          number: '03',
          title: 'التسجيل في الغرفة التجارية',
          iconKey: 'chamber',
        },
        {
          id: 'national-address',
          number: '04',
          title: 'العنوان الوطني',
          iconKey: 'address',
          platformLogoSrc: '/assets/official/spl.png',
          platformName: 'سبل',
        },
        {
          id: 'gosi-registration',
          number: '05',
          title: 'التسجيل في التأمينات الاجتماعية',
          iconKey: 'gosi',
          platformLogoSrc: '/assets/official/gosi.png',
          platformName: 'التأمينات الاجتماعية',
        },
        {
          id: 'zatca-registration',
          number: '06',
          title: 'التسجيل في هيئة الزكاة والضريبة',
          iconKey: 'zatca',
        },
        {
          id: 'vat-registration',
          number: '07',
          title: 'التسجيل في ضريبة القيمة المضافة',
          iconKey: 'vat',
        },
        {
          id: 'qiwa-registration',
          number: '08',
          title: 'التسجيل في منصة قوى',
          iconKey: 'qiwa',
          platformLogoSrc: '/assets/official/qiwa.png',
          platformName: 'منصة قوى',
        },
        {
          id: 'hrdf-activation',
          number: '09',
          title: 'تفعيل حساب في صندوق الموارد البشرية',
          iconKey: 'hrdf',
          platformLogoSrc: '/assets/official/hrdf.png',
          platformName: 'هدف',
        },
        {
          id: 'muqeem-activation',
          number: '10',
          title: 'تفعيل خدمات مقيم',
          iconKey: 'muqeem',
          platformLogoSrc: '/assets/official/muqeem.png',
          platformName: 'مقيم',
        },
      ],
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
      whyAwn: {
        heading: 'لماذا عون لخدمات تأسيس الأعمال؟',
        paragraph1:
          'عندما تخطو خطوة لبدء مشروعك التجاري الخاص ، فهذا أمر جيد. البداية هي أحد العوامل المهمة للنجاح ، في الغالب قد لا تكون المتطلبات والتسجيلات والتكلفة والوقت واضحة تماماً قبل البدء ، وغالباً ما قد يؤدي ذلك إلى تكلفة إضافية أو تأخير أو حتى أخطاء ، يمكن لـ عون ضمان خدمة الخبراء للبدء بثقة ، حيث يكرس فريق المحترفين لدينا جهودهم لتزويدك بالتوجيه والدعم الفني الذي تحتاجه للتغلب على تعقيدات إنشاء مشروعك التجاري بسهولة.',
        highlightBullet:
          'نحن ندرك أن بدء مشروع تجاري يمكن أن يكون مهمة صعبة ، خاصة عندما يتعين عليك التركيز بشكل أكبر على الموارد والطرق التشغيلية.',
        paragraph2:
          'إن اختيار خدمة عون لإعداد الأعمال سيكون قرارًا حكيمًا لحل هذه التعقيدات والبدء بذكاء. يمكن الاستفادة من وقتك وجهدك الثمين في صياغة أهداف العمل الأساسية ووضع الخطط لإنجاح العمل الخاص بك.',
      },
      expertBenefits: {
        heading: 'كيف تفيدك خدمة خبراء عون؟',
        subheading: 'مؤشرات النجاح',
        imageSrc: '/assets/official/business-setup-benefits.png',
        imageAlt: 'مؤشرات النجاح مع خبراء عون',
        indicators: [
          { id: 'always-compliant', label: 'متوافق دائمًا' },
          { id: 'meets-schedule', label: 'يفي بالجدول الزمني' },
          { id: 'no-pending-requests', label: 'لا توجد طلبات معلقة' },
          { id: 'share-all-docs', label: 'مشاركة كافة المستندات' },
          { id: 'activate-all-accounts', label: 'تفعيل جميع الحسابات' },
          { id: 'no-extra-cost', label: 'لا توجد تكلفة إضافية' },
        ],
      },
      faq: {
        kicker: 'إجابات واضحة',
        heading: 'الأسئلة الشائعة',
        items: [
          {
            id: 'faq-1',
            question: 'كيف يمكنني الاشتراك في خدمة عون لتأسيس الأعمال؟',
            answer: [
              'يرجى التسجيل / الاشتراك في هذا الموقع ، حدد علامة التبويب " خطط التسعير " في الأعلى واتبع الخطوات اللاحقة',
            ],
          },
          {
            id: 'faq-2',
            question: 'ما هي خدمة تأسيس الأعمال بالتحديد؟',
            answer: [
              'في هذه الخدمة، ستقوم عون باستكمال جميع إجراءات التسجيل والتأسيس لشركة جديدة أو فرع نيابة عن صاحب العمل.',
            ],
          },
          {
            id: 'faq-3',
            question: 'إلى متى تظل الخدمة متاحة؟',
            answer: [
              'هذه الخدمة هي خدمة لمرة واحدة وقد تستمر حتى استكمال كافة الخدمات المتفق عليها.',
            ],
          },
          {
            id: 'faq-4',
            question: 'كيف يمكنني معرفة حالة التقدم؟',
            answer: [
              'سيتم عرض التقدم خطوة بخطوة في لوحة معلومات العميل',
            ],
          },
          {
            id: 'faq-5',
            question: 'هل يمكنني تأسيس فرع باستخدام الخدمة؟',
            answer: [
              'نعم ، تستطيع إنشاء أو تأسيس فرع باستخدام هذه الخدمة',
            ],
          },
          {
            id: 'faq-6',
            question: 'من يدفع الرسوم الحكومية؟',
            answer: [
              'يجب أن يدفع العميل الرسوم والمصاريف الحكومية',
              'وسيدعم أعضاء عون مشاركة رابط الدفع وتزويدكم بتفاصيل السداد',
            ],
          },
          {
            id: 'faq-7',
            question: 'ما طرق الدفع المدعومة؟',
            answer: [
              'يجب أن يدفع العميل الرسوم والمصاريف الحكومية',
              'وسيدعم أعضاء عون مشاركة رابط الدفع وتزويدكم بتفاصيل السداد',
            ],
          },
        ],
      },
    },
    employeeCompliancePage: {
      introTab: 'عن الخدمة',
      pageTitle: 'خدمات الالتزام بمتطلبات العاملين',
      breadcrumbHome: 'الرئيسية',
      breadcrumbServices: 'خدماتنا',
      heroImageSrc: '/assets/aistudio/employee-compliance-hero-clean.png',
      heroImageAlt: 'خدمات الالتزام بمتطلبات العاملين — عون',
      servicesHeading: 'الخدمات',
      servicesSubtitle:
        'إدارة ومتابعة متطلبات الامتثال الحكومية المتعلقة بالموظفين عبر المنصات المعتمدة:',
      servicesList: [
        {
          id: 'hrdf-services',
          number: '01',
          title: 'خدمات حساب صندوق الموارد البشرية',
          iconKey: 'hrdf',
        },
        {
          id: 'gosi-services',
          number: '02',
          title: 'خدمات حساب التأمينات الاجتماعية',
          iconKey: 'gosi',
        },
        {
          id: 'absher-business-services',
          number: '03',
          title: 'خدمات أبشر أعمال',
          iconKey: 'absher',
        },
        {
          id: 'muqeem-services',
          number: '04',
          title: 'خدمات منصة مقيم',
          iconKey: 'muqeem',
        },
        {
          id: 'qiwa-services',
          number: '05',
          title: 'خدمات منصة قوى',
          iconKey: 'qiwa',
        },
        {
          id: 'mudad-services',
          number: '06',
          title: 'خدمات منصة مدد',
          iconKey: 'mudad',
        },
        {
          id: 'medical-insurance-services',
          number: '07',
          title: 'خدمات التأمين الطبي',
          iconKey: 'medical',
        },
      ],
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
      whyAwn: {
        heading: 'لماذا عون لخدمات الالتزام بمتطلبات العاملين',
        paragraph1:
          'عندما يتعلق الأمر بالخدمات المتعلقة بالموظفين، فإن اختيار عون يضمن التحكم السهل والفعال في إدارة أعمالك، إن خبرتنا في التعامل مع مختلف المنصات الحكومية المتعلقة بالموظفين، إلى جانب معرفتنا المتعمقة بعمليات وإجراءات نظام العمل السعودي، توفر لك أفضل تجربة، نحن نتفهم التحديات والمتطلبات الفريدة في هذا المجال، ونصمم خدماتنا لتلبية احتياجاتك الخاصة.',
        highlightBullet:
          'معنا، يمكنك أن تتوقع دعماً شخصياً وعمليات مبسطة واهتماماً دقيقاً بالتفاصيل.',
        paragraph2:
          'نحن نخدم مجموعة متنوعة من متطلبات الامتثال الحكومية المتعلقة بالموظفين من خلال منصات مختلفة بأقصى درجات الدقة الاحترافية التي يمكن أن تخفف العبء عنك.',
      },
      benefitsSection: {
        kicker: 'مميزات الخدمة',
        heading: 'ركائز الالتزام بمتطلبات العاملين مع عون',
        points: [
          { id: 'accurate-permits', label: 'تصاريح وبيانات صحيحة' },
          { id: 'system-alignment', label: 'تطابق مع متطلبات النظام' },
          { id: 'labor-law-compliance', label: 'الامتثال لنظام العمل' },
          { id: 'avoid-extra-costs', label: 'تجنب التكاليف الإضافية' },
          { id: 'timely-processing', label: 'معالجة المتطلبات في الوقت المحدد' },
        ],
      },
      faq: {
        kicker: 'إجابات واضحة',
        heading: 'الأسئلة الشائعة',
        items: [
          {
            id: 'emp-faq-1',
            question: 'ما هي خدمات الالتزام بمتطلبات العاملين؟',
            answer: [
              'تشمل هذه الخدمة جميع المنصات الحكومية المتعلقة بالموظفين',
            ],
          },
          {
            id: 'emp-faq-2',
            question: 'كيف يمكنني الاشتراك في هذه الخدمة ؟',
            answer: [
              'يرجى مراسلتنا عبر خيار اتصل بنا، وسنقوم بالتواصل معك ومساعدتك',
            ],
          },
          {
            id: 'emp-faq-3',
            question: 'أين يمكنني العثور على خيارات الاشتراك؟',
            answer: [
              'يرجى الاطلاع على خيارات الاشتراك ضمن الخيار الموجود في قائمة خطط التسعير',
            ],
          },
          {
            id: 'emp-faq-4',
            question: 'كيف ستفيدني خدمة عون ؟',
            answer: [
              'تقدم عون خدمات إدارية شاملة بدعم من معرفة الخبراء بالنظام والمنصات الحكومية',
            ],
          },
        ],
      },
    },
    governmentRelationPage: {
      introTab: 'عن الخدمة',
      pageTitle: 'خدمات الالتزام بالمتطلبات الحكومية',
      breadcrumbHome: 'الرئيسية',
      breadcrumbServices: 'خدماتنا',
      heroImageSrc: '/assets/aistudio/government-relations-hero-clean.png',
      heroImageAlt: 'خدمات الالتزام بالمتطلبات الحكومية — عون',
      servicesHeading: 'الخدمات',
      servicesSubtitle:
        'متابعة وإتمام جميع التسجيلات والتراخيص والتجديدات الحكومية المتعلقة بالعمل التجاري بشكل مستمر:',
      servicesList: [
        {
          id: 'ministry-of-commerce',
          number: '01',
          title: 'وزارة التجارة',
          iconKey: 'mc',
        },
        {
          id: 'chamber-of-commerce',
          number: '02',
          title: 'الغرفة التجارية',
          iconKey: 'chamber',
        },
        {
          id: 'ministry-of-investment',
          number: '03',
          title: 'وزارة الاستثمار',
          iconKey: 'misa',
        },
        {
          id: 'ministry-of-municipalities',
          number: '04',
          title: 'وزارة البلدية',
          iconKey: 'balady',
        },
        {
          id: 'zatca-authority',
          number: '05',
          title: 'هيئة الزكاة والدخل',
          iconKey: 'zatca',
        },
        {
          id: 'civil-defense',
          number: '06',
          title: 'الدفاع المدني',
          iconKey: 'civil-defense',
        },
        {
          id: 'saudi-post-spl',
          number: '07',
          title: 'البريد السعودي ( سبل )',
          iconKey: 'spl',
        },
      ],
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
      whyAwn: {
        heading: 'لماذا عون لخدمات الالتزام بالمتطلبات الحكومية',
        paragraph1:
          'يرتبط تشغيل الاعمال بالعديد من الاجراءات الحكومية والتسجيلات والتراخيص والامتثال، مما يعتبر أحد أهم الركائز الاساسية لضمان الوفاء بهذه الالتزامات ومتابعتها للتشغيل السهل وتجنب المخاطر. الدعم الاحترافي من خبراء عون هو الخيار الافضل لعملك التجاري، لدينا سجل حافل من النجاح في تقديم هذه الخدمات لعملائنا، ويمكن لفريقنا الذي يتمتع بالمعرفة والخبرة الواسعة ان يكون شريكي الموثوق بحترافية عالية',
        highlightBullet:
          'نحن نقدم دعما شخصيآ، مما يضمن تلبية احتياجات الامتثال الخاصة بك مع تقليل العبء الاداري من جانبك',
        paragraph2:
          'يعد اختيار عون هو الخيار الافضل من الناحية الاقتصادية والمهنية والعديد من الجوانب الاخرى مقارنة بتعيين موظف بدوام كامل كخبير امتثال او اشراك نفسك في هذة التعقيدات، نحن نعلم ان تركيزك يجب ان ينصب على نمو الاعمال ودورنا هو دعمك بالامتثال',
      },
      expertBenefits: {
        heading: 'كيف تفيدك خدمة خبراء عون ؟',
        subheading: 'مؤشرات النجاح',
        points: [
          { id: 'valid-licenses', label: 'تراخيص وتسجيلات سارية' },
          { id: 'continuous-compliance', label: 'التزام دائم بالمتطلبات' },
          { id: 'protect-interests', label: 'حماية مصالح أعمالك' },
          { id: 'regulatory-updates', label: 'مواكبة اللوائح الجديدة والتحديثات' },
        ],
      },
      faq: {
        kicker: 'إجابات واضحة',
        heading: 'الأسئلة الشائعة',
        items: [
          {
            id: 'gov-faq-1',
            question: 'كيف يمكنني الاشتراك في خدمات عون للالتزام بالمتطلبات الحكومية ؟',
            answer: [
              'يرجى التسجيل / الاشتراك في هذا الموقع حدد من علامة التبويب "الأسعار" واتبع الخطوات اللاحقة.',
            ],
          },
          {
            id: 'gov-faq-2',
            question: 'ماهي خدمة الالتزام بالمتطلبات الحكومية على وجة التحديد ؟',
            answer: [
              'من خلال هذه الخدمة ، ستقوم عون بإكمال جميع التسجيلات والتراخيص والتجديدات المتعلقة بالعمل التجاري ومتابعة تحديثها بشكل مستمر',
            ],
          },
          {
            id: 'gov-faq-3',
            question: 'من سيدفع الرسوم والمصاريف الحكومية ؟',
            answer: [
              'ستزودك عون بروابط الدفع أو المستندات التي تحتاجها كعميل او صاحب عمل أو من يمثلك لإجراء الدفعات ما لم يتم الاتفاق على خلاف ذلك',
            ],
          },
        ],
      },
    },
    hrManagementPage: {
      introTab: 'عن الخدمة',
      pageTitle: 'خدمات إدارة الموارد البشرية',
      breadcrumbHome: 'الرئيسية',
      breadcrumbServices: 'خدماتنا',
      heroImageSrc: '/assets/aistudio/hr-management-hero-clean.png',
      heroImageAlt: 'خدمات إدارة الموارد البشرية — فريق عون المتخصص',
      employeeNetwork: {
        items: [
          {
            id: 'net-1',
            role: 'مديرة الموارد البشرية',
            gender: 'female',
            statusText: 'اعتماد الهياكل والعقود',
            tag: 'إشراف استراتيجي',
          },
          {
            id: 'net-2',
            role: 'أخصائي مسير الرواتب',
            gender: 'male',
            statusText: 'مطابقة حماية الأجور (WPS)',
            tag: 'مسيرات شهرية',
          },
          {
            id: 'net-3',
            role: 'أخصائية شؤون الموظفين',
            gender: 'female',
            statusText: 'إدارة الإجازات والتأمين الطبي',
            tag: 'سجلات الموظفين',
          },
          {
            id: 'net-4',
            role: 'مسؤول الامتثال واللوائح',
            gender: 'male',
            statusText: 'منصة قوى والتأمينات (GOSI)',
            tag: 'امتثال نظام العمل',
          },
          {
            id: 'net-5',
            role: 'أخصائية مباشرة ومتابعة',
            gender: 'female',
            statusText: 'متابعة الحضور والانصراف والدوام',
            tag: 'مباشرة العمل',
          },
        ],
      },
      servicesHeading: 'الخدمات',
      servicesSubtitle:
        'إدارة متكاملة واحترافية لكافة العمليات الإدارية وشؤون الموظفين بما يضمن استقرار منشأتك وامتثالها لأنظمة العمل:',
      servicesList: [
        {
          id: 'hr-employee-files',
          number: '01',
          title: 'إدارة ملفات الموظفين والعقود',
          shortDesc: 'حفظ وتحديث السجلات الوظيفية الرقمية وتوثيق العقود المعتمدة.',
          iconKey: 'files',
        },
        {
          id: 'hr-payroll-wps',
          number: '02',
          title: 'مسير الرواتب ومطابقة حماية الأجور (WPS)',
          shortDesc: 'إعداد المسيرات الشهرية ورفع ملفات الأجور ومعالجة أي تباينات في مدد.',
          iconKey: 'payroll',
        },
        {
          id: 'hr-attendance-leave',
          number: '03',
          title: 'إدارة الإجازات والغياب والحضور',
          shortDesc: 'متابعة أرصدة الإجازات السنوية والمرضية وتسجيل المباشرات والانقطاع.',
          iconKey: 'attendance',
        },
        {
          id: 'hr-gosi-ops',
          number: '04',
          title: 'إدارة التأمينات الاجتماعية (GOSI)',
          shortDesc: 'إضافة واستبعاد المشتركين وتحديث الأجور الشهرية وإصدار الشهادات.',
          iconKey: 'gosi',
        },
        {
          id: 'hr-qiwa-mudad',
          number: '05',
          title: 'إدارة منصات قوى ومدد ومقيم',
          shortDesc: 'تنفيذ كافة العمليات الإدارية على المنصات الحكومية التابعة للموارد البشرية.',
          iconKey: 'platforms',
        },
        {
          id: 'hr-end-of-service',
          number: '06',
          title: 'إنهاء الخدمات ومستحقات نهاية الخدمة',
          shortDesc: 'احتساب مكافأة نهاية الخدمة بدقة نظامية وإجراءات إخلاء الطرف الرسمية.',
          iconKey: 'settlement',
        },
        {
          id: 'hr-internal-policies',
          number: '07',
          title: 'اللوائح والسياسات الداخلية للمنشأة',
          shortDesc: 'إعداد وتحديث لوائح تنظيم العمل المعتمدة من الوزارة ومواءمتها مع نظام العمل.',
          iconKey: 'policies',
        },
      ],
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
      whyAwn: {
        heading: 'لماذا عون لخدمات إدارة الموارد البشرية',
        paragraph1:
          'تشكل الموارد البشرية المحرك الأساسي لنجاح أي منشأة، وتتطلب متابعة مستمرة للأنظمة واللوائح وحماية الأجور وإدارة العقود والسجلات الوظيفية. عون تقدم لمنشأتك شريكاً استراتيجياً متكاملاً يتولى كافة العمليات اليومية والتنظيمية للموظفين باحترافية عالية، مما يتيح لك التفرغ الكامل لتطوير ونمو أعمالك.',
        highlightBullet:
          'نحن نوفر لمنشأتك فريق موارد بشرية متخصص ومتمرس بتكلفة اقتصادية مدروسة، مع ضمان الدقة والسرية التامة لبيانات العاملين.',
        paragraph2:
          'سواء كنت تبدأ بفريق عمل صغير أو تدير منشأة متنامية، فإن خدمات عون تمنحك مرونة استثنائية وأداءً مؤسسياً متقدماً دون الحاجة لتحمل تكاليف تأسيس قسم موارد بشرية كامل، مع ربط مباشر وموثوق بكافة المنصات الحكومية الرسمية.',
      },
      expertBenefits: {
        heading: 'كيف تفيدك خدمة خبراء عون ؟',
        subheading: 'مؤشرات النجاح',
        points: [
          { id: 'accurate-records', label: 'دقة تامة في السجلات والملفات الرقمية' },
          { id: 'wps-compliance', label: 'التزام كامل بنظام حماية الأجور دون تأخير' },
          { id: 'regulatory-alignment', label: 'توافق مستمر مع تحديثات أنظمة العمل' },
          { id: 'reduced-overhead', label: 'تقليص التكاليف الإدارية والتشغيلية' },
          { id: 'instant-dashboards', label: 'تقارير دورية ولوحات تحكم واضحة' },
          { id: 'dedicated-account-lead', label: 'مدير حساب مخصص وسرعة في الاستجابة' },
        ],
      },
      faq: {
        kicker: 'إجابات واضحة',
        heading: 'الأسئلة الشائعة',
        items: [
          {
            id: 'hr-faq-1',
            question: 'ما الذي تشمله خدمة إدارة الموارد البشرية من عون؟',
            answer: [
              'تشمل الخدمة إدارة ملفات الموظفين، إعداد وتدقيق مسيرات الرواتب ورفعها لنظام حماية الأجور، متابعة الإجازات والغياب، إدارة حسابات التأمينات الاجتماعية ومنصات قوى ومدد، واحتساب مستحقات نهاية الخدمة وصياغة اللوائح الداخلية.',
            ],
          },
          {
            id: 'hr-faq-2',
            question: 'هل تناسب الخدمة المنشآت الصغيرة والناشئة؟',
            answer: [
              'نعم، صممت خدماتنا وباقاتنا لتناسب كافة أحجام المنشآت، بدءاً من المنشآت الصغيرة بفريق عمل محدود وحتى الشركات المتوسطة والمتوسعة، مما يوفر عليك تكاليف توظيف فريق موارد بشرية متفرغ.',
            ],
          },
          {
            id: 'hr-faq-3',
            question: 'كيف يتم التعامل مع سرية وخصوصية بيانات الموظفين والرواتب؟',
            answer: [
              'نلتزم بأعلى معايير السرية والأمان المؤسسي في حفظ ومشاركة بيانات العاملين ومسيرات الرواتب والعقود، وفق اتفاقيات سرية معتمدة وسياسات حوكمة صارمة.',
            ],
          },
          {
            id: 'hr-faq-4',
            question: 'كيف يمكنني البدء والاشتراك في خدمة إدارة الموارد البشرية؟',
            answer: [
              'يمكنك استعراض باقات التسعير المتاحة واختيار الباقة المناسبة لحجم منشأتك، أو طلب موعد عمل مجاني عبر صفحة تواصل معنا وسيتواصل معك مستشار عون المختص لمساعدتك فوراً.',
            ],
          },
        ],
      },
    },
    servicesPage: {
      breadcrumbHome: 'الرئيسية',
      pageTitle: 'خدماتنا',
      introKicker: 'منظومة خدمات الأعمال والعلاقات الحكومية',
      headlineStart: 'ركز على عملك التجاري : دع',
      headlineHighlight: 'عون',
      headlineEnd: 'يدعم رحلة مشروعك',
      description:
        'نحن نعمل على تسهيل الأمور. ندير كافة خدمات تأسيس الأعمال، والالتزام بمتطلبات العاملين، والالتزام بالمتطلبات الحكومية، وإدارة الموارد البشرية في المملكة العربية السعودية عبر نافذة إدارية واحدة وبإشراف خبراء متخصصين.',
      primaryCta: 'التسعير',
      secondaryCta: 'احصل على موعد عمل مجاني',
      overviewHighlights: [
        'فريق من الخبراء المتخصصين في الأنظمة السعودية',
        'إشعارات وتنبيهات استباقية قبل مواعيد التجديد',
        'توفير التكلفة والوقت وتجنب الغرامات التنظيمية',
        'التقارير الدورية ولوحة المعلومات لمتابعة الطلبات',
      ],
      categoriesSection: {
        kicker: 'مسارات الخدمة الرئيسية',
        heading: 'خدمات مصممة لتلبية احتياجات منشأتك بدقة وموثوقية',
        subtitle:
          'اختر مسار الخدمة المناسب لمرحلة عملك التجاري واستعرض التفاصيل الكاملة لنطاق العمل والمخرجات:',
        deliverablesHeading: 'أبرز الخدمات المشمولة في هذا المسار:',
        categories: [
          {
            id: 'business-setup-services',
            number: '01',
            title: 'خدمات تأسيس عملك التجاري',
            subtitle: 'انطلاقة نظامية متكاملة للشركات الجديدة والفروع في السوق السعودي',
            description:
              'عندما تخطو خطوة لبدء مشروعك التجاري الخاص، يضمن لك فريق عون استكمال جميع إجراءات التسجيل والتأسيس لشركة جديدة أو فرع نيابة عنك، وتفعيل كافة الحسابات الحكومية اللازمة للبدء بثقة ودون تأخير أو تكاليف إضافية.',
            routePath: '/business-setup-services',
            iconKey: 'setup',
            subServices: [
              'حجز اسم تجاري وإصدار السجل التجاري لدى وزارة التجارة',
              'التسجيل في الغرفة التجارية والعنوان الوطني (سبل)',
              'التسجيل في التأمينات الاجتماعية وهيئة الزكاة والضريبة والقيمة المضافة',
              'التسجيل في منصة قوى وتفعيل حسابات هدف وخدمات مقيم',
            ],
            valuePillars: ['إرشادات الخبراء', 'حلول سريعة', 'خدمات مخصصة', 'توفير التكلفة والوقت'],
            ctaLabel: 'استعراض تفاصيل الخدمة',
          },
          {
            id: 'government-employees-services',
            number: '02',
            title: 'خدمات الالتزام بمتطلبات العاملين',
            subtitle: 'إدارة ومتابعة شاملة لكافة المنصات الحكومية المتعلقة بالموظفين',
            description:
              'نضمن لك التحكم السهل والفعال في إدارة شؤون الموظفين عبر مختلف المنصات الحكومية، إلى جانب معرفتنا المتعمقة بعمليات وإجراءات نظام العمل السعودي لتوفير دعم شخصي وعمليات مبسطة بأقصى درجات الدقة الاحترافية.',
            routePath: '/government-employees-services',
            iconKey: 'employees',
            subServices: [
              'خدمات حساب صندوق تنمية الموارد البشرية (هدف) والتأمينات الاجتماعية',
              'خدمات أبشر أعمال ومنصة مقيم لإدارة الإقامات والتأشيرات',
              'خدمات منصة قوى ومنصة مدد لتوثيق العقود وحماية الأجور',
              'إدارة ومتابعة خدمات التأمين الطبي للعاملين',
            ],
            valuePillars: ['تصاريح وبيانات صحيحة', 'الامتثال لنظام العمل', 'الإشعارات والتنبيهات', 'معالجة في الوقت المحدد'],
            ctaLabel: 'استعراض تفاصيل الخدمة',
          },
          {
            id: 'government-relation-services',
            number: '03',
            title: 'خدمات الالتزام بالمتطلبات الحكومية',
            subtitle: 'إدارة كافة التسجيلات والتراخيص والتجديدات الحكومية لعملك التجاري',
            description:
              'نتولى إكمال جميع التسجيلات والتراخيص والتجديدات المتعلقة بالعمل التجاري ومتابعة تحديثها بشكل مستمر، مما يحمي مصالح أعمالك ويضمن استمرارية التشغيل السهل وتجنب المخاطر مع تقليل العبء الإداري.',
            routePath: '/government-relation-services',
            iconKey: 'compliance',
            subServices: [
              'معاملات وتراخيص وزارة التجارة والغرفة التجارية ووزارة الاستثمار',
              'إصدار وتجديد تراخيص وزارة البلدية والإسكان',
              'متطلبات هيئة الزكاة والدخل وتراخيص الدفاع المدني',
              'إدارة حسابات البريد السعودي (سبل) والعنوان الوطني',
            ],
            valuePillars: ['تراخيص وتسجيلات سارية', 'التزام دائم بالمتطلبات', 'حماية مصالح أعمالك', 'مواكبة اللوائح الجديدة'],
            ctaLabel: 'استعراض تفاصيل الخدمة',
          },
          {
            id: 'hr-management-services',
            number: '04',
            title: 'خدمات إدارة الموارد البشرية',
            subtitle: 'تنظيم متكامل لشؤون الموظفين ومسيرات الرواتب والسياسات الداخلية',
            description:
              'نقدم لمنشأتك شريكاً استراتيجياً يتولى كافة العمليات الإدارية والتنظيمية للموارد البشرية، من حفظ وتحديث السجلات الوظيفية وإعداد مسيرات الرواتب ومطابقة حماية الأجور إلى إعداد لوائح تنظيم العمل المعتمدة.',
            routePath: '/hr-management-services',
            iconKey: 'hr',
            subServices: [
              'إدارة ملفات الموظفين والعقود والإجازات والغياب والحضور',
              'مسير الرواتب الشهري ومطابقة نظام حماية الأجور (WPS)',
              'إدارة التأمينات الاجتماعية (GOSI) ومنصات قوى ومدد ومقيم',
              'إنهاء الخدمات ومستحقات نهاية الخدمة واللوائح الداخلية للمنشأة',
            ],
            valuePillars: ['دقة السجلات الوظيفية', 'انضباط مسيرات الرواتب', 'تقارير ولوحة معلومات', 'مدير حساب مختص'],
            ctaLabel: 'استعراض تفاصيل الخدمة',
          },
        ],
      },
      advisorySection: {
        kicker: 'حلول إضافية مرنة',
        heading: 'خدمات استشارية وخدمات مساندة عند الطلب',
        subtitle:
          'إلى جانب الفئات الأربع الرئيسية، تدعم عون منشأتك بجلسات استشارية متخصصة وخدمات إدارية على الطلب:',
        ctaLabel: 'اطلب استشارة أو خدمة مخصصة',
        items: [
          {
            id: 'consulting-services',
            iconKey: 'consulting',
            title: 'خدمات استشارية',
            description:
              'إرشادات متخصصة في اللوائح والأنظمة السعودية لمساعدة أصحاب الأعمال على اتخاذ قرارات إدارية وتنظيمية سليمة وتخفيف المخاطر.',
            points: [
              'مراجعة وضع الالتزام الحالي للمنشأة وتحديد الفجوات التنظيمية',
              'تقديم توصيات عملية للتوافق مع أنظمة العمل والتوطين',
              'جلسات توضيحية مع خبراء العلاقات الحكومية والموارد البشرية',
            ],
          },
          {
            id: 'other-services',
            iconKey: 'other',
            title: 'خدمات أخرى على الطلب',
            description:
              'باقة من الخدمات الإدارية المساندة عند الطلب لتلبية الاحتياجات الخاصة والطارئة لمنشأتك في مختلف مراحل النمو.',
            points: [
              'خدمات المعاملات الحكومية المفردة على الطلب',
              'تحديث بيانات المنشآت والتراخيص الفرعية',
              'معالجة الطلبات الروتينية والطارئة عبر القنوات الرسمية',
            ],
          },
        ],
      },
      expertBenefits: {
        kicker: 'مؤشرات النجاح',
        heading: 'كيف تفيدك خدمة خبراء عون؟',
        subtitle:
          'نلتزم في عون بمعايير تشغيلية واضحة تضمن لمنشأتك راحة البال والانضباط التنظيمي المستمر:',
        points: [
          { id: 'always-compliant', label: 'متوافق دائمًا' },
          { id: 'meets-schedule', label: 'يفي بالجدول الزمني' },
          { id: 'no-pending-requests', label: 'لا توجد طلبات معلقة' },
          { id: 'share-all-docs', label: 'مشاركة كافة المستندات' },
          { id: 'activate-all-accounts', label: 'تفعيل جميع الحسابات' },
          { id: 'no-extra-cost', label: 'لا توجد تكلفة إضافية' },
        ],
      },
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
    },
    aboutPage: {
      breadcrumbHome: 'الرئيسية',
      pageTitle: 'من نحن',
      introKicker: 'من نحن · عون لخدمات الأعمال',
      parentCompanyNote: 'أحد منتجات منصة نقاط للخدمات الإدارية',
      heroTitle: 'نحن على استعداد لدعمك للوصول إلى مستويات قياسية جديدة',
      heroDescription:
        'يدعمك فريقنا ذو الخبرة من خلال المتطلبات التنظيمية والمعقدة، مما يوفر لك الوقت، ويخفف المخاطر، ويطلق العنان لإمكانياتك الكاملة.',
      heroSecondaryDescription:
        'تُعد منصة عون لخدمات الأعمال شريكاً إدارياً متكاملاً للمنشآت ورواد الأعمال في المملكة العربية السعودية، حيث نوفر نافذة موحدة لإدارة تأسيس الأعمال، والالتزام بمتطلبات العاملين، والعلاقات الحكومية، وإدارة الموارد البشرية بكفاءة وموثوقية.',
      primaryCta: 'ابقى على تواصل',
      secondaryCta: 'استعرض خدماتنا',
      storySection: {
        kicker: 'من نحن · انضم إلينا',
        heading: 'كن دائماً متوافقاً مع المتطلبات الحكومية',
        paragraph1:
          'يمكن أن يكون التعامل مع اللوائح الحكومية مرهقًا ويستغرق الكثير من الوقت. دعنا ندير كل خدمات العلاقات الحكومية في مكان واحد، حتى تتمكن من التركيز على تشغيل مشروعك بسلاسة.',
        paragraph2:
          'مديرو الحسابات لدينا خبراء في التعامل مع الجهات والتنظيمات الحكومية، مما يضمن معالجة أوراقك الرسمية بكفاءة وفعالية. ودّع تعاملك المباشر مع تعقيدات تسجيل الموظفين والعمليات الروتينية الأخرى مع عون.',
        highlights: [
          'خبرة وتوجيهات استثنائية للحصول على أفضل قيمة',
          'التذكيرات والإجراءات الآلية',
        ],
        pillars: [
          {
            id: 'confidence',
            title: 'إدارة عملك بثقة',
            description: 'تضمن عون أن عملك يلبي جميع المتطلبات الحكومية والتراخيص القانونية.',
          },
          {
            id: 'hassle-free',
            title: 'تجربة خالية من المتاعب',
            description: 'شريك موثوق به لجميع خدمات العلاقات الحكومية المتعلقة بعملك.',
          },
        ],
      },
      missionVisionSection: {
        kicker: 'الرسالة والرؤية',
        heading: 'منهجنا في تمكين قطاع الأعمال في المملكة',
        mission: {
          label: 'رسالتنا',
          title: 'تسهيل الأعمال وتخفيف العبء الإداري والتنظيمي',
          description:
            'تمكين أصحاب الأعمال والشركات من التركيز الكامل على نمو وتطوير مشاريعهم التجارية، من خلال تولي إدارة كافة خدمات تأسيس الأعمال والعلاقات الحكومية وشؤون العاملين والموارد البشرية في مكان واحد وبدعم شخصي من خبراء متخصصين.',
        },
        vision: {
          label: 'رؤيتنا',
          title: 'الشريك الإداري الموثوق لنجاح واستدامة المنشآت',
          description:
            'تقديم تجربة خالية من المتاعب للمنشآت في السوق السعودي تجمع بين المعرفة المتعمقة بالأنظمة والمنصات الحكومية، والتذكيرات والإجراءات الآلية التي تضمن الامتثال الدائم واستمرارية الأعمال دون مخاطر أو تعطل.',
        },
      },
      valuesSection: {
        kicker: 'مرتكزات العمل في عون',
        heading: 'ما الذي يميز شراكتك مع خبراء عون؟',
        subtitle:
          'نلتزم في عون بمجموعة من المعايير المهنية والتشغيلية التي تضمن لمنشأتك أعلى مستويات الانضباط والشفافية:',
        values: [
          {
            id: 'always-compliant',
            iconKey: 'shield',
            title: 'متوافق دائمًا مع الأنظمة',
            description:
              'متابعة مستمرة للتراخيص والسجلات التجارية ومتطلبات نظام العمل لضمان بقاء منشأتك في النطاق الآمن دائماً.',
          },
          {
            id: 'expert-team',
            iconKey: 'users',
            title: 'فريق من الخبراء المتخصصين',
            description:
              'مديرو حسابات ذوو خبرة واسعة في التعامل مع مختلف الجهات والمنصات الحكومية لتقديم توجيهات واضحة ودقيقة.',
          },
          {
            id: 'meets-schedule',
            iconKey: 'clock',
            title: 'الالتزام بالجدول الزمني',
            description:
              'معالجة كافة الطلبات والأوراق الرسمية في الوقت المحدد دون تأخير أو ترك أي طلبات معلقة.',
          },
          {
            id: 'automated-reminders',
            iconKey: 'bell',
            title: 'التذكيرات والإجراءات الآلية',
            description:
              'مراقبة مستمرة وإشعارات وتنبيهات استباقية قبل مواعيد انتهاء التراخيص والإقامات والعقود النظامية.',
          },
          {
            id: 'full-transparency',
            iconKey: 'folder',
            title: 'البيانات والمستندات في متناول يدك',
            description:
              'مشاركة كافة المستندات الرسمية وتفعيل جميع الحسابات وعرض حالة التقدم خطوة بخطوة في لوحة معلومات العميل.',
          },
          {
            id: 'best-value',
            iconKey: 'value',
            title: 'توفير التكلفة والوقت',
            description:
              'أفضل قيمة مقابل السعر دون أي تكاليف إضافية غير متوقعة، مقارنة بتكاليف التفرغ الإداري أو الأخطاء النظامية.',
          },
        ],
      },
      governanceLedger: {
        kicker: 'عون لخدمات الأعمال · الرياض',
        title: 'إدارة حسابات الأعمال في مكان واحد',
        subtitle: 'إشراف مباشر من فريق متخصص في الأنظمة السعودية',
        checkpoints: [
          { label: 'التراخيص والسجلات التجارية', status: 'متابعة مستمرة' },
          { label: 'الالتزام بمتطلبات قوى والتأمينات ومدد', status: 'تحديث منتظم' },
          { label: 'تذكيرات آلية قبل مواعيد التجديد', status: 'مفعّل' },
          { label: 'مدير حساب مخصص لمنشأتك', status: 'دعم مباشر' },
        ],
      },
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      supportCard: {
        kicker: 'هل لديك أي سؤال؟',
        headingStart: 'هل تحتاج',
        headingHighlight: 'أي مساعدة؟',
        supportingText: 'احصل على موعد عمل مجاني',
        ctaLabel: 'اتصل بنا',
      },
    },
    contactPage: {
      breadcrumbHome: 'الرئيسية',
      pageTitle: 'تواصل معنا',
      introKicker: 'قنوات التواصل الرسمية · عون لخدمات الأعمال',
      parentCompanyNote: 'أحد منتجات منصة نقاط للخدمات الإدارية',
      heroTitle: 'تواصل معنا — احصل على موعد عمل مجاني',
      heroSubtitle:
        'فريق خبراء عون لخدمات الأعمال في خدمتك للإجابة عن كافة استفساراتك وتقديم الدعم الاستشاري والإجرائي لمنشأتك.',
      heroDescription:
        'سواء كنت تخطط لتأسيس عملك التجاري في المملكة العربية السعودية، أو ترغب في تنظيم متطلبات العاملين والعلاقات الحكومية وإدارة الموارد البشرية، يمكنك التواصل معنا مباشرة عبر القنوات الرسمية أو إرسال طلب موعد عمل مجاني.',
      primaryCta: 'احجز موعد عمل مجاني',
      secondaryCta: 'استعرض باقات الأسعار',
      directLedger: {
        kicker: 'البيانات الرسمية المعتمدة · الرياض',
        title: 'قنوات الاتصال المباشر',
        subtitle: 'تواصل فوري مع مستشاري عون لخدمات الأعمال',
        items: [
          {
            label: 'الرقم الموحد',
            value: '+966 9200 150 83',
            href: 'tel:+966920015083',
            isLtr: true,
          },
          {
            label: 'الجوال المباشر',
            value: '+966 582 940 754',
            href: 'tel:+966582940754',
            isLtr: true,
          },
          {
            label: 'البريد الإلكتروني',
            value: 'care@awn.sa',
            href: 'mailto:care@awn.sa',
            isLtr: true,
          },
          {
            label: 'الموقع',
            value: 'حي العارض، الرياض، السعودية',
          },
        ],
      },
      channelsSection: {
        kicker: 'وسائل التواصل المعتمدة',
        heading: 'تواصل مع فريق عون عبر القناة الأنسب لك',
        subtitle:
          'نوفر لك قنوات اتصال مباشرة وواضحة لمتابعة طلباتك وحجز المواعيد الاستشارية لمنشأتك:',
        callCard: {
          title: 'اتصل بنا',
          description: 'تحدث مباشرة مع مستشاري خدمة العملاء وتطوير الأعمال عبر أرقامنا الرسمية:',
          unifiedLabel: 'الرقم الموحد',
          unifiedNumber: '+966 9200 150 83',
          unifiedHref: 'tel:+966920015083',
          mobileLabel: 'رقم التواصل المباشر',
          mobileNumber: '+966 582 940 754',
          mobileHref: 'tel:+966582940754',
        },
        emailCard: {
          title: 'راسلنا بالبريد الإلكتروني',
          description: 'أرسل استفساراتك أو طلبات عروض الأسعار والمواعيد إلى بريد العناية بالعملاء:',
          emailLabel: 'البريد الرسمي',
          emailValue: 'care@awn.sa',
          emailHref: 'mailto:care@awn.sa',
          responseNote: 'فريق العناية بالعملاء يتابع كافة المراسلات خلال ساعات العمل الرسمية.',
        },
        locationCard: {
          title: 'الموقع والعنوان',
          description: 'المقر الرئيسي لمنصة عون لخدمات الأعمال في مدينة الرياض:',
          addressLabel: 'العنوان',
          addressValue: 'حي العارض، الرياض، المملكة العربية السعودية',
          mapLinkLabel: 'فتح الموقع على خرائط Google',
          mapLinkHref: 'https://goo.gl/maps/zroLAsA8ModYpdK9A',
        },
        hoursCard: {
          title: 'أوقات العمل الرسمية',
          description: 'نستقبل اتصالاتكم ومواعيد العمل الاستشارية طوال أيام الأسبوع الرسمية:',
          daysLabel: 'أيام العمل',
          daysValue: 'الأحد – الخميس',
          timeLabel: 'ساعات الدوام',
          timeValue: '9:00 صباحاً – 5:00 مساءً (بتوقيت الرياض)',
        },
      },
      formSection: {
        kicker: 'نموذج طلب موعد واستشارة',
        heading: 'احصل على موعد عمل مجاني',
        subtitle:
          'أدخل بيانات التواصل والخدمة المطلوبة، وسيقوم فريق عون بمراجعة طلبك والتنسيق معك في أقرب وقت.',
        requiredNote: 'جميع الحقول المشار إليها بعلامة (*) مطلوبة لإتمام تجهيز الطلب.',
      },
      locationPanel: {
        kicker: 'المقر الرئيسي وبيانات الخدمة',
        heading: 'عون لخدمات الأعمال — الرياض',
        description:
          'نقدم خدماتنا لكافة المنشآت والشركات في المملكة العربية السعودية عبر منظومة رقمية متكاملة وإشراف مباشر من مقرنا في الرياض.',
        addressTitle: 'عنوان المكتب',
        addressValue: 'حي العارض، الرياض',
        cityValue: 'المملكة العربية السعودية',
        workingHoursTitle: 'ساعات استقبال الطلبات والمواعيد',
        workingHoursValue: 'الأحد إلى الخميس · 9:00 ص – 5:00 م',
        paymentTitle: 'وسائل الدفع المعتمدة',
        paymentValue: 'دعم الدفع الإلكتروني عبر شبكة مدى (Mada)',
        mapCtaLabel: 'عرض الاتجاهات والموقع على خرائط Google',
        mapUrl: 'https://goo.gl/maps/zroLAsA8ModYpdK9A',
      },
      joinCard: {
        heading: 'انضم إلينا',
        supportingText: 'تعرف على الباقة الأفضل لشركتك',
        ctaLabel: 'التسعير',
      },
      servicesCard: {
        kicker: 'منظومة خدمات عون',
        heading: 'استكشف مسارات خدمات الأعمال والعلاقات الحكومية',
        supportingText: 'تأسيس الأعمال · متطلبات العاملين · الالتزام الحكومي · الموارد البشرية',
        ctaLabel: 'استعرض خدماتنا',
      },
    },
  },
  en: {
    dir: 'ltr',
    langName: 'English',
    switchLangLabel: 'العربية',
    nav: {
      home: 'Home',
      platforms: 'Portals',
      services: 'Services',
      about: 'About Us',
      packages: 'Packages',
      process: 'How We Work',
      contact: 'Contact Us',
      primaryCta: 'Book Appointment',
      serviceCategories: [
        {
          id: 'business-setup-services',
          label: 'New Business Setup Services',
          routePath: '/business-setup-services',
          sectionId: 'services',
        },
        {
          id: 'government-employees-services',
          label: 'Employee Compliance Services',
          routePath: '/government-employees-services',
          sectionId: 'services',
        },
        {
          id: 'government-relation-services',
          label: 'Business Compliance Services',
          routePath: '/government-relation-services',
          sectionId: 'services',
        },
        {
          id: 'hr-management-services',
          label: 'HR Management Services',
          routePath: '/hr-management-services',
          sectionId: 'services',
        },
      ],
    },
    hero: {
      kicker: 'Build Your Success · Corporate & Government Relations',
      headlineStart: '',
      headlineHighlight: 'Unlock',
      headlineEnd: 'the Full Potential of Your Business with AWN',
      supportingText:
        'We are in the business of making things easy. We manage business setup, government compliance, employee regulations, and HR operations across Saudi Arabia through a single coordinated team.',
      primaryCta: 'Join Us',
      secondaryCta: 'Get Free Business Appointment',
      trustItems: [
        'Company Setup & Commercial Registry',
        'Government & Employee Compliance',
        'Structured HR & Regulatory Advisory',
      ],
      visualHeaderLabel: 'Interactive Compliance & Workflow Hub',
      visualTitle: 'Coordinated Navigation Across Saudi Government Portals',
      visualSubtitle: 'Select an operational stream to inspect AWN’s managed workflow:',
      workflowNodes: [
        {
          id: 'setup',
          stepIndex: '01',
          title: 'New Business Setup',
          subtitle: 'Commercial registration, licensing, and establishment file activation',
          activePortals: ['mc', 'gosi', 'qiwa', 'spl'],
          outcomeLabel: 'Complete legal formation & operational readiness',
        },
        {
          id: 'gov-compliance',
          stepIndex: '02',
          title: 'Government Compliance',
          subtitle: 'Proactive license renewals, establishment filings, and portal alignment',
          activePortals: ['mc', 'hrsd', 'absher', 'moi', 'spl'],
          outcomeLabel: 'Uninterrupted business operations & compliance',
        },
        {
          id: 'employee-hr',
          stepIndex: '03',
          title: 'Employee & HR Compliance',
          subtitle: 'Contracts, residency permits, social insurance, and wage protection',
          activePortals: ['qiwa', 'muqeem', 'gosi', 'mudad', 'hrdf'],
          outcomeLabel: 'Aligned workforce documentation & payroll compliance',
        },
      ],
      connectedPortalsLabel: 'Official government platforms navigated in this stream:',
    },
    platformsSection: {
      kicker: 'Regulatory Ecosystem',
      headingCount: '10+',
      headingTitle: 'Saudi Government Platforms We Help You Navigate',
      supportingText:
        'AWN’s specialists manage your establishment’s administrative workflows across Saudi Arabia’s official government portals upon formal authorization.',
      disclaimerText:
        'All displayed logos are official marks of their respective government entities and platforms, shown to illustrate the scope of AWN’s authorized administrative support.',
      pauseHint: 'Hover or focus to pause motion',
      staticToggleLabel: 'Static Grid View',
      marqueeToggleLabel: 'Animated Marquee View',
    },
    platforms: [
      {
        id: 'qiwa',
        name: 'Qiwa Platform',
        category: 'Workforce & Labor Services',
        url: 'https://www.qiwa.sa/',
        code: 'QIWA',
        logoSrc: '/assets/official/qiwa.png',
      },
      {
        id: 'muqeem',
        name: 'Muqeem Portal',
        category: 'Residency & Visa Management',
        url: 'https://muqeem.sa/',
        code: 'MUQEEM',
        logoSrc: '/assets/official/muqeem.png',
      },
      {
        id: 'hrsd',
        name: 'Ministry of HR & Social Development',
        category: 'Labor Policy & Regulations',
        url: 'https://www.hrsd.gov.sa/en',
        code: 'MHRSD',
        logoSrc: '/assets/official/mhrsd.png',
      },
      {
        id: 'gosi',
        name: 'General Org. for Social Insurance',
        category: 'Social Insurance & GOSI',
        url: 'https://www.gosi.gov.sa/',
        code: 'GOSI',
        logoSrc: '/assets/official/gosi.png',
      },
      {
        id: 'mc',
        name: 'Ministry of Commerce',
        category: 'Commercial Registration & Filings',
        url: 'https://mc.gov.sa/',
        code: 'MC',
        logoSrc: '/assets/official/mc.png',
      },
      {
        id: 'mudad',
        name: 'Mudad Platform',
        category: 'Payroll & Wage Protection System',
        url: 'https://mudad.com.sa/',
        code: 'MUDAD',
        logoSrc: '/assets/official/mudad.svg',
      },
      {
        id: 'absher',
        name: 'Absher Business',
        category: 'Enterprise e-Government Portal',
        url: 'https://www.absher.sa/wps/portal/business/Home',
        code: 'ABSHER',
        logoSrc: '/assets/official/absher-business.jpg',
      },
      {
        id: 'spl',
        name: 'SPL · Saudi Post',
        category: 'National Address Registry',
        url: 'https://splonline.com.sa',
        code: 'SPL',
        logoSrc: '/assets/official/spl.png',
      },
      {
        id: 'hrdf',
        name: 'HRDF (Hadaf)',
        category: 'Human Resources Development Fund',
        url: 'https://www.hrdf.org.sa/',
        code: 'HRDF',
        logoSrc: '/assets/official/hrdf.png',
      },
      {
        id: 'moi',
        name: 'Ministry of Interior',
        category: 'Official Clearances & Services',
        url: 'https://www.moi.gov.sa',
        code: 'MOI',
        logoSrc: '/assets/official/moi.png',
      },
    ],
    servicesSection: {
      kicker: 'Core Capabilities',
      titleStart: 'Experience the Freedom to Thrive: Let',
      titleHighlight: 'AWN',
      titleEnd: 'Empower Your Business Journey',
      subtitle:
        'Streamlined corporate, administrative, and regulatory compliance solutions tailored for businesses operating in Saudi Arabia.',
      modalScopeTitle: 'Service Scope & Deliverables:',
      modalPlatformsTitle: 'Connected Government Portals:',
      modalSelectCta: 'Book Appointment for This Service',
      modalCloseLabel: 'Close',
      items: [
        {
          id: 'government-relation-services',
          iconKey: 'compliance',
          title: 'Business Compliance Services',
          shortDesc:
            'End-to-end management of government relations, commercial license renewals, and statutory filings to keep your operations uninterrupted.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'Commercial Registration (CR) and Chamber of Commerce membership renewals',
            'Establishment file management with the Ministry of Human Resources (MHRSD)',
            'Dedicated account manager handling official government portal workflows',
            'Proactive automated alerts prior to license and document expirations',
          ],
          platformsCovered: ['Ministry of Commerce', 'Qiwa', 'SPL National Address', 'Absher Business'],
          platformIds: ['mc', 'qiwa', 'spl', 'absher', 'hrsd'],
        },
        {
          id: 'business-setup-services',
          iconKey: 'setup',
          title: 'New Business Setup Services',
          shortDesc:
            'Complete company formation support in Saudi Arabia, from trade name reservation and CR issuance to activating government portal accounts.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'Trade name reservation, Articles of Association, and CR issuance',
            'Chamber of Commerce activation and SPL National Address registration',
            'Initial establishment registration across GOSI, Qiwa, and Muqeem',
            'Structured guidance for corporate bank account onboarding',
          ],
          platformsCovered: ['Ministry of Commerce', 'GOSI', 'Qiwa', 'SPL'],
          platformIds: ['mc', 'gosi', 'qiwa', 'spl', 'muqeem'],
        },
        {
          id: 'government-employees-services',
          iconKey: 'employees',
          title: 'Employee Compliance Services',
          shortDesc:
            'Ongoing tracking and administration of employee statutory requirements including contracts, work permits, iqamas, and GOSI.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'Employment contract authentication and management on Qiwa and GOSI',
            'Work permit, residency (Iqama), and visa processing via Muqeem & Absher',
            'Continuous monitoring and automated notifications for staff documents',
            'Wage Protection System (WPS) compliance coordination via Mudad',
          ],
          platformsCovered: ['Qiwa', 'Muqeem', 'GOSI', 'Mudad'],
          platformIds: ['qiwa', 'muqeem', 'gosi', 'mudad', 'absher'],
        },
        {
          id: 'hr-management-services',
          iconKey: 'hr',
          title: 'HR Management Services',
          shortDesc:
            'Scalable human resources administration structured around your company size to organize personnel policies and workflows.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'Employee onboarding, personnel documentation, and offboarding workflows',
            'Drafting and certifying official internal work regulations',
            'Managing workforce support grants through HRDF (Hadaf)',
            'Clear executive reports and compliance dashboards',
          ],
          platformsCovered: ['Qiwa', 'HRDF (Hadaf)', 'Mudad', 'GOSI'],
          platformIds: ['qiwa', 'hrdf', 'mudad', 'gosi', 'hrsd'],
        },
        {
          id: 'consulting-services',
          iconKey: 'consulting',
          title: 'Consultancy Services',
          shortDesc:
            'Expert advisory on Saudi corporate and labor regulations to help business leaders make informed, compliant operational decisions.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'Comprehensive compliance health checks and regulatory gap analysis',
            'Practical guidance on Saudization (Nitaqat) and labor law alignment',
            'Clarification sessions with government relations and HR specialists',
            'Tailored roadmaps to mitigate risk and reduce administrative overhead',
          ],
          platformsCovered: ['MHRSD', 'Qiwa', 'HRDF (Hadaf)', 'GOSI'],
          platformIds: ['hrsd', 'qiwa', 'hrdf', 'gosi', 'mc'],
        },
        {
          id: 'other-services',
          iconKey: 'other',
          title: 'Other Value Added Services',
          shortDesc:
            'On-demand administrative and corporate support services designed to handle specialized or urgent business requests.',
          linkLabel: 'Inspect Service Scope',
          scopePoints: [
            'On-demand single transaction processing across government portals',
            'Establishment record updates and branch license modifications',
            'Rapid resolution of routine and time-sensitive administrative requests',
            'Tailored support for startups, SMEs, and growing enterprises',
          ],
          platformsCovered: ['All Major Saudi Business Portals'],
          platformIds: ['mc', 'qiwa', 'muqeem', 'moi', 'spl'],
        },
      ],
    },
    aboutSection: {
      bannerTitle: "We're ready to assist your business in reaching new heights",
      bannerText:
        'Our team of experts excels at guiding you through the intricate regulatory terrain, saving you time, mitigating risks, and unleashing your full potential.',
      bannerCta: 'Get in Touch',
      kicker: 'About AWN · Join Us',
      title: 'Maintain Ongoing Compliance with Regulatory Requirements',
      description:
        'We empathize with the demands of navigating government regulations and compliance alongside running your business operations. Introducing a comprehensive, one-stop solution to address this challenge.',
      secondaryDescription:
        'We provide streamlined, hassle-free government relations and compliance services for your business, allowing you to concentrate on what truly counts. Rely on AWN to expertly manage the intricacies of engaging with government authorities and meeting regulatory requirements.',
      highlights: [
        'Exceptional Expertise and Guidance, Unbeatable Value',
        'Automated Reminders and Actions',
      ],
      pillars: [
        {
          title: 'Business with Confidence',
          description: 'AWN ensures that your business complies with all legal requirements and licenses.',
        },
        {
          title: 'Hassle-Free Experience',
          description: 'A trusted partner for comprehensive government relations services tailored to your business.',
        },
      ],
      ctaLabel: 'Schedule a Consultation',
      visualCardTitle: 'One-Stop Government Relations Management',
      visualCardSubtitle: 'Dedicated account managers for Saudi regulatory compliance',
      visualCheckpoints: [
        { label: 'Commercial Licenses & Registry Filings', status: 'Monitored' },
        { label: 'Qiwa, GOSI & Mudad Alignment', status: 'Up to Date' },
        { label: 'Automated Pre-Expiry Reminders', status: 'Active' },
        { label: 'Dedicated Account Manager Support', status: 'Included' },
      ],
    },
    packagesSection: {
      kicker: 'Our Customized Services',
      title: 'Relieve Your Stress: Partner with AWN Today',
      subtitle:
        'Select the service pillar aligned with your operational needs and let our specialists manage every step.',
      viewAllLabel: 'Contact Us for a Custom Enterprise Plan',
      plans: [
        {
          id: 'new-business',
          title: 'Business Setup Services',
          subtitle: 'Designed for entrepreneurs and companies launching new entities in Saudi Arabia',
          features: [
            'Expert Guidance',
            'Fast Processing',
            'Personalized Service',
            'Consultation Support',
            'Easy Communication',
            'Cost and Time Savings',
            'Competitive Pricing',
            'Complete Process',
          ],
          ctaLabel: 'Start This Track',
        },
        {
          id: 'government-employee',
          title: 'Employee Compliance Services',
          subtitle: 'Continuous monitoring and statutory administration for your entire workforce',
          featured: true,
          features: [
            'Expert Team',
            'Clear Guidance',
            'Regular Monitoring',
            'Notification and Alerts',
            'Cost and Time Savings',
            'Autogenerated Services',
            'Request Based Services',
            'Consultation Support',
            'Easy Communication',
            'Reports and Dashboards',
          ],
          ctaLabel: 'Start This Track',
        },
        {
          id: 'general-government',
          title: 'Business Compliance Services',
          subtitle: 'Comprehensive government relations management to safeguard business continuity',
          features: [
            'Expert Team',
            'Instant Support',
            'Dedicated Team',
            'Reliable Efficiency',
            'Maintain Credibility',
            'Data at Your Fingertips',
            'Best Value for Money',
            'Expert Consultation',
            'Awareness Sessions',
          ],
          ctaLabel: 'Start This Track',
        },
      ],
    },
    processSection: {
      kicker: 'How We Work',
      title: 'Elevate Your Business to the Next Level',
      subtitle: 'Five clear, connected steps to onboard your organization and streamline compliance with AWN.',
      steps: [
        {
          number: '01',
          title: 'Subscribe',
          description:
            'Select your desired service and subscribe through the AWN website, while acknowledging and agreeing to our Terms and Conditions.',
        },
        {
          number: '02',
          title: 'Agreement',
          description:
            'Complete your initial payment and sign the Agreement and Statement of Work.',
        },
        {
          number: '03',
          title: 'Kick-Off Meeting',
          description:
            'An AWN expert will arrange a meeting with you to deliver a comprehensive overview of our services and gain a deep understanding of your specific needs before commencing the process.',
        },
        {
          number: '04',
          title: 'Authorization',
          description:
            'Grant AWN the authority to represent you on government platforms.',
        },
        {
          number: '05',
          title: 'Go Live',
          description:
            'Commence the processing of requirements, and efficiently manage routine requests to ensure a smooth and seamless compliance experience.',
        },
      ],
    },
    appointmentSection: {
      kicker: 'Book Now',
      title: 'Get Free Business Appointment',
      subtitle:
        'Share your contact details and business requirements to arrange a consultation with an AWN specialist.',
      contactDirectTitle: 'Direct Contact Channels',
      contactDirectNote:
        'Our team in Riyadh is ready to assist you with business setup, government compliance, and HR management inquiries.',
      fields: {
        nameLabel: 'Your Name *',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'E-mail *',
        emailPlaceholder: 'name@company.sa',
        phoneLabel: 'Phone *',
        phonePlaceholder: '+966 5X XXX XXXX',
        subjectLabel: 'Subject *',
        subjectPlaceholder: 'Select or enter appointment subject',
        subjectOptions: [
          'Business Setup Services',
          'Employee Compliance Services',
          'Business Compliance Services',
          'HR Management Services',
          'Consultancy Services',
          'General Inquiry / Other',
        ],
        messageLabel: 'Your Message *',
        messagePlaceholder: 'Briefly describe your company size or compliance requirements...',
      },
      validation: {
        nameRequired: 'Please enter your full name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        phoneRequired: 'Please enter your phone number.',
        phoneInvalid: 'Please enter a valid phone number (e.g., 05XXXXXXXX or +9665XXXXXXXX).',
        subjectRequired: 'Please specify a subject or service topic.',
        messageRequired: 'Please enter your message.',
      },
      submitButton: 'Send Message',
      readyState: {
        heading: 'Your Appointment Request Is Ready to Send',
        description:
          'To ensure your inquiry reaches AWN directly without a simulated backend, click below to open your formatted request addressed to care@awn.sa or copy the summary.',
        sendEmailButton: 'Send via Email (care@awn.sa)',
        copyButton: 'Copy Request Summary',
        copiedLabel: 'Summary Copied',
        editButton: 'Edit Details',
      },
    },
    footer: {
      brandDescription:
        'AWN Business Services provides comprehensive corporate setup, government compliance, employee regulations, and HR management solutions across Saudi Arabia.',
      parentCompanyNote: 'A product of DOTS Administrative Services',
      contactCards: {
        callTitle: 'Call Us',
        callValue: '+966 9200 150 83 / +966 582 940 754',
        emailTitle: 'Mail Us',
        emailValue: 'care@awn.sa',
        locationTitle: 'Location',
        locationValue: 'Al-Ared Dist, Riyadh - Saudi Arabia',
        paymentTitle: 'Payment Support',
        paymentValue: 'Mada',
      },
      quickLinksTitle: 'Quick Links',
      quickLinks: [
        { label: 'Home', href: '/' },
        { label: 'Government Portals', href: '#platforms' },
        { label: 'About Us', href: '/about' },
        { label: 'How We Work', href: '#process' },
        { label: 'Contact Us', href: '/contact' },
      ],
      servicesTitle: 'Our Services',
      serviceLinks: [
        { label: 'New Business Setup Services', serviceId: 'business-setup-services' },
        { label: 'Employee Compliance Services', serviceId: 'government-employees-services' },
        { label: 'Business Compliance Services', serviceId: 'government-relation-services' },
        { label: 'HR Management Services', serviceId: 'hr-management-services' },
      ],
      subscribeTitle: 'Subscribe',
      subscribeDesc: 'Join our mailing list to receive our news and regulatory updates.',
      subscribePlaceholder: 'Your email address here',
      subscribeButton: 'Subscribe',
      subscribeSuccess: 'Your mailing list request for care@awn.sa is ready.',
      subscribeError: 'Please enter a valid email address.',
      copyright: '© AWN Business Services. All Rights Reserved.',
    },
    businessSetupPage: {
      introTab: 'About the Service',
      pageTitle: 'New Business Setup Services',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      heroImageSrc: '/assets/aistudio/services-hero-clean.png',
      heroImageAlt: 'New Business Setup Services - AWN Business Services',
      servicesHeading: 'Services',
      servicesSubtitle:
        'Complete statutory registration and establishment setup procedures across Saudi Arabia’s official government entities:',
      servicesList: [
        {
          id: 'trade-name',
          number: '01',
          title: 'Trade Name Reservation',
          iconKey: 'trade-name',
          platformLogoSrc: '/assets/official/mc.png',
          platformName: 'Ministry of Commerce',
        },
        {
          id: 'cr-issuance',
          number: '02',
          title: 'Commercial Registration Issuance',
          iconKey: 'cr',
          platformLogoSrc: '/assets/official/mc.png',
          platformName: 'Ministry of Commerce',
        },
        {
          id: 'chamber-of-commerce',
          number: '03',
          title: 'Chamber of Commerce Registration',
          iconKey: 'chamber',
        },
        {
          id: 'national-address',
          number: '04',
          title: 'National Address',
          iconKey: 'address',
          platformLogoSrc: '/assets/official/spl.png',
          platformName: 'SPL',
        },
        {
          id: 'gosi-registration',
          number: '05',
          title: 'Social Insurance (GOSI) Registration',
          iconKey: 'gosi',
          platformLogoSrc: '/assets/official/gosi.png',
          platformName: 'GOSI',
        },
        {
          id: 'zatca-registration',
          number: '06',
          title: 'Zakat and Tax Authority Registration',
          iconKey: 'zatca',
        },
        {
          id: 'vat-registration',
          number: '07',
          title: 'Value Added Tax (VAT) Registration',
          iconKey: 'vat',
        },
        {
          id: 'qiwa-registration',
          number: '08',
          title: 'Qiwa Platform Registration',
          iconKey: 'qiwa',
          platformLogoSrc: '/assets/official/qiwa.png',
          platformName: 'Qiwa',
        },
        {
          id: 'hrdf-activation',
          number: '09',
          title: 'HRDF Account Activation',
          iconKey: 'hrdf',
          platformLogoSrc: '/assets/official/hrdf.png',
          platformName: 'HRDF',
        },
        {
          id: 'muqeem-activation',
          number: '10',
          title: 'Muqeem Services Activation',
          iconKey: 'muqeem',
          platformLogoSrc: '/assets/official/muqeem.png',
          platformName: 'Muqeem',
        },
      ],
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
      whyAwn: {
        heading: 'Why AWN for Business Setup Services?',
        paragraph1:
          'Taking the step to start your own business is a major milestone. The beginning is one of the critical factors for success—often requirements, registrations, costs, and timelines are not fully clear before starting, which can lead to extra costs, delays, or errors. AWN ensures expert service so you can start with confidence; our dedicated team of professionals provides the guidance and technical support needed to overcome business setup complexities with ease.',
        highlightBullet:
          'We understand that starting a business can be a challenging task, especially when you need to focus more on resources and operational methods.',
        paragraph2:
          'Choosing AWN’s business setup service is a smart decision to resolve these complexities and start intelligently. Your valuable time and effort can be invested in shaping core business objectives and planning for your company’s success.',
      },
      expertBenefits: {
        heading: 'How Does AWN’s Expert Service Benefit You?',
        subheading: 'Success Indicators',
        imageSrc: '/assets/official/business-setup-benefits.png',
        imageAlt: 'Success indicators with AWN experts',
        indicators: [
          { id: 'always-compliant', label: 'Always Compliant' },
          { id: 'meets-schedule', label: 'Meets Schedule' },
          { id: 'no-pending-requests', label: 'No Pending Requests' },
          { id: 'share-all-docs', label: 'Full Document Sharing' },
          { id: 'activate-all-accounts', label: 'All Accounts Activated' },
          { id: 'no-extra-cost', label: 'No Extra Cost' },
        ],
      },
      faq: {
        kicker: 'Clear Answers',
        heading: 'Frequently Asked Questions',
        items: [
          {
            id: 'faq-1',
            question: 'How can I subscribe to AWN’s Business Setup service?',
            answer: [
              'Please register / subscribe on this website, select the "Pricing Plans" tab above and follow the subsequent steps.',
            ],
          },
          {
            id: 'faq-2',
            question: 'What exactly is the Business Setup service?',
            answer: [
              'In this service, AWN completes all registration and incorporation procedures for a new company or branch on behalf of the business owner.',
            ],
          },
          {
            id: 'faq-3',
            question: 'How long does the service remain available?',
            answer: [
              'This is a one-time service that continues until all agreed-upon setup services are completed.',
            ],
          },
          {
            id: 'faq-4',
            question: 'How can I check the progress status?',
            answer: [
              'Progress is displayed step-by-step on the client dashboard.',
            ],
          },
          {
            id: 'faq-5',
            question: 'Can I establish a branch using this service?',
            answer: [
              'Yes, you can create or establish a branch using this service.',
            ],
          },
          {
            id: 'faq-6',
            question: 'Who pays the government fees?',
            answer: [
              'The client is responsible for paying government fees and expenses.',
              'AWN team members will support you by sharing the payment link and providing payment details.',
            ],
          },
          {
            id: 'faq-7',
            question: 'What payment methods are supported?',
            answer: [
              'The client is responsible for paying government fees and expenses.',
              'AWN team members will support you by sharing the payment link and providing payment details.',
            ],
          },
        ],
      },
    },
    employeeCompliancePage: {
      introTab: 'About the Service',
      pageTitle: 'Employee Compliance Services',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      heroImageSrc: '/assets/aistudio/employee-compliance-hero-clean.png',
      heroImageAlt: 'AWN Employee Compliance Services',
      servicesHeading: 'Services',
      servicesSubtitle:
        'Comprehensive administration of employee-related regulatory compliance across official portals:',
      servicesList: [
        {
          id: 'hrdf-services',
          number: '01',
          title: 'HRDF Account Services',
          iconKey: 'hrdf',
        },
        {
          id: 'gosi-services',
          number: '02',
          title: 'Social Insurance (GOSI) Account Services',
          iconKey: 'gosi',
        },
        {
          id: 'absher-business-services',
          number: '03',
          title: 'Absher Business Services',
          iconKey: 'absher',
        },
        {
          id: 'muqeem-services',
          number: '04',
          title: 'Muqeem Platform Services',
          iconKey: 'muqeem',
        },
        {
          id: 'qiwa-services',
          number: '05',
          title: 'Qiwa Platform Services',
          iconKey: 'qiwa',
        },
        {
          id: 'mudad-services',
          number: '06',
          title: 'Mudad Platform Services',
          iconKey: 'mudad',
        },
        {
          id: 'medical-insurance-services',
          number: '07',
          title: 'Medical Insurance Services',
          iconKey: 'medical',
        },
      ],
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
      whyAwn: {
        heading: 'Why AWN for Employee Compliance Services',
        paragraph1:
          'When it comes to employee-related services, choosing AWN ensures easy and effective control in managing your business. Our experience across government platforms related to employees, combined with our in-depth knowledge of Saudi Labor Law processes and procedures, provides you with the best experience. We understand the unique challenges and requirements in this field and tailor our services to meet your specific needs.',
        highlightBullet:
          'With us, you can expect personalized support, streamlined processes, and meticulous attention to detail.',
        paragraph2:
          'We serve a wide variety of employee-related government compliance requirements across multiple platforms with the highest degree of professional accuracy to relieve the burden from you.',
      },
      benefitsSection: {
        kicker: 'Service Highlights',
        heading: 'Employee Compliance Pillars with AWN',
        points: [
          { id: 'accurate-permits', label: 'Accurate Permits and Data' },
          { id: 'system-alignment', label: 'Alignment with Regulatory Requirements' },
          { id: 'labor-law-compliance', label: 'Labor Law Compliance' },
          { id: 'avoid-extra-costs', label: 'Avoiding Additional Costs' },
          { id: 'timely-processing', label: 'Timely Processing of Requirements' },
        ],
      },
      faq: {
        kicker: 'Clear Answers',
        heading: 'Frequently Asked Questions',
        items: [
          {
            id: 'emp-faq-1',
            question: 'What are the Employee Compliance Services?',
            answer: [
              'This service covers all government platforms related to employees.',
            ],
          },
          {
            id: 'emp-faq-2',
            question: 'How can I subscribe to this service?',
            answer: [
              'Please contact us via the Contact Us option, and we will reach out to assist you.',
            ],
          },
          {
            id: 'emp-faq-3',
            question: 'Where can I find subscription options?',
            answer: [
              'Please review the subscription options under the Pricing Plans menu.',
            ],
          },
          {
            id: 'emp-faq-4',
            question: 'How will AWN’s service benefit me?',
            answer: [
              'AWN provides comprehensive administrative services backed by expert knowledge of Saudi regulations and government platforms.',
            ],
          },
        ],
      },
    },
    governmentRelationPage: {
      introTab: 'About the Service',
      pageTitle: 'Business Compliance Services',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      heroImageSrc: '/assets/aistudio/government-relations-hero-clean.png',
      heroImageAlt: 'AWN Business Compliance Services',
      servicesHeading: 'Services',
      servicesSubtitle:
        'Continuous completion and follow-up of all commercial registrations, licenses, and renewals across official government entities:',
      servicesList: [
        {
          id: 'ministry-of-commerce',
          number: '01',
          title: 'Ministry of Commerce',
          iconKey: 'mc',
        },
        {
          id: 'chamber-of-commerce',
          number: '02',
          title: 'Chamber of Commerce',
          iconKey: 'chamber',
        },
        {
          id: 'ministry-of-investment',
          number: '03',
          title: 'Ministry of Investment',
          iconKey: 'misa',
        },
        {
          id: 'ministry-of-municipalities',
          number: '04',
          title: 'Ministry of Municipalities',
          iconKey: 'balady',
        },
        {
          id: 'zatca-authority',
          number: '05',
          title: 'Zakat, Tax and Customs Authority',
          iconKey: 'zatca',
        },
        {
          id: 'civil-defense',
          number: '06',
          title: 'Civil Defense',
          iconKey: 'civil-defense',
        },
        {
          id: 'saudi-post-spl',
          number: '07',
          title: 'Saudi Post (SPL)',
          iconKey: 'spl',
        },
      ],
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
      whyAwn: {
        heading: 'Why AWN for Business Compliance Services',
        paragraph1:
          'Operating a business involves numerous government procedures, registrations, licenses, and ongoing compliance, which represent one of the core pillars for ensuring smooth operations and avoiding regulatory risks. Professional support from AWN experts is the optimal choice for your business—we have a proven track record of delivering these services to our clients, and our knowledgeable, experienced team serves as your trusted partner with high professionalism.',
        highlightBullet:
          'We provide personalized support, ensuring your compliance needs are met while minimizing the administrative burden on your side.',
        paragraph2:
          'Choosing AWN is the best option economically, professionally, and across many other aspects compared to hiring a full-time compliance specialist or involving yourself in these complexities. We know your focus should remain on business growth while our role is to support you with compliance.',
      },
      expertBenefits: {
        heading: 'How Does AWN’s Expert Service Benefit You?',
        subheading: 'Success Indicators',
        points: [
          { id: 'valid-licenses', label: 'Valid Licenses and Registrations' },
          { id: 'continuous-compliance', label: 'Continuous Compliance with Requirements' },
          { id: 'protect-interests', label: 'Protecting Your Business Interests' },
          { id: 'regulatory-updates', label: 'Keeping Pace with New Regulations and Updates' },
        ],
      },
      faq: {
        kicker: 'Clear Answers',
        heading: 'Frequently Asked Questions',
        items: [
          {
            id: 'gov-faq-1',
            question: 'How can I subscribe to AWN’s Business Compliance Services?',
            answer: [
              'Please register / subscribe on this website, select the "Pricing" tab, and follow the subsequent steps.',
            ],
          },
          {
            id: 'gov-faq-2',
            question: 'What specifically is the Business Compliance Service?',
            answer: [
              'Through this service, AWN completes all registrations, licenses, and renewals related to your commercial business and continuously tracks and updates them.',
            ],
          },
          {
            id: 'gov-faq-3',
            question: 'Who will pay the government fees and expenses?',
            answer: [
              'AWN will provide you with the payment links or documents you need as a client, business owner, or authorized representative to complete payments unless otherwise agreed.',
            ],
          },
        ],
      },
    },
    hrManagementPage: {
      introTab: 'About Service',
      pageTitle: 'HR Management Services',
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Services',
      heroImageSrc: '/assets/aistudio/hr-management-hero-clean.png',
      heroImageAlt: 'HR Management Services — AWN Dedicated Team',
      employeeNetwork: {
        items: [
          {
            id: 'net-1',
            role: 'HR Manager',
            gender: 'female',
            statusText: 'Structures & Contracts Approval',
            tag: 'Strategic Oversight',
          },
          {
            id: 'net-2',
            role: 'Payroll Specialist',
            gender: 'male',
            statusText: 'Wages Protection (WPS) Compliance',
            tag: 'Monthly Payroll',
          },
          {
            id: 'net-3',
            role: 'Employee Relations Specialist',
            gender: 'female',
            statusText: 'Leave & Medical Insurance Management',
            tag: 'Staff Records',
          },
          {
            id: 'net-4',
            role: 'Compliance & Regulations Officer',
            gender: 'male',
            statusText: 'Qiwa & GOSI Portals',
            tag: 'Labor Law Compliance',
          },
          {
            id: 'net-5',
            role: 'Onboarding & Operations Specialist',
            gender: 'female',
            statusText: 'Attendance & Work Commencement',
            tag: 'Work Commencement',
          },
        ],
      },
      servicesHeading: 'Services',
      servicesSubtitle:
        'Comprehensive, professional management of all administrative and employee operations to ensure your company stability and full labor law compliance:',
      servicesList: [
        {
          id: 'hr-employee-files',
          number: '01',
          title: 'Employee Records & Contracts Management',
          shortDesc: 'Maintaining digital employee files and official contract documentation.',
          iconKey: 'files',
        },
        {
          id: 'hr-payroll-wps',
          number: '02',
          title: 'Payroll & Wages Protection System (WPS)',
          shortDesc: 'Monthly payroll processing, WPS file uploads, and Mudad discrepancy resolution.',
          iconKey: 'payroll',
        },
        {
          id: 'hr-attendance-leave',
          number: '03',
          title: 'Leave, Absence & Attendance Tracking',
          shortDesc: 'Managing annual and sick leave balances, attendance tracking, and reporting.',
          iconKey: 'attendance',
        },
        {
          id: 'hr-gosi-ops',
          number: '04',
          title: 'Social Insurance (GOSI) Management',
          shortDesc: 'Registering and offboarding contributors, updating monthly wages, and issuing certificates.',
          iconKey: 'gosi',
        },
        {
          id: 'hr-qiwa-mudad',
          number: '05',
          title: 'Qiwa, Mudad & Muqeem Platforms Management',
          shortDesc: 'Executing all administrative operations across government HR platforms.',
          iconKey: 'platforms',
        },
        {
          id: 'hr-end-of-service',
          number: '06',
          title: 'End of Service & Final Settlement Procedures',
          shortDesc: 'Accurate legal calculation of end-of-service benefits and clearance processes.',
          iconKey: 'settlement',
        },
        {
          id: 'hr-internal-policies',
          number: '07',
          title: 'Internal Regulations & Workplace Policies',
          shortDesc: 'Drafting and updating ministry-approved work bylaws aligned with Saudi Labor Law.',
          iconKey: 'policies',
        },
      ],
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
      whyAwn: {
        heading: 'Why AWN for HR Management Services',
        paragraph1:
          'Human resources are the core engine of any successful enterprise, demanding continuous attention to regulations, wages protection compliance, contract administration, and employee records. AWN provides your enterprise with an integrated strategic partner handling day-to-day workforce operations with utmost professionalism, freeing you to focus entirely on growth and expansion.',
        highlightBullet:
          'We supply your company with a seasoned, specialized HR team at an economical, tailored cost, ensuring strict confidentiality and accuracy of employee data.',
        paragraph2:
          'Whether you are starting with a small team or scaling an expanding enterprise, AWN services provide exceptional flexibility and institutional performance without the overhead of building an in-house HR department, backed by direct integration with all official government platforms.',
      },
      expertBenefits: {
        heading: 'How Does AWN’s Expert Service Benefit You?',
        subheading: 'Success Indicators',
        points: [
          { id: 'accurate-records', label: 'Complete Accuracy in Digital Records and Files' },
          { id: 'wps-compliance', label: 'Full Compliance with Wages Protection System without Delays' },
          { id: 'regulatory-alignment', label: 'Continuous Alignment with Labor Law Updates' },
          { id: 'reduced-overhead', label: 'Substantial Reduction in Administrative and Overhead Costs' },
          { id: 'instant-dashboards', label: 'Periodic Reports and Clear Decision Dashboards' },
          { id: 'dedicated-account-lead', label: 'Dedicated Account Manager with Fast Response Times' },
        ],
      },
      faq: {
        kicker: 'Clear Answers',
        heading: 'Frequently Asked Questions',
        items: [
          {
            id: 'hr-faq-1',
            question: 'What is included in AWN’s HR Management Service?',
            answer: [
              'The service includes employee records administration, monthly payroll preparation and Wages Protection System (WPS) auditing, leave and absence tracking, GOSI and government portal management (Qiwa, Mudad, Muqeem), end-of-service settlement calculations, and internal work bylaws.',
            ],
          },
          {
            id: 'hr-faq-2',
            question: 'Is this service suitable for small businesses and startups?',
            answer: [
              'Yes, our services and subscription packages are designed to support businesses of all sizes, from small teams to rapidly expanding enterprises, saving you the expense of hiring a dedicated in-house HR department.',
            ],
          },
          {
            id: 'hr-faq-3',
            question: 'How is employee data confidentiality and privacy protected?',
            answer: [
              'We adhere to the highest institutional privacy and security standards in handling employee records, salaries, and employment contracts, backed by binding non-disclosure agreements and strict governance protocols.',
            ],
          },
          {
            id: 'hr-faq-4',
            question: 'How do I get started with AWN HR Management Services?',
            answer: [
              'You can browse our pricing plans to select the right tier for your workforce size, or request a free consultation via the Contact Us section, and a dedicated AWN advisor will assist you immediately.',
            ],
          },
        ],
      },
    },
    servicesPage: {
      breadcrumbHome: 'Home',
      pageTitle: 'Services',
      introKicker: 'Corporate & Government Relations Ecosystem',
      headlineStart: 'Focus on Your Business: Let',
      headlineHighlight: 'AWN',
      headlineEnd: 'Support Your Business Journey',
      description:
        'We are in the business of making things easy. We manage business setup, employee compliance, government compliance, and HR management across Saudi Arabia through a single coordinated window supervised by dedicated specialists.',
      primaryCta: 'Pricing',
      secondaryCta: 'Get a Free Business Appointment',
      overviewHighlights: [
        'Team of experts specialized in Saudi regulations',
        'Proactive reminders and alerts before renewal deadlines',
        'Cost and time savings while avoiding regulatory penalties',
        'Periodic reports and client dashboard for tracking requests',
      ],
      categoriesSection: {
        kicker: 'Core Service Categories',
        heading: 'Tailored Solutions Designed for Your Business Needs',
        subtitle:
          'Select the service track aligned with your business stage and explore the full scope and deliverables:',
        deliverablesHeading: 'Key Services Included in This Track:',
        categories: [
          {
            id: 'business-setup-services',
            number: '01',
            title: 'New Business Setup Services',
            subtitle: 'Complete legal formation for new companies and branches in Saudi Arabia',
            description:
              'When taking the step to start your own business, AWN guarantees expert guidance to begin with confidence—completing all registration and setup procedures for a new company or branch on your behalf and activating all required government accounts.',
            routePath: '/business-setup-services',
            iconKey: 'setup',
            subServices: [
              'Trade Name Reservation & Commercial Registration (CR) Issuance',
              'Chamber of Commerce & Saudi Post National Address (SPL) Registration',
              'GOSI, ZATCA, and Value Added Tax (VAT) Registration',
              'Qiwa Registration, HRDF Account Activation, and Muqeem Services',
            ],
            valuePillars: ['Expert Guidance', 'Fast Solutions', 'Tailored Services', 'Cost & Time Savings'],
            ctaLabel: 'Explore Service Details',
          },
          {
            id: 'government-employees-services',
            number: '02',
            title: 'Employee Compliance Services',
            subtitle: 'Comprehensive administration across all employee-related government portals',
            description:
              'Choosing AWN ensures smooth, effective control over employee regulatory requirements across official government portals, backed by deep knowledge of Saudi Labor Law procedures, continuous monitoring, and early notifications.',
            routePath: '/government-employees-services',
            iconKey: 'employees',
            subServices: [
              'HRDF & General Organization for Social Insurance (GOSI) Account Services',
              'Absher Business & Muqeem Portal Services (Iqamas, Visas & Work Permits)',
              'Qiwa & Mudad Portal Services (Contract Documentation & WPS)',
              'Employee Medical Insurance Administration & Follow-up',
            ],
            valuePillars: ['Accurate Permits & Data', 'Labor Law Compliance', 'Notifications & Alerts', 'Timely Processing'],
            ctaLabel: 'Explore Service Details',
          },
          {
            id: 'government-relation-services',
            number: '03',
            title: 'Business Compliance Services',
            subtitle: 'Continuous management of government registrations, licenses, and renewals',
            description:
              'We complete all commercial registrations, licenses, and renewals for your business and monitor their continuous updates across government authorities—protecting your business interests and reducing administrative overhead.',
            routePath: '/government-relation-services',
            iconKey: 'compliance',
            subServices: [
              'Ministry of Commerce, Chamber of Commerce & Ministry of Investment',
              'Ministry of Municipalities and Housing (Balady) Licenses',
              'ZATCA Authority & Civil Defense Safety Licenses',
              'Saudi Post (SPL) & National Address Management',
            ],
            valuePillars: ['Active Licenses & CRs', 'Continuous Compliance', 'Business Protection', 'Regulatory Alignment'],
            ctaLabel: 'Explore Service Details',
          },
          {
            id: 'hr-management-services',
            number: '04',
            title: 'HR Management Services',
            subtitle: 'End-to-end administration of employee records, payroll, and internal policies',
            description:
              'We provide your establishment with an integrated strategic HR partner handling digital personnel records, monthly payroll runs and Wages Protection System (WPS) matching, leave tracking, and approved internal work regulations.',
            routePath: '/hr-management-services',
            iconKey: 'hr',
            subServices: [
              'Employee Records, Contracts, Leave & Attendance Management',
              'Monthly Payroll Preparation & Wages Protection System (WPS) Matching',
              'GOSI Administration & Qiwa, Mudad, and Muqeem Portal Operations',
              'End-of-Service Settlements & Ministry-Approved Internal Bylaws',
            ],
            valuePillars: ['Accurate Digital Records', 'Disciplined Payroll Runs', 'Reports & Dashboards', 'Dedicated Account Lead'],
            ctaLabel: 'Explore Service Details',
          },
        ],
      },
      advisorySection: {
        kicker: 'Flexible Additional Support',
        heading: 'Advisory & On-Demand Support Services',
        subtitle:
          'Alongside our four primary service tracks, AWN supports your establishment with specialized regulatory advisory and on-demand administrative services:',
        ctaLabel: 'Request Advisory or Custom Service',
        items: [
          {
            id: 'consulting-services',
            iconKey: 'consulting',
            title: 'Advisory Services',
            description:
              'Specialized guidance on Saudi labor and commercial regulations to help business owners make sound administrative decisions and mitigate compliance risks.',
            points: [
              'Reviewing current compliance posture and identifying regulatory gaps',
              'Actionable recommendations for Saudi Labor Law and Saudization alignment',
              'Clarification sessions with government relations and HR specialists',
            ],
          },
          {
            id: 'other-services',
            iconKey: 'other',
            title: 'On-Demand Support Services',
            description:
              'A suite of on-demand administrative support services designed to address urgent or specialized business requirements at every growth stage.',
            points: [
              'Single on-demand government transaction processing',
              'Updating establishment records and branch licenses',
              'Handling routine and urgent official portal requests',
            ],
          },
        ],
      },
      expertBenefits: {
        kicker: 'Success Indicators',
        heading: 'How Does AWN’s Expert Service Benefit You?',
        subtitle:
          'We uphold clear operational standards that guarantee peace of mind and continuous regulatory discipline:',
        points: [
          { id: 'always-compliant', label: 'Always Compliant' },
          { id: 'meets-schedule', label: 'Meets the Schedule' },
          { id: 'no-pending-requests', label: 'No Pending Requests' },
          { id: 'share-all-docs', label: 'All Documents Shared' },
          { id: 'activate-all-accounts', label: 'All Accounts Activated' },
          { id: 'no-extra-cost', label: 'No Extra Cost' },
        ],
      },
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
    },
    aboutPage: {
      breadcrumbHome: 'Home',
      pageTitle: 'About Us',
      introKicker: 'About Us · AWN Business Services',
      parentCompanyNote: 'A product of DOTS Administrative Services',
      heroTitle: 'We Are Ready to Support You in Reaching New Heights',
      heroDescription:
        'Our experienced team supports you through complex regulatory requirements—saving you time, mitigating risks, and unlocking your full business potential.',
      heroSecondaryDescription:
        'AWN Business Services is an integrated administrative partner for enterprises and entrepreneurs across Saudi Arabia, providing a unified window for business setup, employee compliance, government relations, and HR management.',
      primaryCta: 'Stay in Touch',
      secondaryCta: 'Explore Our Services',
      storySection: {
        kicker: 'About Us · Join Us',
        heading: 'Always Stay Compliant with Government Requirements',
        paragraph1:
          'Dealing with government regulations can be overwhelming and time-consuming. Let us manage all your government relations services in one place so you can focus on running your business smoothly.',
        paragraph2:
          'Our account managers are experts in navigating government authorities and regulations, ensuring your official paperwork is processed efficiently and effectively. Say goodbye to directly handling complex employee registrations and routine operations with AWN.',
        highlights: [
          'Exceptional expertise and guidance for the best value',
          'Automated reminders and workflows',
        ],
        pillars: [
          {
            id: 'confidence',
            title: 'Run Your Business with Confidence',
            description:
              'AWN ensures your business meets all government requirements and legal licenses.',
          },
          {
            id: 'hassle-free',
            title: 'Hassle-Free Experience',
            description:
              'A trusted partner for all government relations services related to your business.',
          },
        ],
      },
      missionVisionSection: {
        kicker: 'Mission & Vision',
        heading: 'Our Approach to Empowering Businesses in Saudi Arabia',
        mission: {
          label: 'Our Mission',
          title: 'Making Business Easy & Reducing Administrative Burden',
          description:
            'Empowering business owners and companies to focus entirely on growing their enterprises by managing all business setup, government relations, employee compliance, and HR operations in one place with dedicated expert support.',
        },
        vision: {
          label: 'Our Vision',
          title: 'The Trusted Administrative Partner for Sustainable Business Growth',
          description:
            'Delivering a hassle-free operational experience in the Saudi market that combines deep regulatory knowledge of official government portals with proactive reminders and automated workflows.',
        },
      },
      valuesSection: {
        kicker: 'Core Commitments',
        heading: 'What Sets Your Partnership with AWN Experts Apart?',
        subtitle:
          'At AWN, we adhere to clear professional and operational standards that guarantee regulatory discipline and transparency for your establishment:',
        values: [
          {
            id: 'always-compliant',
            iconKey: 'shield',
            title: 'Always Compliant',
            description:
              'Continuous follow-up on commercial registrations, licenses, and labor law requirements to keep your business protected.',
          },
          {
            id: 'expert-team',
            iconKey: 'users',
            title: 'Team of Specialized Experts',
            description:
              'Experienced account managers well-versed in official government authorities and portals providing clear guidance.',
          },
          {
            id: 'meets-schedule',
            iconKey: 'clock',
            title: 'Meets the Schedule',
            description:
              'Processing all official requests and paperwork on time without delays or pending requests.',
          },
          {
            id: 'automated-reminders',
            iconKey: 'bell',
            title: 'Automated Reminders & Alerts',
            description:
              'Continuous monitoring and early notifications ahead of license, residency, and contract renewal deadlines.',
          },
          {
            id: 'full-transparency',
            iconKey: 'folder',
            title: 'Data & Documents at Your Fingertips',
            description:
              'Sharing all official documents, activating all accounts, and displaying step-by-step progress in the client dashboard.',
          },
          {
            id: 'best-value',
            iconKey: 'value',
            title: 'Cost & Time Savings',
            description:
              'Best value for price with no unexpected extra costs compared to full-time overhead or regulatory penalties.',
          },
        ],
      },
      governanceLedger: {
        kicker: 'AWN Business Services · Riyadh',
        title: 'Manage Business Accounts in One Place',
        subtitle: 'Direct supervision by specialists in Saudi regulations',
        checkpoints: [
          { label: 'Commercial Registrations & Licenses', status: 'Continuous Follow-up' },
          { label: 'Qiwa, GOSI & Mudad Compliance', status: 'Regular Updates' },
          { label: 'Automated Renewal Reminders', status: 'Active' },
          { label: 'Dedicated Account Manager', status: 'Direct Support' },
        ],
      },
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      supportCard: {
        kicker: 'Have Any Questions?',
        headingStart: 'Need',
        headingHighlight: 'Any Help?',
        supportingText: 'Get a free business appointment',
        ctaLabel: 'Contact Us',
      },
    },
    contactPage: {
      breadcrumbHome: 'Home',
      pageTitle: 'Contact Us',
      introKicker: 'Official Contact Channels · AWN Business Services',
      parentCompanyNote: 'A product of DOTS Administrative Services',
      heroTitle: 'Contact Us — Get a Free Business Appointment',
      heroSubtitle:
        'Our team of AWN Business Services specialists is ready to answer your inquiries and provide advisory and operational support for your organization.',
      heroDescription:
        'Whether you are planning to establish a new business in Saudi Arabia or looking to streamline employee compliance, government relations, and HR management, reach out directly through our verified channels or book a free business appointment.',
      primaryCta: 'Book Free Appointment',
      secondaryCta: 'View Pricing Packages',
      directLedger: {
        kicker: 'Verified Corporate Channels · Riyadh',
        title: 'Direct Contact Directory',
        subtitle: 'Immediate access to AWN Business Services consultants',
        items: [
          {
            label: 'Unified Number',
            value: '+966 9200 150 83',
            href: 'tel:+966920015083',
            isLtr: true,
          },
          {
            label: 'Direct Mobile',
            value: '+966 582 940 754',
            href: 'tel:+966582940754',
            isLtr: true,
          },
          {
            label: 'Official Email',
            value: 'care@awn.sa',
            href: 'mailto:care@awn.sa',
            isLtr: true,
          },
          {
            label: 'Location',
            value: 'Al-Ared Dist, Riyadh - Saudi Arabia',
          },
        ],
      },
      channelsSection: {
        kicker: 'Verified Contact Methods',
        heading: 'Reach the AWN Team Through Your Preferred Channel',
        subtitle:
          'We provide direct, transparent communication channels to follow up on requests and schedule advisory appointments:',
        callCard: {
          title: 'Call Us',
          description: 'Speak directly with our client care and business development specialists:',
          unifiedLabel: 'Unified Number',
          unifiedNumber: '+966 9200 150 83',
          unifiedHref: 'tel:+966920015083',
          mobileLabel: 'Direct Phone',
          mobileNumber: '+966 582 940 754',
          mobileHref: 'tel:+966582940754',
        },
        emailCard: {
          title: 'Mail Us',
          description: 'Send your inquiries, quotation requests, or appointment details to our care team:',
          emailLabel: 'Official Email',
          emailValue: 'care@awn.sa',
          emailHref: 'mailto:care@awn.sa',
          responseNote: 'Our client care team reviews and responds to all inquiries during business hours.',
        },
        locationCard: {
          title: 'Location & Address',
          description: 'AWN Business Services headquarters in Riyadh:',
          addressLabel: 'Address',
          addressValue: 'Al-Ared Dist, Riyadh - Saudi Arabia',
          mapLinkLabel: 'Open Location in Google Maps',
          mapLinkHref: 'https://goo.gl/maps/zroLAsA8ModYpdK9A',
        },
        hoursCard: {
          title: 'Official Working Hours',
          description: 'We welcome your calls and advisory business appointments throughout the workweek:',
          daysLabel: 'Working Days',
          daysValue: 'Sunday – Thursday',
          timeLabel: 'Business Hours',
          timeValue: '9:00 AM – 5:00 PM (Riyadh Time)',
        },
      },
      formSection: {
        kicker: 'Business Appointment & Inquiry Form',
        heading: 'Get a Free Business Appointment',
        subtitle:
          'Enter your contact details and required service topic below, and an AWN specialist will coordinate with you promptly.',
        requiredNote: 'All fields marked with (*) are required to prepare your appointment request.',
      },
      locationPanel: {
        kicker: 'Headquarters & Service Details',
        heading: 'AWN Business Services — Riyadh',
        description:
          'We serve organizations and enterprises across the Kingdom of Saudi Arabia through an integrated administrative platform and direct supervision from our Riyadh headquarters.',
        addressTitle: 'Office Address',
        addressValue: 'Al-Ared District, Riyadh',
        cityValue: 'Kingdom of Saudi Arabia',
        workingHoursTitle: 'Appointment & Support Hours',
        workingHoursValue: 'Sunday to Thursday · 9:00 AM – 5:00 PM',
        paymentTitle: 'Supported Payment Network',
        paymentValue: 'Electronic payment support via Mada network',
        mapCtaLabel: 'View Directions & Location on Google Maps',
        mapUrl: 'https://goo.gl/maps/zroLAsA8ModYpdK9A',
      },
      joinCard: {
        heading: 'Join Us',
        supportingText: 'Discover the best package for your company',
        ctaLabel: 'Pricing',
      },
      servicesCard: {
        kicker: 'AWN Service Tracks',
        heading: 'Explore Our Business & Government Compliance Services',
        supportingText: 'Business Setup · Employee Compliance · Government Relations · HR Management',
        ctaLabel: 'View Our Services',
      },
    },
  },
};
