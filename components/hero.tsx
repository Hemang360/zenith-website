'use client';

import { Monoton } from "next/font/google";
import EventTimer from "@/components/ui/eventtimer";
import { Oxanium } from "next/font/google";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TwinkleBackground } from "@/components/ui/twinkle-background";

const oxan = Oxanium ({
    weight: "400",
    subsets: ['latin']
})

const mon = Monoton({
  weight:'400',
  subsets:['latin']

})


export function Hero(){
  return (
      <TwinkleBackground from="#101928" 
      to="#000000"
      via="#101928"
      direction="to-b" >
    <div className="relative h-screen">

      <div className="container mx-auto px-4 py-36 h-full flex flex-col justify-center items-center relative z-10">
          <div className="text-center">
            <div className="glow-wrapper">
                <motion.h1 
                className={`${mon.className} text-7xl md:text-[12rem] text-heading relative z-10`}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(0, 246, 255, 0.2)",
                    "0 0 30px rgba(0, 246, 255, 0.5), 0 0 60px rgba(0, 246, 255, 0.3)",
                    "0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(0, 246, 255, 0.2)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                >
                ZENITH
                </motion.h1>
            </div>
            <p className={`${oxan.className} text-sm md:text-xl text-muted-foreground mb-16 sm:mb-24 mt-6 max-w-xl sm:max-w-3xl mx-auto `}>
              A 36-hour Point Blank contest featuring CTF, a Kaggle competition, 
              Hackathon, and CP, where the top scorer will be crowned 
              Programmer of the Year!
            </p>
            <EventTimer targetDate={new Date("2025-04-27T00:00:00").toISOString()}/>
          </div>

          <div className="mt-24">
          <h2 className="text-center text-2xl font-semibold mb-8">Hosted by Point Blank with members working at</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['Intel', 'AMD', 'JP Morgan', 'GitLab', 'Zeta', 'Amazon', 'Microsoft', 'NVIDIA', 'Meesho', 'Nasdaq']
              .map((sponsor) => (
                <div key={sponsor} className="text-muted-foreground font-semibold">
                  {sponsor}
                </div>
              ))}
          </div>
        </div>

          <ChevronDown className="absolute bottom-8 animate-bounce text-primary w-8 h-8" />
        </div>

    </div>
        </TwinkleBackground>
  );
}
