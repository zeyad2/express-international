import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Plane, Ship } from 'lucide-react';
import { GLOBAL_STATS } from '../../data/globalReachData';
import { useLanguage } from '../../contexts/LanguageContext';

interface StatsGridProps {
  isVisible: boolean;
}

const iconMap = {
  Globe,
  MapPin,
  Plane,
  Ship,
};

const StatsGrid: React.FC<StatsGridProps> = ({ isVisible }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      {GLOBAL_STATS.map((stat, index) => {
        const IconComponent = iconMap[stat.iconName];
        
        return (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{t(stat.labelKey)}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsGrid;