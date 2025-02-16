"use client"

import { motion } from "framer-motion"

export function TournamentSchedule() {
  const stages = [
    {
      stage: "Registration Open",
      date: "February 15, 2025",
      description: "Registration will be opened on 11 February 2025.",
    },
    {
      stage: "Registration Close",
      date: "March 15, 2025",
      description: "Registration will be closed on 15 March 2025.",
    },
    {
      stage: "Elimination Round",
      date: "March 20, 2025",
      description: "All teams will fight against to get qualified for the finals",
    },
    {
      stage: "Grand Final",
      date: "March 21, 2025",
      description: "Top teams will fight against to win the tournament",
    },
  ]

  return (
    <section id="tournament" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
        >
          TOURNAMENT SCHEDULE
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/5 to-orange-500/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/20">
                <h3 className="text-lg font-bold text-[#FFB800] mb-2">{stage.stage}</h3>
                <p className="text-white mb-1">{stage.date}</p>
                <p className="text-gray-400 text-sm">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

