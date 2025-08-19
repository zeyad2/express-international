import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data with natural Arabic translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.globalReach': 'Global Reach',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',

    // Hero Section
    'hero.title': 'Connecting Your Business',
    'hero.titleSpan': 'to the World',
    'hero.subtitle': 'Reliable exporting solutions tailored to your needs with Express International',
    'hero.getQuote': 'Get a Quote',
    'hero.learnMore': 'Learn More',

    // About Section
    'about.title': 'Who We Are',
    'about.description1': 'Express International is a leading global logistics company dedicated to connecting businesses worldwide through reliable, efficient, and cost-effective shipping solutions. With over two decades of experience, we\'ve built a reputation for excellence in international trade and logistics.',
    'about.description2': 'Our mission is to simplify global commerce by providing comprehensive export services that enable businesses of all sizes to reach new markets and achieve their international growth objectives.',
    'about.yearsExperience': 'Years of Experience',
    'about.countriesServed': 'Countries Served',
    'about.tonsExported': 'Tons Exported',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive logistics solutions for your business',
    'services.seaFreight': 'Sea Freight',
    'services.seaFreightDesc': 'Cost-effective ocean shipping solutions for large cargo volumes with reliable delivery times.',
    'services.airFreight': 'Air Freight',
    'services.airFreightDesc': 'Fast and secure air cargo services for time-sensitive shipments worldwide.',
    'services.customs': 'Customs & Documentation',
    'services.customsDesc': 'Expert customs clearance and documentation services to ensure smooth international trade.',
    'services.learnMore': 'Learn More',

    // Products Section
    'products.title': 'Our Export Products',
    'products.subtitle': 'High-quality medical equipment exported worldwide',
    'products.endoscope1.name': 'HD Endoscope Camera',
    'products.endoscope1.desc': 'High-definition endoscopic camera system with advanced imaging technology for precise medical procedures.',
    'products.endoscope2.name': 'Flexible Endoscope',
    'products.endoscope2.desc': 'Ultra-flexible endoscope with superior maneuverability for complex diagnostic procedures.',
    'products.endoscope3.name': 'Surgical Endoscope',
    'products.endoscope3.desc': 'Professional-grade surgical endoscope designed for minimally invasive operations.',
    'products.endoscope4.name': 'Digital Endoscope',
    'products.endoscope4.desc': 'Advanced digital endoscope with real-time imaging and data recording capabilities.',
    'products.endoscope5.name': 'Portable Endoscope',
    'products.endoscope5.desc': 'Compact and portable endoscope system ideal for field operations and mobile clinics.',
    'products.endoscope6.name': 'Wireless Endoscope',
    'products.endoscope6.desc': 'Cutting-edge wireless endoscope technology for enhanced mobility and convenience.',

    // Global Reach Section
    'global.title': 'Global Network Coverage',
    'global.subtitle': 'Connecting over 50 countries through our strategic partnerships and advanced logistics network',
    'global.allRoutes': 'All Routes',
    'global.airFreight': 'Air Freight',
    'global.seaFreight': 'Sea Freight',
    'global.countries': 'Countries',
    'global.cities': 'Cities',
    'global.operations': 'Operations',
    'global.reliability': 'Reliability',

    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by businesses worldwide',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our logistics experts',
    'contact.formTitle': 'Send us a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.phone': 'Phone',
    'contact.serviceInterest': 'Service Interest',
    'contact.message': 'Message',
    'contact.sendMessage': 'Send Message',
    'contact.businessHours': 'Business Hours',
    'contact.whyChoose': 'Why Choose Express International?',
    'contact.support247': '24/7 customer support',
    'contact.realTimeTracking': 'Real-time tracking',
    'contact.competitivePricing': 'Competitive pricing',
    'contact.globalNetwork': 'Global network coverage',

    // CTA Section
    'cta.title': 'Let\'s Get Your Products Moving',
    'cta.subtitle': 'Ready to expand your business globally? Contact Express International today for a customized shipping solution.',
    'cta.requestQuote': 'Request a Quote',

    // Footer
    'footer.description': 'Your trusted partner for global logistics and export solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.copyright': '© 2024 Express International. All rights reserved.',

    // Form placeholders
    'form.namePlaceholder': 'Your full name',
    'form.emailPlaceholder': 'your@email.com',
    'form.companyPlaceholder': 'Your company name',
    'form.phonePlaceholder': '+1 (555) 123-4567',
    'form.messagePlaceholder': 'Tell us about your shipping requirements...',
    'form.selectService': 'Select a service',
    'form.generalInquiry': 'General Inquiry',

    // Locations
    'location.newYork': 'New York',
    'location.london': 'London',
    'location.dubai': 'Dubai',
    'location.singapore': 'Singapore',
    'location.shanghai': 'Shanghai',
    'location.saoPaulo': 'São Paulo',
    'location.lagos': 'Lagos',
    'location.sydney': 'Sydney',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.products': 'منتجاتنا',
    'nav.globalReach': 'الوصول العالمي',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',

    // Hero Section
    'hero.title': 'نربط أعمالك',
    'hero.titleSpan': 'بالعالم',
    'hero.subtitle': 'حلول تصدير موثوقة مصممة خصيصاً لاحتياجاتك مع إكسبرس إنترناشيونال',
    'hero.getQuote': 'احصل على عرض سعر',
    'hero.learnMore': 'اعرف المزيد',

    // About Section
    'about.title': 'من نحن',
    'about.description1': 'إكسبرس إنترناشيونال هي شركة لوجستية عالمية رائدة مكرسة لربط الشركات حول العالم من خلال حلول شحن موثوقة وفعالة وفعالة من حيث التكلفة. مع أكثر من عقدين من الخبرة، بنينا سمعة متميزة في التجارة الدولية واللوجستيات.',
    'about.description2': 'مهمتنا هي تبسيط التجارة العالمية من خلال توفير خدمات تصدير شاملة تمكن الشركات من جميع الأحجام من الوصول إلى أسواق جديدة وتحقيق أهدافها في النمو الدولي.',
    'about.yearsExperience': 'سنوات من الخبرة',
    'about.countriesServed': 'دولة نخدمها',
    'about.tonsExported': 'طن مُصدَّر',

    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول لوجستية شاملة لأعمالك',
    'services.seaFreight': 'الشحن البحري',
    'services.seaFreightDesc': 'حلول شحن بحري فعالة من حيث التكلفة للشحنات الكبيرة مع أوقات تسليم موثوقة.',
    'services.airFreight': 'الشحن الجوي',
    'services.airFreightDesc': 'خدمات شحن جوي سريعة وآمنة للشحنات الحساسة للوقت في جميع أنحاء العالم.',
    'services.customs': 'الجمارك والوثائق',
    'services.customsDesc': 'خدمات خبيرة في التخليص الجمركي والوثائق لضمان التجارة الدولية السلسة.',
    'services.learnMore': 'اعرف المزيد',

    // Products Section
    'products.title': 'منتجاتنا المُصدَّرة',
    'products.subtitle': 'معدات طبية عالية الجودة مُصدَّرة عالمياً',
    'products.endoscope1.name': 'كاميرا منظار عالية الدقة',
    'products.endoscope1.desc': 'نظام كاميرا منظار عالي الدقة مع تقنية تصوير متقدمة للإجراءات الطبية الدقيقة.',
    'products.endoscope2.name': 'منظار مرن',
    'products.endoscope2.desc': 'منظار فائق المرونة مع قابلية حركة متفوقة للإجراءات التشخيصية المعقدة.',
    'products.endoscope3.name': 'منظار جراحي',
    'products.endoscope3.desc': 'منظار جراحي احترافي مصمم للعمليات الجراحية طفيفة التدخل.',
    'products.endoscope4.name': 'منظار رقمي',
    'products.endoscope4.desc': 'منظار رقمي متقدم مع تصوير فوري وإمكانيات تسجيل البيانات.',
    'products.endoscope5.name': 'منظار محمول',
    'products.endoscope5.desc': 'نظام منظار مدمج ومحمول مثالي للعمليات الميدانية والعيادات المتنقلة.',
    'products.endoscope6.name': 'منظار لاسلكي',
    'products.endoscope6.desc': 'تقنية منظار لاسلكية متطورة لتحسين الحركة والراحة.',

    // Global Reach Section
    'global.title': 'تغطية شبكة عالمية',
    'global.subtitle': 'ربط أكثر من 50 دولة من خلال شراكاتنا الاستراتيجية وشبكتنا اللوجستية المتقدمة',
    'global.allRoutes': 'جميع الطرق',
    'global.airFreight': 'الشحن الجوي',
    'global.seaFreight': 'الشحن البحري',
    'global.countries': 'دولة',
    'global.cities': 'مدينة',
    'global.operations': 'العمليات',
    'global.reliability': 'الموثوقية',

    // Testimonials Section
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'موثوق به من قبل الشركات حول العالم',

    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع خبراء اللوجستيات لدينا',
    'contact.formTitle': 'أرسل لنا رسالة',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.company': 'الشركة',
    'contact.phone': 'الهاتف',
    'contact.serviceInterest': 'الخدمة المهتم بها',
    'contact.message': 'الرسالة',
    'contact.sendMessage': 'إرسال الرسالة',
    'contact.businessHours': 'ساعات العمل',
    'contact.whyChoose': 'لماذا تختار إكسبرس إنترناشيونال؟',
    'contact.support247': 'دعم العملاء على مدار الساعة',
    'contact.realTimeTracking': 'تتبع فوري',
    'contact.competitivePricing': 'أسعار تنافسية',
    'contact.globalNetwork': 'تغطية شبكة عالمية',

    // CTA Section
    'cta.title': 'دعنا نحرك منتجاتك',
    'cta.subtitle': 'هل أنت مستعد لتوسيع أعمالك عالمياً؟ اتصل بإكسبرس إنترناشيونال اليوم للحصول على حل شحن مخصص.',
    'cta.requestQuote': 'اطلب عرض سعر',

    // Footer
    'footer.description': 'شريكك الموثوق لحلول اللوجستيات والتصدير العالمية.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.followUs': 'تابعنا',
    'footer.copyright': '© 2024 إكسبرس إنترناشيونال. جميع الحقوق محفوظة.',

    // Form placeholders
    'form.namePlaceholder': 'اسمك الكامل',
    'form.emailPlaceholder': 'your@email.com',
    'form.companyPlaceholder': 'اسم شركتك',
    'form.phonePlaceholder': '+966 50 123 4567',
    'form.messagePlaceholder': 'أخبرنا عن متطلبات الشحن الخاصة بك...',
    'form.selectService': 'اختر خدمة',
    'form.generalInquiry': 'استفسار عام',

    // Locations
    'location.newYork': 'نيويورك',
    'location.london': 'لندن',
    'location.dubai': 'دبي',
    'location.singapore': 'سنغافورة',
    'location.shanghai': 'شانغهاي',
    'location.saoPaulo': 'ساو باولو',
    'location.lagos': 'لاغوس',
    'location.sydney': 'سيدني',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Update document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};