import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LOCATIONS, AIR_ROUTES, SEA_ROUTES, type Location } from '../../data/globalReachData';
import { AnimatedAirplane, AnimatedShip } from './AnimatedVehicle';
import SvgDefinitions from './SvgDefinitions';

interface WorldMapProps {
  isVisible: boolean;
}

const WorldMap: React.FC<WorldMapProps> = ({ isVisible }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div 
      className={`relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-2xl border border-white/30 mb-12 overflow-hidden transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/30 pointer-events-none"></div>
      <svg 
        viewBox="0 0 1000 500" 
        className="w-full h-96 md:h-[500px] relative z-10"
        style={{ 
          background: 'radial-gradient(ellipse at center, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)'
        }}
      >
        <SvgDefinitions />

        {/* Enhanced continent shapes */}
        {/* Asia */}
        <motion.path
          d="M580,140 Q590,135 610,140 L650,145 Q680,150 720,155 Q760,150 800,160 Q840,170 870,190 Q890,210 900,240 Q895,270 880,300 Q860,330 830,350 Q800,365 760,370 Q720,365 690,350 Q660,330 640,300 Q620,270 610,240 Q600,210 590,180 Q585,160 580,140 Z"
          fill="url(#asiaGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        {/* Middle East */}
        <motion.path
          d="M480,190 Q520,185 560,190 Q580,195 590,210 Q595,230 590,250 Q585,270 575,285 Q560,300 540,305 Q520,300 500,290 Q485,275 480,255 Q478,235 480,215 Q482,195 480,190 Z"
          fill="url(#middleEastGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Africa */}
        <motion.path
          d="M430,210 Q460,205 480,210 Q500,215 515,230 Q525,250 530,275 Q535,300 530,325 Q525,350 515,375 Q505,400 490,420 Q475,435 455,445 Q435,450 415,445 Q395,435 380,415 Q370,395 365,370 Q362,345 365,320 Q370,295 380,275 Q395,255 415,240 Q430,225 430,210 Z"
          fill="url(#africaGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />
        
        {/* Europe */}
        <motion.path
          d="M400,130 Q440,125 480,135 Q520,145 540,165 Q550,185 545,205 Q535,220 520,225 Q500,230 480,225 Q460,220 440,210 Q420,195 410,175 Q405,155 405,135 Q402,125 400,130 Z"
          fill="url(#europeGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        
        {/* North America */}
        <motion.path
          d="M80,110 Q150,105 220,115 Q280,125 320,150 Q350,175 360,205 Q365,235 350,260 Q330,280 300,290 Q270,295 240,290 Q210,285 180,275 Q150,260 125,240 Q100,220 85,195 Q80,170 80,145 Q82,125 80,110 Z"
          fill="url(#americaGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
        />
        
        {/* South America */}
        <motion.path
          d="M220,290 Q260,285 290,300 Q315,320 330,345 Q340,370 345,395 Q350,420 340,445 Q330,465 315,475 Q295,480 275,475 Q255,465 240,445 Q230,425 225,400 Q222,375 225,350 Q230,325 240,305 Q228,295 220,290 Z"
          fill="url(#americaGradient)"
          filter="url(#continentShadow)"
          className="transition-all duration-300 hover:brightness-110"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.0 }}
        />

        {/* Air routes with animations */}
        {AIR_ROUTES.map((route, index) => (
          <g key={`air-${index}`}>
            {/* Base route path */}
            <motion.path
              d={route.path}
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 8,
                delay: index * 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Glowing trail */}
            <motion.path
              d={route.path}
              stroke="url(#airRouteGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#routeGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.3, 0], 
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: route.duration,
                delay: index * 1.2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            {/* Multiple airplanes per route */}
            {[0, 0.5].map((delayMultiplier) => (
              <AnimatedAirplane 
                key={`${index}-${delayMultiplier}`}
                path={route.path} 
                duration={route.duration} 
                delay={index * 1.2 + delayMultiplier * route.duration}
                direction={route.direction}
              />
            ))}
          </g>
        ))}

        {/* Sea routes with animations */}
        {SEA_ROUTES.map((route, index) => (
          <g key={`sea-${index}`}>
            {/* Base shipping lane */}
            <motion.path
              d={route.path}
              stroke="rgba(5, 150, 105, 0.15)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="12,8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 12,
                delay: index * 1.5 + 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Wake trail */}
            <motion.path
              d={route.path}
              stroke="url(#seaRouteGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#routeGlow)"
              opacity="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.2, 0], 
                opacity: [0, 0.8, 0] 
              }}
              transition={{
                duration: route.duration,
                delay: index * 2 + 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Ships with proper spacing */}
            {[0, 0.6].map((delayMultiplier) => (
              <AnimatedShip 
                key={`${index}-${delayMultiplier}`}
                path={route.path} 
                duration={route.duration} 
                delay={index * 2 + 4 + delayMultiplier * route.duration}
                direction={route.direction}
              />
            ))}
          </g>
        ))}

        {/* Location pins */}
        {LOCATIONS.map((location, index) => (
          <g key={index}>
            {/* Pin shadow */}
            <motion.ellipse
              cx={location.x}
              cy={location.y + 3}
              rx="8"
              ry="3"
              fill="rgba(0,0,0,0.1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15 + 2.5, duration: 0.6 }}
            />
            
            {/* Main pin */}
            <motion.g
              style={{ cursor: 'pointer' }}
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15 + 2.5, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.2, y: -2 }}
              onMouseEnter={() => setHoveredLocation(location.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pin body */}
              <circle
                cx={location.x}
                cy={location.y}
                r="8"
                fill="url(#pinGradient)"
                stroke="white"
                strokeWidth="2"
                filter="url(#pinShadow)"
              />
              
              {/* Pin center dot */}
              <circle
                cx={location.x}
                cy={location.y}
                r="3"
                fill="white"
                opacity="0.9"
              />
              
              {/* Pulse ring */}
              <motion.circle
                cx={location.x}
                cy={location.y}
                r="15"
                fill="none"
                stroke="rgba(239, 68, 68, 0.4)"
                strokeWidth="2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.8, 0.5], opacity: [0, 0.6, 0] }}
                transition={{ 
                  delay: index * 0.15 + 3,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.g>
            
            {/* Tooltip */}
            {hoveredLocation === location.name && (
              <motion.g
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Tooltip background */}
                <rect
                  x={location.x - 40}
                  y={location.y - 50}
                  width="80"
                  height="32"
                  fill="rgba(15, 23, 42, 0.95)"
                  rx="8"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  filter="url(#tooltipShadow)"
                />
                
                {/* Tooltip arrow */}
                <path
                  d={`M${location.x - 6},${location.y - 18} L${location.x + 6},${location.y - 18} L${location.x},${location.y - 12} Z`}
                  fill="rgba(15, 23, 42, 0.95)"
                />
                
                {/* City name */}
                <text
                  x={location.x}
                  y={location.y - 38}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {location.name}
                </text>
                
                {/* Country */}
                <text
                  x={location.x}
                  y={location.y - 26}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="9"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {location.country}
                </text>
              </motion.g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;