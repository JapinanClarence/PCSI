import React, { useRef, useEffect, useState } from "react";

export const ParallaxScroll = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, (scrollTop - elementTop + viewportHeight) / (elementHeight + viewportHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children.map((child, index) => {
        // 1st and 3rd columns (index 0, 2, 4...) move UP, 2nd column (index 1, 3, 5...) moves DOWN
        const isSecondColumn = index % 3 === 1; // Only the 2nd column in each row (index 1, 4, 7...)
        const speed = 0.8; // More pronounced parallax speed
        const translateY = isSecondColumn 
          ? scrollY * 150 * speed // 2nd column moves DOWN
          : -scrollY * 150 * speed; // 1st and 3rd columns move UP

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

// Alternative component for grid-based parallax
export const ParallaxGrid = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        const scrollProgress = Math.max(0, Math.min(1, (scrollTop - elementTop + viewportHeight) / (elementHeight + viewportHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children.map((child, index) => {
          // 1st and 3rd columns (index 0, 2, 4...) move UP, 2nd column (index 1, 3, 5...) moves DOWN
          const isSecondColumn = index % 3 === 1; // Only the 2nd column in each row (index 1, 4, 7...)
          const speed = 0.7; // More pronounced speed for bigger effect
          const translateY = isSecondColumn 
            ? scrollY * 120 * speed // 2nd column moves DOWN
            : -scrollY * 120 * speed; // 1st and 3rd columns move UP

          return (
            <div
              key={index}
              className="relative"
              style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Enhanced parallax component with smooth animations
export const SmoothParallaxGrid = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Check if element is in viewport
        const isInView = rect.top < viewportHeight && rect.bottom > 0;
        setIsVisible(isInView);
        
        if (isInView) {
          // Calculate scroll progress
          const scrollProgress = Math.max(0, Math.min(1, (scrollTop - elementTop + viewportHeight) / (elementHeight + viewportHeight)));
          
          // Calculate 10% of viewport height for responsive alignment zone
          const alignmentZone = viewportHeight * 0.1; // 10% of viewport height
          
          // If we're near the top of the page (within 10% of viewport), gradually align all columns
          if (scrollTop < alignmentZone) {
            // Create a smooth alignment effect when near the top
            const alignmentFactor = Math.max(0, (alignmentZone - scrollTop) / alignmentZone); // 0 to 1 as we approach top
            // Completely disable parallax effect when at the very top
            setScrollY(scrollProgress * (1 - alignmentFactor));
          } else {
            setScrollY(scrollProgress);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children.map((child, index) => {
          // 1st and 3rd columns (index 0, 2, 4...) move UP, 2nd column (index 1, 3, 5...) moves DOWN
          const isSecondColumn = index % 3 === 1; // Only the 2nd column in each row (index 1, 4, 7...)
          const speed = 0.6; // More pronounced parallax effect
          
          const translateY = isVisible ? (
            isSecondColumn 
              ? scrollY * 100 * speed // 2nd column moves DOWN
              : -scrollY * 100 * speed // 1st and 3rd columns move UP
          ) : 0;

          return (
            <div
              key={index}
              className="relative transition-all duration-300 ease-out"
              style={{
                transform: `translateY(${translateY}px)`,
                opacity: isVisible ? 1 : 0.7,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};
