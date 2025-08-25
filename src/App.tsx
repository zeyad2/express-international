import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AirplaneCursor from './components/AirplaneCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Founder from './components/Founder';
import SeaFreightPage from './pages/SeaFreightPage';
import AirFreightPage from './pages/AirFreightPage';
import CustomsDocumentationPage from './pages/CustomsDocumentationPage';
import CustomsClearancePage from './pages/CustomsClearancePage';
import ImportOnBehalfPage from './pages/ImportOnBehalfPage';
import ExportersRegistryPage from './pages/ExportersRegistryPage';
import MedicalSuppliesRegistrationPage from './pages/MedicalSuppliesRegistrationPage';
import CosmeticsRegistrationPage from './pages/CosmeticsRegistrationPage';
import LabReagentsRegistrationPage from './pages/LabReagentsRegistrationPage';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './styles/animations.css';
import { useLanguage } from './contexts/LanguageContext';
import ProductsSection from './components/ProductsSection';
import Partners from './components/Partners';
import Certificates from './components/Certificates';

// Home Page Component
const HomePage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <AirplaneCursor />
      <Header />
      <Hero visibleElements={visibleElements} />
      <Services visibleElements={visibleElements}  />
      <Certificates visibleElements={visibleElements} />

      <About visibleElements={visibleElements} />
      <Partners visibleElements={visibleElements} />
      <ProductsSection visibleElements={visibleElements} />
      <Testimonials visibleElements={visibleElements} />
      <Contact visibleElements={visibleElements} />
      <CallToAction visibleElements={visibleElements} />
      <Founder visibleElements={visibleElements} />
      <Footer />
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/sea-freight" element={<SeaFreightPage />} />
        <Route path="/services/air-freight" element={<AirFreightPage />} />
        <Route path="/services/customs-documentation" element={<CustomsDocumentationPage />} />
        <Route path="/services/customs-clearance" element={<CustomsClearancePage />} />
        <Route path="/services/import-on-behalf" element={<ImportOnBehalfPage />} />
        <Route path="/services/exporters-registry" element={<ExportersRegistryPage />} />
        <Route path="/services/medical-supplies-registration" element={<MedicalSuppliesRegistrationPage />} />
        <Route path="/services/cosmetics-registration" element={<CosmeticsRegistrationPage />} />
        <Route path="/services/lab-reagents-registration" element={<LabReagentsRegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;