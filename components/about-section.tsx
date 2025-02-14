"use client"

import { motion } from "framer-motion"
import { MdSportsEsports } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { GiTrophy } from "react-icons/gi"

export function AboutSection() {
  const features = [
    {
      icon: MdSportsEsports,
      title: "Epic Battles",
      description: "Engage in intense Free Fire matches with the best players",
    },
    {
      icon: FaUsers,
      title: "Squad Up",
      description: "Form your elite team of 4 and compete for glory",
    },
    {
      icon: GiTrophy,
      title: "Win Big",
      description: "Massive prize pool and exclusive in-game rewards",
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
        >
          BATTLE ROYALE TOURNAMENT
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/10 to-orange-500/10 rounded-lg transform -skew-y-3 group-hover:skew-y-0 transition-transform duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                <feature.icon className="text-5xl text-[#FFB800] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

