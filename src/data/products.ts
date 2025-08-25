export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'kn95-mask-1',
    name: 'KN95 Valve Mask',
    description: 'High-filtration KN95 respirator mask with breathing valve for enhanced comfort and protection.',
    image: '/images/mask.png',
    category: 'Medical Equipment'
  },
  {
    id: 'elbow-crutch-1',
    name: 'Elbow Crutch',
    description: 'Lightweight aluminum elbow crutch with ergonomic design for mobility assistance and rehabilitation.',
    image: '/images/elbow-crutch.png',
    category: 'Medical Equipment'
  },
  {
    id: 'wheelchair-1',
    name: 'Medical Wheelchair',
    description: 'Professional-grade wheelchair with adjustable features for patient comfort and mobility.',
    image: '/images/wheelchair.png',
    category: 'Medical Equipment'
  },
  {
    id: 'dental-implant-1',
    name: 'Dental Implants',
    description: 'Premium titanium dental implants for tooth replacement and oral rehabilitation procedures.',
    image: '/images/implant.png',
    category: 'Medical Equipment'
  },
  {
    id: 'endoscope2-1',
    name: 'Flexible Endoscope',
    description: 'Ultra-flexible endoscope with superior maneuverability for complex diagnostic procedures.',
    image: '/images/endoscopy2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'medicalDevice1-1',
    name: 'Advanced Medical Device',
    description: 'State-of-the-art medical equipment designed for precision diagnostics and patient care.',
    image: '/images/download2.png',
    category: 'Medical Equipment'
  },
  {
    id: 'strips-1',
    name: 'Medical Test Strips',
    description: 'High-precision diagnostic test strips for accurate medical testing and patient monitoring.',
    image: '/images/strips.jpg',
    category: 'Medical Equipment'
  },
  {
    id: 'breastPump-1',
    name: 'Medical Breast Pump',
    description: 'Premium quality electric breast pump designed for comfort and efficiency, ideal for nursing mothers.',
    image: '/images/breastPump.jpeg',
    category: 'Medical Equipment'
  },
  {
    id: 'kn95-mask-2',
    name: 'KN95 Protective Mask',
    description: 'Multi-layer filtration KN95 mask with valve for superior respiratory protection.',
    image: '/images/mask-2.jpg',
    category: 'Medical Equipment'
  },
  {
    id: 'wheelchair-2',
    name: 'Transport Wheelchair',
    description: 'Wheelchair Toilet For The Elderly And The Disabled.',
    image: '/images/wheelchair2.png',
    category: 'Medical Equipment'
  }
];;;

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