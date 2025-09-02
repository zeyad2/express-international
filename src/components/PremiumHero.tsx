import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { HashLink } from "react-router-hash-link";

// Import Globe from installed package
import Globe from "react-globe.gl";

interface PremiumHeroProps {
  visibleElements: Set<string>;
}

interface GlobePoint {
  lat: number;
  lng: number;
  label: string;
  color: string;
}

interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({ visibleElements }) => {
  const { t, isRTL } = useLanguage();
  const globeEl = useRef<any>();
  const [isGlobeSupported, setIsGlobeSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Globe data - major international trade hubs and Express International locations
  const pointsData: GlobePoint[] = [
    { lat: 25.2048, lng: 55.2708, label: "Dubai, UAE", color: "#DC2626" },
    { lat: 40.7128, lng: -74.0060, label: "New York, USA", color: "#DC2626" },
    { lat: 51.5074, lng: -0.1278, label: "London, UK", color: "#DC2626" },
    { lat: 35.6762, lng: 139.6503, label: "Tokyo, Japan", color: "#DC2626" },
    { lat: 1.3521, lng: 103.8198, label: "Singapore", color: "#DC2626" },
    { lat: 22.3193, lng: 114.1694, label: "Hong Kong", color: "#DC2626" },
    { lat: 52.5200, lng: 13.4050, label: "Berlin, Germany", color: "#DC2626" },
    { lat: -33.8688, lng: 151.2093, label: "Sydney, Australia", color: "#DC2626" },
    { lat: 30.0444, lng: 31.2357, label: "Cairo, Egypt", color: "#DC2626" },
    { lat: 39.9042, lng: 116.4074, label: "Beijing, China", color: "#DC2626" },
    { lat: 24.7136, lng: 46.6753, label: "Riyadh, Saudi Arabia", color: "#DC2626" },
    { lat: 25.2854, lng: 51.5310, label: "Doha, Qatar", color: "#DC2626" },
    { lat: 3.1390, lng: 101.6869, label: "Kuala Lumpur, Malaysia", color: "#DC2626" },
  ];

  // Animated arcs representing shipping routes
  const arcsData: GlobeArc[] = [
    {
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 40.7128,
      endLng: -74.0060,
      color: "#3B82F6",
    },
    {
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 51.5074,
      endLng: -0.1278,
      color: "#DC2626",
    },
    {
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 35.6762,
      endLng: 139.6503,
      color: "#3B82F6",
    },
    {
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 22.3193,
      endLng: 114.1694,
      color: "#DC2626",
    },
    {
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 30.0444,
      endLng: 31.2357,
      color: "#3B82F6",
    },
    {
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 39.9042,
      endLng: 116.4074,
      color: "#DC2626",
    },
    {
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 3.1390,
      endLng: 101.6869,
      color: "#3B82F6",
    },
  ];

  // Check if mobile and setup globe
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (globeEl.current && !isMobile) {
      // Auto-rotate only on desktop
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Set initial camera position
      globeEl.current.pointOfView({ altitude: 2.5 });
    }
  }, [isMobile]);

  // WebGL support detection
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsGlobeSupported(false);
    }
  }, []);

  const GlobeFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
      <img
        src="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        alt="World Map"
        className="max-w-full max-h-full object-contain rounded-xl opacity-80"
      />
    </div>
  );

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            className={`space-y-6 sm:space-y-8 ${isRTL ? "lg:text-right" : "lg:text-left"} text-center lg:text-left order-2 lg:order-1`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Play className="w-4 h-4" />
{t("hero.premium.badge")}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">
                {t("hero.premium.title1")}
              </span>
              <span className="block text-blue-600">
                {t("hero.premium.title2")}
              </span>
              <span className="block text-xl sm:text-2xl lg:text-4xl font-normal text-gray-600 mt-2">
                {t("hero.premium.subtitle")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
{t("hero.premium.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <HashLink
                smooth
                to="/#contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-red-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
{t("hero.premium.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </HashLink>
              
              <HashLink
                smooth
                to="/#services"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
{t("hero.premium.learnMore")}
              </HashLink>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">25+</div>
                <div className="text-xs sm:text-sm text-gray-600">{t("hero.premium.stat1")}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">{t("hero.premium.stat2")}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600">{t("hero.premium.stat3")}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Globe */}
          <motion.div
            className="relative w-full h-80 sm:h-96 lg:h-[600px] order-1 lg:order-2 overflow-hidden rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              {isGlobeSupported ? (
                <div 
                  className="relative flex items-center justify-center"
                  style={{
                    width: !isMobile ? '600px' : '100%',
                    height: !isMobile ? '600px' : '320px',
                    maxWidth: '100%',
                    pointerEvents: isMobile ? 'none' : 'auto'
                  }}
                >
                  <Globe
                    ref={globeEl}
                    width={!isMobile ? 600 : Math.min(350, (typeof window !== 'undefined' ? window.innerWidth : 400) - 80)}
                    height={!isMobile ? 600 : 320}
                    backgroundColor="rgba(255,255,255,0)"
                    globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                    
                    // Points configuration
                    pointsData={pointsData}
                    pointAltitude={0.02}
                    pointColor="color"
                    pointRadius={0.8}
                    pointResolution={8}
                    pointLabel="label"
                    
                    // Arcs configuration
                    arcsData={arcsData}
                    arcColor="color"
                    arcDashLength={0.4}
                    arcDashGap={0.2}
                    arcDashInitialGap={() => Math.random()}
                    arcDashAnimateTime={2000}
                    arcStroke={0.5}
                    arcAltitude={0.3}
                    
                    // Globe styling
                    showAtmosphere={true}
                    atmosphereColor="#3B82F6"
                    atmosphereAltitude={0.15}
                    
                    // Animation settings - disabled on mobile to prevent scroll issues
                    enablePointerInteraction={!isMobile}
                  />
                </div>
              ) : (
                <GlobeFallback />
              )}
            </div>

          </motion.div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="premium-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-dots)" />
        </svg>
      </div>
    </section>
  );
};

export default PremiumHero;