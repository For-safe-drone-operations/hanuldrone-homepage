'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

const VisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="vision" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6"
          >
            <Text>{siteConfig.sections.vision.title}</Text>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-center text-gray-600 text-sm sm:text-base"
          >
            <Text>{siteConfig.sections.vision.description}</Text>
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Vision */}
          <motion.div variants={cardVariants} className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-600">
              <Text>{siteConfig.sections.vision.vision.title}</Text>
            </h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
              <Text>{siteConfig.sections.vision.vision.description}</Text>
            </p>
            <div className="space-y-4">
              {siteConfig.sections.vision.vision.features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">
                    <Text>{feature.title}</Text>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <Text>{feature.description}</Text>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div variants={cardVariants} className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-600">
              <Text>{siteConfig.sections.vision.mission.title}</Text>
            </h3>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
              <Text>{siteConfig.sections.vision.mission.description}</Text>
            </p>
            <div className="space-y-4">
              {siteConfig.sections.vision.mission.features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">
                    <Text>{feature.title}</Text>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    <Text>{feature.description}</Text>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection