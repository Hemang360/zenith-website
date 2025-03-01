'use client';

import { Monoton, Oxanium } from "next/font/google";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from "framer-motion";
import Loading from '@/app/loading'

// Lazy load components that are below the fold
const EventTimer = dynamic(() => import("@/components/ui/eventtimer"), {
  loading: () => <Loading />,
  ssr: false
});

const oxan = Oxanium({
    weight: "400",
    subsets: ['latin'],
    display: 'swap' // Add display swap for better font loading
})

const mon = Monoton({
  weight:'400',
  subsets:['latin'],
  display: 'swap'
})

export function Hero(){
  return (
    <div className="relative h-[63rem] bg-black">
      {/* Optimized video loading */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="none"
        poster="/images/video-poster.jpg"
      >
        <source 
          src="/videos/bg1.mp4" 
          type="video/mp4" 
          media="all and (min-width: 768px)" // Only load video on larger screens
        />
      </video>
      
      {/* Fallback image for mobile */}
      <Image
        src="/images/background3.png"
        alt=""
        fill
        className="object-cover md:hidden"
        priority={true}
        quality={75}
      />

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>
  
      <div className="container mx-auto h-full pt-[27rem] flex flex-col justify-center items-center relative z-10">
        <div className="text-center">
          <motion.h1 
            className={`${mon.className} text-5xl md:text-[12rem] text-heading relative z-10`}
            animate={{
              textShadow: [
                "0 0 20px rgba(0, 246, 255, 0.3)",
                "0 0 30px rgba(0, 246, 255, 0.5)",
                "0 0 20px rgba(0, 246, 255, 0.3)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ZENITH
          </motion.h1>

          <p className={`${oxan.className} text-sm md:text-xl text-muted-foreground mb-16 sm:mb-24 mt-6 max-w-xl sm:max-w-3xl mx-auto`}>
              A 36-hour Point Blank contest featuring CTF, a Kaggle competition, 
              Hackathon, and CP, where the top scorer will be crowned 
              Programmer of the Year!
            </p>

          <div className="pt-96">
            <EventTimer targetDate={new Date("2025-04-27T00:00:00").toISOString()} />
          </div>
        </div>
      </div>
    </div>
  );
}
