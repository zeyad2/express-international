import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay } from 'swiper/modules';
import { Star, Users } from 'lucide-react';
import { testimonials } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css';

interface TestimonialsProps {
  visibleElements: Set<string>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();

  // Create testimonial card component
  const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
          <Users className="w-8 h-8 text-blue-800" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-lg text-gray-700 italic flex-grow">
        "{testimonial.text}"
      </p>
    </div>
  );

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

        {/* Swiper Container */}
        <div 
          id="testimonials-carousel"
          data-animate
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            visibleElements.has('testimonials-carousel') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Swiper
            key={isRTL ? 'rtl' : 'ltr'}
            modules={[Navigation,  Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: isRTL ? '.swiper-button-prev' : '.swiper-button-next',
              prevEl: isRTL ? '.swiper-button-next' : '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`swiper-button-prev !w-14 !h-14 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white !rounded-full !shadow-xl hover:!shadow-2xl !border-2 !border-blue-200 hover:!border-blue-400 !transition-all !duration-300 !text-blue-600 hover:!bg-blue-50 !flex !items-center !justify-center hover:!scale-110 ${isRTL ? '!right-2 !left-auto' : '!-left-6 !right-auto'}`}>
          
          </div>
          <div className={`swiper-button-next !w-14 !h-14 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white !rounded-full !shadow-xl hover:!shadow-2xl !border-2 !border-blue-200 hover:!border-blue-400 !transition-all !duration-300 !text-blue-600 hover:!bg-blue-50 !flex !items-center !justify-center hover:!scale-110 ${isRTL ? '!-left-6 !right-auto' : '!-right-6 !left-auto'}`}>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

