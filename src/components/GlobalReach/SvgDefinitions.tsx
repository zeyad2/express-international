import React from 'react';

const SvgDefinitions: React.FC = () => {
  return (
    <defs>
      {/* Realistic texture patterns */}
      <pattern id="landTexture" patternUnits="userSpaceOnUse" width="20" height="20">
        <rect width="20" height="20" fill="#22c55e"/>
        <circle cx="5" cy="5" r="1" fill="#16a34a" opacity="0.3"/>
        <circle cx="15" cy="10" r="1.5" fill="#15803d" opacity="0.4"/>
        <circle cx="10" cy="15" r="1" fill="#166534" opacity="0.2"/>
        <rect x="2" y="8" width="3" height="1" fill="#15803d" opacity="0.3"/>
        <rect x="12" y="3" width="2" height="1" fill="#166534" opacity="0.2"/>
        <rect x="7" y="18" width="4" height="1" fill="#16a34a" opacity="0.3"/>
      </pattern>
      
      <pattern id="mountainTexture" patternUnits="userSpaceOnUse" width="15" height="15">
        <rect width="15" height="15" fill="#059669"/>
        <path d="M0,15 L3,8 L6,15 Z" fill="#047857" opacity="0.6"/>
        <path d="M5,15 L8,6 L11,15 Z" fill="#065f46" opacity="0.7"/>
        <path d="M9,15 L12,9 L15,15 Z" fill="#047857" opacity="0.5"/>
        <circle cx="7" cy="12" r="0.5" fill="#064e3b" opacity="0.4"/>
      </pattern>
      
      <pattern id="desertTexture" patternUnits="userSpaceOnUse" width="25" height="25">
        <rect width="25" height="25" fill="#f59e0b"/>
        <ellipse cx="6" cy="8" rx="3" ry="1" fill="#d97706" opacity="0.4"/>
        <ellipse cx="18" cy="15" rx="4" ry="1.5" fill="#b45309" opacity="0.3"/>
        <ellipse cx="12" cy="20" rx="3" ry="1" fill="#92400e" opacity="0.5"/>
        <circle cx="20" cy="5" r="1" fill="#b45309" opacity="0.3"/>
        <circle cx="8" cy="18" r="0.5" fill="#92400e" opacity="0.4"/>
      </pattern>
      
      <pattern id="oceanTexture" patternUnits="userSpaceOnUse" width="30" height="30">
        <rect width="30" height="30" fill="#0ea5e9"/>
        <path d="M0,15 Q7,12 15,15 T30,15" stroke="#0284c7" strokeWidth="0.5" fill="none" opacity="0.6"/>
        <path d="M0,20 Q10,17 20,20 T40,20" stroke="#0369a1" strokeWidth="0.5" fill="none" opacity="0.4"/>
        <path d="M0,10 Q5,7 10,10 T20,10" stroke="#38bdf8" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <circle cx="8" cy="25" r="1" fill="#0284c7" opacity="0.2"/>
        <circle cx="22" cy="8" r="1.5" fill="#0369a1" opacity="0.15"/>
      </pattern>
      
      <pattern id="forestTexture" patternUnits="userSpaceOnUse" width="18" height="18">
        <rect width="18" height="18" fill="#16a34a"/>
        <circle cx="4" cy="4" r="2" fill="#15803d" opacity="0.7"/>
        <circle cx="12" cy="6" r="2.5" fill="#166534" opacity="0.6"/>
        <circle cx="8" cy="14" r="2" fill="#15803d" opacity="0.8"/>
        <circle cx="15" cy="12" r="1.5" fill="#14532d" opacity="0.5"/>
        <rect x="6" y="8" width="1" height="4" fill="#92400e" opacity="0.6"/>
        <rect x="13" y="10" width="1" height="3" fill="#78350f" opacity="0.5"/>
      </pattern>

      {/* Continent gradient definitions */}
      <linearGradient id="asiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#065f46" />
        <stop offset="50%" stopColor="#059669" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <linearGradient id="middleEastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#991b1b" />
        <stop offset="50%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
      <linearGradient id="europeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#581c87" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="americaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0c4a6e" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      
      {/* Route gradient definitions */}
      <linearGradient id="airRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="seaRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" stopOpacity="0" />
        <stop offset="30%" stopColor="#10b981" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065f46" stopOpacity="0" />
      </linearGradient>
      
      {/* Vehicle gradient definitions */}
      <linearGradient id="airplaneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
      
      {/* Filter definitions */}
      <filter id="continentShadow">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.15)"/>
      </filter>
      <filter id="routeGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="vehicleGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="pinShadow">
        <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.3)"/>
      </filter>
      <filter id="tooltipShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)"/>
      </filter>
    </defs>
  );
};

export default SvgDefinitions;