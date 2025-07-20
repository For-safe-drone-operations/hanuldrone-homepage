'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CompanySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="company" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            회사 소개
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            (주)한울드론은 2022년 설립된 기술 혁신 기업으로, 첨단 드론 기술로 다양한 산업 문제를 해결하고 있습니다.
            <br className="hidden md:block" />
            우리는 고객 비즈니스의 성장과 발전을 위한 최적 솔루션을 끊임없이 연구·개발합니다.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              variants={cardVariants}
              className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-900">혁신적인 기술</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                항공안전기술원 주관 '2023 드론 실증도시 구축사업'에서 화재 신속감시 및 초동진압 드론 개발 및 시연을 성공적으로 수행했습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/70 backdrop-blur p-4 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">60%+</div>
                  <div className="text-sm text-gray-600">석사 이상 전문 인력</div>
                </div>
                <div className="bg-white/70 backdrop-blur p-4 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">2023</div>
                  <div className="text-sm text-gray-600">드론 실증도시 선정</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={rightCardVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-3xl text-white"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">전문 인력</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                CEO와 CTO를 비롯한 핵심 인력 모두 드론 및 무인항공 분야 석사 이상 학위를 보유한 전문가로 구성되어 있습니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">자율비행·군집비행 기술</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">AI 기반 비행제어</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">데이터 분석 기술</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white border border-gray-200 p-8 rounded-2xl text-center"
          >
            <p className="text-gray-600 text-lg">
              "우리는 드론 기술을 통해 산업의 문제를 해결하고, <span className="font-semibold text-gray-900">고객의 미래를 함께 만들어가는 혁신 파트너</span>입니다."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanySection