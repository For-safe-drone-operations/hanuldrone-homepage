'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

const CompanySection = () => {
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
    <section id='company' className='py-24 bg-gray-50' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-center mb-20'
        >
          <motion.h2
            variants={titleVariants}
            className='text-2xl md:text-4xl font-bold text-gray-900 mb-8'
          >
            <Text>{siteConfig.sections.company.title}</Text>
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className='text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'
          >
            <Text>{siteConfig.sections.company.subDescription}</Text>
          </motion.p>
        </motion.div>

        <div className='max-w-7xl mx-auto'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='grid lg:grid-cols-3 gap-8 mb-16'
          >
            <motion.div
              variants={cardVariants}
              className='lg:col-span-2 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl'
            >
              <h3 className='text-xl md:text-2xl font-bold mb-6 text-blue-900'>
                <Text>
                  {siteConfig.sections.company.cards.technology.title}
                </Text>
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed mb-6'>
                <Text>
                  {siteConfig.sections.company.cards.technology.description}
                </Text>
              </p>
              <div className='bg-white/70 backdrop-blur rounded-xl overflow-hidden'>
                <div className='divide-y divide-gray-200'>
                  {siteConfig.sections.company.companyInfo.map((item) => (
                    <div key={item.label} className='p-4 flex gap-4'>
                      <div className='w-20 text-sm font-semibold text-gray-700 shrink-0'>
                        <Text>{item.label}</Text>
                      </div>
                      <div className='text-sm text-gray-600 leading-relaxed'>
                        <Text>{item.value}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={rightCardVariants}
              className='bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-3xl text-white'
            >
              <h3 className='text-2xl md:text-3xl font-bold mb-6'>
                <Text>
                  {siteConfig.sections.company.cards.professionals.title}
                </Text>
              </h3>
              <p className='text-gray-200 text-lg leading-relaxed mb-8'>
                <Text>
                  {siteConfig.sections.company.cards.professionals.description}
                </Text>
              </p>
              <div className='space-y-4'>
                {siteConfig.sections.company.expertise.map((skill) => (
                  <div key={skill} className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                    <Text className='text-base'>{skill}</Text>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={titleVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='bg-white border border-gray-200 p-8 rounded-2xl text-center'
          >
            <p className='text-gray-600 text-lg'>
              <Text>{siteConfig.sections.company.quote}</Text>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanySection
