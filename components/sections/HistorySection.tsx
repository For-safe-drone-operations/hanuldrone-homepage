'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

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
            className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            <Text>{siteConfig.sections.history.title}</Text>
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-gray-600 text-sm sm:text-base"
          >
            <Text>{siteConfig.sections.history.description}</Text>
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {siteConfig.sections.history.data.map((yearData) => (
              <motion.div 
                key={yearData.year}
                variants={yearVariants}
                className="border-l-4 border-blue-600 pl-6"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-600">
                  {yearData.year}
                </h3>
                <ul className="space-y-2">
                  {yearData.items.map((item, index) => (
                    <li key={index} className="text-gray-700 text-sm sm:text-base">
                      • {item.isBold ? (
                        <Text as="span" className="font-bold">{item.text}</Text>
                      ) : (
                        <Text>{item.text}</Text>
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