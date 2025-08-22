import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { TransportationManager, type TransportRoute, type Vehicle } from './TransportationManager';

interface HubCity {
  name: string;
  country: string;
  lat: number;
  lng: number;
  type: 'major' | 'minor';
}

interface Globe3DProps {
  isVisible: boolean;
}

const HUB_CITIES: HubCity[] = [
  { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737, type: 'major' },
  { name: 'Shenzhen', country: 'China', lat: 22.5431, lng: 114.0579, type: 'major' },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, type: 'major' },
  { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023, type: 'major' },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, type: 'major' },
  { name: 'Chennai', country: 'India', lat: 13.0827, lng: 80.2707, type: 'major' },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, type: 'major' },
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.5310, type: 'major' },
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, type: 'major' },
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, type: 'major' },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, type: 'major' },
  { name: 'Hong Kong', country: 'Hong Kong', lat: 22.3193, lng: 114.1694, type: 'major' },
];

const TRANSPORT_ROUTES: TransportRoute[] = [
  // Air routes - higher altitude, faster speed
  {
    id: 'air-asia-middle-east-1',
    name: 'East Asia to Middle East Corridor',
    type: 'air',
    speed: 900, // km/h
    vehicles: 3,
    points: [
      { lat: 31.2304, lng: 121.4737, alt: 0.3 }, // Shanghai
      { lat: 35.6762, lng: 139.6503, alt: 0.35 }, // Tokyo
      { lat: 25.2048, lng: 55.2708, alt: 0.3 }, // Dubai
      { lat: 30.0444, lng: 31.2357, alt: 0.3 }, // Cairo
      { lat: 31.2304, lng: 121.4737, alt: 0.3 }, // Back to Shanghai
    ]
  },
  {
    id: 'air-india-gulf',
    name: 'India to Gulf States',
    type: 'air',
    speed: 850,
    vehicles: 2,
    points: [
      { lat: 19.0760, lng: 72.8777, alt: 0.25 }, // Mumbai
      { lat: 13.0827, lng: 80.2707, alt: 0.25 }, // Chennai
      { lat: 25.2854, lng: 51.5310, alt: 0.25 }, // Doha
      { lat: 24.7136, lng: 46.6753, alt: 0.25 }, // Riyadh
      { lat: 19.0760, lng: 72.8777, alt: 0.25 }, // Back to Mumbai
    ]
  },
  {
    id: 'air-southeast-asia',
    name: 'Southeast Asia Network',
    type: 'air',
    speed: 800,
    vehicles: 2,
    points: [
      { lat: 1.3521, lng: 103.8198, alt: 0.2 }, // Singapore
      { lat: 22.3193, lng: 114.1694, alt: 0.25 }, // Hong Kong
      { lat: 34.6937, lng: 135.5023, alt: 0.3 }, // Osaka
      { lat: 1.3521, lng: 103.8198, alt: 0.2 }, // Back to Singapore
    ]
  },
  
  // Sea routes - lower altitude, slower speed
  {
    id: 'sea-suez-route',
    name: 'East Asia to Mediterranean via Suez',
    type: 'sea',
    speed: 25, // km/h (typical cargo ship speed)
    vehicles: 2,
    points: [
      { lat: 31.2304, lng: 121.4737, alt: 0.02 }, // Shanghai
      { lat: 22.3193, lng: 114.1694, alt: 0.02 }, // Hong Kong
      { lat: 1.3521, lng: 103.8198, alt: 0.02 }, // Singapore
      { lat: 8.7832, lng: 80.7718, alt: 0.02 }, // Sri Lanka (Colombo)
      { lat: 19.0760, lng: 72.8777, alt: 0.02 }, // Mumbai
      { lat: 25.2048, lng: 55.2708, alt: 0.02 }, // Dubai
      { lat: 29.9792, lng: 31.1342, alt: 0.02 }, // Suez Canal
      { lat: 31.2304, lng: 121.4737, alt: 0.02 }, // Back to Shanghai
    ]
  },
  {
    id: 'sea-persian-gulf',
    name: 'Persian Gulf Trade Route',
    type: 'sea',
    speed: 22,
    vehicles: 2,
    points: [
      { lat: 19.0760, lng: 72.8777, alt: 0.02 }, // Mumbai
      { lat: 25.2854, lng: 51.5310, alt: 0.02 }, // Doha
      { lat: 25.2048, lng: 55.2708, alt: 0.02 }, // Dubai
      { lat: 24.7136, lng: 46.6753, alt: 0.02 }, // Riyadh (via land connection)
      { lat: 19.0760, lng: 72.8777, alt: 0.02 }, // Back to Mumbai
    ]
  },
  {
    id: 'sea-indian-ocean',
    name: 'Indian Ocean Circuit',
    type: 'sea',
    speed: 24,
    vehicles: 1,
    points: [
      { lat: 1.3521, lng: 103.8198, alt: 0.02 }, // Singapore
      { lat: 13.0827, lng: 80.2707, alt: 0.02 }, // Chennai
      { lat: 19.0760, lng: 72.8777, alt: 0.02 }, // Mumbai
      { lat: 25.2048, lng: 55.2708, alt: 0.02 }, // Dubai
      { lat: 1.3521, lng: 103.8198, alt: 0.02 }, // Back to Singapore
    ]
  }
];

const Globe3D: React.FC<Globe3DProps> = ({ isVisible }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>();
  const transportManagerRef = useRef<TransportationManager>();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // Initialize transportation manager
  useEffect(() => {
    if (!transportManagerRef.current) {
      transportManagerRef.current = new TransportationManager();
      
      // Add all routes to the manager
      TRANSPORT_ROUTES.forEach(route => {
        transportManagerRef.current!.addRoute(route);
      });
    }

    return () => {
      if (transportManagerRef.current) {
        transportManagerRef.current.cleanup();
      }
    };
  }, []);

  // Set up globe configuration and start animations
  useEffect(() => {
    if (globeEl.current && isVisible && transportManagerRef.current) {
      // Configure globe controls for optimal viewing
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3; // Slower rotation for better UX
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.minDistance = 150; // Prevent getting too close
      controls.maxDistance = 800; // Prevent getting too far
      controls.maxPolarAngle = Math.PI * 0.9; // Limit vertical rotation
      
      // Set optimal camera position to center on trade regions
      globeEl.current.pointOfView({ 
        lat: 20,    // Latitude centered on Middle East/Asia trade corridor
        lng: 70,    // Longitude centered on India/Middle East
        altitude: 2.2 // Optimal viewing distance
      });

      // Start transportation animations
      transportManagerRef.current.startAnimation();

      // Update vehicle positions periodically for React
      const updateInterval = setInterval(() => {
        if (transportManagerRef.current) {
          const currentVehicles = transportManagerRef.current.getVehicles();
          setVehicles([...currentVehicles]);
        }
      }, 100); // Update every 100ms for smooth animation

      return () => {
        clearInterval(updateInterval);
        if (transportManagerRef.current) {
          transportManagerRef.current.stopAnimation();
        }
      };
    }
  }, [isVisible]);

  // Create very simple, highly visible airplane for debugging
  const createAirplane = useCallback(() => {
    // Create a bright red box that should be very visible
    const geometry = new THREE.BoxGeometry(10, 2, 5); // Much larger
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xff0000, // Bright red
      transparent: false
    });
    const airplane = new THREE.Mesh(geometry, material);
    
    console.log('Created airplane mesh:', airplane);
    return airplane;
  }, []);

  // Create very simple, highly visible ship for debugging
  const createShip = useCallback(() => {
    // Create a bright green box that should be very visible
    const geometry = new THREE.BoxGeometry(8, 3, 4); // Much larger
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00, // Bright green
      transparent: false
    });
    const ship = new THREE.Mesh(geometry, material);
    
    console.log('Created ship mesh:', ship);
    return ship;
  }, []);

  // Test static vehicles to ensure objects are working
  const staticTestVehicles = useMemo(() => [
    { id: 'test1', type: 'airplane', lat: 0, lng: 0, alt: 0.2 }, // Airplane at equator/prime meridian
    { id: 'test2', type: 'ship', lat: 0, lng: 90, alt: 0.2 }, // Ship at equator/90E
  ], []);

  // Memoized vehicle objects data for performance
  const vehicleObjectsData = useMemo(() => {
    // Always use static test vehicles for now to debug objects system
    console.log('Using static test vehicles for debugging');
    return staticTestVehicles;
    
    // TODO: Re-enable dynamic vehicles once objects are working
    // if (vehicles.length === 0) {
    //   return staticTestVehicles;
    // }
    // 
    // const data = vehicles.map(vehicle => ({
    //   vehicle,
    //   lat: vehicle.position.lat,
    //   lng: vehicle.position.lng,
    //   alt: (vehicle.position.alt || 0) * 10
    // }));
    // 
    // return data;
  }, [staticTestVehicles]);

  // Create 3D object for each vehicle - ultra simple for debugging
  const vehicleThreeObject = useCallback((d: any) => {
    console.log('vehicleThreeObject called with data:', d);
    
    // Create the simplest possible object - a bright sphere
    const geometry = new THREE.SphereGeometry(5, 8, 6); // Large sphere
    const material = new THREE.MeshBasicMaterial({ 
      color: d.type === 'airplane' ? 0xff0000 : 0x00ff00 // Red for airplane, green for ship
    });
    const mesh = new THREE.Mesh(geometry, material);
    
    console.log('Created simple sphere mesh:', mesh);
    return mesh;
  }, []);

  if (!isVisible) {
    return (
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-2xl border border-white/30 mb-12 flex items-center justify-center opacity-0 translate-y-8 transition-all duration-1000">
        <div className="text-gray-400">Loading Globe...</div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-2xl border border-white/30 mb-12 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
      <div className="w-full h-96 md:h-[500px]">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          // Hub cities as points with enhanced pulsing
          pointsData={HUB_CITIES}
          pointAltitude={0.02}
          pointColor={() => '#ef4444'}
          pointRadius={1.2}
          pointResolution={8}
          pointLabel={(d: HubCity) => `
            <div style="
              background: rgba(15, 23, 42, 0.95); 
              color: white; 
              padding: 8px 12px; 
              border-radius: 8px; 
              font-family: system-ui;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              border: 1px solid rgba(255,255,255,0.1);
              z-index: 1000;
            ">
              <div style="font-weight: 600; font-size: 12px; margin-bottom: 2px;">${d.name}</div>
              <div style="opacity: 0.7; font-size: 10px;">${d.country}</div>
            </div>
          `}
          onPointHover={() => {}}
          
          // Moving vehicles as 3D objects
          objectsData={vehicleObjectsData}
          objectLat="lat"
          objectLng="lng"
          objectAltitude="alt"
          objectThreeObject={vehicleThreeObject}
          
          // Show some route paths for reference
          pathsData={[
            { 
              coords: [[31.2304, 121.4737], [25.2048, 55.2708], [30.0444, 31.2357]], // Shanghai -> Dubai -> Cairo
              color: 'rgba(37, 99, 235, 0.3)'
            },
            { 
              coords: [[1.3521, 103.8198], [19.0760, 72.8777], [25.2048, 55.2708]], // Singapore -> Mumbai -> Dubai
              color: 'rgba(5, 150, 105, 0.3)'
            }
          ]}
          pathColor="color"
          pathStroke={2}
          pathAltitude={0.005}
          
          // Globe styling and atmosphere
          atmosphereColor="#60a5fa"
          atmosphereAltitude={0.15}
          
          // Performance optimizations
          rendererConfig={{
            antialias: true,
            alpha: true
          }}
          
          // Animation settings
          animateIn={true}
          width={undefined}
          height={undefined}
          
          // Disable some interactions for better performance
          enablePointerInteraction={true}
        />
      </div>
      
      {/* Enhanced styling for hub pulses */}
      <style jsx global>{`
        .globe-container .scene-tooltip {
          pointer-events: none;
          z-index: 1000;
        }
        
        .globe-viz-point {
          animation: hubPulse 3s ease-in-out infinite;
        }
        
        @keyframes hubPulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.8);
          }
        }
        
        /* Ensure vehicle objects are properly rendered */
        .globe-viz-object {
          pointer-events: none;
        }
        
        /* Prevent text selection for better UX */
        .globe-container {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default Globe3D;