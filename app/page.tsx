'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PartnersSection from '@/components/sections/PartnersSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CompanySection from '@/components/sections/CompanySection'

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

        {/* Vision & Mission Section */}
        <section id="vision" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
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
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">지능형 드론 기술</h4>
                    <p className="text-sm text-gray-600">AI시간 자율비행, 군집비행, 장애물 회피 등 첨단기술을 보유</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
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
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">자율비행 기반 솔루션</h4>
                    <p className="text-sm text-gray-600">한울드론만의 개발 중인 핵심 기술 집중</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">국방 안보</h4>
                    <p className="text-sm text-gray-600">방산 전문의 전략적 방향 반영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className="min-h-screen py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              핵심 가치
            </h2>
            <p className="text-center text-gray-600 mb-16">
              한울드론이 추구하는 핵심 가치를 소개합니다.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              주요 연혁
            </h2>
            <p className="text-center text-gray-600 mb-16">
              한울드론의 성장 과정과 주요 이정표를 소개합니다.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* 2022 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">2022</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• (주) 한울드론 법인 설립</li>
                  </ul>
                </div>

                {/* 2023 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">2023</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• 청년창업사관학교 기업 선정 (중소벤처기업부 주관)</li>
                    <li className="text-gray-700">• 드론 실증도시 구축 사업 VTOL 의약품 배송 분야 사업자 선정</li>
                    <li className="text-gray-700">• 기업부설 연구소 등록</li>
                    <li className="text-gray-700">• 벤처기업 인증</li>
                  </ul>
                </div>

                {/* 2024 */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">2024</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• 드론 실증도시 구축사업 물품 배송 분야 사업자 선정</li>
                    <li className="text-gray-700">• 디지털 물류서비스 실증 사업 VTOL 의약품 배송 분야 사업자 선정</li>
                    <li className="text-gray-700">• 연구개발기업 인증</li>
                    <li className="text-gray-700">• 육해공 무인이동체 챌린지 우수상 수상</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              문의하기
            </h2>
            <p className="text-center text-gray-600 mb-16">
              궁금한 점이 있으시면 언제든지 문의해 주세요
            </p>
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
