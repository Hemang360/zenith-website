'use client'
import React, { useState } from 'react';
import { Target, Crosshair, Briefcase, Flag } from 'lucide-react';
import { TwinkleBackground } from "@/components/ui/twinkle-background";
import QRsolve from "@/public/images/qrcode.webp"
import CTF from "@/public/images/ctf.webp"
import Help from "@/public/images/tusharctflol.webp"

interface BriefingSection {
  images: string[];
  text: string;
}

interface BriefingData {
  [key: string]: BriefingSection;
}

interface MenuItem {
  id: keyof BriefingData;
  label: string;
  icon: React.FC<{ className?: string }>;
}

export function Brief() {
  const briefingData: BriefingData = {
    ctf: {
      images: [
        QRsolve.src,
        Help.src,
        CTF.src
      ],
      text: "A Capture the Flag (CTF) event is a cybersecurity competition where participants solve challenges in areas like cryptography, forensics, reverse engineering, and web security to find hidden flags and score points. It can be Jeopardy-style (solving independent challenges) or Attack-Defense (teams securing and attacking systems)."
    },
    dsa: {
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
      ],
      text: "Your target is located in a heavily fortified corporate headquarters in downtown Manhattan. The building features state-of-the-art security systems and armed personnel."
    },
    hackathon: {
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
      ],
      text: "Equipment includes: Suppressed pistol, tactical gear, hacking device, and night vision goggles. Special abilities: Enhanced stealth, lock picking, and hand-to-hand combat expertise."
    },
    kaggle: {
      images: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
      ],
      text: "Equipment includes: Suppressed pistol, tactical gear, hacking device, and night vision goggles. Special abilities: Enhanced stealth, lock picking, and hand-to-hand combat expertise."
    }
  };

  const menuItems: MenuItem[] = [
    { id: 'ctf', label: 'CAPTURE THE FLAG', icon: Flag },
    { id: 'dsa', label: 'DSA', icon: Target },
    { id: 'kaggle', label: 'KAGGLE', icon: Crosshair },
    { id: 'hackathon', label: 'HACKATHON', icon: Briefcase }
  ];

  const [selectedSection, setSelectedSection] = useState<keyof BriefingData>('ctf');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset image index when changing sections
  const handleSectionChange = (section: keyof BriefingData) => {
    setSelectedSection(section);
    setSelectedImageIndex(0);
  };

  return (
      <div className="min-h-screen text-white py-52 bg-gradient-to-b from-[#0a0f19] to-[#0a0f19]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h1 className="text-6xl font-bold mb-12 tracking-wider">
              EVENT<br />BRIEFING
            </h1>
            
            <div className="space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`w-full text-left py-4 border-b-2 transition-all duration-300 flex items-center gap-3
                    ${selectedSection === item.id 
                      ? 'border-[#2AD7DB] text-[#2AD7DB]' 
                      : 'border-gray-700 text-gray-400 hover:text-white'}`}
                >
                  <item.icon className={`w-5 h-5 ${selectedSection === item.id ? 'text-[#2AD7DB]' : 'text-gray-400'}`} />
                  <span className="text-lg tracking-wider">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 relative">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src={briefingData[selectedSection].images[selectedImageIndex]}
                alt={`${String(selectedSection)} image ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-lg">{briefingData[selectedSection].text}</p>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 mt-4">
              {briefingData[selectedSection].images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-16 overflow-hidden rounded transition-all
                    ${selectedImageIndex === index ? 'ring-2 ring-yellow-500' : 'opacity-50 hover:opacity-75'}`}
                >
                  <img 
                    src={image}
                    alt={`${String(selectedSection)} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

