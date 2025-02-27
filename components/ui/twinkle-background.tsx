'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, ReactNode, useMemo } from 'react';
import Saturn from '@/public/images/saturn.jpg'
import { motion } from 'framer-motion';

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
  backgroundColor = '#000000',
  ...props 
}: TwinkleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1920, 
    height: typeof window !== 'undefined' ? window.innerHeight : 1080 
  });
  
  // Reduce number of dots by increasing spacing and add culling
  const dots = useMemo(() => {
    const spacing = 100; // Increased spacing
    const maxDots = 500; // Set maximum number of dots
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

    // Debounced resize observer
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

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [hues, setHues] = useState<number[]>([]);
  const [sizes, setSizes] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const positions = [];
      for (let i = 0; i < 3; i++) { // Increase the number of planets
        positions.push({
          x: Math.random() * dimensions.width * 0.8, // Ensure within viewport
          y: Math.random() * dimensions.height * 0.8, // Ensure within viewport
        });
      }
      return positions;
    };

    const generateRandomHues = () => {
      const hues = [];
      for (let i = 0; i < 10; i++) { // Ensure the number of hues matches the number of planets
        hues.push(Math.random() * 360);
      }
      return hues;
    };

    const generateRandomSizes = () => {
      const sizes = [];
      for (let i = 0; i < 10; i++) { // Ensure the number of sizes matches the number of planets
        sizes.push(Math.random() * 100 + 50); // Random sizes between 20 and 70
      }
      return sizes;
    };

    setPositions(generateRandomPositions());
    setHues(generateRandomHues());
    setSizes(generateRandomSizes());
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-black min-h-screen w-full"
      style={{ backgroundColor }}
    >
      <div 
        className={`fixed inset-0 transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className="fixed w-1 h-1 rounded-full bg-[rgb(0,255,204)]"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              opacity: dot.opacity,
              animation: `twinkle-optimized 3s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              transform: 'translate3d(0,0,0)',
              willChange: 'opacity',
            }}
          />
        ))}
      </div>
      <div className='inset-0 overflow-hidden'>
        {positions.map((pos, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 0.9 }}
            initial={{ x: pos.x, y: pos.y }}
            animate={{
              x: [pos.x, pos.x + 100, pos.x, pos.x - 100, pos.x],
              y: [pos.y, pos.y + 50, pos.y, pos.y - 50, pos.y],
              transition: {
                duration: 120,
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }}
            className='absolute'
            style={{ 
              width: `${sizes[index]}px`, 
              height: `${sizes[index]}px`, 
              filter: `hue-rotate(${hues[index]}deg)` 
            }}
          >
            <Image src={Saturn} alt="ok" layout="fill" objectFit="cover" />
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 select-none pointer-events-none">
        {children}
      </div>
    </div>
  );
}
