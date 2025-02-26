"use client"

import { motion } from "framer-motion";
import { Monoton } from "next/font/google";
import { Oxanium } from "next/font/google";
import { TwinkleBackground } from "@/components/ui/twinkle-background";

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
  {
    date: "Day 1 - 1:00 PM",
    title: "Lunch",
    description: "Lunch break before the next competition.",
  },
  {
    date: "Day 1 - 2:00 PM",
    title: "Capture The Flag (CTF) Challenge + Kaggle + Recreational Activity",
    description: "A mix of cybersecurity, data science, and fun activities.",
  },
  {
    date: "Day 1 - 8:00 PM",
    title: "Dinner Break",
    description: "Time to have dinner and refresh before the hackathon.",
  },
  {
    date: "Day 1 - 11:00 PM",
    title: "Hackathon Begins",
    description: "Official start of the hackathon project development.",
  },
  {
    date: "Day 2 - 12:00 PM",
    title: "Lunch",
    description: "Midway lunch break during the hackathon.",
  },
  {
    date: "Day 2 - 4:00 PM",
    title: "Snacks Break",
    description: "Refreshments and quick break before pitching rounds.",
  },
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
  {
    date: "Day 2 - 7:30 PM",
    title: "Dinner",
    description: "Dinner break after the final pitching round.",
  },
  {
    date: "Day 2 - 9:00 PM",
    title: "Award Ceremony & Closing Remarks",
    description: "Announcement of winners and event conclusion.",
  },
];

export function Timeline() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0f19] via-black"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-8xl text-heading mb-3 font-dystopian font-bold text-center gradient-text`}
          >
          Event Timeline
        </motion.h2>
        <div className="relative">
          {/* Timeline line with glow effect */}
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
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                <div className={`flex-1 p-6  rounded-lg backdrop-blur-sm ${index % 2 === 0 ? "text-right" : "text-left"}`}>
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
      </div>
    </motion.section>
  )
}

