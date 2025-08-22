import React from 'react';
import { Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/constants';
import useTestimonialCarousel from '../hooks/useTestimonialCarousel';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialsProps {
  visibleElements: Set<string>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ visibleElements }) => {
  const { currentTestimonial, goToNext, goToPrevious, goToSlide } = useTestimonialCarousel();
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="testimonials-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('testimonials-title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
        </div>

        <div 
          id="testimonials-carousel"
          data-animate
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            visibleElements.has('testimonials-carousel') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
            
            <div className={`flex mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-lg text-gray-700 italic mb-6">
              "{testimonials[currentTestimonial].text}"
            </p>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-800' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <button 
            className={`interactive absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all`}
            onClick={isRTL ? goToNext : goToPrevious}
          >
            {isRTL ? <ChevronRight className="w-6 h-6 text-gray-600" /> : <ChevronLeft className="w-6 h-6 text-gray-600" />}
          </button>
          
          <button 
            className={`interactive absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all`}
            onClick={isRTL ? goToPrevious : goToNext}
          >
            {isRTL ? <ChevronLeft className="w-6 h-6 text-gray-600" /> : <ChevronRight className="w-6 h-6 text-gray-600" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

