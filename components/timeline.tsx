"use client"

import { motion } from "framer-motion";
import { Monoton } from "next/font/google";
import { Oxanium } from "next/font/google";
import { TwinkleBackground } from "@/components/ui/twinkle-background";
import { useState, useEffect } from "react";

const oxan = Oxanium ({
    weight: "400",
    subsets: ['latin']
})

const mon = Monoton({
  weight:'400',
  subsets:['latin']

})


const timelineEvents = [
  {
    date: "Day 1 - 8:00 AM",
    title: "Call Time (Check-in & Setup)",
    description: "Participants check in and set up for the event.",
  },
  {
    date: "Day 1 - 9:00 AM",
    title: "Opening Talk + Verification",
    description: "Introduction, rules explanation, and participant verification.",
  },
  {
    date: "Day 1 - 10:00 AM",
    title: "Competitive Programming (DSA)",
    description: "Algorithmic coding challenges to test problem-solving skills.",
  },
  // {
  //   date: "Day 1 - 1:00 PM",
  //   title: "Lunch",
  //   description: "Lunch break before the next competition.",
  // },
  {
    date: "Day 1 - 2:00 PM",
    title: "Capture The Flag (CTF) Challenge + Kaggle + Recreational Activity",
    description: "A mix of cybersecurity, data science, and fun activities.",
  },
  // {
  //   date: "Day 1 - 8:00 PM",
  //   title: "Dinner Break",
  //   description: "Time to have dinner and refresh before the hackathon.",
  // },
  {
    date: "Day 1 - 11:00 PM",
    title: "Hackathon Begins",
    description: "Official start of the hackathon project development.",
  },
  // {
  //   date: "Day 2 - 12:00 PM",
  //   title: "Lunch",
  //   description: "Midway lunch break during the hackathon.",
  // },
  // {
  //   date: "Day 2 - 4:00 PM",
  //   title: "Snacks Break",
  //   description: "Refreshments and quick break before pitching rounds.",
  // },
  {
    date: "Day 2 - 4:30 PM",
    title: "First Round of Pitching",
    description: "Initial round where teams present their projects.",
  },
  {
    date: "Day 2 - 6:30 PM",
    title: "Final Pitching Round",
    description: "Final presentations to judges before the closing ceremony.",
  },
  // {
  //   date: "Day 2 - 7:30 PM",
  //   title: "Dinner",
  //   description: "Dinner break after the final pitching round.",
  // },
  {
    date: "Day 2 - 9:00 PM",
    title: "Award Ceremony & Closing Remarks",
    description: "Announcement of winners and event conclusion.",
  },
];

export function Timeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const MobileTimeline = () => (
    <div className="relative">
      <div className="absolute left-0 h-full w-1">
        <div className="absolute inset-0 timeline-line" />
      </div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2 
            }}
            className="flex items-center gap-8"
          >
            <div className="timeline-connector flex items-center justify-center">
              <div className="timeline-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="timeline-line-horizontal right" />
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">{event.title}</h3>
              <p className="text-sm text-[#B1FFFA] mb-1">{event.date}</p>
              <p className="text-xs text-gray-400">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DesktopTimeline = () => (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2">
        <div className="absolute inset-0 timeline-line" />
      </div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2 
            }}
            className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`flex-1 p-6 rounded-lg ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <h3 className="text-lg md:text-2xl font-bold text-cyber-blue mb-2">{event.title}</h3>
              <p className="text-sm md:text-lg text-[#B1FFFA] mb-1">{event.date}</p>
              <p className="text-xs md:text-base text-gray-400">{event.description}</p>
            </div>
            <div className="timeline-connector flex items-center justify-center">
              <div className="timeline-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className={`timeline-line-horizontal ${index % 2 === 0 ? "right" : "left"}`} />
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <TwinkleBackground backgroundColor="black" fadeTop={true}>

    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20 pt-80"
      id="about"
      >
      <div className="max-w-6xl mx-auto">
      <motion.h2
          initial={{ 
            y: -50, 
            opacity: 0,
            filter: "drop-shadow(0 0 15px rgba(0, 246, 255, 0.2))",
          }}
          animate={{
            filter: "drop-shadow(0 0 20px rgba(0, 246, 255, 0.3))",
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          whileInView={{ 
            y: 0, 
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl mb-7 md:mb-20 text-heading font-dystopian font-bold text-center gradient-text"
          style={{
            textShadow: [
              "0 0 20px rgba(0, 246, 255, 0.3)",
              "0 0 40px rgba(0, 246, 255, 0.2)",
              "0 0 60px rgba(0, 246, 255, 0.1)",
            ].join(', ')
          }}
        >
          Event Timeline
        </motion.h2>
        {isMobile ? <MobileTimeline /> : <DesktopTimeline />}
      </div>
    </motion.section>
    </TwinkleBackground>
  );
}

