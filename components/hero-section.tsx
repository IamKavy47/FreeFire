"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onOpenRegistration: () => void
}

export function HeroSection({ onOpenRegistration }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <picture>
          <source srcSet="/ffm.mp4" type="video/mp4" />
          {/* Fallback image for browsers that do not support video */}
          <img 
            src="https://wallpapers.com/images/high/garena-free-fire-zombie-samurai-4ceppcui3cp31fv1.webp" 
            alt="Free Fire Background" 
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content Section */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] via-orange-500 to-red-600"
          >
            FREE FIRE TOURNAMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Battle in Style - Spandan 2K25
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a href="https://forms.easebuzz.in/sign-up/Mandsaur0rhTp/Spandan_Free_Fire_Tournament_2K25/?inst_name=Mandsaur0rhTp&form_name=Spandan_Free_Fire_Tournament_2K25&jsonData=1">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFB800] to-orange-500 hover:from-[#FF9500] hover:to-orange-600 text-black font-bold text-lg px-8 py-6"
              >
                REGISTER NOW
              </Button>
            </a>
            <a href="/rules.pdf">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 font-bold text-lg px-8 py-6"
              >
                Rules
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
  )
}
