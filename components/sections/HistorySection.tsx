'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const historyData = [
  {
    year: '2022',
    items: [
      { text: '(주) 한울드론 법인 설립', isBold: true }
    ]
  },
  {
    year: '2023',
    items: [
      { text: '청년창업사관학교 기업 선정 (중소벤처기업부 주관)', isBold: false },
      { text: '드론 실증도시 구축 사업 VTOL 의약품 배송 분야 사업자 선정', isBold: false },
      { text: '기업부설 연구소 등록', isBold: true },
      { text: '벤처기업 인증', isBold: true }
    ]
  },
  {
    year: '2024',
    items: [
      { text: '드론 실증도시 구축사업 물품 배송 분야 사업자 선정', isBold: false },
      { text: '디지털 물류서비스 실증 사업 VTOL 의약품 배송 분야 사업자 선정', isBold: false },
      { text: '연구개발기업 인증', isBold: true },
      { text: '육해공 무인이동체 챌린지 우수상 수상', isBold: false }
    ]
  }
]

const HistorySection = () => {
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

  const yearVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="history" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            주요 연혁
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-gray-600"
          >
            한울드론의 성장 과정과 주요 이정표를 소개합니다.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {historyData.map((yearData) => (
              <motion.div 
                key={yearData.year}
                variants={yearVariants}
                className="border-l-4 border-blue-600 pl-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  {yearData.year}
                </h3>
                <ul className="space-y-2">
                  {yearData.items.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      • {item.isBold ? (
                        <span className="font-bold">{item.text}</span>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HistorySection