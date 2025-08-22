import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContactForm } from '../hooks/useContactForm';

interface ContactProps {
  visibleElements: Set<string>;
}

const Contact: React.FC<ContactProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  const { formData, isSubmitting, submitStatus, updateField, handleSubmit } = useContactForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Field ${name} updated to:`, value);
    updateField(name as keyof typeof formData, value);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="contact-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('contact-title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-100 translate-y-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Contact Form */}
          <div 
            id="contact-form"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('contact-form') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-100 translate-x-0'
            }`}
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.formTitle')}</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-semibold">Error sending message</p>
                  <p className="text-sm mt-1">Please fill in all required fields and try again.</p>
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.name')} *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.email')} *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('form.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.company')}</label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.phone')}</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('form.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.serviceInterest')}</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t('form.selectService')}</option>
                    <option value="Sea Freight">{t('services.seaFreight')}</option>
                    <option value="Air Freight">{t('services.airFreight')}</option>
                    <option value="Customs Documentation">{t('services.customs')}</option>
                    <option value="General Inquiry">{t('form.generalInquiry')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.message')} *</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('form.messagePlaceholder')}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`interactive w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-800 hover:bg-blue-900 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            id="contact-info"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('contact-info') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-100 translate-x-0'
            } ${isRTL ? 'lg:col-start-1' : ''}`}
          >
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className={`w-6 h-6 text-blue-800 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <h4 className="text-lg font-semibold text-gray-900">{t('contact.phone')}</h4>
                </div>
                <p className="text-gray-600">029224618</p>
                <p className="text-gray-600">+20119421322</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className={`w-6 h-6 text-blue-800 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <h4 className="text-lg font-semibold text-gray-900">{t('contact.email')}</h4>
                </div>
                <p className="text-gray-600">nabilabbas@expressinternational-eg.com</p>
                <p className="text-gray-600">info@expressinternational-eg.com</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`w-6 h-6 text-blue-800 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                </div>
                <p className="text-gray-600">
                  123 Logistics Boulevard<br />
                  International Trade Center<br />
                  New York, NY 10001
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock className={`w-6 h-6 text-blue-800 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <h4 className="text-lg font-semibold text-gray-900">{t('contact.businessHours')}</h4>
                </div>
                <p className="text-gray-600">
                  Saturday - Thursday: 8:00 AM - 3:00 PM<br />
                  Friday: Closed
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.whyChoose')}</h4>
                <div className="space-y-3">
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle className={`w-5 h-5 text-green-600 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span className="text-gray-700">{t('contact.support247')}</span>
                  </div>
               
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle className={`w-5 h-5 text-green-600 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span className="text-gray-700">{t('contact.competitivePricing')}</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle className={`w-5 h-5 text-green-600 ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span className="text-gray-700">{t('contact.globalNetwork')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;