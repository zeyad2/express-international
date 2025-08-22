import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronLeft, ArrowRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import Accordion, { AccordionItem } from '../components/Accordion';

const ImportOnBehalfPage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const accordionItems: AccordionItem[] = [
    {
      id: 'process-overview',
      title: t('importOnBehalf.accordion1.title'),
      content: t('importOnBehalf.accordion1.content'),
      icon: <Users className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'required-docs',
      title: t('importOnBehalf.accordion2.title'),
      content: t('importOnBehalf.accordion2.content'),
      icon: <ChevronLeft className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'benefits',
      title: t('importOnBehalf.accordion3.title'),
      content: t('importOnBehalf.accordion3.content'),
      icon: <ArrowRight className="w-6 h-6 text-blue-800" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link 
                to="/"
                className={`interactive ${isRTL ? 'ml-4' : 'mr-4'} p-2 text-blue-800 hover:bg-blue-50 rounded-lg transition-colors`}
              >
                <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('importOnBehalf.title')}</h1>
                <p className="text-gray-600">{t('service.backToServices')}</p>
              </div>
            </div>
            <Link 
              to="/#contact"
              className="interactive bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('service.getQuote')}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`max-w-3xl ${isRTL ? 'mr-auto text-right' : 'ml-auto text-left'} transition-all duration-1000 ${
              visibleElements.has('hero-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="hero-content"
            data-animate
          >
            <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('importOnBehalf.title')}
                </h1>
                <p className="text-xl text-blue-100">
                  {t('importOnBehalf.subtitle')}
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              {t('importOnBehalf.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('accordion-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="accordion-title"
            data-animate
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our import services</p>
          </div>

          <div 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has('accordion-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="accordion-content"
            data-animate
            style={{ transitionDelay: '200ms' }}
          >
            <Accordion items={accordionItems} allowMultiple={true} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="cta-section"
            data-animate
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Importing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss your import requirements and get started with our professional services.
            </p>
            <Link 
              to="/#contact"
              className={`interactive inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('service.getQuote')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportOnBehalfPage;