'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface TwinkleBackgroundProps {
  children: ReactNode;
  from?: string;
  to?: string;
  via?: string;
  direction?: 'to-t' | 'to-tr' | 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl';
  backgroundColor?: string;
}

export function TwinkleBackground({ 
  children, 
  from, 
  to, 
  via,
  direction = 'to-b',
  backgroundColor = '#000000' 
}: TwinkleBackgroundProps) {
  const [dots, setDots] = useState<{ x: number; y: number; delay: number; size: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getBackgroundStyle = () => {
    if (!from && !to && !via) {
      return { backgroundColor };
    }

    const gradientParts = ['bg-gradient-' + direction];
    if (from) gradientParts.push(`from-[${from}]`);
    if (via) gradientParts.push(`via-[${via}]`);
    if (to) gradientParts.push(`to-[${to}]`);

    return {
      background: `linear-gradient(${direction === 'to-r' ? '90deg' : 
        direction === 'to-l' ? '270deg' : 
        direction === 'to-t' ? '0deg' : 
        direction === 'to-b' ? '180deg' : 
        direction === 'to-tr' ? '45deg' :
        direction === 'to-br' ? '135deg' :
        direction === 'to-bl' ? '225deg' :
        '315deg'}, ${from || backgroundColor} ${via ? `50%,${via},` : ','} ${to || backgroundColor})`
    };
  };

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const spacing = 40;
      const newDots = [];
      
      for (let x = 0; x < rect.width; x += spacing) {
        for (let y = 0; y < rect.height; y += spacing) {
          newDots.push({
            x,
            y,
            delay: Math.random() * 2,
            size: Math.random() * 0.7 + 0.8
          });
        }
      }
      
      setDots(newDots);
    };

    updateDots();
    
    const observer = new ResizeObserver(updateDots);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative" style={getBackgroundStyle()}>
      <svg className="absolute inset-0 w-full h-full">
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            className="fill-[rgb(0,255,204)]"
            style={{
              opacity: 0.5,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`
            }}
          />
        ))}
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
