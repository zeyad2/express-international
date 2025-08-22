import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`interactive flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-white/90 hover:bg-white shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300
        mr-5 ${
        isRTL ? 'flex-row-reverse space-x-reverse' : ''
      }`}
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <Globe className="w-4 h-4 text-blue-800" />
      <span className="text-sm font-medium text-blue-800">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
      
      {/* Language indicator */}
      <div className={`flex items-center space-x-1 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
          language === 'en' ? 'bg-blue-600' : 'bg-green-600'
        }`} />
        <span className="text-xs text-gray-500 uppercase font-mono">
          {language}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
