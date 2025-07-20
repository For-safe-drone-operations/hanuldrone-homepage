'use client'

import { motion } from 'framer-motion'

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
        <span className="text-5xl mr-4">{service.icon}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {service.title}
        </h3>
      </div>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 특징</h4>
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
            <span className="text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  )
}

export default ServiceCard