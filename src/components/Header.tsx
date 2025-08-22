import React, { useState, useEffect } from "react";
import { Menu, X} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, isRTL } = useLanguage();

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center py-4 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Logo */}
          <div
            className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {/* <Plane className={`w-8 h-8 text-blue-800 ${isRTL ? 'ml-3' : 'mr-3'}`} /> */}
            {/* <span className="text-2xl font-bold text-blue-800">Express International</span> */}
            <img
              src="/src/public/images/logo.png"
              className="w-[240px] h-[240px] object-contain -my-20 z-10"
              alt="Express International Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex ${
              isRTL ? "space-x-reverse space-x-8" : "space-x-8"
            }`}
          >
            <a
              href="#home"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.home")}
            </a>
            <a
              href="#about"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#services"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.services")}
            </a>
            <a
              href="#global-reach"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.globalReach")}
            </a>
            <a
              href="#contact"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.contact")}
            </a>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div
            className={`hidden lg:flex items-center ${
              isRTL ? "flex-row-reverse space-x-reverse space-x-4" : "space-x-4"
            }`}
          >
            <LanguageToggle />
            <button className="interactive bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              {t("nav.getQuote")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="interactive lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav
              className={`flex flex-col space-y-4 ${
                isRTL ? "items-end" : "items-start"
              }`}
            >
              <a
                href="#home"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
              >
                {t("nav.home")}
              </a>
              <a
                href="#about"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
              >
                {t("nav.about")}
              </a>
              <a
                href="#services"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
              >
                {t("nav.services")}
              </a>
              <a
                href="#global-reach"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
              >
                {t("nav.globalReach")}
              </a>
              <a
                href="#contact"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
              >
                {t("nav.contact")}
              </a>
              <div
                className={`flex items-center gap-3 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <LanguageToggle />
                <button className="interactive bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                  {t("nav.getQuote")}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
