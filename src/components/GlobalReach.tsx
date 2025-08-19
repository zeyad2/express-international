import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Plane, Ship } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GlobalReachProps {
  visibleElements: Set<string>;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ visibleElements }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [activeTransport, setActiveTransport] = useState<'air' | 'sea' | 'both'>('both');
  const { t, isRTL } = useLanguage();

  const locations = [
    { name: t('location.newYork'), country: 'USA', x: 22, y: 35, color: 'from-blue-500 to-cyan-500' },
    { name: t('location.london'), country: 'UK', x: 49, y: 32, color: 'from-purple-500 to-pink-500' },
    { name: t('location.dubai'), country: 'UAE', x: 58, y: 42, color: 'from-orange-500 to-red-500' },
    { name: t('location.singapore'), country: 'SG', x: 76, y: 58, color: 'from-green-500 to-emerald-500' },
    { name: t('location.shanghai'), country: 'China', x: 80, y: 40, color: 'from-red-500 to-rose-500' },
    { name: t('location.saoPaulo'), country: 'Brazil', x: 28, y: 68, color: 'from-yellow-500 to-orange-500' },
    { name: t('location.lagos'), country: 'Nigeria', x: 48, y: 52, color: 'from-indigo-500 to-blue-500' },
    { name: t('location.sydney'), country: 'Australia', x: 85, y: 75, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section id="global-reach" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="global-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has('global-title') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Globe className="w-16 h-16 text-blue-600 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-purple-700 to-blue-900 bg-clip-text text-transparent mb-6">
            {t('global.title')}
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('global.subtitle')}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {[
            { number: '50+', label: t('global.countries'), icon: Globe, color: 'from-blue-500 to-cyan-500' },
            { number: '200+', label: t('global.cities'), icon: MapPin, color: 'from-purple-500 to-pink-500' },
            { number: '24/7', label: t('global.operations'), icon: Plane, color: 'from-orange-500 to-red-500' },
            { number: '99.9%', label: t('global.reliability'), icon: Ship, color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 transition-all duration-300 hover:bg-white/90 hover:transform hover:scale-105 shadow-lg hover:shadow-xl ${
                visibleElements.has('global-title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
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

export default GlobalReach;
