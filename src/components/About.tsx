import React from 'react';
import useAnimatedCounters from '../hooks/useAnimatedCounters';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutProps {
  visibleElements: Set<string>;
}

const About: React.FC<AboutProps> = ({ visibleElements }) => {
  const counters = useAnimatedCounters(visibleElements, 'about-counters');
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div 
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('about-content') 
                ? 'opacity-100 translate-x-0' 
                : `opacity-0 ${isRTL ? 'translate-x-8' : '-translate-x-8'}`
            } ${isRTL ? 'lg:col-start-2' : ''}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description2')}
            </p>
          </div>

          {/* About Image */}
          <div 
            className={`transition-all duration-1000 ${
              visibleElements.has('about-content') 
                ? 'opacity-100 translate-x-0' 
                : `opacity-0 ${isRTL ? '-translate-x-8' : 'translate-x-8'}`
            } ${isRTL ? 'lg:col-start-1' : ''}`}
          >
            <img 
              src="/images/about-image.jpeg" 
              alt={t('about.imageAlt')}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
        </div>

        {/* Animated Counters */}
        <div 
          id="about-counters"
          data-animate
          className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visibleElements.has('about-counters') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800 mb-2">{counters.years}+</div>
            <div className="text-gray-600">{t('about.yearsExperience')}</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800 mb-2">{counters.countries}+</div>
            <div className="text-gray-600">{t('about.countriesServed')}</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-800 mb-2">{counters.tons.toLocaleString()}+</div>
            <div className="text-gray-600">{t('about.tonsExported')}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

