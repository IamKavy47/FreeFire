"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
        >
          FAQ
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How do I register for the tournament?",
                answer:
                  "Registration is simple! Click the REGISTER NOW button at the top of the page and follow the instructions to sign up your team.",
              },
              {
                question: "What are the tournament rules?",
                answer:
                  "The tournament follows official Free Fire competitive rules. Full rulebook will be provided upon registration.",
              },
              {
                question: "Is there an entry fee?",
                answer:
                  "Yes, there is entry fee of ₹1500 which includes both tournament participation and accommodation (food and stay provided on march 20th to 21st).",
              },
              {
                question: "What is included in the entry fee?",
                answer: "The ₹1500 entry fee includes accommodation, food, and full access to the Spandan 2K26 event. For more details about Spandan events, visit the official website of Spandan 2K26.",
              },
              {
                question: "What are the technical requirements?",
                answer: "Players must have a stable internet connection and the latest version of Free Fire installed.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-orange-500/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-orange-500/5">
                  <span className="text-white">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-400">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
