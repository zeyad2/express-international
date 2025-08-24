import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProductCarousel } from '../hooks/useProductCarousel';
import { PRODUCTS_DATA, CAROUSEL_CONFIG, type Product } from '../data/products';

interface ProductsSectionProps {
  visibleElements: Set<string>;
}


const ProductsSection: React.FC<ProductsSectionProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  
  // Use static product data directly
  const products = PRODUCTS_DATA;

  const {
    currentIndex,
    visibleCount,
    maxSlides,
    currentSlide,
    goToPrevious,
    goToNext,
    goToSlide
  } = useProductCarousel({ totalProducts: products.length });

  // Create product card component
  const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
    <div
      className={`flex-shrink-0 px-3 transition-all duration-1000 ${
        visibleCount === 2 ? 'w-1/2' : 
        visibleCount === 3 ? 'w-1/3' : 
        visibleCount === 4 ? 'w-1/4' :
        'w-1/2'
      } ${
        visibleElements.has('products-carousel')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * CAROUSEL_CONFIG.ANIMATION_DELAY_INCREMENT}ms` }}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 h-full w-full">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 h-48">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback to icon if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          
          {/* Fallback icon (hidden by default) */}
          <div className="hidden absolute inset-0  items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col h-full">
          <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {product.name}
          </h3>
          <p className={`text-gray-600 leading-relaxed flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
            {product.description}
          </p>
          
          {/* Button container */}
          <div className={`mt-4 ${isRTL ? 'text-left' : 'text-right'}`}>
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <button className="interactive bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                {isRTL ? 'عرض التفاصيل' : 'View Details'}
              </button>
            </div>
          </div>
        </div>
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
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h2 className={`text-5xl font-bold bg-gradient-to-r   from-blue-900 via-red-700 to-blue-900 bg-clip-text text-transparent mb-6 bg-red-400 leading-8${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t('products.title')}
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto text-center ${
            isRTL ? 'text-center' : 'text-center'
          }`}>
            {t('products.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          id="products-carousel"
          data-animate
          className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
            visibleElements.has('products-carousel') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Navigation Buttons */}
          {products.length > visibleCount && (
            <>
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 group border border-gray-200 ${
                  isRTL ? 'right-4' : 'left-4'
                }`}
                aria-label={isRTL ? 'المنتج التالي' : 'Previous product'}
              >
                <svg 
                  className={`w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors ${
                    isRTL ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 group border border-gray-200 ${
                  isRTL ? 'left-4' : 'right-4'
                }`}
                aria-label={isRTL ? 'المنتج السابق' : 'Next product'}
              >
                <svg 
                  className={`w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors ${
                    isRTL ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Products Slider */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(${isRTL ? '' : '-'}${(currentIndex * 100) / visibleCount}%)`,
              width: `${(products.length * 100) / visibleCount}%`,
              direction: isRTL ? 'rtl' : 'ltr'
            }}
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className={`flex justify-center mt-12 gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-blue-600 to-red-600 h-1 rounded-full transition-all duration-1000 ease-linear"
                style={{ 
                  width: `${((currentSlide + 1) / maxSlides) * 100}%` 
                }}
              />
            </div>
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
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 transition-all duration-300 hover:bg-white/90 hover:transform hover:scale-105 shadow-lg hover:shadow-xl`}
              style={{ transitionDelay: `${CAROUSEL_CONFIG.STATS_ANIMATION_DELAY + index * CAROUSEL_CONFIG.ANIMATION_DELAY_INCREMENT}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;