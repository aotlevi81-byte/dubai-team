'use client'

import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/services/section'
import { TeamSection } from '@/components/sections/team-section'
import { ClientsSection } from '@/components/sections/clients-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <TeamSection />
        <Footer />
      </main>
    </>
  )
}
