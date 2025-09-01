import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
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
          <HashLink
            to="/"
            className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <img
              src="/images/Logo.png"
              className="w-[200px] h-[200px] object-contain -my-20 z-10 py-4"
              alt="Express International Logo"
            />
          </HashLink>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex ${
              isRTL ? "space-x-reverse space-x-8" : "space-x-8"
            }`}
          >
            <HashLink
              smooth
              to="/#home"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.home")}
            </HashLink>

            <HashLink
              to="/#about"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.about")}
            </HashLink>
            <HashLink
              to="/#services"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.services")}
            </HashLink>
            <HashLink
              to="/#contact"
              className="interactive text-gray-700 hover:text-blue-800 transition-colors"
            >
              {t("nav.contact")}
            </HashLink>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div
            className={`hidden lg:flex items-center ${
              isRTL ? "flex-row-reverse space-x-reverse space-x-4" : "space-x-4"
            }`}
          >
            <LanguageToggle />
            <HashLink smooth to="/#contact">
              <button className="interactive bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                {t("nav.getQuote")}
              </button>
            </HashLink>
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
              <HashLink
                to="/#home"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </HashLink>
              <HashLink
                to="/#about"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </HashLink>
              <HashLink
                to="/#services"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </HashLink>
              <HashLink
                to="/#contact"
                className="interactive text-gray-700 hover:text-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </HashLink>
              <div
                className={`flex items-center gap-3 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <LanguageToggle />

                <HashLink to="/#contact" onClick={() => setIsMenuOpen(false)}>
                <button className="interactive bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                  {t("nav.getQuote")}
                </button>

                </HashLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

