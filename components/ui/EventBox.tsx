import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Event } from '../types';

interface EventBoxProps {
  event: Event;
  isExpanded: boolean;
  isFaded: boolean;
  onExpand: () => void;
  onClose: () => void; // New prop to handle closing expanded box
}

const EventBox: React.FC<EventBoxProps> = ({ 
  event, 
  isExpanded, 
  isFaded, 
  onExpand,
  onClose 
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside
  useEffect(() => {
    if (!isExpanded) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded, onClose]);
  
  const boxVariants = {
    grid: {
      height: '30rem',
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3 // More controlled animation duration
      }
    },
    expanded: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        duration: 0.4 // More controlled animation duration
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.12, // Very quick exit
        ease: 'easeOut'
      }
    },
    fadeIn: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2, // Delay before other boxes fade back in
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hidden: {
      opacity: 0,
      scale: 0.95
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const glowVariants = {
    normal: {
      boxShadow: '0 0 15px rgba(34,211,238,0.5)',
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" as const }
    },
    intense: {
      boxShadow: '0 0 25px rgba(34,211,238,0.8)',
      transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" as const }
    }
  };

  const cornerVariants = {
    normal: { opacity: 0.7 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Determine the variant to use for animation
  const getVariant = () => {
    if (isExpanded) return "expanded";
    if (isFaded) return "hidden"; // Start hidden when it should be faded
    return "fadeIn"; // Use fadeIn for when boxes reappear
  };

  // Skip rendering completely if this card should be invisible
  // This helps with performance
  if (isFaded && !isExpanded) {
    return null;
  }

  return (
    <motion.div 
      ref={boxRef}
      className={`
        relative overflow-hidden
        ${isExpanded 
          ? 'fixed inset-0 z-40 m-auto max-w-4xl max-h-[95vh] overflow-y-auto' 
          : 'cursor-pointer hover:scale-[1.02]'
        }
        bg-transparent rounded-lg border-2 border-transparent
        hover:border-cyan-400
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-800 before:via-cyan-700 before:to-cyan-600 before:opacity-40
      `}
      onClick={isExpanded ? undefined : onExpand}
      variants={boxVariants}
      initial={isFaded ? "hidden" : "grid"}
      animate={getVariant()}
      exit="exit"
      layoutId={`event-box-${event.id}`}
      whileHover={isExpanded ? {} : { scale: 1.02 }}
      whileTap={isExpanded ? {} : { scale: 0.98 }}
      style={{ 
        willChange: 'transform, opacity', // Performance optimization
        backfaceVisibility: 'hidden', // Performance optimization
        transform: 'translateZ(0)' // Enable hardware acceleration
      }}
    >
      <motion.div 
        className="relative z-10 p-6 h-full flex flex-col"
        variants={glowVariants}
        animate={isExpanded ? "intense" : "normal"}
      >
        {/* Neon header */}
        <motion.div className="mb-4" layout>
          <motion.h3 
            className={`
              font-bold tracking-wider text-transparent bg-clip-text bg-cyan-400
              ${isExpanded ? 'text-4xl' : 'text-2xl'}
            `}
            layout
          >
            {event.title}
          </motion.h3>
          <motion.div 
            className={`h-1 bg-gradient-to-r from-cyan-500 to-white-400 rounded-full mt-2`}
            initial={{ width: isExpanded ? '12rem' : '6rem' }}
            animate={{ width: isExpanded ? '12rem' : '6rem' }}
            layout
          ></motion.div>
        </motion.div>
        
        {/* Event image */}
        {!isExpanded && (
          <motion.div 
            className={`relative overflow-hidden rounded-lg mb-4`}
            initial={{ height: isExpanded ? '20rem' : '19rem' }}
            animate={{ height: isExpanded ? '20rem' : '19rem' }}
            transition={{ duration: 0.5 }}
            layout
          >
            <motion.img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              layout
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <motion.div 
              className="absolute bottom-3 left-3 bg-black bg-opacity-70 px-3 py-1 rounded-full border border-cyan-400 text-cyan-400 text-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {event.category}
            </motion.div>
          </motion.div>
        )}
        
        {/* Expanded content */}
        {isExpanded && (
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h4 
              className="text-2xl font-semibold mb-4 text-purple-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Event Details
            </motion.h4>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {event.fullDescription}
            </motion.p>
            
            {/* Close button added for better UX */}
            <motion.div 
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="px-6 py-2 bg-[#2ad8db19] rounded-md border border-cyan-400 text-cyan-400 font-bold tracking-wider transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(34,211,238,0.7)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
              >
                CLOSE
              </motion.button>
            </motion.div>
          </motion.div>
        )}
        
        {!isExpanded && (
          <motion.div 
            className="mt-auto"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="w-full py-2 bg-[#2ad8db19] rounded-md border border-white font-bold tracking-wider text-sm transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 15px rgba(236,72,153,0.7)'
              }}
              whileTap={{ scale: 0.97 }}
            >
              VIEW DETAILS
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      
      {/* Animated neon corner */}
      <motion.div 
        className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
        variants={cornerVariants}
        initial="normal"
        whileHover="hover"
      >
        <motion.div 
          className="absolute top-0 right-0 w-2 h-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            boxShadow: [
              '0 0 5px rgba(34,211,238,0.5)', 
              '0 0 15px rgba(34,211,238,0.9)', 
              '0 0 5px rgba(34,211,238,0.5)'
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-0 right-0 h-2 w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            boxShadow: [
              '0 0 5px rgba(34,211,238,0.5)', 
              '0 0 15px rgba(34,211,238,0.9)', 
              '0 0 5px rgba(34,211,238,0.5)'
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventBox;