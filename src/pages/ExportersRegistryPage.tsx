import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, ChevronLeft, ArrowRight, FileText, CheckCircle, Shield } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import Accordion, { AccordionItem } from '../components/Accordion';

const ExportersRegistryPage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const accordionItems: AccordionItem[] = [
    {
      id: 'registration-process',
      title: t('exportersRegistry.accordion1.title'),
      content: t('exportersRegistry.accordion1.content'),
      icon: <ClipboardList className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'eligibility',
      title: t('exportersRegistry.accordion2.title'),
      content: t('exportersRegistry.accordion2.content'),
      icon: <CheckCircle className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'required-documents',
      title: t('exportersRegistry.accordion3.title'),
      content: t('exportersRegistry.accordion3.content'),
      icon: <FileText className="w-6 h-6 text-blue-800" />
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
                <h1 className="text-2xl font-bold text-gray-900">{t('exportersRegistry.title')}</h1>
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
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('exportersRegistry.title')}
                </h1>
                <p className="text-xl text-blue-100">
                  {t('exportersRegistry.subtitle')}
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              {t('exportersRegistry.description')}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Details</h2>
            <p className="text-xl text-gray-600">Complete guide to exporters' registry registration</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('benefits-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="benefits-title"
            data-animate
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Register with Us?</h2>
            <p className="text-xl text-gray-600">Expert guidance throughout the registration process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('benefit-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="benefit-1"
              data-animate
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional assistance throughout the entire registration process</p>
            </div>

            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('benefit-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="benefit-2"
              data-animate
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Streamlined process ensures quick approval and registration</p>
            </div>

            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('benefit-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="benefit-3"
              data-animate
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Support</h3>
              <p className="text-gray-600">Complete assistance with all required documentation and paperwork</p>
            </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Registration Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get registered in the exporters' registry with our expert assistance and comprehensive support.
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

export default ExportersRegistryPage;