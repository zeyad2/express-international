import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Plane, FileText, ArrowRight, Users, ClipboardList, Heart, Sparkles, TestTube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  visibleElements: Set<string>;
}

const Services: React.FC<ServicesProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-gray-50 mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="services-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('services-title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {/* Sea Freight */}
          <div 
            id="service-1"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-1') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Ship className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.seaFreight')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.seaFreightDesc')}
              </p>
              <Link 
                to="/services/sea-freight"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Air Freight */}
          <div 
            id="service-2"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-2') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Plane className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.airFreight')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.airFreightDesc')}
              </p>
              <Link 
                to="/services/air-freight"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Customs Clearance & Regulatory Services */}
          <div 
            id="service-3"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-3') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <FileText className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.customs')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.customsDesc')}
              </p>
              <Link 
                to="/services/customs-clearance"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Import on behalf of others */}
          <div 
            id="service-4"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-4') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.importOnBehalf')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.importOnBehalfDesc')}
              </p>
              <Link 
                to="/services/import-on-behalf"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Exporters' Registry */}
          <div 
            id="service-5"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-5') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <ClipboardList className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.exportersRegistry')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.exportersRegistryDesc')}
              </p>
              <Link 
                to="/services/exporters-registry"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Medical Supplies & Devices Registration */}
          <div 
            id="service-6"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-6') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Heart className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('customsClearance.accordion1.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('customsClearance.accordion1.content')}
              </p>
              <Link 
                to="/services/medical-supplies-registration"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Cosmetics Approvals & Registration */}
          <div 
            id="service-7"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-7') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Sparkles className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('customsClearance.accordion2.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('customsClearance.accordion2.content')}
              </p>
              <Link 
                to="/services/cosmetics-registration"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Lab Reagents Approvals & Registration */}
          <div 
            id="service-8"
            data-animate
            className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
              visibleElements.has('service-8') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <TestTube className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('customsClearance.accordion3.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('customsClearance.accordion3.content')}
              </p>
              <Link 
                to="/services/lab-reagents-registration"
                className={`interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('services.learnMore')} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
