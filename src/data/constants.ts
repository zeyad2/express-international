// Service details data
export const serviceDetails = {
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
    stats: [
      { number: '500+', label: 'Ports Worldwide' },
      { number: '15,000', label: 'TEU Capacity' },
      { number: '99.2%', label: 'On-time Delivery' }
    ]
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
    stats: [
      { number: '200+', label: 'Airport Partners' },
      { number: '48hrs', label: 'Average Transit' },
      { number: '99.8%', label: 'Safe Delivery' }
    ]
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
    stats: [
      { number: '50+', label: 'Countries Covered' },
      { number: '24hrs', label: 'Clearance Time' },
      { number: '100%', label: 'Compliance Rate' }
    ]
  }
} as const;

// Testimonials data
export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "Global Tech Solutions",
    text: "Express International has been our trusted logistics partner for over 5 years. Their reliability and expertise have helped us expand our business globally.",
    rating: 5
  },
  {
    name: "د. عمرو عوني",
    company: "Bestradepharma",
    text: "شركة ذات مصداقية فى التعامل و سرعة فى التنفيذ و معاملات مالية موثوق فيها. شكرا جزيلا على انجازاتكم السابقة و نتطلع دائما للمزيد مستقبلا",
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



// Service types
export type ServiceType = keyof typeof serviceDetails;
