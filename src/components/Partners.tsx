import React from 'react';
import { partners } from '../data/partners';
import { useLanguage } from '../contexts/LanguageContext';

interface PartnersProps {
  visibleElements: Set<string>;
}

const Partners: React.FC<PartnersProps> = ({ visibleElements }) => {
  const { language } = useLanguage();
  const isVisible = visibleElements.has('partners');
  const isRTL = language === 'ar';

  // Create duplicated arrays for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];
  const reversedPartners = [...duplicatedPartners].reverse();

  return (
    <section
      id="partners"
      data-animate
      className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-1000 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {isRTL ? 'شركاؤنا' : 'Our Trusted Partners'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isRTL ? 'font-arabic' : ''
          }`}>
            {isRTL 
              ? 'نفخر بشراكاتنا مع أفضل الشركات في مجال الشحن والخدمات اللوجستية عالمياً'
              : 'We proudly collaborate with leading companies in shipping and logistics worldwide'
            }
          </p>
        </div>

        {/* Scrolling Container */}
        <div className={`relative ${isRTL ? 'rtl' : ''}`}>
          {/* First row - Right to Left */}
          <div className="flex mb-8 overflow-hidden">
            <div className="flex animate-scroll-right">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`row1-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-3 text-sm md:text-base font-semibold text-gray-700 text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - Left to Right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {reversedPartners.map((partner, index) => (
                <div
                  key={`row2-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-8 flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-3 text-sm md:text-base font-semibold text-gray-700 text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className={`absolute top-0 w-32 h-full pointer-events-none z-10 ${
            isRTL 
              ? 'right-0 bg-gradient-to-l from-blue-50 to-transparent' 
              : 'left-0 bg-gradient-to-r from-blue-50 to-transparent'
          }`}></div>
          <div className={`absolute top-0 w-32 h-full pointer-events-none z-10 ${
            isRTL 
              ? 'left-0 bg-gradient-to-r from-blue-50 to-transparent' 
              : 'right-0 bg-gradient-to-l from-blue-50 to-transparent'
          }`}></div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={`text-sm font-semibold ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'شركاء موثوقون منذ عام 2010' : 'Trusted Partners Since 2010'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;