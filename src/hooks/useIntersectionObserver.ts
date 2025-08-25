import { useState, useEffect } from 'react';

export const useIntersectionObserver = (threshold: number = 0.3) => {
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
      { 
        threshold: Math.min(threshold, 0.1),
        rootMargin: '50px 0px -10px 0px'
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        if (el.id) {
          observer.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);

  return visibleElements;
};

export default useIntersectionObserver;

