import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ChevronLeft, ArrowRight, FileText, CheckCircle, Plane } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import Accordion, { AccordionItem } from '../components/Accordion';
import Header from '../components/Header';

const ImportOnBehalfPage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const processSteps = [
    {
      icon: '📋',
      title: t('importOnBehalf.step1.title'),
      description: t('importOnBehalf.step1.desc')
    },
    {
      icon: '🔍',
      title: t('importOnBehalf.step2.title'),
      description: t('importOnBehalf.step2.desc')
    },
    {
      icon: '✅',
      title: t('importOnBehalf.step3.title'),
      description: t('importOnBehalf.step3.desc')
    },
    {
      icon: '🚚',
      title: t('importOnBehalf.step4.title'),
      description: t('importOnBehalf.step4.desc')
    }
  ];

  const features = [
    t('importOnBehalf.feature1'),
    t('importOnBehalf.feature2'),
    t('importOnBehalf.feature3'),
    t('importOnBehalf.feature4'),
    t('importOnBehalf.feature5'),
    t('importOnBehalf.feature6')
  ];

  const benefits = [
    t('importOnBehalf.benefit1'),
    t('importOnBehalf.benefit2'),
    t('importOnBehalf.benefit3'),
    t('importOnBehalf.benefit4')
  ];

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
      icon: <FileText className="w-6 h-6 text-blue-800" />
    },
    {
      id: 'benefits',
      title: t('importOnBehalf.accordion3.title'),
      content: t('importOnBehalf.accordion3.content'),
      icon: <CheckCircle className="w-6 h-6 text-blue-800" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat mt-20" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
               }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            id="hero-content"
            data-animate
            className={`text-center text-white transition-all duration-1000 ${
              visibleElements.has('hero-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl font-bold mb-4">{t('importOnBehalf.title')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('importOnBehalf.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div 
              id="about-image"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-image') 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isRTL ? 'translate-x-8' : '-translate-x-8'}`
              } ${isRTL ? 'lg:col-start-2' : ''}`}
            >
              <img 
                src="/images/images33.png"
                alt="Import consultation and client services"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-content') 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isRTL ? '-translate-x-8' : 'translate-x-8'}`
              } ${isRTL ? 'lg:col-start-1' : ''}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('importOnBehalf.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('importOnBehalf.description')}
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('service.benefits')}</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle className={`w-6 h-6 text-green-600 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="process-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('process-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('service.process')}</h2>
            <p className="text-xl text-gray-600">{t('importOnBehalf.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                id={`step-${index}`}
                data-animate
                className={`text-center transition-all duration-1000 ${
                  visibleElements.has(`step-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('features-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('service.features')}</h2>
            <p className="text-xl text-gray-600">{t('importOnBehalf.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-1000 ${
                  visibleElements.has(`feature-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Users className="w-8 h-8 text-blue-800 mb-4" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('service.options')}</h2>
            <p className="text-xl text-gray-600">{t('importOnBehalf.optionsDesc')}</p>
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

      {/* Call to Action */}
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
            <h2 className="text-4xl font-bold mb-6">{t('service.whyChoose')}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('importOnBehalf.description')}
            </p>
            <Link 
              to="/#contact"
              className={`inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('service.getQuote')} {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportOnBehalfPage;
