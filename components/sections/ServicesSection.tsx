'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
  {
    id: 'logistics',
    title: '물류 배송 드론',
    description: '도서 산간 지역 배송, 긴급 의약품 배송, 라스트마일 배송 등 다양한 물류 분야에 최적화된 드론 솔루션',
    icon: '📦',
    features: [
      '도서 산간 지역 특화 배송',
      '긴급 의약품 운송 시스템',
      '라스트마일 배송 솔루션',
      '실시간 배송 추적 시스템'
    ]
  },
  {
    id: 'military',
    title: '군용 드론',
    description: '정찰, 감시, 통신 중계, 전술 작전 지원 등 국방 분야의 다양한 임무에 맞게 설계된 고성능 드론 솔루션',
    icon: '🛡️',
    features: [
      '고해상도 정찰 및 감시',
      '통신 중계 시스템',
      '전술 작전 지원',
      '자율 비행 시스템'
    ]
  }
]

const ServicesSection = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="solutions" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            핵심 서비스
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            한울드론은 첨단 기술과 혁신적인 솔루션으로
            <br />
            다양한 산업 분야에 최적화된 드론 서비스를 제공합니다
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection