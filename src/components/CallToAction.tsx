import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HashLink } from 'react-router-hash-link';

interface CallToActionProps {
  visibleElements: Set<string>;
}

const CallToAction: React.FC<CallToActionProps> = ({ visibleElements }) => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          id="cta-content"
          data-animate
          className={`transition-all duration-1000 ${
            visibleElements.has('cta-content') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <HashLink smooth to="/#contact">
            <button className="interactive bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              {t('cta.requestQuote')}
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

