import React from 'react';

const SvgDefinitions: React.FC = () => {
  return (
    <defs>
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