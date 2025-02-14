"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ChancellorsBrigade() {
  const team = [
    {
      name: "Jigyasa Joshi",
      // role: "Technical Advisor",
      image: "/jigyasa.png",
    },
    {
      name: "Harshvardhan Singh",
      // role: "Strategic Advisor",
      image: "/harsh.jpg",
    },
    {
      name: "Aditya Joshi",
      // role: "Research Director",
      image: "/aditya.jpg",
    },
    {
      name: "Shashank Gupta",
      // role: "Innovation Lead",
      image: "/gupta.jpg",
    },
    {
      name: "Sudip Bhalwankar",
      // role: "Community Liaison",
      image: "/sudip.png",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
        >
          CHANCELLOR&apos;S BRIGADE
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/10 to-orange-500/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20 text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                />
                <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

