import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface ProductsSectionProps {
  visibleElements: Set<string>;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Product data with endoscopy products
  const products: Product[] = [
    {
      id: 'endoscope1',
      name: t('products.endoscope1.name'),
      description: t('products.endoscope1.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    },
    {
      id: 'endoscope2',
      name: t('products.endoscope2.name'),
      description: t('products.endoscope2.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    },
    {
      id: 'endoscope3',
      name: t('products.endoscope3.name'),
      description: t('products.endoscope3.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    },
    {
      id: 'endoscope4',
      name: t('products.endoscope4.name'),
      description: t('products.endoscope4.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    },
    {
      id: 'endoscope5',
      name: t('products.endoscope5.name'),
      description: t('products.endoscope5.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    },
    {
      id: 'endoscope6',
      name: t('products.endoscope6.name'),
      description: t('products.endoscope6.desc'),
      image: '/api/placeholder/400/300',
      category: 'Medical Equipment'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  // Calculate visible products for responsive design
  const getVisibleProducts = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) return 3; // lg and above
    if (screenWidth >= 768) return 2;  // md
    return 1; // sm and below
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleProducts());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create product card component
  const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
    <div
      className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 transition-all duration-1000 ${
        visibleElements.has('products-carousel')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 h-64">
          {/* Placeholder for actual product image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
              {/* Medical device icon */}
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
        <div className="p-6">
          <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {product.name}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {product.description}
          </p>
          
          {/* Hover action */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button className={`interactive bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              isRTL ? 'float-left' : 'float-right'
            }`}>
              {isRTL ? 'عرض التفاصيل' : 'View Details'}
            </button>
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
          className={`text-center mb-16 transition-all duration-1000 ${
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
          <h2 className={`text-5xl font-bold bg-gradient-to-r from-blue-900 via-red-700 to-blue-900 bg-clip-text text-transparent mb-6 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t('products.title')}
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${
            isRTL ? 'text-right' : 'text-left'
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
          {/* Products Slider */}
          <div 
            className={`flex transition-transform duration-1000 ease-in-out ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
            style={{ 
              transform: `translateX(${isRTL ? '' : '-'}${(currentIndex * (100 / visibleCount))}%)`,
              width: `${(products.length * 100) / visibleCount}%`
            }}
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: Math.ceil(products.length / visibleCount) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCount)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCount) === index
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-blue-600 to-red-600 h-1 rounded-full transition-all duration-1000 ease-linear"
                style={{ 
                  width: `${((currentIndex + visibleCount) / products.length) * 100}%` 
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
            { number: '500+', label: isRTL ? 'منتج مُصدَّر' : 'Products Exported', color: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: isRTL ? 'دولة' : 'Countries', color: 'from-red-500 to-pink-500' },
            { number: '99.8%', label: isRTL ? 'رضا العملاء' : 'Customer Satisfaction', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 transition-all duration-300 hover:bg-white/90 hover:transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isRTL ? 'text-right' : 'text-left'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
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