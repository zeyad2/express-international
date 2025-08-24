import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface CertificatesProps {
  visibleElements: Set<string>;
}

interface Certificate {
  id: string;
  image: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

const certificates: Certificate[] = [
  {
    id: 'combined-qeid',
    image: '/images/certificate-3.png',
    title: {
      en: 'Professional & Compliance Certification',
      ar: 'شهادة مهنية والامتثال'
    },
    description: {
      en: 'Combined professional certification demonstrating our excellence in international trade and compliance with quality standards',
      ar: 'شهادة مهنية مدمجة تثبت تميزنا في التجارة الدولية والامتثال لمعايير الجودة'
    }
  },
  {
    id: 'kawashef-certificate',
    image: '/images/kawashefCert.png',
    title: {
      en: 'Kawashef Authorization Certificate',
      ar: 'شهادة تفويض كواشف'
    },
    description: {
      en: 'Official authorization certificate for specialized logistics and customs services',
      ar: 'شهادة تفويض رسمية للخدمات اللوجستية والجمركية المتخصصة'
    }
  },
  {
    id: 'qeid-certificate',
    image: '/images/qeid-certificate.png',
    title: {
      en: 'QEID Registration Certificate',
      ar: 'شهادة تسجيل قيد'
    },
    description: {
      en: 'Official registration certificate for international business operations and regulatory compliance',
      ar: 'شهادة تسجيل رسمية لعمليات الأعمال الدولية والامتثال التنظيمي'
    }
  }
];

const Certificates: React.FC<CertificatesProps> = ({ visibleElements }) => {
  const { language } = useLanguage();
  const isVisible = visibleElements.has('certificates');
  const isRTL = language === 'ar';

  return (
    <section
      id="certificates"
      data-animate
      className={`py-16 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {isRTL ? 'شهاداتنا المعتمدة' : 'Our Certifications'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {isRTL 
              ? 'نحن فخورون بحصولنا على الشهادات المعتمدة التي تؤكد التزامنا بأعلى معايير الجودة والمهنية'
              : 'We are proud of our certified credentials that demonstrate our commitment to the highest standards of quality and professionalism'
            }
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => window.open(certificate.image, '_blank')}>
                <img
                  src={certificate.image}
                  alt={certificate.title[language]}
                  className="w-full h-80 object-contain bg-gray-100 p-2 transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-800 mb-3 ${
                  isRTL ? 'font-arabic text-right' : ''
                }`}>
                  {certificate.title[language]}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${
                  isRTL ? 'font-arabic text-right' : ''
                }`}>
                  {certificate.description[language]}
                </p>
              </div>

              {/* Certificate Badge */}
              <div className="px-6 pb-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 ${
                  isRTL ? 'font-arabic' : ''
                }`}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {isRTL ? 'معتمد' : 'Certified'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg ${
            isRTL ? 'font-arabic' : ''
          }`}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isRTL ? 'جميع الشهادات معتمدة ومُحدثة' : 'All Certifications Valid & Up-to-Date'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;