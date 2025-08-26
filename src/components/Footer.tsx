import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-3 gap-5 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* About */}
          <div>
            <div
              className={`flex items-center mb-4 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <img src="/images/Logo.png" width={120} className="bg-white rounded-full" alt="Express International" />
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="interactive text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="interactive text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="interactive text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="interactive text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactInfo")}
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>+201194213227</p>
              <p>info@expressinternational-eg.com</p>
              <p>
               القاهرة ش الفريق محمود شكري خلف مسجد جمال عبدالناصر كوبري القبه
                <br />
                 الدور الثامن شقه 701
              </p>
            </div>
          </div>

          {/* Social Media */}
        
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
