'use client'

import { motion } from 'framer-motion'
import Text from '@/components/ui/Text'
import { siteConfig } from '../../siteConfig'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
  }
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-2xl p-8 md:p-10 h-full hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center mb-6">
        <span className="text-3xl md:text-4xl mr-4">{service.icon}</span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          <Text>{service.title}</Text>
        </h3>
      </div>
      
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
        <Text>{service.description}</Text>
      </p>
      
      <div className="space-y-3">
        <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
          <Text>{siteConfig.sections.services.featuresTitle}</Text>
        </h4>
        {service.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <svg 
              className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <Text className="text-gray-700 text-sm sm:text-base">{feature}</Text>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  )
}

export default ServiceCard