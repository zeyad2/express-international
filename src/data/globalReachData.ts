export interface Location {
  name: string;
  country: string;
  x: number;
  y: number;
  type: 'major' | 'minor';
}

export interface Route {
  name: string;
  path: string;
  duration: number;
  direction: number;
}

export interface StatItem {
  number: string;
  labelKey: string;
  iconName: 'Globe' | 'MapPin' | 'Plane' | 'Ship';
  color: string;
}

export const LOCATIONS: Location[] = [
  { name: 'Shanghai', country: 'China', x: 780, y: 170, type: 'major' },
  { name: 'Shenzhen', country: 'China', x: 770, y: 190, type: 'major' },
  { name: 'Mumbai', country: 'India', x: 650, y: 220, type: 'major' },
  { name: 'Chennai', country: 'India', x: 680, y: 240, type: 'major' },
  { name: 'Dubai', country: 'UAE', x: 590, y: 200, type: 'major' },
  { name: 'Doha', country: 'Qatar', x: 575, y: 205, type: 'major' },
  { name: 'Riyadh', country: 'Saudi Arabia', x: 555, y: 215, type: 'major' },
  { name: 'Cairo', country: 'Egypt', x: 490, y: 230, type: 'major' },
  { name: 'Singapore', country: 'Singapore', x: 730, y: 270, type: 'major' },
  { name: 'Hong Kong', country: 'Hong Kong', x: 765, y: 200, type: 'major' },
];

export const AIR_ROUTES: Route[] = [
  { 
    name: "Shanghai → Dubai",
    path: "M780,170 Q720,130 650,140 Q620,150 590,200", 
    duration: 6,
    direction: -15
  },
  { 
    name: "Mumbai → Doha",
    path: "M650,220 Q615,210 575,205", 
    duration: 4,
    direction: -10
  },
  { 
    name: "Shenzhen → Riyadh",
    path: "M770,190 Q680,160 600,180 Q580,190 555,215", 
    duration: 7,
    direction: -20
  },
  { 
    name: "Singapore → Cairo",
    path: "M730,270 Q650,250 580,240 Q540,235 490,230", 
    duration: 8,
    direction: -25
  },
  { 
    name: "Hong Kong → Dubai",
    path: "M765,200 Q680,170 630,180 Q610,190 590,200", 
    duration: 6,
    direction: -15
  },
];

export const SEA_ROUTES: Route[] = [
  { 
    name: "Shanghai → Dubai (via Strait of Malacca)",
    path: "M780,170 Q750,200 730,270 Q700,280 650,270 Q620,260 600,240 Q590,220 590,200", 
    duration: 18,
    direction: 0
  },
  { 
    name: "Mumbai → Dubai (Persian Gulf)",
    path: "M650,220 Q620,210 590,200", 
    duration: 12,
    direction: -10
  },
  { 
    name: "East Asia → Mediterranean (via Suez)",
    path: "M730,270 Q700,280 650,270 Q600,260 580,250 Q520,240 490,230 Q460,225 430,220", 
    duration: 22,
    direction: -5
  },
  { 
    name: "Singapore → Red Sea",
    path: "M730,270 Q680,260 630,250 Q600,245 580,240 Q560,235 540,232", 
    duration: 16,
    direction: -8
  },
];

export const GLOBAL_STATS: StatItem[] = [
  { number: '50+', labelKey: 'global.countries', iconName: 'Globe', color: 'from-blue-500 to-cyan-500' },
  { number: '200+', labelKey: 'global.cities', iconName: 'MapPin', color: 'from-purple-500 to-pink-500' },
  { number: '24/7', labelKey: 'global.operations', iconName: 'Plane', color: 'from-orange-500 to-red-500' },
  { number: '99.9%', labelKey: 'global.reliability', iconName: 'Ship', color: 'from-green-500 to-emerald-500' },
];