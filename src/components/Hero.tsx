import React from 'react';
import { Globe, Ship } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  visibleElements: Set<string>;
}

const Hero: React.FC<HeroProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced World Map */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 600">
          {/* Ocean Background */}
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
            </linearGradient>
            <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q10,5 20,10 T40,10" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#oceanGradient)" />
          <rect width="100%" height="100%" fill="url(#waves)" />
          
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="60" height="30" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Continents with realistic shapes */}
          {/* North America */}
          <path d="M150,120 Q180,100 220,110 L280,130 Q300,140 320,160 L340,180 Q350,200 340,220 L320,240 Q300,250 280,240 L240,230 Q200,220 180,200 L160,180 Q140,150 150,120 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* South America */}
          <path d="M280,280 Q300,270 320,280 L340,300 Q350,320 345,340 L340,380 Q335,420 330,450 L325,480 Q320,500 310,510 L300,520 Q290,525 280,520 L270,510 Q260,500 265,480 L270,450 Q275,420 280,380 L285,340 Q290,320 285,300 L280,280 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* Europe */}
          <path d="M480,140 Q500,130 520,135 L540,140 Q560,145 570,160 L575,180 Q570,200 560,210 L540,220 Q520,225 500,220 L480,215 Q460,210 455,195 L450,180 Q455,165 470,150 L480,140 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* Africa */}
          <path d="M480,240 Q500,230 520,235 L540,245 Q560,255 570,275 L580,300 Q585,330 580,360 L575,390 Q570,420 565,440 L560,460 Q550,480 540,490 L520,500 Q500,505 480,500 L460,495 Q440,485 435,465 L430,440 Q435,420 440,390 L445,360 Q450,330 455,300 L460,275 Q470,255 480,240 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* Asia */}
          <path d="M600,120 Q650,110 700,120 L780,140 Q820,150 860,170 L900,190 Q920,210 915,230 L910,250 Q900,270 880,280 L840,290 Q800,295 760,290 L720,285 Q680,280 650,270 L620,260 Q590,245 585,225 L580,205 Q585,185 600,165 L610,145 Q615,130 600,120 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
          
          {/* Australia */}
          <path d="M780,380 Q820,370 860,375 L900,385 Q920,395 925,415 L920,435 Q910,450 890,455 L860,460 Q820,465 780,460 L750,455 Q730,445 735,425 L740,405 Q750,390 780,380 Z" 
                fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>

          {/* Animated Flight Paths */}
          <defs>
            <path id="route1" d="M200,200 Q400,150 600,180" />
            <path id="route2" d="M300,300 Q600,250 800,280" />
            <path id="route3" d="M500,200 Q650,180 800,200" />
          </defs>
          
          {/* Dashed route lines with animation */}
          <path d="M200,200 Q400,150 600,180" stroke="#DC2626" strokeWidth="2" fill="none" 
                strokeDasharray="10,5" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;-15" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M300,300 Q600,250 800,280" stroke="#DC2626" strokeWidth="2" fill="none" 
                strokeDasharray="10,5" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;-15" dur="2.5s" repeatCount="indefinite"/>
          </path>
          <path d="M500,200 Q650,180 800,200" stroke="#DC2626" strokeWidth="2" fill="none" 
                strokeDasharray="10,5" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;-15" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* 3D Animated Airplane */}
        <div className="absolute inset-0">
          <div className="airplane-container">
            <svg className="airplane-3d" width="80" height="80" viewBox="0 0 80 80">
              <defs>
                <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <filter id="planeShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              {/* Airplane body */}
              <ellipse cx="40" cy="40" rx="25" ry="8" fill="url(#planeGradient)" filter="url(#planeShadow)" />
              
              {/* Wings */}
              <ellipse cx="40" cy="40" rx="35" ry="4" fill="url(#planeGradient)" opacity="0.8" />
              
              {/* Tail */}
              <path d="M15,40 L10,35 L10,45 Z" fill="url(#planeGradient)" />
              
              {/* Propeller */}
              <g className="propeller">
                <circle cx="65" cy="40" r="3" fill="#DC2626" />
                <line x1="62" y1="40" x2="68" y2="40" stroke="#DC2626" strokeWidth="1" />
                <line x1="65" y1="37" x2="65" y2="43" stroke="#DC2626" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Globe className="w-8 h-8 text-blue-800" />
          </div>
        </div>
        
        <div className="absolute top-40 right-32 animate-float-delayed">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Ship className="w-6 h-6 text-blue-800" />
          </div>
        </div>

        {/* Animated Clouds */}
        <div className="absolute top-16 left-1/4 animate-drift">
          <svg width="100" height="60" viewBox="0 0 100 60">
            <path d="M20,40 Q10,30 20,20 Q30,10 40,20 Q50,10 60,20 Q70,10 80,20 Q90,30 80,40 Z" 
                  fill="white" opacity="0.6" />
          </svg>
        </div>
        
        <div className="absolute top-32 right-1/3 animate-drift-slow">
          <svg width="80" height="50" viewBox="0 0 80 50">
            <path d="M15,35 Q8,25 15,15 Q25,8 35,15 Q45,8 55,15 Q65,25 55,35 Z" 
                  fill="white" opacity="0.4" />
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div 
          id="hero-content"
          data-animate
          className={`text-center transition-all duration-1000 ${
            visibleElements.has('hero-content') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
            <span className="block text-blue-800">{t('hero.titleSpan')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button className="interactive bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              {t('hero.getQuote')}
            </button>
            <button className="interactive bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

