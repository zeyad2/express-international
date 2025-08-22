import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Ship } from 'lucide-react';

interface AnimatedVehicleProps {
  path: string;
  duration: number;
  delay: number;
  direction?: number;
  type: 'airplane' | 'ship';
}

const AnimatedVehicle: React.FC<AnimatedVehicleProps> = ({ 
  path, 
  duration, 
  delay, 
  direction = 0, 
  type 
}) => {
  const gradientId = type === 'airplane' ? 'airplaneGradient' : 'shipGradient';
  const repeatDelay = type === 'airplane' ? 2 : 3;
  const IconComponent = type === 'airplane' ? Plane : Ship;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.g
        animate={{
          offsetDistance: ["0%", "100%"]
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
          repeatDelay
        }}
        style={{
          offsetPath: `path('${path}')`,
          transformOrigin: 'center'
        }}
      >
        <g transform={`rotate(${direction})`}>
          <circle 
            r="6" 
            fill={`url(#${gradientId})`} 
            filter="url(#vehicleGlow)"
            stroke="white"
            strokeWidth="1"
          />
          <foreignObject x="-6" y="-6" width="12" height="12">
            <div className="w-3 h-3 flex items-center justify-center">
              <IconComponent className="w-2 h-2 text-white" />
            </div>
          </foreignObject>
        </g>
      </motion.g>
    </motion.g>
  );
};

export const AnimatedAirplane: React.FC<Omit<AnimatedVehicleProps, 'type'>> = (props) => (
  <AnimatedVehicle {...props} type="airplane" />
);

export const AnimatedShip: React.FC<Omit<AnimatedVehicleProps, 'type'>> = (props) => (
  <AnimatedVehicle {...props} type="ship" />
);

export default AnimatedVehicle;