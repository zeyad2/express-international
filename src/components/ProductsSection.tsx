import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../contexts/LanguageContext';
import { PRODUCTS_DATA, type Product } from '../data/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css';

interface ProductsSectionProps {
  visibleElements: Set<string>;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  const products = PRODUCTS_DATA;

  // Create product card component
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:-translate-y-2 p-6 h-full flex flex-col border border-gray-100  delay-200 ${
      visibleElements.has('products-carousel')
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`}>
      {/* Product Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder-product.png';
          }}
        />
        {/* Category Badge */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Content */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>

      </div>
    </div>
  );

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          id="products-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000  ${
            visibleElements.has('products-title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-red-700 to-blue-900 bg-clip-text text-transparent mb-6 leading-tight text-center">
            {t('products.title')}
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto text-center ${
            isRTL ? 'text-center' : 'text-center'
          }`}>
            {t('products.subtitle')}
          </p>
        </div>

        {/* Swiper Container */}
        <div 
          id="products-carousel"
          data-animate
          className={`relative transition-all duration-1000 delay-300 ${
            visibleElements.has('products-carousel') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Swiper
            key={isRTL ? 'rtl' : 'ltr'}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: isRTL ? '.swiper-button-prev' : '.swiper-button-next',
              prevEl: isRTL ? '.swiper-button-next' : '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`swiper-button-prev !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white !rounded-full !shadow-lg hover:!shadow-xl !border-2 !border-blue-100 hover:!border-blue-300 !transition-all !duration-300 !text-blue-600 hover:!bg-blue-50 !flex !items-center !justify-center ${isRTL ? '!right-2 !left-auto' : '!left-2 !right-auto'}`}>
          
          </div>
          <div className={`swiper-button-next !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white !rounded-full !shadow-lg hover:!shadow-xl !border-2 !border-blue-100 hover:!border-blue-300 !transition-all !duration-300 !text-blue-600 hover:!bg-blue-50 !flex !items-center !justify-center ${isRTL ? '!left-2 !right-auto' : '!right-2 !left-auto'}`}>
         
          </div>
        </div>

        {/* Statistics */}
        <div 
          id="products-stats"
          data-animate
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${
            visibleElements.has('products-stats') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { number: '150000+', label: isRTL ? 'منج مُصدَّر' : 'Products Exported', color: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: isRTL ? 'دولة' : 'Countries', color: 'from-red-500 to-pink-500' },
            { number: '99.8%', label: isRTL ? 'رضا العملاء' : 'Customer Satisfaction', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;