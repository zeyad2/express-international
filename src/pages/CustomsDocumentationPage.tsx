import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, ChevronLeft, Plane, FileCheck, Scale, Shield, Users } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const CustomsDocumentationPage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const processSteps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-800" />,
      title: t('customs.step1.title'),
      description: t('customs.step1.desc')
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-800" />,
      title: t('customs.step2.title'),
      description: t('customs.step2.desc')
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-800" />,
      title: t('customs.step3.title'),
      description: t('customs.step3.desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-800" />,
      title: t('customs.step4.title'),
      description: t('customs.step4.desc')
    }
  ];

  const features = [
    t('customs.feature1'),
    t('customs.feature2'),
    t('customs.feature3'),
    t('customs.feature4'),
    t('customs.feature5'),
    t('customs.feature6')
  ];

  const benefits = [
    t('customs.benefit1'),
    t('customs.benefit2'),
    t('customs.benefit3'),
    t('customs.benefit4')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link 
                to="/"
                className="interactive mr-4 p-2 text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </Link>
              <div className="flex items-center">
                <Plane className="w-8 h-8 text-blue-800 mr-3" />
                <span className="text-2xl font-bold text-blue-800">Express International</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-800 transition-colors">Home</Link>
              <Link to="/services/sea-freight" className="text-gray-700 hover:text-blue-800 transition-colors">Sea Freight</Link>
              <Link to="/services/air-freight" className="text-gray-700 hover:text-blue-800 transition-colors">Air Freight</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
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
            <h1 className="text-5xl font-bold mb-4">{t('customs.title')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('customs.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="about-image"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-image') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Customs documentation and paperwork"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-content') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Made Simple</h2>
              <p className="text-lg text-gray-700 mb-8">
                Navigate complex international trade regulations with confidence. Our customs experts handle all documentation, 
                clearance procedures, and compliance requirements across 50+ countries, ensuring your shipments move smoothly 
                through borders without delays.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Customs Clearance Works</h2>
            <p className="text-xl text-gray-600">Streamlined process for hassle-free clearance</p>
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Features</h2>
            <p className="text-xl text-gray-600">Complete customs and documentation solutions</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to ship with Customs & Documentation?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts handle all your customs requirements for smooth international shipping.
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomsDocumentationPage;

