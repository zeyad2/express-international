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
import SeaFreightPage from './pages/SeaFreightPage';
import AirFreightPage from './pages/AirFreightPage';
import CustomsDocumentationPage from './pages/CustomsDocumentationPage';
import CustomsClearancePage from './pages/CustomsClearancePage';
import ImportOnBehalfPage from './pages/ImportOnBehalfPage';
import ExportersRegistryPage from './pages/ExportersRegistryPage';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './styles/animations.css';
import { useLanguage } from './contexts/LanguageContext';
import ProductsSection from './components/ProductsSection';
import Partners from './components/Partners';
import GlobalReach from './components/GlobalReach';

// Home Page Component
const HomePage: React.FC = () => {
  const visibleElements = useIntersectionObserver(0.3);
  useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <AirplaneCursor />
      <Header />
      <Hero visibleElements={visibleElements} />
      <About visibleElements={visibleElements} />
      <Services visibleElements={visibleElements} />
      <Partners visibleElements={visibleElements} />
      <ProductsSection visibleElements={visibleElements} />
      <GlobalReach visibleElements={visibleElements} />
      <Testimonials visibleElements={visibleElements} />
      <Contact visibleElements={visibleElements} />
      <CallToAction visibleElements={visibleElements} />
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
      </Routes>
    </Router>
  );
};

export default App;