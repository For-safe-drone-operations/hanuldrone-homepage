'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '../../siteConfig'

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
            {siteConfig.sections.company.title}
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className='text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'
          >
            {siteConfig.sections.company.subDescription
              .split('\n')
              .map((line, index) => (
                <span key={line}>
                  {line}
                  {index === 0 && <br className='hidden md:block' />}
                </span>
              ))}
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
                {siteConfig.sections.company.cards.technology.title}
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed mb-6'>
                {siteConfig.sections.company.cards.technology.description}
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/70 backdrop-blur p-4 rounded-xl'>
                  <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
                    {siteConfig.sections.company.achievements.stat1Value}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {siteConfig.sections.company.achievements.stat1Description}
                  </div>
                </div>
                <div className='bg-white/70 backdrop-blur p-4 rounded-xl'>
                  <div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
                    {siteConfig.sections.company.achievements.stat2Value}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {siteConfig.sections.company.achievements.stat2Description}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={rightCardVariants}
              className='bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-3xl text-white'
            >
              <h3 className='text-xl md:text-2xl font-bold mb-4'>
                {siteConfig.sections.company.cards.professionals.title}
              </h3>
              <p className='text-gray-200 leading-relaxed mb-6'>
                {siteConfig.sections.company.cards.professionals.description}
              </p>
              <div className='space-y-3'>
                {siteConfig.sections.company.expertise.map((skill) => (
                  <div key={skill} className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                    <span className='text-sm'>{skill}</span>
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
              "{siteConfig.sections.company.quote}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanySection
