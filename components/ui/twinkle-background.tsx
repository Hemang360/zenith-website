'use client';

import { useEffect, useState, useRef, ReactNode, useMemo } from 'react';

interface TwinkleBackgroundProps {
  children: ReactNode;
  from?: string;
  to?: string;
  via?: string;
  direction?: 'to-t' | 'to-tr' | 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl';
  backgroundColor?: string;
  fadeTop?: boolean;
}

export function TwinkleBackground({ 
  children, 
  backgroundColor = '#000000',
  fadeTop = false,
  ...props 
}: TwinkleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1920, 
    height: typeof window !== 'undefined' ? window.innerHeight : 1080 
  });
  
  const dots = useMemo(() => {
    const spacing = 100;
    const maxDots = 500;
    const dotsArray = [];
    
    const columns = Math.floor(dimensions.width / spacing);
    const rows = Math.floor(dimensions.height / spacing);
    const totalDots = Math.min(columns * rows, maxDots);
    
    for (let i = 0; i < totalDots; i++) {
      dotsArray.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    return dotsArray;
  }, [dimensions]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
      setIsLoaded(true);
    };

    let timeout: NodeJS.Timeout;
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(updateDimensions, 250);
    });
    
    observer.observe(containerRef.current);
    updateDimensions();

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-black w-full overflow-hidden"
      style={{ backgroundColor }}
    >
      <div 
        className={`absolute inset-0 transition-opacity duration-500 overflow-hidden ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-[rgb(0,255,204)]"
            style={{
              left: `${Math.min(dot.x, dimensions.width - 4)}px`,
              top: `${Math.min(dot.y, dimensions.height - 4)}px`,
              opacity: dot.opacity,
              animation: `twinkle-optimized 3s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              transform: 'translate3d(0,0,0)',
              willChange: 'opacity',
            }}
          />
        ))}
      </div>
      {fadeTop && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-[1]" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
