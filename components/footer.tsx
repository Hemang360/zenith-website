import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpIcon as SendArrow, Linkedin, createLucideIcon, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"

const XIcon = createLucideIcon("X", [
    [
      "path",
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
        stroke: "none",
        fill: "currentColor",
      },
    ],
  ]);

export function SpaceFooter() {
  return (
    <footer className="relative w-full text-white py-36 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-[1000px] bg-gradient-to-b from-black to-transparent top-0 rounded-[100%] blur-3xl transform translate-y-[-50%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/footerbg.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <ArrowLeft className="text-green-400 h-5 w-5" />
              <ArrowRight className="text-green-400 h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium">+9792975227</p>
              <p className="text-gray-400">support@pointblank</p>
            </div>
          </div>

          {/* Middle column - Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <div className="space-y-4">
                <Link href="https://www.pointblank.club/leads" className="block text-gray-400 hover:text-white transition-colors">
                  Leads
                </Link>
                <Link href="https://www.pointblank.club/events" className="block text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="space-y-4">
                <Link href="https://www.pointblank.club/members" className="block text-gray-400 hover:text-white transition-colors">
                  Members
                </Link>
                <Link href="https://www.pointblank.club/achievements" className="block text-gray-400 hover:text-white transition-colors">
                  Achievements
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Subscribe */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Subscribe</h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="email"
                className="bg-white/10 border-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 rounded-r-md flex items-center justify-center">
                <SendArrow className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 my-8"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Link href="https://www.linkedin.com/company/point-blank-d/" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/pointblank_dsce" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
              <XIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/pointblank_dsce/" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400">A POINT BLANK EVENT</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2020 Point Blank. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

