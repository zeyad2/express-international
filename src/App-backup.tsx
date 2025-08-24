import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Ship, 
  Plane, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  Globe,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Custom airplane cursor component
const AirplaneCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{ 
        left: position.x - 12, 
        top: position.y - 12,
        transform: 'rotate(-45deg)'
      }}
    >
      <Plane className="w-6 h-6 text-blue-800 drop-shadow-lg" />
    </div>
  );
};

// Service Detail Page Component
const ServiceDetailPage = ({ service, onBack }: { service: any, onBack: () => void }) => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.8 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const serviceDetails = {
    'Sea Freight': {
      title: 'Sea Freight Services',
      description: 'Comprehensive ocean shipping solutions for businesses of all sizes',
      features: [
        'Full Container Load (FCL) services',
        'Less than Container Load (LCL) consolidation',
        'Door-to-door delivery options',
        'Real-time cargo tracking',
        'Customs clearance assistance',
        'Insurance coverage options'
      ],
      benefits: [
        'Cost-effective for large shipments',
        'Environmentally friendly transport',
        'Global port network coverage',
        'Flexible scheduling options'
      ],
    },
    'Air Freight': {
      title: 'Air Freight Services',
      description: 'Fast and reliable air cargo solutions for time-sensitive shipments',
      features: [
        'Express air freight services',
        'Standard air cargo options',
        'Temperature-controlled transport',
        'Dangerous goods handling',
        'Charter flight arrangements',
        '24/7 tracking and monitoring'
      ],
      benefits: [
        'Fastest delivery times',
        'High security standards',
        'Global airport network',
        'Priority handling available'
      ],
    },
    'Customs & Documentation': {
      title: 'Customs & Documentation',
      description: 'Expert customs clearance and documentation services',
      features: [
        'Import/export documentation',
        'Customs clearance processing',
        'Duty and tax calculations',
        'Compliance consulting',
        'Certificate of origin services',
        'Trade agreement utilization'
      ],
      benefits: [
        'Reduced clearance times',
        'Compliance assurance',
        'Cost optimization',
        'Expert guidance'
      ],
    }
  };

  const currentService = serviceDetails[service as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="interactive mr-4 p-2 text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center">
                <Plane className="w-8 h-8 text-blue-800 mr-3" />
                <span className="text-2xl font-bold text-blue-800">Express International</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="hero-content"
            data-animate
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('hero-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl font-bold mb-6">{currentService.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="features-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('features-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Features</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.features.map((feature, index) => (
              <div 
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`bg-gray-50 p-6 rounded-lg transition-all duration-1000 ${
                  visibleElements.has(`feature-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="benefits-content"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('benefits-content') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h2>
              <div className="space-y-4">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="cta-content"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss your shipping requirements and get a customized quote.
            </p>
            <button className="interactive bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Quote Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [counters, setCounters] = useState({ years: 0, countries: 0, tons: 0 });
  const [currentService, setCurrentService] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Handle service detail navigation
  const handleServiceClick = (serviceName: string) => {
    setCurrentService(serviceName);
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setCurrentService(null);
    window.scrollTo(0, 0);
  };

  // Show service detail page if a service is selected
  if (currentService) {
    return (
      <>
        <ServiceDetailPage service={currentService} onBack={handleBackToMain} />
        <AirplaneCursor />
      </>
    );
  }

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          } else {
            // Remove from visible elements when out of view to allow re-triggering
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.8 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animated counters
  useEffect(() => {
    if (visibleElements.has('about-counters')) {
      const animateCounter = (target: number, setter: (value: number) => void) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(current));
          }
        }, 30);
      };

      // Reset counters first
      setCounters({ years: 0, countries: 0, tons: 0 });
      
      // Animate each counter
      setTimeout(() => animateCounter(25, (value) => setCounters(prev => ({ ...prev, years: value }))), 200);
      setTimeout(() => animateCounter(50, (value) => setCounters(prev => ({ ...prev, countries: value }))), 400);
      setTimeout(() => animateCounter(100000, (value) => setCounters(prev => ({ ...prev, tons: value }))), 600);
    }
  }, [visibleElements]);

  // Testimonial carousel
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Tech Solutions",
      text: "Express International has been our trusted logistics partner for over 5 years. Their reliability and expertise have helped us expand our business globally.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Pacific Imports",
      text: "Outstanding service and competitive rates. The team always goes above and beyond to ensure our shipments arrive on time and in perfect condition.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "European Exports Ltd",
      text: "Professional, efficient, and trustworthy. Express International handles all our complex shipping requirements with ease and expertise.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AirplaneCursor />
      
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Plane className="w-8 h-8 text-blue-800 mr-3" />
              <span className="text-2xl font-bold text-blue-800">Express International</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Home</a>
              <a href="#about" className="interactive text-gray-700 hover:text-blue-800 transition-colors">About</a>
              <a href="#services" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Services</a>
              <a href="#global-reach" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Global Reach</a>
              <a href="#contact" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <button className="interactive hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="interactive md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Home</a>
                <a href="#about" className="interactive text-gray-700 hover:text-blue-800 transition-colors">About</a>
                <a href="#services" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Services</a>
                <a href="#global-reach" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Global Reach</a>
                <a href="#contact" className="interactive text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
                <button className="interactive bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                  Get a Quote
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced World Map */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 600">
            {/* Ocean Background */}
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
              </linearGradient>
              <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 Q10,5 20,10 T40,10" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.3" />
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#oceanGradient)" />
            <rect width="100%" height="100%" fill="url(#waves)" />
            
            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="60" height="30" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Continents with realistic shapes */}
            {/* North America */}
            <path d="M150,120 Q180,100 220,110 L280,130 Q300,140 320,160 L340,180 Q350,200 340,220 L320,240 Q300,250 280,240 L240,230 Q200,220 180,200 L160,180 Q140,150 150,120 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
            
            {/* South America */}
            <path d="M280,280 Q300,270 320,280 L340,300 Q350,320 345,340 L340,380 Q335,420 330,450 L325,480 Q320,500 310,510 L300,520 Q290,525 280,520 L270,510 Q260,500 265,480 L270,450 Q275,420 280,380 L285,340 Q290,320 285,300 L280,280 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
            
            {/* Europe */}
            <path d="M480,140 Q500,130 520,135 L540,140 Q560,145 570,160 L575,180 Q570,200 560,210 L540,220 Q520,225 500,220 L480,215 Q460,210 455,195 L450,180 Q455,165 470,150 L480,140 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
            
            {/* Africa */}
            <path d="M480,240 Q500,230 520,235 L540,245 Q560,255 570,275 L580,300 Q585,330 580,360 L575,390 Q570,420 565,440 L560,460 Q550,480 540,490 L520,500 Q500,505 480,500 L460,495 Q440,485 435,465 L430,440 Q435,420 440,390 L445,360 Q450,330 455,300 L460,275 Q470,255 480,240 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
            
            {/* Asia */}
            <path d="M600,120 Q650,110 700,120 L780,140 Q820,150 860,170 L900,190 Q920,210 915,230 L910,250 Q900,270 880,280 L840,290 Q800,295 760,290 L720,285 Q680,280 650,270 L620,260 Q590,245 585,225 L580,205 Q585,185 600,165 L610,145 Q615,130 600,120 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>
            
            {/* Australia */}
            <path d="M780,380 Q820,370 860,375 L900,385 Q920,395 925,415 L920,435 Q910,450 890,455 L860,460 Q820,465 780,460 L750,455 Q730,445 735,425 L740,405 Q750,390 780,380 Z" 
                  fill="#1E40AF" opacity="0.3" stroke="#1E40AF" strokeWidth="1"/>

            {/* Animated Flight Paths */}
            <defs>
              <path id="route1" d="M200,200 Q400,150 600,180" />
              <path id="route2" d="M300,300 Q600,250 800,280" />
              <path id="route3" d="M500,200 Q650,180 800,200" />
            </defs>
            
            {/* Dashed route lines with animation */}
            <path d="M200,200 Q400,150 600,180" stroke="#DC2626" strokeWidth="2" fill="none" 
                  strokeDasharray="10,5" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;-15" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M300,300 Q600,250 800,280" stroke="#DC2626" strokeWidth="2" fill="none" 
                  strokeDasharray="10,5" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;-15" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <path d="M500,200 Q650,180 800,200" stroke="#DC2626" strokeWidth="2" fill="none" 
                  strokeDasharray="10,5" opacity="0.6">
              <animate attributeName="stroke-dashoffset" values="0;-15" dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>

          {/* 3D Animated Airplane */}
          <div className="absolute inset-0">
            <div className="airplane-container">
              <svg className="airplane-3d" width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <filter id="planeShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
                  </filter>
                </defs>
                
                {/* Airplane body */}
                <ellipse cx="40" cy="40" rx="25" ry="8" fill="url(#planeGradient)" filter="url(#planeShadow)" />
                
                {/* Wings */}
                <ellipse cx="40" cy="40" rx="35" ry="4" fill="url(#planeGradient)" opacity="0.8" />
                
                {/* Tail */}
                <path d="M15,40 L10,35 L10,45 Z" fill="url(#planeGradient)" />
                
                {/* Propeller */}
                <g className="propeller">
                  <circle cx="65" cy="40" r="3" fill="#DC2626" />
                  <line x1="62" y1="40" x2="68" y2="40" stroke="#DC2626" strokeWidth="1" />
                  <line x1="65" y1="37" x2="65" y2="43" stroke="#DC2626" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Globe className="w-8 h-8 text-blue-800" />
            </div>
          </div>
          
          <div className="absolute top-40 right-32 animate-float-delayed">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Ship className="w-6 h-6 text-blue-800" />
            </div>
          </div>

          {/* Animated Clouds */}
          <div className="absolute top-16 left-1/4 animate-drift">
            <svg width="100" height="60" viewBox="0 0 100 60">
              <path d="M20,40 Q10,30 20,20 Q30,10 40,20 Q50,10 60,20 Q70,10 80,20 Q90,30 80,40 Z" 
                    fill="white" opacity="0.6" />
            </svg>
          </div>
          
          <div className="absolute top-32 right-1/3 animate-drift-slow">
            <svg width="80" height="50" viewBox="0 0 80 50">
              <path d="M15,35 Q8,25 15,15 Q25,8 35,15 Q45,8 55,15 Q65,25 55,35 Z" 
                    fill="white" opacity="0.4" />
            </svg>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div 
            id="hero-content"
            data-animate
            className={`text-center transition-all duration-1000 ${
              visibleElements.has('hero-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Connecting Your Business
              <span className="block text-blue-800">to the World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Reliable exporting solutions tailored to your needs with Express International
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="interactive bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get a Quote
              </button>
              <button className="interactive bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-content') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-8">
                Express International is a leading global logistics company dedicated to connecting businesses 
                worldwide through reliable, efficient, and cost-effective shipping solutions. With over two 
                decades of experience, we've built a reputation for excellence in international trade and logistics.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to simplify global commerce by providing comprehensive export services that 
                enable businesses of all sizes to reach new markets and achieve their international growth objectives.
              </p>
            </div>

            {/* Illustration */}
            <div 
              id="about-illustration"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('about-illustration') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <svg className="w-full h-64" viewBox="0 0 400 300">
                  {/* Global network illustration */}
                  <circle cx="200" cy="150" r="80" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5">
                    <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="20s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="200" cy="150" r="50" fill="#1E40AF" opacity="0.1" />
                  
                  {/* Connection points */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const x = 200 + 80 * Math.cos(angle);
                    const y = 150 + 80 * Math.sin(angle);
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="6" fill="#DC2626">
                          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`}/>
                        </circle>
                        <line x1="200" y1="150" x2={x} y2={y} stroke="#3B82F6" strokeWidth="1" opacity="0.5"/>
                      </g>
                    );
                  })}
                  
                  <circle cx="200" cy="150" r="8" fill="#1E40AF" />
                </svg>
              </div>
            </div>
          </div>

          {/* Animated Counters */}
          <div 
            id="about-counters"
            data-animate
            className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
              visibleElements.has('about-counters') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">{counters.years}+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">{counters.countries}+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">{counters.tons.toLocaleString()}+</div>
              <div className="text-gray-600">Tons Exported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('services-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive logistics solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sea Freight */}
            <div 
              id="service-1"
              data-animate
              className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
                visibleElements.has('service-1') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Ship className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sea Freight</h3>
                <p className="text-gray-600 mb-6">
                  Cost-effective ocean shipping solutions for large cargo volumes with reliable delivery times.
                </p>
                <button 
                  onClick={() => handleServiceClick('Sea Freight')}
                  className="interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Air Freight */}
            <div 
              id="service-2"
              data-animate
              className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
                visibleElements.has('service-2') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Plane className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Air Freight</h3>
                <p className="text-gray-600 mb-6">
                  Fast and secure air cargo services for time-sensitive shipments worldwide.
                </p>
                <button 
                  onClick={() => handleServiceClick('Air Freight')}
                  className="interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Customs & Documentation */}
            <div 
              id="service-3"
              data-animate
              className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group ${
                visibleElements.has('service-3') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customs & Documentation</h3>
                <p className="text-gray-600 mb-6">
                  Expert customs clearance and documentation services to ensure smooth international trade.
                </p>
                <button 
                  onClick={() => handleServiceClick('Customs & Documentation')}
                  className="interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global-reach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="global-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('global-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exporting to Over 50 Countries Worldwide</h2>
            <p className="text-xl text-gray-600">Our global network ensures your cargo reaches any destination</p>
          </div>

          <div 
            id="world-map"
            data-animate
            className={`relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-1000 ${
              visibleElements.has('world-map') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Enhanced World Map */}
            <svg className="w-full h-96" viewBox="0 0 1200 600">
              {/* Ocean Background with waves */}
              <defs>
                <linearGradient id="oceanBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
                </linearGradient>
                <pattern id="wavePattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0,10 Q10,5 20,10 T40,10" stroke="#3B82F6" strokeWidth="0.5" fill="none" opacity="0.3" />
                </pattern>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#oceanBg)" />
              <rect width="100%" height="100%" fill="url(#wavePattern)" />

              {/* Detailed Continents */}
              {/* North America with geographic features */}
              <g id="north-america">
                <path d="M150,120 Q180,100 220,110 L280,130 Q300,140 320,160 L340,180 Q350,200 340,220 L320,240 Q300,250 280,240 L240,230 Q200,220 180,200 L160,180 Q140,150 150,120 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* Rocky Mountains */}
                <path d="M200,150 L210,140 L220,150 L230,140 L240,150" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.7"/>
                {/* Great Lakes */}
                <circle cx="260" cy="170" r="8" fill="#3B82F6" opacity="0.8"/>
                <circle cx="270" cy="175" r="6" fill="#3B82F6" opacity="0.8"/>
              </g>

              {/* South America with Amazon and Andes */}
              <g id="south-america">
                <path d="M280,280 Q300,270 320,280 L340,300 Q350,320 345,340 L340,380 Q335,420 330,450 L325,480 Q320,500 310,510 L300,520 Q290,525 280,520 L270,510 Q260,500 265,480 L270,450 Q275,420 280,380 L285,340 Q290,320 285,300 L280,280 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* Andes Mountains */}
                <path d="M275,300 L275,480" stroke="#8B5CF6" strokeWidth="3" opacity="0.7"/>
                {/* Amazon Basin */}
                <circle cx="300" cy="350" r="25" fill="#10B981" opacity="0.4"/>
              </g>

              {/* Europe */}
              <g id="europe">
                <path d="M480,140 Q500,130 520,135 L540,140 Q560,145 570,160 L575,180 Q570,200 560,210 L540,220 Q520,225 500,220 L480,215 Q460,210 455,195 L450,180 Q455,165 470,150 L480,140 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* British Isles */}
                <circle cx="460" cy="150" r="8" fill="#22C55E" opacity="0.8"/>
              </g>

              {/* Africa with Sahara */}
              <g id="africa">
                <path d="M480,240 Q500,230 520,235 L540,245 Q560,255 570,275 L580,300 Q585,330 580,360 L575,390 Q570,420 565,440 L560,460 Q550,480 540,490 L520,500 Q500,505 480,500 L460,495 Q440,485 435,465 L430,440 Q435,420 440,390 L445,360 Q450,330 455,300 L460,275 Q470,255 480,240 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* Sahara Desert */}
                <ellipse cx="520" cy="280" rx="40" ry="20" fill="#F59E0B" opacity="0.4"/>
                {/* Nile River */}
                <path d="M560,280 Q565,320 570,360 Q575,400 580,440" stroke="#3B82F6" strokeWidth="2" opacity="0.8"/>
              </g>

              {/* Asia with Himalayas */}
              <g id="asia">
                <path d="M600,120 Q650,110 700,120 L780,140 Q820,150 860,170 L900,190 Q920,210 915,230 L910,250 Q900,270 880,280 L840,290 Q800,295 760,290 L720,285 Q680,280 650,270 L620,260 Q590,245 585,225 L580,205 Q585,185 600,165 L610,145 Q615,130 600,120 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* Himalayas */}
                <path d="M680,200 L700,190 L720,200 L740,190 L760,200" stroke="#8B5CF6" strokeWidth="3" opacity="0.7"/>
                {/* Japan */}
                <ellipse cx="880" cy="180" rx="15" ry="8" fill="#22C55E" opacity="0.8"/>
                {/* Philippines */}
                <circle cx="840" cy="260" r="6" fill="#22C55E" opacity="0.8"/>
                <circle cx="845" cy="270" r="4" fill="#22C55E" opacity="0.8"/>
              </g>

              {/* Australia and New Zealand */}
              <g id="oceania">
                <path d="M780,380 Q820,370 860,375 L900,385 Q920,395 925,415 L920,435 Q910,450 890,455 L860,460 Q820,465 780,460 L750,455 Q730,445 735,425 L740,405 Q750,390 780,380 Z" 
                      fill="#22C55E" opacity="0.6" stroke="#16A34A" strokeWidth="2"/>
                {/* New Zealand */}
                <ellipse cx="950" cy="450" rx="8" ry="15" fill="#22C55E" opacity="0.8"/>
              </g>

              {/* Major Cities with Enhanced Pins */}
              {[
                { name: 'New York', x: 250, y: 180 },
                { name: 'São Paulo', x: 310, y: 380 },
                { name: 'London', x: 480, y: 160 },
                { name: 'Lagos', x: 480, y: 320 },
                { name: 'Shanghai', x: 800, y: 220 },
                { name: 'Sydney', x: 860, y: 420 },
                { name: 'Dubai', x: 620, y: 260 }, // Corrected position - inland UAE
                { name: 'Tokyo', x: 880, y: 180 }
              ].map((city, index) => (
                <g key={city.name} 
                   className={`transition-all duration-500 ${
                     visibleElements.has('world-map') 
                       ? 'opacity-100 translate-y-0' 
                       : 'opacity-0 translate-y-4'
                   }`}
                   style={{ transitionDelay: `${index * 300}ms` }}>
                  {/* Pulsing rings */}
                  <circle cx={city.x} cy={city.y} r="15" fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.6">
                    <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
                  </circle>
                  <circle cx={city.x} cy={city.y} r="8" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" begin={`${index * 0.3 + 0.5}s`}/>
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" begin={`${index * 0.3 + 0.5}s`}/>
                  </circle>
                  
                  {/* Location pin */}
                  <g transform={`translate(${city.x}, ${city.y})`}>
                    <circle r="6" fill="#DC2626" stroke="white" strokeWidth="2"/>
                    <circle r="3" fill="white"/>
                  </g>
                  
                  {/* City label */}
                  <text x={city.x} y={city.y - 15} textAnchor="middle" className="text-xs font-semibold fill-gray-800" 
                        style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
                    {city.name}
                  </text>
                </g>
              ))}

              {/* Animated Planes */}
              <g className={`transition-all duration-1000 ${
                visibleElements.has('world-map') ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Plane 1: Trans-Atlantic */}
                <g className="animate-plane-1">
                  <path d="M250,180 Q400,150 480,160" id="route-1" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#route-1"/>
                    </animateMotion>
                    <path d="M-8,-2 L8,0 L-8,2 L-4,0 Z" fill="#1E40AF"/>
                    <circle cx="0" cy="0" r="1" fill="#DC2626"/>
                  </g>
                </g>

                {/* Plane 2: Trans-Pacific */}
                <g className="animate-plane-2">
                  <path d="M800,220 Q600,200 250,180" id="route-2" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#route-2"/>
                    </animateMotion>
                    <path d="M-8,-2 L8,0 L-8,2 L-4,0 Z" fill="#DC2626"/>
                    <circle cx="0" cy="0" r="1" fill="#1E40AF"/>
                  </g>
                </g>

                {/* Plane 3: Europe-Asia */}
                <g className="animate-plane-3">
                  <path d="M480,160 Q600,180 800,220" id="route-3" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#route-3"/>
                    </animateMotion>
                    <path d="M-8,-2 L8,0 L-8,2 L-4,0 Z" fill="#22C55E"/>
                    <circle cx="0" cy="0" r="1" fill="#DC2626"/>
                  </g>
                </g>
              </g>

              {/* Animated Ships */}
              <g className={`transition-all duration-1000 ${
                visibleElements.has('world-map') ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Ship 1: Atlantic */}
                <g className="animate-ship-1">
                  <path d="M250,200 Q350,220 480,240" id="ship-route-1" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="15s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#ship-route-1"/>
                    </animateMotion>
                    <rect x="-6" y="-2" width="12" height="4" fill="#1E40AF" rx="1"/>
                    <rect x="-4" y="-4" width="2" height="2" fill="#DC2626"/>
                    <rect x="0" y="-4" width="2" height="2" fill="#DC2626"/>
                  </g>
                </g>

                {/* Ship 2: Pacific */}
                <g className="animate-ship-2">
                  <path d="M800,240 Q600,260 400,280" id="ship-route-2" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#ship-route-2"/>
                    </animateMotion>
                    <rect x="-6" y="-2" width="12" height="4" fill="#22C55E" rx="1"/>
                    <rect x="-4" y="-4" width="2" height="2" fill="#DC2626"/>
                    <rect x="0" y="-4" width="2" height="2" fill="#DC2626"/>
                  </g>
                </g>

                {/* Ship 3: Indian Ocean */}
                <g className="animate-ship-3">
                  <path d="M620,280 Q700,300 780,320" id="ship-route-3" fill="none" stroke="none"/>
                  <g>
                    <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#ship-route-3"/>
                    </animateMotion>
                    <rect x="-6" y="-2" width="12" height="4" fill="#8B5CF6" rx="1"/>
                    <rect x="-4" y="-4" width="2" height="2" fill="#DC2626"/>
                    <rect x="0" y="-4" width="2" height="2" fill="#DC2626"/>
                  </g>
                </g>
              </g>

              {/* Floating Containers */}
              <g className={`transition-all duration-1000 ${
                visibleElements.has('world-map') ? 'opacity-100' : 'opacity-0'
              }`}>
                {[
                  { x: 100, color: '#DC2626', delay: '0s' },
                  { x: 200, color: '#1E40AF', delay: '2s' },
                  { x: 300, color: '#22C55E', delay: '4s' },
                  { x: 400, color: '#8B5CF6', delay: '6s' }
                ].map((container, index) => (
                  <g key={index} className="animate-float">
                    <rect x={container.x} y="550" width="20" height="12" fill={container.color} rx="2" opacity="0.8">
                      <animateTransform 
                        attributeName="transform" 
                        type="translate" 
                        values="0,0;800,0;0,0" 
                        dur="20s" 
                        repeatCount="indefinite"
                        begin={container.delay}
                      />
                    </rect>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('testimonials-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
          </div>

          <div 
            id="testimonials-carousel"
            data-animate
            className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has('testimonials-carousel') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-800' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="interactive absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              className="interactive absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="contact-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('contact-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our logistics experts</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              id="contact-form"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('contact-form') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>Select a service</option>
                      <option>Sea Freight</option>
                      <option>Air Freight</option>
                      <option>Customs & Documentation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your shipping requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="interactive w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div 
              id="contact-info"
              data-animate
              className={`transition-all duration-1000 ${
                visibleElements.has('contact-info') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-blue-800 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  </div>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-blue-800 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  </div>
                  <p className="text-gray-600">info@expressinternational.com</p>
                  <p className="text-gray-600">quotes@expressinternational.com</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-800 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  </div>
                  <p className="text-gray-600">
                    123 Logistics Boulevard<br />
                    International Trade Center<br />
                    New York, NY 10001
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-blue-800 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                  </div>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Express International?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Real-time tracking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Competitive pricing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Global network coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="cta-content"
            data-animate
            className={`transition-all duration-1000 ${
              visibleElements.has('cta-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Get Your Products Moving</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to expand your business globally? Contact Express International today for a customized shipping solution.
            </p>
            <button className="interactive bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center mb-4">
                <Plane className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-xl font-bold">Express International</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for global logistics and export solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="interactive text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="interactive text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="interactive text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="interactive text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+1 (555) 123-4567</p>
                <p>info@expressinternational.com</p>
                <p>123 Logistics Boulevard<br />New York, NY 10001</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="interactive w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="interactive w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="interactive w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Express International. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .airplane-container {
          position: absolute;
          top: 20%;
          left: -80px;
          animation: flyAcross 20s linear infinite;
        }

        .airplane-3d {
          filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
          transform-style: preserve-3d;
        }

        .propeller {
          animation: spin 0.1s linear infinite;
          transform-origin: 65px 40px;
        }

        @keyframes flyAcross {
          0% {
            left: -80px;
            top: 20%;
            transform: rotate(-10deg) scale(0.8);
          }
          25% {
            top: 15%;
            transform: rotate(5deg) scale(1);
          }
          50% {
            top: 25%;
            transform: rotate(-5deg) scale(1.1);
          }
          75% {
            top: 18%;
            transform: rotate(3deg) scale(1);
          }
          100% {
            left: calc(100% + 80px);
            top: 22%;
            transform: rotate(-8deg) scale(0.9);
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }

        .animate-drift {
          animation: drift 15s linear infinite;
        }

        .animate-drift-slow {
          animation: drift 20s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes drift {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }

        .interactive {
          cursor: none;
        }

        .interactive:hover {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default App;
