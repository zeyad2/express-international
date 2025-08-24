import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
// import RealWorldMap from './RealWorldMap';
import StatsGrid from './StatsGrid';

interface GlobalReachProps {
  visibleElements: Set<string>;
}

const GlobalReach: React.FC<GlobalReachProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();

  const isTitleVisible = visibleElements.has('global-title');
  const isMapVisible = visibleElements.has('world-map');
  
  // Stats should be visible when either title or map is visible for better UX
  const isStatsVisible = isTitleVisible || isMapVisible;

  return (
    <section id="global-reach" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div 
          id="global-title"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isTitleVisible 
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

        {/* Interactive Real World Map */}
        {/* <div id="world-map" data-animate>
          <RealWorldMap isVisible={isMapVisible} />
        </div> */}
        
        {/* Stats Grid - Enhanced visibility logic */}
        <div className="relative z-10">
          <StatsGrid isVisible={isStatsVisible} />
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;