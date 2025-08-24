import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, ArrowRight, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

const MedicalSuppliesRegistrationPage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  const { t, isRTL } = useLanguage();

  const processSteps = [
    {
      icon: '📋',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of medical device classification and regulatory requirements.'
    },
    {
      icon: '🔍',
      title: 'Documentation Review',
      description: 'Thorough review of technical documentation, safety data, and compliance requirements.'
    },
    {
      icon: '✅',
      title: 'Authority Submission',
      description: 'Professional submission to health authorities with complete documentation packages.'
    },
    {
      icon: '🏥',
      title: 'Registration Approval',
      description: 'Follow-up and support until final approval and registration certificate issuance.'
    }
  ];

  const features = [
    'Sterile and non-sterile medical devices',
    'Class I, II, and III device registrations',
    'CE marking and FDA compliance support',
    'Quality management system documentation',
    'Clinical evaluation reports',
    'Post-market surveillance planning'
  ];

  const benefits = [
    'Expert regulatory guidance',
    'Faster approval processing',
    'Full compliance assurance', 
    'Reduced regulatory risks'
  ];

  const stats = [
    {
      icon: Shield,
      number: '500+',
      label: 'Devices Registered',
      description: 'Medical devices successfully registered'
    },
    {
      icon: Clock,
      number: '30 days',
      label: 'Average Process Time',
      description: 'From submission to approval'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Success Rate',
      description: 'Successful registration approvals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-fixed bg-center bg-no-repeat mt-20" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/public/images/medical-devices.jpg")'
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
            <Heart className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h1 className="text-5xl font-bold mb-4">{t('customsClearance.accordion1.title')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Complete approvals and registration services for medical supplies and devices
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/#services"
            className={`inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isRTL ? <ArrowRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            {t('service.backToServices')}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-content') 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isRTL ? '-translate-x-8' : 'translate-x-8'}`
              } ${isRTL ? 'lg:col-start-2' : ''}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('customsClearance.accordion1.title')}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('customsClearance.accordion1.content')}
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
            <div 
              id="about-image"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-image') 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isRTL ? 'translate-x-8' : '-translate-x-8'}`
              } ${isRTL ? 'lg:col-start-1' : ''}`}
            >
              <img 
                src="/src/public/images/medical-registration.jpg"
                alt="Medical device registration process"
                className="rounded-lg shadow-lg"
              />
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
            <p className="text-xl text-gray-600">Streamlined registration process for medical devices</p>
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
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
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
            <p className="text-xl text-gray-600">Comprehensive medical device registration services</p>
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
                <Heart className="w-8 h-8 text-red-600 mb-4" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('stats-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="stats-title"
            data-animate
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('service.stats')}</h2>
            <p className="text-xl text-gray-600">Proven track record in medical device registration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  id={`stat-${index}`}
                  data-animate
                  className={`bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-1000 ${
                    visibleElements.has(`stat-${index}`) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-red-600 mb-2">{stat.label}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white">
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
            <h2 className="text-4xl font-bold mb-6">Ready to Register Your Medical Devices?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get expert assistance with medical device registration and approvals. Contact us today for a consultation.
            </p>
            <Link 
              to="/#contact"
              className={`inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('service.getQuote')} {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSuppliesRegistrationPage;