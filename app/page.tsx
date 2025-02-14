"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TournamentSchedule } from "@/components/tournament-schedule"
import { PrizePool } from "@/components/prize-pool"
import { OrganizingTeam } from "@/components/organizing-team"
import { ChancellorsBrigade } from "@/components/chancellors-brigade"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { RegistrationModal } from "@/components/registration-modal"

export default function Home() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const openRegistration = () => setIsRegistrationOpen(true)
  const closeRegistration = () => setIsRegistrationOpen(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar  />
      <HeroSection onOpenRegistration={openRegistration} />
      <AboutSection />
      <TournamentSchedule />
      <PrizePool />
      <OrganizingTeam />
      <ChancellorsBrigade />
      <FAQ />
      <Footer />
      <RegistrationModal isOpen={isRegistrationOpen} onClose={closeRegistration} />
    </div>
  )
}

