import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data with natural Arabic translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.globalReach": "Global Reach",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",

    // Hero Section
    "hero.title": "Connecting Your Business",
    "hero.titleSpan": "to the World",
    "hero.subtitle":
      "Reliable exporting solutions tailored to your needs with Express International",
    "hero.getQuote": "Get a Quote",
    "hero.learnMore": "Learn More",

    // About Section
    "about.title": "Who We Are",
    "about.description1":
      "Express International is a leading global logistics company dedicated to connecting businesses worldwide through reliable, efficient, and cost-effective shipping solutions. With over two decades of experience, we've built a reputation for excellence in international trade and logistics.",
    "about.description2":
      "Our mission is to simplify global commerce by providing comprehensive export services that enable businesses of all sizes to reach new markets and achieve their international growth objectives.",
    "about.yearsExperience": "Years of Experience",
    "about.countriesServed": "Countries Served",
    "about.tonsExported": "Tons Exported",
    "about.imageAlt": "About Express International - Our logistics facilities",

    // Founder Section
    "founder.title": "Meet Our Founder",
    "founder.name": "Nabil Abbas",
    "founder.description1": "With over 25 years of experience in international logistics and trade, Nabil Abbas founded Express International with a vision to simplify global commerce for businesses of all sizes.",
    "founder.description2": "His deep understanding of regulatory requirements, customs procedures, and international market dynamics has positioned Express International as a trusted partner for companies seeking to expand their global reach.",
    "founder.quote": "Our success is measured by our clients' ability to reach new markets and achieve their international business goals.",
    "founder.imageAlt": "Ahmed Hassan - Founder of Express International",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive logistics solutions for your business",
    "services.seaFreight": "Sea Freight",
    "services.seaFreightDesc":
      "Cost-effective ocean shipping solutions for large cargo volumes with reliable delivery times.",
    "services.airFreight": "Air Freight",
    "services.airFreightDesc":
      "Fast and secure air cargo services for time-sensitive shipments worldwide.",
    "services.customs": "Customs Clearance",
    "services.customsDesc":
      "Expert customs clearance and regulatory services including medical supplies, cosmetics, and lab reagents approvals.",
    "services.importOnBehalf": "Import on behalf of others",
    "services.importOnBehalfDesc":
      "Professional import services representing your business interests with full regulatory compliance.",
    "services.exportersRegistry": "Exporters' Registry",
    "services.exportersRegistryDesc":
      "Complete registration and documentation services for exporters' registry requirements.",
    "services.learnMore": "Learn More",

    // Products Section
    "products.title": "Some Of Our Exported Products",
    "products.subtitle": "High-quality equipment exported worldwide",
    "products.endoscope1.name": "HD Endoscope Camera",
    "products.endoscope1.desc":
      "High-definition endoscopic camera system with advanced imaging technology for precise medical procedures.",
    "products.endoscope2.name": "Flexible Endoscope",
    "products.endoscope2.desc":
      "Ultra-flexible endoscope with superior maneuverability for complex diagnostic procedures.",
    "products.endoscope3.name": "Surgical Endoscope",
    "products.endoscope3.desc":
      "Professional-grade surgical endoscope designed for minimally invasive operations.",
    "products.endoscope4.name": "Digital Endoscope",
    "products.endoscope4.desc":
      "Advanced digital endoscope with real-time imaging and data recording capabilities.",
    "products.endoscope5.name": "Portable Endoscope",
    "products.endoscope5.desc":
      "Compact and portable endoscope system ideal for field operations and mobile clinics.",
    "products.endoscope6.name": "Wireless Endoscope",
    "products.endoscope6.desc":
      "Cutting-edge wireless endoscope technology for enhanced mobility and convenience.",

    // Global Reach Section
    "global.title": "Global Network Coverage",
    "global.subtitle":
      "Connecting over 50 countries through our strategic partnerships and advanced logistics network",
    "global.allRoutes": "All Routes",
    "global.airFreight": "Air Freight",
    "global.seaFreight": "Sea Freight",
    "global.countries": "Countries",
    "global.cities": "Cities",
    "global.operations": "Operations",
    "global.reliability": "Reliability",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by businesses worldwide",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our logistics experts",
    "contact.formTitle": "Send us a message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.phone": "Phone",
    "contact.serviceInterest": "Service Interest",
    "contact.message": "Message",
    "contact.sendMessage": "Send Message",
    "contact.businessHours": "Business Hours",
    "contact.whyChoose": "Why Choose Express International?",
    "contact.support247": "24/7 customer support",
    "contact.realTimeTracking": "Real-time tracking",
    "contact.competitivePricing": "Competitive pricing",
    "contact.globalNetwork": "Global network coverage",

    // CTA Section
    "cta.title": "Let's Get Your Products Moving",
    "cta.subtitle":
      "Ready to expand your business globally? Contact Express International today for a customized shipping solution.",
    "cta.requestQuote": "Request a Quote",

    // Footer
    "footer.description":
      "Your trusted partner for global logistics and export solutions.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.followUs": "Follow Us",
    "footer.copyright": "© 2024 Express International. All rights reserved.",

    // Form placeholders
    "form.namePlaceholder": "Your full name",
    "form.emailPlaceholder": "your@email.com",
    "form.companyPlaceholder": "Your company name",
    "form.phonePlaceholder": "+1 (555) 123-4567",
    "form.messagePlaceholder": "Tell us about your shipping requirements...",
    "form.selectService": "Select a service",
    "form.generalInquiry": "General Inquiry",

    // Locations
    "location.newYork": "New York",
    "location.london": "London",
    "location.dubai": "Dubai",
    "location.singapore": "Singapore",
    "location.shanghai": "Shanghai",
    "location.saoPaulo": "São Paulo",
    "location.lagos": "Lagos",
    "location.sydney": "Sydney",

    // Service Pages Common
    "service.backToServices": "Back to Services",
    "service.getQuote": "Get a Quote",
    "service.features": "Key Features",
    "service.benefits": "Benefits",
    "service.process": "Our Process",
    "service.options": "Service Options",
    "service.whyChoose": "Why Choose Our Service?",
    "service.stats": "Service Statistics",

    // Sea Freight Page
    "seaFreight.title": "Sea Freight Services",
    "seaFreight.subtitle":
      "Comprehensive ocean shipping solutions for businesses of all sizes",
    "seaFreight.description":
      "Our sea freight services provide cost-effective shipping solutions for large cargo volumes with reliable delivery times. We offer both FCL and LCL options to meet your specific requirements.",

    "seaFreight.step1.title": "Booking & Documentation",
    "seaFreight.step1.desc":
      "Submit your cargo details and required documentation for processing.",
    "seaFreight.step2.title": "Collection & Consolidation",
    "seaFreight.step2.desc":
      "We collect your cargo and consolidate it at our secure facilities.",
    "seaFreight.step3.title": "Ocean Transit",
    "seaFreight.step3.desc":
      "Your cargo travels safely across the ocean to the destination port.",
    "seaFreight.step4.title": "Delivery",
    "seaFreight.step4.desc":
      "Final delivery to your specified destination with full tracking.",
    "seaFreight.optionsDesc": "Sea Freight Options",

    "seaFreight.feature1": "Full Container Load (FCL) services",
    "seaFreight.feature2": "Less than Container Load (LCL) consolidation",
    "seaFreight.feature3": "Door-to-door delivery options",
    "seaFreight.feature4": "Real-time cargo tracking",
    "seaFreight.feature5": "Customs clearance assistance",
    "seaFreight.feature6": "Insurance coverage options",

    "seaFreight.benefit1": "Cost-effective for large shipments",
    "seaFreight.benefit2": "Environmentally friendly transport",
    "seaFreight.benefit3": "Global port network coverage",
    "seaFreight.benefit4": "Flexible scheduling options",

    "seaFreight.stat1.number": "500+",
    "seaFreight.stat1.label": "Ports Worldwide",
    "seaFreight.stat2.number": "15,000",
    "seaFreight.stat2.label": "TEU Capacity",
    "seaFreight.stat3.number": "99.2%",
    "seaFreight.stat3.label": "On-time Delivery",

    // Air Freight Page
    "airFreight.title": "Air Freight Services",
    "airFreight.subtitle":
      "Fast and reliable air cargo solutions for time-sensitive shipments",
    "airFreight.description":
      "Our air freight services provide the fastest delivery times for your urgent shipments. With our global airline partners and priority handling, we ensure your cargo reaches its destination quickly and safely.",

    "airFreight.step1.title": "Booking & Scheduling",
    "airFreight.step1.desc":
      "Schedule your air freight shipment with priority handling options.",
    "airFreight.step2.title": "Security & Packaging",
    "airFreight.step2.desc":
      "Professional packaging and security screening for air transport.",
    "airFreight.step3.title": "Global Transit",
    "airFreight.step3.desc":
      "Fast air transport to destinations worldwide via our airline partners.",
    "airFreight.step4.title": "Express Delivery",
    "airFreight.step4.desc":
      "Rapid delivery to final destination with real-time tracking.",

    "airFreight.feature1": "Express air freight services",
    "airFreight.feature2": "Standard air cargo options",
    "airFreight.feature3": "Temperature-controlled transport",
    "airFreight.feature4": "Dangerous goods handling",
    "airFreight.feature5": "Charter flight arrangements",
    "airFreight.feature6": "24/7 tracking and monitoring",

    "airFreight.benefit1": "Fastest delivery times",
    "airFreight.benefit2": "High security standards",
    "airFreight.benefit3": "Global airport network",
    "airFreight.benefit4": "Priority handling available",

    "airFreight.stat1.number": "200+",
    "airFreight.stat1.label": "Airport Partners",
    "airFreight.stat2.number": "48hrs",
    "airFreight.stat2.label": "Average Transit",
    "airFreight.stat3.number": "99.8%",
    "airFreight.stat3.label": "Safe Delivery",

    "airFreight.optionsDesc":
      "Comprehensive air freight solutions tailored to your needs",

    // Customs Documentation Page
    "customs.title": "Customs & Documentation",
    "customs.subtitle": "Expert customs clearance and documentation services",
    "customs.description":
      "Our customs and documentation services ensure smooth international trade with expert guidance on compliance, duty optimization, and fast clearance processing.",

    "customs.step1.title": "Document Review",
    "customs.step1.desc":
      "We review all your import/export documentation for accuracy and compliance.",
    "customs.step2.title": "Customs Filing",
    "customs.step2.desc":
      "Professional filing of customs declarations and required permits.",
    "customs.step3.title": "Duty Calculation",
    "customs.step3.desc":
      "Accurate calculation of duties, taxes, and applicable trade agreements.",
    "customs.step4.title": "Clearance & Release",
    "customs.step4.desc":
      "Fast customs clearance and cargo release for onward delivery.",

    "customs.feature1": "Import/export documentation",
    "customs.feature2": "Customs clearance processing",
    "customs.feature3": "Duty and tax calculations",
    "customs.feature4": "Compliance consulting",
    "customs.feature5": "Certificate of origin services",
    "customs.feature6": "Trade agreement utilization",

    "customs.benefit1": "Reduced clearance times",
    "customs.benefit2": "Compliance assurance",
    "customs.benefit3": "Cost optimization",
    "customs.benefit4": "Expert guidance",

    "customs.stat1.number": "50+",
    "customs.stat1.label": "Countries Covered",
    "customs.stat2.number": "24hrs",
    "customs.stat2.label": "Clearance Time",
    "customs.stat3.number": "100%",
    "customs.stat3.label": "Compliance Rate",

    "customs.optionsDesc": "Complete customs and documentation solutions",

    // Import on behalf of others Page
    "importOnBehalf.title": "Import on behalf of others",
    "importOnBehalf.subtitle":
      "Professional import services representing your business interests",
    "importOnBehalf.description":
      "We provide comprehensive import services on behalf of other businesses, handling all regulatory requirements and documentation to ensure smooth international trade operations.",

    "importOnBehalf.step1.title": "Initial Consultation",
    "importOnBehalf.step1.desc":
      "Comprehensive assessment of your import requirements and regulatory needs.",
    "importOnBehalf.step2.title": "Documentation Review",
    "importOnBehalf.step2.desc":
      "Thorough review and preparation of all required import documentation.",
    "importOnBehalf.step3.title": "Customs Processing",
    "importOnBehalf.step3.desc":
      "Professional handling of customs clearance and regulatory compliance.",
    "importOnBehalf.step4.title": "Final Delivery",
    "importOnBehalf.step4.desc":
      "Coordination of final delivery to your specified destination.",

    "importOnBehalf.feature1": "Full regulatory compliance",
    "importOnBehalf.feature2": "Professional documentation handling",
    "importOnBehalf.feature3": "Customs clearance expertise",
    "importOnBehalf.feature4": "End-to-end import management",
    "importOnBehalf.feature5": "Risk mitigation services",
    "importOnBehalf.feature6": "Local market expertise",

    "importOnBehalf.benefit1": "Reduced operational overhead",
    "importOnBehalf.benefit2": "Expert regulatory guidance",
    "importOnBehalf.benefit3": "Minimized import risks",
    "importOnBehalf.benefit4": "Focus on core business",

    "importOnBehalf.accordion1.title": "Process Overview",
    "importOnBehalf.accordion1.content":
      "Our comprehensive import process includes initial consultation, documentation review, customs clearance, and final delivery coordination. We handle every step from start to finish.",

    "importOnBehalf.accordion2.title": "Required Documentation",
    "importOnBehalf.accordion2.content":
      "Essential documents include commercial invoices, packing lists, certificates of origin, import permits, and any product-specific certifications required by local authorities.",

    "importOnBehalf.accordion3.title": "Benefits & Advantages",
    "importOnBehalf.accordion3.content":
      "Reduce operational overhead, ensure regulatory compliance, access local market expertise, and minimize import-related risks while focusing on your core business activities.",

    "importOnBehalf.optionsDesc":
      "Everything you need to know about our import services",

    // Exporters Registry Page
    "exportersRegistry.title": "Exporters' Registry",
    "exportersRegistry.subtitle":
      "Complete registration and documentation services for exporters",
    "exportersRegistry.description":
      "We assist businesses in registering with the exporters' registry, ensuring all documentation and requirements are met for international trade compliance.",

    "exportersRegistry.step1.title": "Application Preparation",
    "exportersRegistry.step1.desc":
      "Comprehensive preparation of all required registration applications and forms.",
    "exportersRegistry.step2.title": "Document Compilation",
    "exportersRegistry.step2.desc":
      "Systematic compilation and verification of all supporting documents.",
    "exportersRegistry.step3.title": "Authority Submission",
    "exportersRegistry.step3.desc":
      "Professional submission to relevant authorities and regulatory bodies.",
    "exportersRegistry.step4.title": "Approval Follow-up",
    "exportersRegistry.step4.desc":
      "Continuous follow-up and communication until final approval is obtained.",

    "exportersRegistry.feature1": "Complete application assistance",
    "exportersRegistry.feature2": "Document verification services",
    "exportersRegistry.feature3": "Regulatory compliance guidance",
    "exportersRegistry.feature4": "Authority liaison services",
    "exportersRegistry.feature5": "Status tracking and updates",
    "exportersRegistry.feature6": "Post-approval support",

    "exportersRegistry.benefit1": "Streamlined registration process",
    "exportersRegistry.benefit2": "Expert regulatory guidance",
    "exportersRegistry.benefit3": "Faster approval times",
    "exportersRegistry.benefit4": "Compliance assurance",

    "exportersRegistry.accordion1.title": "Registration Process",
    "exportersRegistry.accordion1.content":
      "Our streamlined registration process includes application preparation, document compilation, submission to relevant authorities, and follow-up until approval is obtained.",

    "exportersRegistry.accordion2.title": "Eligibility Requirements",
    "exportersRegistry.accordion2.content":
      "Businesses must have valid commercial registration, tax clearance certificates, and meet specific product or service criteria as defined by local export regulations.",

    "exportersRegistry.accordion3.title": "Required Documents",
    "exportersRegistry.accordion3.content":
      "Documents include commercial registration, tax certificates, company profile, product catalogs, quality certifications, and any industry-specific licenses.",

    "exportersRegistry.optionsDesc":
      "Complete guide to exporters' registry registration",

    // Customs Clearance Sub-services
    "customsClearance.title": "Customs Clearance & Regulatory Services",
    "customsClearance.subtitle":
      "Specialized regulatory services for various industries",
    "customsClearance.description":
      "Our comprehensive regulatory services cover multiple sectors including medical devices, cosmetics, and laboratory equipment with full compliance assurance.",

    "customsClearance.step1.title": "Document Assessment",
    "customsClearance.step1.desc":
      "Comprehensive review of all regulatory documentation for compliance requirements.",
    "customsClearance.step2.title": "Regulatory Research",
    "customsClearance.step2.desc":
      "In-depth research of applicable regulations and approval processes.",
    "customsClearance.step3.title": "Approval Processing",
    "customsClearance.step3.desc":
      "Professional submission and follow-up with regulatory authorities.",
    "customsClearance.step4.title": "Compliance Delivery",
    "customsClearance.step4.desc":
      "Final approval delivery with ongoing compliance support.",

    "customsClearance.feature1": "Medical device registrations",
    "customsClearance.feature2": "Cosmetics approval services",
    "customsClearance.feature3": "Lab reagent certifications",
    "customsClearance.feature4": "Import permit processing",
    "customsClearance.feature5": "Safety compliance assessments",
    "customsClearance.feature6": "Regulatory consulting services",

    "customsClearance.benefit1": "Expert regulatory guidance",
    "customsClearance.benefit2": "Faster approval processing",
    "customsClearance.benefit3": "Full compliance assurance",
    "customsClearance.benefit4": "Ongoing regulatory support",

    "customsClearance.accordion1.title":
      "Medical Supplies & Devices Registration",
    "customsClearance.accordion1.content":
      "Complete approvals and registration services for sterile and non-sterile medical supplies and devices and local health authority registrations.",

    "customsClearance.accordion2.title": "Cosmetics Approvals & Registration",
    "customsClearance.accordion2.content":
      "Full cosmetics registration services including safety assessments, ingredient compliance, labeling requirements, and regulatory submissions to health authorities.",

    "customsClearance.accordion3.title":
      "Lab Reagents Approvals & Registration",
    "customsClearance.accordion3.content":
      "Specialized registration services for laboratory reagents and chemicals, including safety data sheets, import permits, and compliance with laboratory standards.",

    "customsClearance.optionsDesc":
      "Expert regulatory services across multiple industries",

    // Air Freight Accordion Content
    "airFreight.accordion1.title": "Fast Global Shipping",
    "airFreight.accordion1.content":
      "Express delivery solutions with guaranteed transit times to over 200 destinations worldwide. Priority handling ensures your urgent shipments reach their destination quickly and safely.",

    "airFreight.accordion2.title": "Customs Handling",
    "airFreight.accordion2.content":
      "Expert customs clearance services integrated with air freight operations. Pre-clearance options and dedicated customs teams ensure minimal delays at destination airports.",

    "airFreight.accordion3.title": "Door-to-Door Solutions",
    "airFreight.accordion3.content":
      "Complete logistics solutions from pickup at origin to final delivery. Includes ground transportation, warehousing, and last-mile delivery with real-time tracking throughout.",

    // Sea Freight Accordion Content
    "seaFreight.accordion1.title": "Full Container Load (FCL)",
    "seaFreight.accordion1.content":
      "Dedicated container services for large shipments with flexible scheduling options. Direct port-to-port delivery with competitive rates for high-volume cargo.",

    "seaFreight.accordion2.title": "Less than Container Load (LCL)",
    "seaFreight.accordion2.content":
      "Cost-effective consolidation services for smaller shipments. Share container space with other shippers while maintaining cargo security and tracking capabilities.",

    "seaFreight.accordion3.title": "Port-to-Port and Door-to-Door",
    "seaFreight.accordion3.content":
      "Flexible delivery options including port-to-port services for cost savings or complete door-to-door solutions with inland transportation and customs clearance.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.products": "منتجاتنا",
    "nav.globalReach": "الوصول العالمي",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "احصل على عرض سعر",

    // Hero Section
    "hero.title": "نربط أعمالك",
    "hero.titleSpan": "بالعالم",
    "hero.subtitle":
      "حلول تصدير موثوقة ومُصممة خصيصاً لتناسب احتياجاتكم مع إكسبرس إنترناشيونال",
    "hero.getQuote": "احصل على عرض سعر",
    "hero.learnMore": "اعرف المزيد",

    // About Section
    "about.title": "من نحن",
    "about.description1":
      "تُعد إكسبرس إنترناشيونال شركة رائدة في مجال الخدمات اللوجستية العالمية، تعمل على ربط الشركات حول العالم من خلال حلول شحن موثوقة وكفوءة واقتصادية. بخبرة تزيد عن عقدين من الزمن، أسسنا سمعة متميزة في مجال التجارة الدولية والخدمات اللوجستية.",
    "about.description2":
      "تتمثل رسالتنا في تبسيط التجارة العالمية من خلال تقديم خدمات تصدير شاملة تُمكّن الشركات من جميع الأحجام من الوصول إلى أسواق جديدة وتحقيق أهدافها في النمو والتوسع الدولي.",
    "about.yearsExperience": "سنوات من الخبرة",
    "about.countriesServed": "دولة نخدمها",
    "about.tonsExported": "طن مُصدَّر",
    "about.imageAlt": "عن إكسبرس إنترناشيونال - مرافقنا اللوجستية",

    // Founder Section
    "founder.title": "تعرف على مؤسسنا",
    "founder.name": " نبيل عباس",
    "founder.description1": "بخبرة تزيد عن 25 عاماً في مجال الخدمات اللوجستية والتجارة الدولية، أسس نبيل عباس شركة إكسبرس إنترناشيونال برؤية واضحة لتبسيط التجارة العالمية للشركات من جميع الأحجام.",
    "founder.description2": "إن فهمه العميق للمتطلبات التنظيمية وإجراءات الجمارك وديناميكيات السوق الدولية قد وضع إكسبرس إنترناشيونال كشريك موثوق للشركات الساعية للتوسع عالمياً.",
    "founder.quote": "نقيس نجاحنا بقدرة عملائنا على الوصول إلى أسواق جديدة وتحقيق أهدافهم التجارية الدولية",
    "founder.imageAlt": "أحمد حسن - مؤسس إكسبرس إنترناشيونال",

    // Services Section
    "services.title": "خدماتنا",
    "services.subtitle": "حلول لوجستية شاملة لأعمالك",
    "services.seaFreight": "الشحن البحري",
    "services.seaFreightDesc":
      "حلول شحن بحري اقتصادية للشحنات كبيرة الحجم مع ضمان أوقات تسليم موثوقة.",
    "services.airFreight": "الشحن الجوي",
    "services.airFreightDesc":
      "خدمات شحن جوي سريعة وآمنة للشحنات العاجلة والحساسة زمنياً إلى جميع أنحاء العالم.",
    "services.customs": "التخليص الجمركي",
    "services.customsDesc":
      "خدمات متخصصة في التخليص الجمركي والشؤون التنظيمية، تشمل تراخيص الأجهزة الطبية ومستحضرات التجميل والكواشف المعملية.",
    "services.importOnBehalf": "الاستيراد للغير",
    "services.importOnBehalfDesc":
      "خدمات استيراد احترافية نيابة عن عملائنا مع ضمان الامتثال الكامل للمتطلبات التنظيمية.",
    "services.exportersRegistry": "سجل المصدرين",
    "services.exportersRegistryDesc":
      "خدمات تسجيل شاملة وإعداد الوثائق المطلوبة لسجل المصدرين.",
    "services.learnMore": "اعرف المزيد",

    // Products Section
    "products.title": "منتجاتنا المُصدَّرة",
    "products.subtitle": "معدات طبية عالية الجودة نُصدّرها إلى العالم",
    "products.endoscope1.name": "كاميرا منظار عالية الدقة",
    "products.endoscope1.desc":
      "نظام كاميرا منظار عالي الدقة مع تقنية تصوير متقدمة للإجراءات الطبية الدقيقة.",
    "products.endoscope2.name": "منظار مرن",
    "products.endoscope2.desc":
      "منظار فائق المرونة مع قابلية حركة متفوقة للإجراءات التشخيصية المعقدة.",
    "products.endoscope3.name": "منظار جراحي",
    "products.endoscope3.desc":
      "منظار جراحي احترافي مصمم للعمليات الجراحية طفيفة التدخل.",
    "products.endoscope4.name": "منظار رقمي",
    "products.endoscope4.desc":
      "منظار رقمي متقدم مع تصوير فوري وإمكانيات تسجيل البيانات.",
    "products.endoscope5.name": "منظار محمول",
    "products.endoscope5.desc":
      "نظام منظار مدمج ومحمول مثالي للعمليات الميدانية والعيادات المتنقلة.",
    "products.endoscope6.name": "منظار لاسلكي",
    "products.endoscope6.desc":
      "تقنية منظار لاسلكية متطورة لتحسين الحركة والراحة.",

    // Global Reach Section
    "global.title": "تغطية شبكة عالمية",
    "global.subtitle":
      "نربط أكثر من 50 دولة من خلال شراكاتنا الاستراتيجية وشبكتنا اللوجستية المتطورة",
    "global.allRoutes": "جميع الطرق",
    "global.airFreight": "الشحن الجوي",
    "global.seaFreight": "الشحن البحري",
    "global.countries": "دولة",
    "global.cities": "مدينة",
    "global.operations": "العمليات",
    "global.reliability": "الموثوقية",

    // Testimonials Section
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.subtitle": "يثق بنا عملاء من جميع أنحاء العالم",

    // Contact Section
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل مع خبراء اللوجستيات لدينا",
    "contact.formTitle": "أرسل لنا رسالة",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.company": "الشركة",
    "contact.phone": "الهاتف",
    "contact.serviceInterest": "الخدمة المهتم بها",
    "contact.message": "الرسالة",
    "contact.sendMessage": "إرسال الرسالة",
    "contact.businessHours": "ساعات العمل",
    "contact.whyChoose": "لماذا تختارون إكسبرس إنترناشيونال؟",
    "contact.support247": "دعم العملاء على مدار الساعة طوال أيام الأسبوع",
    "contact.realTimeTracking": "تتبع فوري",
    "contact.competitivePricing": "أسعار تنافسية",
    "contact.globalNetwork": "تغطية شبكة عالمية",

    // CTA Section
    "cta.title": "دعنا نحرك منتجاتك",
    "cta.subtitle":
      "هل أنتم مستعدون لتوسيع أعمالكم عالمياً؟ تواصلوا مع إكسبرس إنترناشيونال اليوم للحصول على حلول شحن مُصممة خصيصاً لاحتياجاتكم.",
    "cta.requestQuote": "اطلب عرض سعر",

    // Footer
    "footer.description":
      "شريككم الموثوق في حلول الخدمات اللوجستية والتصدير العالمي.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.followUs": "تابعنا",
    "footer.copyright": "© 2024 إكسبرس إنترناشيونال. جميع الحقوق محفوظة.",

    // Form placeholders
    "form.namePlaceholder": "اسمك الكامل",
    "form.emailPlaceholder": "your@email.com",
    "form.companyPlaceholder": "اسم الشركة",
    "form.phonePlaceholder": "+966 50 123 4567",
    "form.messagePlaceholder":
      "اكتبوا لنا متطلباتكم واحتياجاتكم في مجال الشحن...",
    "form.selectService": "اختر خدمة",
    "form.generalInquiry": "استفسار عام",

    // Locations
    "location.newYork": "نيويورك",
    "location.london": "لندن",
    "location.dubai": "دبي",
    "location.singapore": "سنغافورة",
    "location.shanghai": "شانغهاي",
    "location.saoPaulo": "ساو باولو",
    "location.lagos": "لاغوس",
    "location.sydney": "سيدني",

    // Service Pages Common
    "service.backToServices": "العودة إلى الخدمات",
    "service.getQuote": "احصل على عرض سعر",
    "service.features": "الميزات الرئيسية",
    "service.benefits": "الفوائد",
    "service.process": "عمليتنا",
    "service.options": "خيارات الخدمة",
    "service.whyChoose": "لماذا تختار خدمتنا؟",
    "service.stats": "إحصائيات الخدمة",

    // Sea Freight Page
    "seaFreight.title": "خدمات الشحن البحري",
    "seaFreight.subtitle": "حلول شحن بحري شاملة للشركات من جميع الأحجام",
    "seaFreight.description":
      "توفر خدمات الشحن البحري لدينا حلولاً اقتصادية للشحنات كبيرة الحجم مع ضمان أوقات تسليم موثوقة. نقدم خيارات الحاوية الكاملة (FCL) والحاوية الجزئية (LCL) لتلبية متطلباتكم المحددة.",

    "seaFreight.step1.title": "الحجز والوثائق",
    "seaFreight.step1.desc":
      "تقديم تفاصيل الشحنة وإعداد الوثائق المطلوبة للمعالجة.",
    "seaFreight.step2.title": "الجمع والتجميع",
    "seaFreight.step2.desc": "نقوم بتجميع بضائعكم وتجهيزها في مرافقنا الآمنة.",
    "seaFreight.step3.title": "العبور البحري",
    "seaFreight.step3.desc":
      "نقل بضائعكم بأمان عبر الطرق البحرية إلى ميناء الوجهة.",
    "seaFreight.step4.title": "التسليم",
    "seaFreight.step4.desc":
      "التسليم النهائي إلى الوجهة المحددة مع خدمة تتبع شاملة.",
    "seaFreight.optionsDesc": "نقدم مجموعة متنوعة من خيارات الشحن لتلبية احتياجاتكم الخاصة.",

    "seaFreight.feature1": "خدمات الحاوية الكاملة (FCL)",
    "seaFreight.feature2": "تجميع أقل من حمولة الحاوية (LCL)",
    "seaFreight.feature3": "خيارات التسليم من الباب إلى الباب",
    "seaFreight.feature4": "تتبع البضائع في الوقت الفعلي",
    "seaFreight.feature5": "مساعدة التخليص الجمركي",
    "seaFreight.feature6": "خيارات التغطية التأمينية",

    "seaFreight.benefit1": "فعال من حيث التكلفة للشحنات الكبيرة",
    "seaFreight.benefit2": "نقل صديق للبيئة",
    "seaFreight.benefit3": "تغطية شبكة الموانئ العالمية",
    "seaFreight.benefit4": "خيارات جدولة مرنة",

    "seaFreight.stat1.number": "500+",
    "seaFreight.stat1.label": "ميناء عالمي",
    "seaFreight.stat2.number": "15,000",
    "seaFreight.stat2.label": "سعة الحاويات",
    "seaFreight.stat3.number": "99.2%",
    "seaFreight.stat3.label": "التسليم في الوقت المحدد",

    // Air Freight Page
    "airFreight.title": "خدمات الشحن الجوي",
    "airFreight.subtitle": "حلول شحن جوي سريعة وموثوقة للشحنات الحساسة للوقت",
    "airFreight.description":
      "توفر خدمات الشحن الجوي لدينا أسرع أوقات تسليم لشحناتكم العاجلة. بفضل شراكتنا مع كبريات شركات الطيران العالمية وخدمات المعاملة المتميزة، نضمن وصول بضائعكم إلى وجهتها بسرعة فائقة وبأعلى معايير الأمان.",

    "airFreight.step1.title": "الحجز والجدولة",
    "airFreight.step1.desc":
      "جدولة شحنتكم الجوية مع خيارات المعاملة ذات الأولوية.",
    "airFreight.step2.title": "الأمان والتعبئة",
    "airFreight.step2.desc":
      "التعبئة المتخصصة والفحص الأمني وفقاً لمعايير الطيران.",
    "airFreight.step3.title": "العبور العالمي",
    "airFreight.step3.desc":
      "النقل الجوي السريع إلى وجهات حول العالم بالتعاون مع شركائنا من كبريات شركات الطيران.",
    "airFreight.step4.title": "التسليم السريع",
    "airFreight.step4.desc":
      "التسليم السريع إلى الوجهة النهائية مع إمكانية التتبع المباشر.",

    "airFreight.feature1": "خدمات الشحن الجوي السريع",
    "airFreight.feature2": "خيارات الشحن الجوي القياسية",
    "airFreight.feature3": "النقل المتحكم في درجة الحرارة",
    "airFreight.feature4": "التعامل مع البضائع الخطرة",
    "airFreight.feature5": "ترتيبات الرحلات المستأجرة",
    "airFreight.feature6": "التتبع والمراقبة على مدار الساعة",

    "airFreight.benefit1": "أسرع أوقات التسليم",
    "airFreight.benefit2": "معايير أمان عالية",
    "airFreight.benefit3": "شبكة مطارات عالمية",
    "airFreight.benefit4": "المناولة ذات الأولوية متاحة",

    "airFreight.stat1.number": "200+",
    "airFreight.stat1.label": "شركاء المطارات",
    "airFreight.stat2.number": "48 ساعة",
    "airFreight.stat2.label": "متوسط زمن الوصول",
    "airFreight.stat3.number": "99.8%",
    "airFreight.stat3.label": "التسليم الآمن",

    "airFreight.optionsDesc": "حلول شحن جوي شاملة مصممة لتلبية احتياجاتكم",

    // Customs Documentation Page
    "customs.title": "الجمارك والوثائق",
    "customs.subtitle": "خدمات خبيرة في التخليص الجمركي والوثائق",
    "customs.description":
      "تضمن خدماتنا في مجال الجمارك والوثائق سير عمليات التجارة الدولية بسلاسة ويسر، مع تقديم الإرشاد المتخصص حول متطلبات الامتثال وتحسين التكاليف وإجراءات التخليص السريع.",

    "customs.step1.title": "مراجعة الوثائق",
    "customs.step1.desc":
      "نقوم بمراجعة جميع وثائق الاستيراد والتصدير بدقة لضمان الامتثال الكامل.",
    "customs.step2.title": "تقديم الجمارك",
    "customs.step2.desc":
      "تقديم الإقرارات الجمركية والتصاريح المطلوبة باحترافية عالية.",
    "customs.step3.title": "حساب الرسوم",
    "customs.step3.desc":
      "حساب دقيق للرسوم والضرائب مع الاستفادة من اتفاقيات التجارة المتاحة.",
    "customs.step4.title": "التخليص والإفراج",
    "customs.step4.desc":
      "إتمام عملية التخليص الجمركي بسرعة وإفراج البضائع لاستكمال عملية التسليم.",

    "customs.feature1": "وثائق الاستيراد/التصدير",
    "customs.feature2": "معالجة التخليص الجمركي",
    "customs.feature3": "حسابات الرسوم والضرائب",
    "customs.feature4": "استشارات الامتثال",
    "customs.feature5": "خدمات شهادة المنشأ",
    "customs.feature6": "استخدام اتفاقيات التجارة",

    "customs.benefit1": "أوقات تخليص مخفضة",
    "customs.benefit2": "ضمان الامتثال",
    "customs.benefit3": "تحسين التكلفة",
    "customs.benefit4": "التوجيه الخبير",

    "customs.stat1.number": "50+",
    "customs.stat1.label": "دولة مغطاة",
    "customs.stat2.number": "24 ساعة",
    "customs.stat2.label": "وقت التخليص",
    "customs.stat3.number": "100%",
    "customs.stat3.label": "معدل الامتثال",

    "customs.optionsDesc": "حلول جمركية ووثائقية متكاملة",

    // Import on behalf of others Page
    "importOnBehalf.title": "الاستيراد للغير",
    "importOnBehalf.subtitle": "خدمات استيراد مهنية تمثل مصالح شركتك",
    "importOnBehalf.description":
      "نوفر خدمات استيراد شاملة ومتطورة نيابة عن عملائنا، حيث نتولى جميع المتطلبات التنظيمية وإعداد الوثائق اللازمة لضمان سير عمليات التجارة الدولية بسلاسة ويسر.",

    "importOnBehalf.step1.title": "الاستشارة المبدئية",
    "importOnBehalf.step1.desc":
      "تقييم شامل لمتطلبات الاستيراد والاحتياجات التنظيمية الخاصة بكم.",
    "importOnBehalf.step2.title": "مراجعة الوثائق",
    "importOnBehalf.step2.desc":
      "مراجعة شاملة وإعداد جميع وثائق الاستيراد المطلوبة.",
    "importOnBehalf.step3.title": "معالجة الجمارك",
    "importOnBehalf.step3.desc":
      "التعامل المهني مع التخليص الجمركي والامتثال التنظيمي.",
    "importOnBehalf.step4.title": "التسليم النهائي",
    "importOnBehalf.step4.desc":
      "تنسيق التسليم النهائي إلى الوجهة المحددة من قبلكم.",

    "importOnBehalf.feature1": "الامتثال التنظيمي الكامل",
    "importOnBehalf.feature2": "التعامل المهني مع الوثائق",
    "importOnBehalf.feature3": "خبرة التخليص الجمركي",
    "importOnBehalf.feature4": "إدارة شاملة للاستيراد",
    "importOnBehalf.feature5": "خدمات تخفيف المخاطر",
    "importOnBehalf.feature6": "خبرة السوق المحلية",

    "importOnBehalf.benefit1": "تقليل النفقات التشغيلية",
    "importOnBehalf.benefit2": "الإرشاد التنظيمي المتخصص",
    "importOnBehalf.benefit3": "تقليل مخاطر الاستيراد",
    "importOnBehalf.benefit4": "التركيز على الأعمال الأساسية",

    "importOnBehalf.accordion1.title": "نظرة عامة على العملية",
    "importOnBehalf.accordion1.content":
      "تتضمن عملية الاستيراد الشاملة لدينا عدة مراحل أساسية: الاستشارة المبدئية، ومراجعة الوثائق وإتمام إجراءات التخليص الجمركي، وأخيراً تنسيق عملية التسليم النهائي. نحرص على تولي جميع الخطوات باحترافية عالية.",

    "importOnBehalf.accordion2.title": "الوثائق المطلوبة",
    "importOnBehalf.accordion2.content":
      "تشمل الوثائق الأساسية المطلوبة: الفواتير التجارية وقوائم التعبئة التفصيلية، وشهادات المنشأ، وتصاريح الاستيراد، بالإضافة إلى أي شهادات متخصصة خاصة بالمنتجات حسب متطلبات السلطات المحلية ذات الصلة.",

    "importOnBehalf.accordion3.title": "الفوائد والمزايا",
    "importOnBehalf.accordion3.content":
      "توفر خدماتنا فوائد جوهرية تتضمن: خفض التكاليف التشغيلية، وضمان الامتثال التنظيمي الكامل، والاستفادة من خبرتنا العميقة في الأسواق المحلية، مع تقليل مخاطر عمليات الاستيراد بما يتيح لكم التركيز على أنشطتكم التجارية الأساسية.",

    "importOnBehalf.optionsDesc":
      "كل ما تحتاجون لمعرفته عن خدمات الاستيراد لدينا",

    // Exporters Registry Page
    "exportersRegistry.title": "سجل المصدرين",
    "exportersRegistry.subtitle": "خدمات تسجيل ووثائق شاملة للمصدرين",
    "exportersRegistry.description":
      "نقدم للشركات المساعدة الكاملة في التسجيل بسجل المصدرين، مع ضمان استيفاء جميع الوثائق والمتطلبات الضرورية للامتثال لمعايير التجارة الدولية.",

    "exportersRegistry.step1.title": "إعداد الطلبات",
    "exportersRegistry.step1.desc":
      "إعداد شامل لجميع طلبات التسجيل والنماذج المطلوبة.",
    "exportersRegistry.step2.title": "تجميع الوثائق",
    "exportersRegistry.step2.desc":
      "تجميع منهجي والتحقق من جميع الوثائق الداعمة.",
    "exportersRegistry.step3.title": "تقديم للجهات",
    "exportersRegistry.step3.desc":
      "تقديم مهني للجهات المختصة والهيئات التنظيمية ذات الصلة.",
    "exportersRegistry.step4.title": "متابعة الموافقة",
    "exportersRegistry.step4.desc":
      "متابعة مستمرة وتواصل حتى الحصول على الموافقة النهائية.",

    "exportersRegistry.feature1": "المساعدة الكاملة في الطلبات",
    "exportersRegistry.feature2": "خدمات التحقق من الوثائق",
    "exportersRegistry.feature3": "إرشادات الامتثال التنظيمي",
    "exportersRegistry.feature4": "خدمات الاتصال مع الجهات",
    "exportersRegistry.feature5": "تتبع الحالة والتحديثات",
    "exportersRegistry.feature6": "الدعم بعد الموافقة",

    "exportersRegistry.benefit1": "عملية تسجيل مبسطة",
    "exportersRegistry.benefit2": "إرشادات تنظيمية متخصصة",
    "exportersRegistry.benefit3": "أوقات موافقة أسرع",
    "exportersRegistry.benefit4": "ضمان الامتثال",

    "exportersRegistry.accordion1.title": "عملية التسجيل",
    "exportersRegistry.accordion1.content":
      "تتميز عملية التسجيل لدينا بالبساطة والفعالية، حيث نبدأ بإعداد طلب التسجيل وتجميع جميع الوثائق المطلوبة، ثم نقوم بالتقديم للجهات المختصة ومتابعة الطلب حتى الحصول على الموافقة النهائية.",

    "exportersRegistry.accordion2.title": "متطلبات الأهلية",
    "exportersRegistry.accordion2.content":
      "تشمل متطلبات الأهلية ضرورة امتلاك الشركة لسجل تجاري ساري المفعول، وشهادات التخليص الضريبي المعتمدة، بالإضافة إلى ضرورة استيفاء معايير المنتجات أو الخدمات المحددة وفقاً لما تنص عليه لوائح التصدير المحلية السارية.",

    "exportersRegistry.accordion3.title": "الوثائق المطلوبة",
    "exportersRegistry.accordion3.content":
      "تتضمن قائمة الوثائق المطلوبة: السجل التجاري الساري، وشهادات الضرائب المعتمدة، وملف تعريفي شامل للشركة، وكتالوجات مفصلة للمنتجات، وشهادات الجودة المعتمدة، بالإضافة إلى أي تراخيص متخصصة حسب طبيعة الصناعة.",

    "exportersRegistry.optionsDesc": "دليل شامل لتسجيل سجل المصدرين",

    // Customs Clearance Sub-services
    "customsClearance.title": "التخليص الجمركي والخدمات التنظيمية",
    "customsClearance.subtitle": "خدمات تنظيمية متخصصة لمختلف الصناعات",
    "customsClearance.description":
      "تشمل خدماتنا التنظيمية المتخصصة قطاعات متنوعة، تتضمن الأجهزة والمعدات الطبية، ومستحضرات التجميل، ومعدات المختبرات مع ضمان الامتثال الكامل لجميع المعايير.",

    "customsClearance.step1.title": "تقييم الوثائق",
    "customsClearance.step1.desc":
      "مراجعة شاملة لجميع الوثائق التنظيمية لضمان متطلبات الامتثال.",
    "customsClearance.step2.title": "البحث التنظيمي",
    "customsClearance.step2.desc":
      "بحث معمق للوائح المعمول بها وعمليات الموافقة المطلوبة.",
    "customsClearance.step3.title": "معالجة الموافقات",
    "customsClearance.step3.desc":
      "التقديم المهني والمتابعة مع السلطات التنظيمية المختصة.",
    "customsClearance.step4.title": "تسليم الامتثال",
    "customsClearance.step4.desc":
      "تسليم الموافقة النهائية مع الدعم المستمر للامتثال.",

    "customsClearance.feature1": "تسجيل الأجهزة الطبية",
    "customsClearance.feature2": "خدمات الموافقة على مستحضرات التجميل",
    "customsClearance.feature3": "شهادات الكواشف المعملية",
    "customsClearance.feature4": "معالجة تصاريح الاستيراد",
    "customsClearance.feature5": "تقييمات الامتثال للسلامة",
    "customsClearance.feature6": "خدمات الاستشارات التنظيمية",

    "customsClearance.benefit1": "إرشادات تنظيمية متخصصة",
    "customsClearance.benefit2": "معالجة أسرع للموافقات",
    "customsClearance.benefit3": "ضمان الامتثال الكامل",
    "customsClearance.benefit4": "دعم تنظيمي مستمر",

    "customsClearance.accordion1.title": "تسجيل الأجهزة والمستلزمات الطبية",
    "customsClearance.accordion1.content":
      "نقدم خدمات متكاملة للحصول على الموافقات وإتمام عمليات التسجيل للمستلزمات والأجهزة الطبية (المعقمة وغير المعقمة) لدى هيئة الدواء المصرية. مع ضمان الامتثال الكامل لجميع المعايير والمتطلبات التنظيمية.",

    "customsClearance.accordion2.title": "تراخيص وتسجيل جميع مستحضرات التجميل",
    "customsClearance.accordion2.content":
      "نوفر خدمات تسجيل شاملة ومتطورة لمستحضرات التجميل، تتضمن إجراء تقييمات أمان شاملة وضمان امتثال جميع المكونات للمعايير المطلوبة، واستيفاء متطلبات وضع العلامات والبيانات، بالإضافة إلى إعداد وتقديم جميع المستندات التنظيمية للجهات الصحية المختصة.",

    "customsClearance.accordion3.title": "تراخيص وتسجيل جميع الكواشف المعملية",
    "customsClearance.accordion3.content":
      "نقدم خدمات تسجيل متخصصة وعالية الجودة للكواشف والمواد الكيميائية المعملية، تشمل إعداد وتقديم صحائف بيانات الأمان الشاملة، والحصول على تصاريح الاستيراد المطلوبة، وضمان الامتثال الكامل لجميع معايير ومتطلبات المختبرات المعتمدة.",

    "customsClearance.optionsDesc": "خدمات تنظيمية متخصصة عبر صناعات متعددة",

    // Air Freight Accordion Content
    "airFreight.accordion1.title": "الشحن العالمي السريع",
    "airFreight.accordion1.content":
      "نوفر حلول تسليم سريعة وموثوقة مع أوقات عبور مضمونة إلى أكثر من 200 وجهة حول العالم. تضمن خدمات المعاملة ذات الأولوية وصول شحناتكم العاجلة إلى وجهتها بأقصى سرعة وبأعلى معايير الأمان.",

    "airFreight.accordion2.title": "التعامل مع الجمارك",
    "airFreight.accordion2.content":
      "نقدم خدمات تخليص جمركي متخصصة ومتكاملة مع عمليات الشحن الجوي. تشمل خدماتنا خيارات التخليص المسبق وفرق جمركية متخصصة مما يضمن تقليل فترات الانتظار إلى أدنى حد ممكن في مطارات الوجهة.",

    "airFreight.accordion3.title": "حلول من الباب إلى الباب",
    "airFreight.accordion3.content":
      "نوفر حلولاً لوجستية متكاملة وشاملة تبدأ من استلام البضائع في المنشأ وتنتهي بالتسليم النهائي. تتضمن خدماتنا النقل البري وخدمات التخزين وعمليات تسليم الميل الأخير، مع إمكانية التتبع المباشر على مدار كامل مراحل الرحلة.",

    // Sea Freight Accordion Content
    "seaFreight.accordion1.title": "الحمولة الكاملة للحاوية (FCL)",
    "seaFreight.accordion1.content":
      "نقدم خدمات حاويات مخصصة ومتطورة للشحنات كبيرة الحجم مع توفير خيارات جدولة زمنية مرنة لتناسب احتياجاتكم. كما نوفر خدمات التسليم المباشر من ميناء إلى آخر بأسعار تنافسية مخصصة للشحنات عالية الحجم.",

    "seaFreight.accordion2.title": "أقل من الحمولة الكاملة للحاوية (LCL)",
    "seaFreight.accordion2.content":
      "نوفر خدمات تجميع اقتصادية وفعالة مخصصة للشحنات متوسطة وصغيرة الحجم. تتيح هذه الخدمة إمكانية مشاركة مساحة الحاوية مع عملاء آخرين مع الحفاظ التام على أمان بضائعكم وإمكانية التتبع الشامل.",

    "seaFreight.accordion3.title": "من ميناء إلى ميناء ومن باب إلى باب",
    "seaFreight.accordion3.content":
      "نقدم خيارات تسليم متنوعة ومرنة تشمل خدمات النقل من ميناء إلى آخر للحصول على أفضل قيمة اقتصادية، أو حلولاً متكاملة وشاملة من باب المرسل إلى باب المستقبل، تتضمن خدمات النقل الداخلي وإجراءات التخليص الجمركي.",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);

    // Update document direction
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  const isRTL = language === "ar";

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL,
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
