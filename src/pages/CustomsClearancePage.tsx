import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronLeft, ArrowRight, Heart, Sparkles, TestTube } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import Accordion, { AccordionItem } from '../components/Accordion';

const CustomsClearancePage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const accordionItems: AccordionItem[] = [
    {
      id: 'medical-supplies',
      title: t('customsClearance.accordion1.title'),
      content: t('customsClearance.accordion1.content'),
      icon: <Heart className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'cosmetics',
      title: t('customsClearance.accordion2.title'),
      content: t('customsClearance.accordion2.content'),
      icon: <Sparkles className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'lab-reagents',
      title: t('customsClearance.accordion3.title'),
      content: t('customsClearance.accordion3.content'),
      icon: <TestTube className="w-6 h-6 text-blue-800" />
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
                <h1 className="text-2xl font-bold text-gray-900">{t('customsClearance.title')}</h1>
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('customsClearance.title')}
                </h1>
                <p className="text-xl text-blue-100">
                  {t('customsClearance.subtitle')}
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              {t('customsClearance.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('services-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="services-title"
            data-animate
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-xl text-gray-600">Expert regulatory services across multiple industries</p>
          </div>

          <div 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has('accordion-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="accordion-content"
            data-animate
            style={{ transitionDelay: '200ms' }}
          >
            <Accordion items={accordionItems} allowMultiple={false} />
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('process-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="process-title"
            data-animate
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Streamlined regulatory approval process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('step-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="step-1"
              data-animate
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Assessment of requirements and product evaluation</p>
            </div>

            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('step-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="step-2"
              data-animate
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Preparation and compilation of all required documents</p>
            </div>

            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('step-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="step-3"
              data-animate
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submission</h3>
              <p className="text-gray-600">Professional submission to regulatory authorities</p>
            </div>

            <div 
              className={`text-center transition-all duration-1000 ${
                visibleElements.has('step-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="step-4"
              data-animate
              style={{ transitionDelay: '600ms' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Approval</h3>
              <p className="text-gray-600">Follow-up and obtaining final approvals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div 
              className={`transition-all duration-1000 ${
                visibleElements.has('stat-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="stat-1"
              data-animate
            >
              <div className="text-4xl font-bold text-blue-800 mb-2">500+</div>
              <div className="text-lg text-gray-700">Successful Registrations</div>
            </div>

            <div 
              className={`transition-all duration-1000 ${
                visibleElements.has('stat-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="stat-2"
              data-animate
              style={{ transitionDelay: '200ms' }}
            >
              <div className="text-4xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-lg text-gray-700">Years Experience</div>
            </div>

            <div 
              className={`transition-all duration-1000 ${
                visibleElements.has('stat-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id="stat-3"
              data-animate
              style={{ transitionDelay: '400ms' }}
            >
              <div className="text-4xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-lg text-gray-700">Compliance Rate</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Need Regulatory Approval?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our regulatory experts to discuss your approval requirements and get started with the registration process.
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

export default CustomsClearancePage;