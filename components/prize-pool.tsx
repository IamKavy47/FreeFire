"use client"

import { motion } from "framer-motion"

export function PrizePool() {
  const prizes = [
    { position: "1ST PLACE", amount: "₹15,000" },
    { position: "2ND PLACE", amount: "₹7,000" },
    // { position: "3RD PLACE", amount: "₹25,000" },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
        >
          PRIZE POOL
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/10 to-orange-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20 text-center">
                <h3 className="text-xl font-bold text-[#FFB800] mb-4">{prize.position}</h3>
                <p className="text-3xl font-bold text-white mb-2">{prize.amount}</p>
                <p className="text-gray-400">{prize.extras}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

