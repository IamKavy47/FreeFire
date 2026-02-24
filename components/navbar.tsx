"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "TOURNAMENT", href: "#tournament" },
    { name: "TEAM", href: "#teams" },
    { name: "SPONSORS", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Logo + Title) */}
          <div className="flex items-center space-x-4">
            <img src="/mu.png" alt="Logo" className="h-10 w-10" />
            <Link href="/" className="text-[#FFB800] font-bold text-2xl">
              <img src="https://www.mufests.com/assets/mu.png"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#FFB800] transition-colors uppercase text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side (Logo) */}
          <img src="/cb.png" alt="Logo" className="h-14 w-40 hidden md:block" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-orange-500/20">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#FFB800] transition-colors uppercase text-sm font-medium"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
