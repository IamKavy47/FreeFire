"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegistrationFormProps {
  onClose?: () => void
}

export function RegistrationForm({ onClose }: RegistrationFormProps) {
  const [teamMembers, setTeamMembers] = useState([{}, {}, {}])

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setTeamMembers(updatedMembers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
    if (onClose) {
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8" action="https://docs.google.com/forms/d/e/1FAIpQLScFxtd9rV61QbNKdhffUTB80qvs_h3myb7SrfbtUpl_b47hpg/formResponse">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] to-orange-500"
      >
        TEAM REGISTRATION
      </motion.h2>
      <div className="space-y-4">
        <Label htmlFor="teamName" className="text-[#FFB800]">
          Team Name
        </Label>
        <Input id="teamName" name="entry.2110696512=tn" required className="bg-gray-800 border-orange-500/20 text-white" />
      </div>

      <div className="space-y-4">
        <Label htmlFor="collegeName" className="text-[#FFB800]">
          College Name
        </Label>
        <Input id="collegeName" name="entry.1980830820=cn" required className="bg-gray-800 border-orange-500/20 text-white" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#FFB800]">Team Leader Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="leaderName" className="text-[#FFB800]">
              Name
            </Label>
            <Input id="leaderName" name="entry.248849947=tln" required className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
          <div>
            <Label htmlFor="leaderEmail" className="text-[#FFB800]">
              Email
            </Label>
            <Input id="leaderEmail" name="entry.470892814=tle" type="email" required className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
          <div>
            <Label htmlFor="leaderContact" className="text-[#FFB800]">
              Contact Number
            </Label>
            <Input id="leaderContact" type="tel" name="entry.368381758=tlc" required className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
          <div>
            <Label htmlFor="leaderMac" className="text-[#FFB800]">
              MAC Address
            </Label>
            <Input id="leaderMac" required name="entry.364868565=tlm" className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
          <div>
            <Label htmlFor="leaderAadhar" className="text-[#FFB800]">
              Aadhar Card Number
            </Label>
            <Input id="leaderAadhar" required name="entry.1540941729=tla" className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
          <div>
            <Label htmlFor="leaderUid" className="text-[#FFB800]">
              Game UID
            </Label>
            <Input id="leaderUid" required name="entry.2042391055=tlg" className="bg-gray-800 border-orange-500/20 text-white" />
          </div>
        </div>
        <div>
          <Label htmlFor="leaderPhoto" className="text-[#FFB800]">
            Photo
          </Label>
          <Input
            id="leaderPhoto"
            type="file"
            accept="image/*"
            required
            className="bg-gray-800 border-orange-500/20 text-white"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#FFB800]">Team Members</h3>
        {teamMembers.map((member, index) => (
          <div key={index} className="space-y-4 p-4 bg-gray-800/50 rounded-lg border border-orange-500/20">
            <h4 className="text-lg font-semibold text-[#FFB800]">Team Member {index + 1}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`member${index}Name`} className="text-[#FFB800]">
                  Name
                </Label>
                <Input
                  id={`member${index}Name`}
                  required
                  className="bg-gray-800 border-orange-500/20 text-white"
                  onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`member${index}Mac`} className="text-[#FFB800]">
                  MAC Address
                </Label>
                <Input
                  id={`member${index}Mac`}
                  required
                  className="bg-gray-800 border-orange-500/20 text-white"
                  onChange={(e) => handleTeamMemberChange(index, "mac", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`member${index}Uid`} className="text-[#FFB800]">
                  Game UID
                </Label>
                <Input
                  id={`member${index}Uid`}
                  required
                  className="bg-gray-800 border-orange-500/20 text-white"
                  onChange={(e) => handleTeamMemberChange(index, "uid", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        {/* <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button> */}
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#FFB800] to-orange-500 hover:from-[#FF9500] hover:to-orange-600 text-black font-bold text-lg"
        >
          REGISTER TEAM
        </Button>
      </div>
    </form>
  )
}

