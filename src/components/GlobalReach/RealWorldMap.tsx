import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  country: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  color: string;
}

// 12 specified locations with precise coordinates converted to map percentages
const LOCATIONS: Location[] = [
  { id: 'london', name: 'London', country: 'UK', x: 49.9, y: 28.5, color: '#ef4444' },
  { id: 'newyork', name: 'New York', country: 'US', x: 26.0, y: 32.5, color: '#3b82f6' },
  { id: 'noida', name: 'Noida', country: 'India', x: 69.2, y: 44.8, color: '#10b981' },
  { id: 'beijing', name: 'Beijing', country: 'China', x: 78.8, y: 31.2, color: '#f59e0b' },
  { id: 'sydney', name: 'Sydney', country: 'Australia', x: 85.2, y: 73.5, color: '#8b5cf6' },
  { id: 'saopaulo', name: 'São Paulo', country: 'Brazil', x: 32.2, y: 68.5, color: '#06b6d4' },
  { id: 'capetown', name: 'Cape Town', country: 'South Africa', x: 51.8, y: 73.8, color: '#f97316' },
  { id: 'toronto', name: 'Toronto', country: 'Canada', x: 23.5, y: 27.2, color: '#84cc16' },
  { id: 'tokyo', name: 'Tokyo', country: 'Japan', x: 85.5, y: 33.8, color: '#ec4899' },
  { id: 'dubai', name: 'Dubai', country: 'UAE', x: 62.2, y: 43.8, color: '#14b8a6' },
  { id: 'paris', name: 'Paris', country: 'France', x: 49.2, y: 30.8, color: '#a855f7' },
  { id: 'singapore', name: 'Singapore', country: 'Singapore', x: 75.2, y: 59.8, color: '#22c55e' }
];

interface RealWorldMapProps {
  isVisible: boolean;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ isVisible }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const renderMarker = (location: Location, index: number) => {
    const isHovered = hoveredLocation === location.id;
    
    return (
      <motion.div
        key={location.id}
        className="absolute cursor-pointer z-10"
        style={{ 
          left: `${location.x}%`, 
          top: `${location.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ scale: 0, opacity: 0, y: -20 }}
        animate={{ 
          scale: isVisible ? 1 : 0, 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        transition={{ 
          delay: index * 0.5, // 500ms delay between each pin
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        whileHover={{ scale: 1.2, y: -4 }}
        onMouseEnter={() => setHoveredLocation(location.id)}
        onMouseLeave={() => setHoveredLocation(null)}
      >
        {/* Pin shadow */}
        <div 
          className="absolute w-6 h-3 rounded-full opacity-20 bg-black"
          style={{ 
            bottom: '-8px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            filter: 'blur(2px)'
          }}
        />
        
        {/* Pin body */}
        <div
          className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
          style={{ 
            backgroundColor: location.color,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}
        >
          <MapPin className="w-3 h-3 text-white fill-white" />
        </div>
        
        {/* Tooltip */}
        {isHovered && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg shadow-xl text-xs whitespace-nowrap z-20"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-semibold">{location.name}</div>
            <div className="opacity-70 text-xs">{location.country}</div>
            {/* Tooltip arrow */}
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '4px solid rgb(15, 23, 42)'
              }}
            />
          </motion.div>
        )}
      </motion.div>
    );
  };

  if (!isVisible) {
    return (
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-2xl border border-white/30 mb-12 flex items-center justify-center opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-gray-400">Loading Map...</div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-2xl border border-white/30 mb-12 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
      <div className="w-full h-96 md:h-[500px] relative">
        {/* World Map SVG Background */}
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full absolute inset-0"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Ocean background */}
          <rect width="1000" height="500" fill="#0ea5e9" />
          
          {/* Simplified world map continents */}
          {/* North America */}
          <path 
            d="M50,100 Q200,80 350,120 Q400,140 420,180 Q430,220 400,260 Q350,300 280,320 Q200,330 120,300 Q60,270 50,220 Q45,160 50,100" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
          
          {/* South America */}
          <path 
            d="M250,300 Q320,290 350,330 Q380,370 390,420 Q395,470 370,500 Q330,490 290,470 Q250,440 230,400 Q220,350 250,300" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
          
          {/* Europe */}
          <path 
            d="M450,120 Q520,110 580,130 Q620,150 630,180 Q635,210 620,230 Q580,240 520,235 Q460,225 450,190 Q445,155 450,120" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
          
          {/* Africa */}
          <path 
            d="M480,200 Q540,190 580,210 Q610,240 620,290 Q625,340 615,390 Q600,430 570,450 Q520,460 470,450 Q430,430 420,380 Q415,330 425,280 Q440,230 480,200" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
          
          {/* Asia */}
          <path 
            d="M630,130 Q750,120 850,140 Q920,160 950,200 Q970,250 950,300 Q920,340 870,360 Q800,370 720,365 Q650,350 630,300 Q620,250 630,200 Q635,165 630,130" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
          
          {/* Australia */}
          <path 
            d="M750,350 Q820,345 870,360 Q900,380 905,400 Q900,420 870,430 Q820,435 750,430 Q720,420 715,400 Q720,380 750,350" 
            fill="#22c55e" 
            stroke="#166534" 
            strokeWidth="0.5"
          />
        </svg>
        
        {/* Location markers */}
        {LOCATIONS.map(renderMarker)}
      </div>
      
      {/* Legend showing all cities with their colors */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Our Global Presence</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
          {LOCATIONS.map((location) => (
            <div key={location.id} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ 
                  backgroundColor: location.color,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
              />
              <span className="text-gray-700 truncate">
                {location.name}, {location.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealWorldMap;