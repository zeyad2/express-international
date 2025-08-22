import { useState, useEffect } from 'react';

interface Counters {
  years: number;
  countries: number;
  tons: number;
}

export const useAnimatedCounters = (visibleElements: Set<string>, triggerId: string) => {
  const [counters, setCounters] = useState<Counters>({ years: 0, countries: 0, tons: 0 });

  useEffect(() => {
    if (visibleElements.has(triggerId)) {
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
      
      // Animate each counter with delays
      setTimeout(() => animateCounter(25, (value) => setCounters(prev => ({ ...prev, years: value }))), 200);
      setTimeout(() => animateCounter(50, (value) => setCounters(prev => ({ ...prev, countries: value }))), 400);
      setTimeout(() => animateCounter(100000, (value) => setCounters(prev => ({ ...prev, tons: value }))), 600);
    }
  }, [visibleElements, triggerId]);

  return counters;
};

export default useAnimatedCounters;

