import { siteConfig } from '../../siteConfig'
import { useEffect, useState } from 'react'
import Text from '@/components/ui/Text'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section id='home' className='relative min-h-screen pt-16 overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        {mounted && (
          <video
            className='w-full h-full object-cover min-w-full min-h-full'
            autoPlay
            loop
            muted
            playsInline
            poster='/image/hero-poster.jpg'
            preload='metadata'
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source
              src='/video/CES_HanulDrone_homepage_muted.webm'
              type='video/webm'
            />
            <source
              src='/video/CES_HanulDrone_homepage_muted_optimized.mp4'
              type='video/mp4'
            />
          </video>
        )}
      </div>

      {/* Content */}
      <div className='relative z-10 min-h-screen flex items-end justify-start'>
        <div className='container mx-auto px-4'>
          {/* Main Title */}
          <div className='text-left mb-20 md:mb-40 ml-2 md:ml-4'>
            <div className='mb-6 md:mb-8'>
              <div className='mb-3 md:mb-4'>
                <div className='inline-block -px-1 -py-0.5 rounded-lg'>
                  <h1 className='text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-tight text-left'>
                    <Text>{siteConfig.company.name}</Text>
                  </h1>
                </div>
              </div>
              <div className='mb-6 md:mb-8'>
                <div className='inline-block -px-1 -py-0.5 rounded-lg'>
                  <Text className='text-lg sm:text-xl md:text-4xl text-white/90 font-light text-left' as='div'>
                    {siteConfig.sections.hero.subtitle}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce drop-shadow-lg'>
        <div className='flex flex-col items-center'>
          <span className='text-sm mb-2'><Text>스크롤</Text></span>
          <div className='w-6 h-10 border-2 border-white/40 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
