import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FounderProps {
  visibleElements: Set<string>;
}

const Founder: React.FC<FounderProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Founder Image */}
          <div 
            id="founder-image"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('founder-image') 
                ? 'opacity-100 translate-x-0' 
                : `opacity-0 ${isRTL ? 'translate-x-8' : '-translate-x-8'}`
            } ${isRTL ? 'lg:col-start-2' : ''}`}
          >
            <img 
              src="/images/founder-image.jpeg" 
              alt={t('founder.imageAlt')}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Founder Content */}
          <div 
            id="founder-content"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('founder-content') 
                ? 'opacity-100 translate-x-0' 
                : `opacity-0 ${isRTL ? '-translate-x-8' : 'translate-x-8'}`
            } ${isRTL ? 'lg:col-start-1' : ''}`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('founder.title')}</h3>
            <p className="text-lg text-gray-600 mb-6">
              {t('founder.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('founder.description2')}
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 font-semibold italic">
                "{t('founder.quote')}"
              </p>
              <p className="text-blue-700 mt-2 font-medium">
                - {t('founder.name')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;