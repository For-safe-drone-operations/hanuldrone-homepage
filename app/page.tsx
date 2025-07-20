'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PartnersSection from '@/components/sections/PartnersSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CompanySection from '@/components/sections/CompanySection'
import HistorySection from '@/components/sections/HistorySection'
import ValuesSection from '@/components/sections/ValuesSection'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main>
        {/* Hero Section */}
        <Hero />


        {/* Solutions Section */}
        <ServicesSection />

        {/* Company Section */}
        <CompanySection />

        {/* History Section */}
        <HistorySection />

        {/* Core Values Section */}
        <ValuesSection />

        {/* Vision & Mission Section */}
        <section id="vision" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
              비전 및 미션
            </h2>
            <p className="text-center text-gray-600 mb-16">
              한울드론이 추구하는 가치와 목표를 소개합니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Vision */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">VISION</h3>
                <p className="text-gray-700 mb-8 text-lg">
                  지능형 드론 기술로 사람과 지역사회를 연결하고,<br />
                  지속 가능한 사회적 가치를 창출합니다.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">지능형 드론 기술</h4>
                    <p className="text-sm text-gray-600">AI시간 자율비행, 군집비행, 장애물 회피 등 첨단기술을 보유</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">사람과 지역사회 연결</h4>
                    <p className="text-sm text-gray-600">도서지역 물류, 재난 대응, 공공안수 등의의 상생</p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">MISSION</h3>
                <p className="text-gray-700 mb-8 text-lg">
                  "우리는 자율비행 기반의 드론 솔루션을 통해 국방 안보를 강화하고,<br />
                  지역 사회의 공공안전 및 물류 접근성을 개선하여<br />
                  기술로 사회적 불균형을 해소합니다."
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">자율비행 기반 솔루션</h4>
                    <p className="text-sm text-gray-600">한울드론만의 개발 중인 핵심 기술 집중</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">국방 안보</h4>
                    <p className="text-sm text-gray-600">방산 전문의 전략적 방향 반영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Partners Section */}
        <PartnersSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
