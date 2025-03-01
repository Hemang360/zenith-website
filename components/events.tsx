'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EventBox from './ui/EventBox';
import { Event } from './types';
import qrcode from '@/public/images/qrcode.webp'
import dsa from '@/public/images/ctf.webp'
import kaggle from '@/public/images/kaggle.webp'
import { TwinkleBackground } from './ui/twinkle-background';

const events: Event[] = [
    {
      id: 1,
      title: "CTF",
      category: "Cybersecurity",
      description: "Compete in an intense Capture the Flag competition against top ethical hackers.",
      fullDescription: "CTF SHOWDOWN brings together security enthusiasts, ethical hackers, and students to battle in a high-stakes cybersecurity challenge. Solve cryptography, reverse engineering, forensics, and web exploitation puzzles to claim victory. Whether you're a seasoned professional or a beginner looking to test your skills, this event offers an exciting opportunity to push your limits and learn from the best.",
      date: "June 15, 2025",
      time: "10:00 - 22:00",
      image: qrcode.src,
      location: "Cyber Nexus Arena",
      address: "Tech Park, Silicon City",
      attendees: 600,
      capacity: 800
    },
    {
      id: 2,
      title: "DSA",
      category: "Programming",
      description: "Test your problem-solving skills in a high-speed Data Structures & Algorithms contest.",
      fullDescription: "The DSA CODE CHALLENGE is designed for programmers who thrive on solving complex algorithmic problems. Compete against top coders, tackle time-bound problems, and optimize your solutions to climb the leaderboard. With categories ranging from beginner to advanced, this event is the perfect place to showcase your mastery of data structures and algorithms.",
      date: "July 8, 2025",
      time: "14:00 - 18:00",
      image: dsa.src,
      location: "Code Warriors Arena",
      address: "Innovation Hub, Tech District",
      attendees: 1200,
      capacity: 1500
    },
    {
      id: 3,
      title: "KAGGLE",
      category: "Data Science",
      description: "A Kaggle-style competition where teams analyze real-world datasets and build AI models.",
      fullDescription: "The KAGGLE DATA CHALLENGE is a premier data science competition where participants work on real-world datasets to develop predictive models. Compete solo or in teams, leverage cutting-edge machine learning techniques, and optimize your model's accuracy to top the leaderboard. Expert mentors and industry leaders will be present to guide participants in unlocking valuable insights from data.",
      date: "August 22, 2025",
      time: "09:00 - 21:00",
      image: kaggle.src,
      location: "AI Innovation Hub",
      address: "Data Science Lab, Research Park",
      attendees: 900,
      capacity: 1000
    },
    {
      id: 4,
      title: "HACKATHON",
      category: "Tech",
      description: "A 48-hour coding marathon where innovators build groundbreaking applications.",
      fullDescription: "GLOBAL HACKATHON is the ultimate test of creativity and endurance for developers, engineers, and designers. Over 48 hours, participants collaborate in teams to develop innovative applications, tackle real-world problems, and present their solutions to a panel of judges. With categories spanning web development, AI, blockchain, and IoT, this event is a breeding ground for the next big tech breakthrough.",
      date: "September 3-5, 2025",
      time: "Starts at 09:00",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      location: "Tech Nexus Center",
      address: "500 Innovation Street, Startup City",
      attendees: 1800,
      capacity: 2000
    }
  ];

  
  
  function Events() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpandedId(id);
  };

  const handleClose = () => {
    setExpandedId(null);
  };

  
  return (
        <TwinkleBackground>
    <div className="min-h-screen text-white p-8 flex flex-col items-center justify-center">

      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl sm:text-6xl xl:text-7xl font-bold mb-10 tracking-wider font-dystopian text-[#2AD7DB]"
        style={{
            textShadow: "0 0 20px rgba(42,215,219,0.3), 0 0 40px rgba(42,215,219,0.2), 0 0 60px rgba(42,215,219,0.1)"
        }}
        >
        ABOUT THE EVENTS
        </motion.h1>
      
      <motion.div 
        className={`w-full max-w-7xl transition-all duration-500 ${expandedId !== null ? 'relative' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            duration: 0.6, 
            delay: 0.3,
            staggerChildren: 0.1
        }}
        >
        {events.map((event, index) => (
            <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            >
            <EventBox 
              key={event.id}
              event={event}
              isExpanded={expandedId === event.id}
              isFaded={expandedId !== null && expandedId !== event.id}
              onExpand={() => handleExpand(event.id)}
              onClose={handleClose}
              />
          </motion.div>
        ))}
        
      </motion.div>
    </div>
    </TwinkleBackground>
  );
}

export default Events;