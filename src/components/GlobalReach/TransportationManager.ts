import * as THREE from 'three';

export interface RoutePoint {
  lat: number;
  lng: number;
  alt?: number;
}

export interface TransportRoute {
  id: string;
  name: string;
  points: RoutePoint[];
  type: 'air' | 'sea';
  speed: number; // km/h
  vehicles: number; // number of vehicles on this route
}

export interface Vehicle {
  id: string;
  routeId: string;
  type: 'airplane' | 'ship';
  position: RoutePoint;
  progress: number; // 0-1 along the route
  speed: number;
  object3D?: THREE.Object3D;
}

export class TransportationManager {
  private vehicles: Map<string, Vehicle> = new Map();
  private routes: Map<string, TransportRoute> = new Map();
  private animationFrame: number | null = null;
  private lastUpdateTime = 0;
  private performanceMode = false;
  private frameSkipCounter = 0;
  private readonly maxFrameSkip = 2; // Skip every 2nd frame in performance mode
  
  constructor() {
    this.update = this.update.bind(this);
    this.detectPerformanceMode();
  }
  
  // Auto-detect if we need performance optimizations
  private detectPerformanceMode(): void {
    // Simple heuristic: if we're on a mobile device or low-end device
    if (typeof navigator !== 'undefined') {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const hasLimitedMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      this.performanceMode = isMobile || hasLimitedMemory;
    }
  }

  addRoute(route: TransportRoute): void {
    this.routes.set(route.id, route);
    this.createVehiclesForRoute(route);
  }

  private createVehiclesForRoute(route: TransportRoute): void {
    const vehicleType = route.type === 'air' ? 'airplane' : 'ship';
    
    for (let i = 0; i < route.vehicles; i++) {
      const vehicleId = `${route.id}-${i}`;
      const vehicle: Vehicle = {
        id: vehicleId,
        routeId: route.id,
        type: vehicleType,
        position: { ...route.points[0] },
        progress: i / route.vehicles, // Evenly distribute vehicles along route
        speed: route.speed,
        object3D: undefined
      };
      
      this.vehicles.set(vehicleId, vehicle);
    }
  }

  getVehicles(): Vehicle[] {
    return Array.from(this.vehicles.values());
  }

  startAnimation(): void {
    if (this.animationFrame) return;
    this.lastUpdateTime = performance.now();
    this.update();
  }

  stopAnimation(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private update(): void {
    // Performance optimization: skip frames if in performance mode
    if (this.performanceMode) {
      this.frameSkipCounter++;
      if (this.frameSkipCounter < this.maxFrameSkip) {
        this.animationFrame = requestAnimationFrame(this.update);
        return;
      }
      this.frameSkipCounter = 0;
    }

    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastUpdateTime) / 1000; // Convert to seconds
    
    // Clamp deltaTime to prevent huge jumps (e.g., when tab is hidden)
    const clampedDeltaTime = Math.min(deltaTime, 0.1);
    this.lastUpdateTime = currentTime;

    // Update each vehicle's position with batched operations
    const vehicles = Array.from(this.vehicles.values());
    for (let i = 0; i < vehicles.length; i++) {
      this.updateVehiclePosition(vehicles[i], clampedDeltaTime);
    }

    this.animationFrame = requestAnimationFrame(this.update);
  }

  private updateVehiclePosition(vehicle: Vehicle, deltaTime: number): void {
    const route = this.routes.get(vehicle.routeId);
    if (!route) return;

    // Calculate distance traveled based on speed and time
    const earthCircumference = 40075; // km at equator
    const speedMultiplier = vehicle.type === 'airplane' ? 1.5 : 0.8; // Airplanes faster, ships slower
    const actualSpeed = vehicle.speed * speedMultiplier;
    
    // Convert speed to progress per second (very rough approximation)
    const progressPerSecond = (actualSpeed / earthCircumference) * 0.1;
    
    // Update progress
    vehicle.progress += progressPerSecond * deltaTime;
    if (vehicle.progress >= 1) {
      vehicle.progress = 0; // Loop back to start
    }

    // Calculate new position along route
    vehicle.position = this.interpolateAlongRoute(route.points, vehicle.progress);
  }

  private interpolateAlongRoute(points: RoutePoint[], progress: number): RoutePoint {
    if (points.length < 2) return points[0] || { lat: 0, lng: 0 };

    // Find which segment we're on
    const totalSegments = points.length - 1;
    const scaledProgress = progress * totalSegments;
    const segmentIndex = Math.floor(scaledProgress);
    const segmentProgress = scaledProgress - segmentIndex;

    // Handle edge cases
    if (segmentIndex >= totalSegments) {
      return points[points.length - 1];
    }

    const startPoint = points[segmentIndex];
    const endPoint = points[segmentIndex + 1];

    // Linear interpolation between points
    return {
      lat: this.lerp(startPoint.lat, endPoint.lat, segmentProgress),
      lng: this.lerp(startPoint.lng, endPoint.lng, segmentProgress),
      alt: this.lerp(startPoint.alt || 0, endPoint.alt || 0, segmentProgress)
    };
  }

  private lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }

  // Convert lat/lng to 3D coordinates for Three.js objects
  public latLngToVector3(lat: number, lng: number, altitude: number = 0, radius: number = 100): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const actualRadius = radius + altitude;

    const x = -(actualRadius * Math.sin(phi) * Math.cos(theta));
    const z = actualRadius * Math.sin(phi) * Math.sin(theta);
    const y = actualRadius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  }

  // Calculate rotation for vehicle to face movement direction
  public calculateVehicleRotation(vehicle: Vehicle): THREE.Euler {
    const route = this.routes.get(vehicle.routeId);
    if (!route || route.points.length < 2) {
      return new THREE.Euler(0, 0, 0);
    }

    // Get next position for direction calculation
    const futureProgress = Math.min(vehicle.progress + 0.01, 1);
    const currentPos = this.interpolateAlongRoute(route.points, vehicle.progress);
    const futurePos = this.interpolateAlongRoute(route.points, futureProgress);

    // Calculate direction vector
    const current3D = this.latLngToVector3(currentPos.lat, currentPos.lng, currentPos.alt || 0);
    const future3D = this.latLngToVector3(futurePos.lat, futurePos.lng, futurePos.alt || 0);
    
    const direction = future3D.clone().sub(current3D).normalize();
    
    // Convert direction to rotation
    const rotation = new THREE.Euler();
    rotation.setFromVector3(direction);
    
    return rotation;
  }

  cleanup(): void {
    this.stopAnimation();
    this.vehicles.clear();
    this.routes.clear();
  }
}