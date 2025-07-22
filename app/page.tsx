'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PartnersSection from '@/components/sections/PartnersSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CompanySection from '@/components/sections/CompanySection'
import VisionSection from '@/components/sections/VisionSection'
import HistorySection from '@/components/sections/HistorySection'
import ValuesSection from '@/components/sections/ValuesSection'

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <CompanySection />
        <VisionSection />
        <ValuesSection />
        <HistorySection />
        <ServicesSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  )
}
