'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

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
            <Text>{siteConfig.sections.services.title}</Text>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            <Text>{siteConfig.sections.services.description}</Text>
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {siteConfig.sections.services.items.map((service) => (
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