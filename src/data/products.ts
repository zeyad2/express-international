export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'breastPump-1',
    name: 'Medical Breast Pump',
    description: 'Premium quality electric breast pump designed for comfort and efficiency, ideal for nursing mothers.',
    image: '/src/public/images/breastPump.jpeg',
    category: 'Medical Equipment'
  },
  {
    id: 'endoscope2-1',
    name: 'Flexible Endoscope',
    description: 'Ultra-flexible endoscope with superior maneuverability for complex diagnostic procedures.',
    image: '/src/public/images/endoscopy2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'medicalDevice1-1',
    name: 'Advanced Medical Device',
    description: 'State-of-the-art medical equipment designed for precision diagnostics and patient care.',
    image: '/src/public/images/download2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'strips-1',
    name: 'Medical Test Strips',
    description: 'High-precision diagnostic test strips for accurate medical testing and patient monitoring.',
    image: '/src/public/images/strips.jpg',
    category: 'Medical Equipment'
  },
  {
    id: 'strips-2',
    name: 'Diagnostic Test Strips',
    description: 'Professional-grade test strips for reliable medical diagnostics and health monitoring.',
    image: '/src/public/images/strips.jpg',
    category: 'Medical Equipment'
  },
  {
    id: 'medicalDevice1-2',
    name: 'Precision Medical Equipment',
    description: 'Advanced diagnostic equipment engineered for accurate medical assessments and patient monitoring.',
    image: '/src/public/images/download2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'breastPump-2',
    name: 'Electric Breast Pump',
    description: 'High-performance breast pump with adjustable settings for maximum comfort and efficiency.',
    image: '/src/public/images/breastPump.jpeg',
    category: 'Medical Equipment'
  },
  {
    id: 'endoscope2-2',
    name: 'Professional Endoscope',
    description: 'High-definition endoscopic system with advanced imaging technology for precise medical procedures.',
    image: '/src/public/images/endoscopy2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'medicalDevice1-3',
    name: 'Medical Diagnostic System',
    description: 'Comprehensive medical device for accurate patient diagnostics and clinical assessments.',
    image: '/src/public/images/download2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'strips-3',
    name: 'Clinical Test Strips',
    description: 'Highly accurate test strips for laboratory-grade medical testing and analysis.',
    image: '/src/public/images/strips.jpg',
    category: 'Medical Equipment'
  }
];

export const CAROUSEL_CONFIG = {
  AUTO_SCROLL_INTERVAL: 4000,
  TRANSITION_DURATION: 1000,
  ANIMATION_DELAY_INCREMENT: 100,
  STATS_ANIMATION_DELAY: 500
} as const;

export const RESPONSIVE_BREAKPOINTS = {
  LARGE: 1024,
  MEDIUM: 768
} as const;