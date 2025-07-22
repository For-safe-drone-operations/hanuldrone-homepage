import Image from 'next/image'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

const PartnersSection = () => {
  return (
    <section className='py-16 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-4'>
          <Text>{siteConfig.sections.partners.title}</Text>
        </h2>
        <p className='text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
          <Text>{siteConfig.sections.partners.description}</Text>
        </p>
      </div>

      <div className='relative'>
        {/* Scrolling Container */}
        <div className='flex animate-scroll'>
          {/* First Set */}
          <div className='flex shrink-0 justify-around items-center min-w-full'>
            {siteConfig.sections.partners.items.map((partner) => (
              <div
                key={`first-${partner.englishName}`}
                className='flex items-center justify-center px-8 py-4 mx-4'
              >
                <div className='flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={`object-contain transition-all duration-300 ${
                      partner.englishName === 'taean' ? '-translate-y-2' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Set - for seamless loop */}
          <div className='flex shrink-0 justify-around items-center min-w-full'>
            {siteConfig.sections.partners.items.map((partner) => (
              <div
                key={`second-${partner.englishName}`}
                className='flex items-center justify-center px-8 py-4 mx-4'
              >
                <div className='flex items-center justify-center hover:scale-110 transition-transform duration-300'>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={`object-contain transition-all duration-300 ${
                      partner.englishName === 'taean' ? '-translate-y-2' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default PartnersSection
