import { useState, useEffect } from 'react';

export const useIntersectionObserver = (threshold: number = 0.8) => {
  const [visibleElements, setVisibleElements] = useState(new Set<string>());

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
      { threshold }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return visibleElements;
};

export default useIntersectionObserver;

