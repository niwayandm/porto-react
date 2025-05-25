import { useState, useEffect, useCallback, useRef } from 'react';

export const useIntersectionObserver = (sections) => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('home');
  const lastUpdateTime = useRef(0);
  const debounceTimeout = useRef(null);

  const updateActiveSection = useCallback(() => {
    // Debounce the updates to prevent flickering
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const now = Date.now();
      if (now - lastUpdateTime.current < 100) return; // Throttle updates
      
      // Get all sections and their positions
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        return {
          id: section.id,
          element,
          rect,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      }).filter(Boolean);

      if (sectionElements.length === 0) return;

      // Find the section that is most prominently in view
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let bestSection = null;
      let bestScore = -1;

      sectionElements.forEach(section => {
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -section.top);
        const visibleBottom = Math.min(section.height, viewportHeight - section.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / section.height;

        // For very long sections (like portfolio), use a different approach
        const isLongSection = section.height > viewportHeight * 1.5;
        let score = 0;

        if (isLongSection) {
          // For long sections, prioritize if the top is in view or if we're scrolled into it
          const topInView = section.top <= viewportHeight * 0.3 && section.bottom > viewportHeight * 0.3;
          const scrolledInto = section.top < 0 && section.bottom > viewportHeight * 0.5;
          
          if (topInView || scrolledInto) {
            // Give high score if we're clearly in this long section
            score = 0.9;
          } else if (visibilityRatio > 0.1) {
            score = visibilityRatio * 0.5;
          }
        } else {
          // For normal sections, use the original logic but with lower threshold
          if (visibilityRatio < 0.15) return;

          // Calculate distance from viewport center
          const sectionCenter = section.top + section.height / 2;
          const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
          const maxDistance = viewportHeight;
          const centerScore = 1 - (distanceFromCenter / maxDistance);

          // Combine visibility and center proximity for final score
          score = (visibilityRatio * 0.7) + (centerScore * 0.3);
        }

        if (score > bestScore) {
          bestScore = score;
          bestSection = section;
        }
      });

      if (bestSection && bestSection.id !== activeSection) {
        setActiveSection(bestSection.id);
        lastUpdateTime.current = now;
      }
    }, 50); // 50ms debounce
  }, [sections, activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update visibility state
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });

        // Trigger active section update
        updateActiveSection();
      },
      { 
        threshold: [0, 0.2, 0.5, 0.8],
        rootMargin: '-5% 0px -5% 0px'
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Also listen to scroll events for more responsive updates
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [sections, updateActiveSection]);

  return { isVisible, activeSection };
};
