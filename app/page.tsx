'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleResize = () => {
      setHeroHeight(window.innerHeight)
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // 초기값 설정
    setHeroHeight(window.innerHeight)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  // 스크롤 진행률 계산 (0-1 사이)
  const scrollProgress = Math.min(scrollY / heroHeight, 1)
  
  // 배경 색상 계산 (스크롤에 따라 밤하늘로 변화)
  const getBackgroundGradient = () => {
    const dayColors = {
      from: 'from-blue-400',
      via: 'via-blue-300',
      to: 'to-blue-100'
    }
    
    const nightColors = {
      from: 'from-blue-900',
      via: 'via-blue-800',
      to: 'to-blue-600'
    }
    
    if (scrollProgress < 0.3) {
      return `bg-gradient-to-b ${dayColors.from} ${dayColors.via} ${dayColors.to}`
    } else if (scrollProgress < 0.7) {
      return `bg-gradient-to-b from-blue-600 via-blue-500 to-blue-300`
    } else {
      return `bg-gradient-to-b ${nightColors.from} ${nightColors.via} ${nightColors.to}`
    }
  }
  return (
    <div>
      {/* Header */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
          {/* Sky Background with Gradient - Dynamic based on scroll */}
          <div className={`absolute inset-0 ${getBackgroundGradient()} transition-all duration-1000 ease-out`}></div>
          
          {/* Clouds Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-32 h-16 bg-white/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-32 right-10 w-40 h-20 bg-white/15 rounded-full blur-sm animate-pulse delay-300"></div>
            <div className="absolute top-40 left-1/3 w-24 h-12 bg-white/10 rounded-full blur-sm animate-pulse delay-700"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
              {/* Main Title */}
              <div className="text-center mb-16">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">
                    한울드론
                  </h1>
                  <div className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                    하늘을 여는 첨단 기술
                  </div>
                </div>
                
                {/* Subtitle with emphasis */}
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                    지능형 드론 기술로 사람과 지역사회를 연결하고,<br/>
                    지속 가능한 사회적 가치를 창출합니다
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">자율비행 기술</h3>
                    <p className="text-white/70 text-sm">AI 기반 자율비행 및 군집비행 기술</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">국방 솔루션</h3>
                    <p className="text-white/70 text-sm">방산 전문 기술로 국방 안보 강화</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">사회적 가치</h3>
                    <p className="text-white/70 text-sm">지역사회 공공안전 및 물류 혁신</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#solutions" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
                  >
                    서비스 보기
                  </a>
                  <a 
                    href="#contact" 
                    className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">스크롤</span>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              핵심 서비스
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              한울드론은 첨단 기술과 혁신적인 솔루션으로<br />
              다양한 산업 분야에 최적화된 드론 서비스를 제공합니다.
            </p>
          </div>
        </section>

        {/* Company Section */}
        <section id="company" className="min-h-screen py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              회사 소개
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto">
              (주)한울드론은 2022년에 설립된 기술 혁신 기업으로, 첨단 드론 기술을 활용하여 다양한 산업 분야의 문제를 해결하고 있습니다.<br />
              우리는 고객의 비즈니스 성장과 발전을 위한 최적의 솔루션을 제공하기 위해 끊임없이 연구하고 개발합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">혁신적인 기술</h3>
                <p className="text-gray-600">
                  최신 기술을 활용한 드론 솔루션으로 산업 현장의 효율성과 안전성을 높입니다.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">전문 인력</h3>
                <p className="text-gray-600">
                  드론 기술 분야의 전문가들이 모여 최고의 솔루션을 개발합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
