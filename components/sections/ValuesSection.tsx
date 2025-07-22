'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

const ValuesSection = () => {
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

  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id='values' className='py-24 bg-white' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-center mb-20'
        >
          <motion.h2
            variants={titleVariants}
            className='text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6'
          >
            <Text>{siteConfig.sections.values.title}</Text>
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className='text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto'
          >
            <Text>{siteConfig.sections.values.description}</Text>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='max-w-4xl mx-auto space-y-6'
        >
          {siteConfig.sections.values.items.map((value, index) => (
            <motion.div
              key={value.id}
              variants={index % 2 === 0 ? leftCardVariants : rightCardVariants}
              className={`flex items-center gap-6 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className='flex-1 max-w-lg'>
                <div className='bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600'>
                  <div className='flex items-center gap-3 mb-3'>
                    <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-900'>
                      <Text>{value.title}</Text>
                    </h3>
                  </div>
                  <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                    <Text>{value.description}</Text>
                  </p>
                </div>
              </div>

              <div className='flex-shrink-0 w-28 h-28 relative'>
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className='object-cover rounded-xl'
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ValuesSection
