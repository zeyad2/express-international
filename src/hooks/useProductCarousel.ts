import { useState, useEffect, useCallback } from 'react';
import { CAROUSEL_CONFIG, RESPONSIVE_BREAKPOINTS } from '../data/products';

interface UseProductCarouselProps {
  totalProducts: number;
}

export const useProductCarousel = ({ totalProducts }: UseProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  // Calculate visible products for responsive design
  const getVisibleProducts = useCallback(() => {
    if (typeof window === 'undefined') return 2;
    const screenWidth = window.innerWidth;
    if (screenWidth >= RESPONSIVE_BREAKPOINTS.LARGE) return 4; // lg and above - show 4 cards
    if (screenWidth >= RESPONSIVE_BREAKPOINTS.MEDIUM) return 3;  // md - show 3 cards
    return 2; // sm and above - show 2 cards
  }, []);

  // Initialize visible count
  useEffect(() => {
    setVisibleCount(getVisibleProducts());
  }, [getVisibleProducts]);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleProducts();
      setVisibleCount(newVisibleCount);
      // Reset current index if it's out of bounds
      const maxIndex = Math.max(0, totalProducts - newVisibleCount);
      setCurrentIndex(prev => Math.min(prev, maxIndex));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleProducts, totalProducts]);

  // Auto-scroll functionality with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, totalProducts - visibleCount);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, CAROUSEL_CONFIG.AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [totalProducts, visibleCount]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, totalProducts - visibleCount);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  }, [totalProducts, visibleCount]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, totalProducts - visibleCount);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [totalProducts, visibleCount]);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex * visibleCount);
  }, [visibleCount]);

  // Calculate carousel metrics
  const maxSlides = Math.max(1, Math.ceil(totalProducts / visibleCount));
  const currentSlide = Math.floor(currentIndex / visibleCount);

  return {
    currentIndex,
    visibleCount,
    maxSlides,
    currentSlide,
    goToPrevious,
    goToNext,
    goToSlide
  };
};