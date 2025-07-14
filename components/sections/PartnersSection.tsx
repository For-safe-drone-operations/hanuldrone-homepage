import Image from 'next/image'
import { useMemo } from 'react'

const PartnersSection = () => {
  const partners = useMemo(
    () => [
      {
        name: "한서대학교",
        englishName: "hanseo-university",
        src: "/image/logo-hanseo-university.jpg",
        width: 125,
        height: 45
      },
      {
        name: "국토교통부",
        englishName: "ministry-of-land",
        src: "/image/logo-ministry-of-land.jpg",
        width: 145,
        height: 55
      },
      {
        name: "서산시",
        englishName: "seosan",
        src: "/image/logo-seosan.png",
        width: 140,
        height: 50
      },
      {
        name: "태안군",
        englishName: "taean",
        src: "/image/logo-taean.jpg",
        width: 100,
        height: 42
      },
      {
        name: "국방기술진흥연구소",
        englishName: "krit",
        src: "/image/logo-krit.jpg",
        width: 240,
        height: 95
      }
    ],
    []
  )

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          협력 파트너
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          한울드론의 미래를 함께 만들고, 성장을 지지하는 든든한 동반자들입니다.
        </p>
      </div>
      
      <div className="relative">
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First Set */}
          <div className="flex shrink-0 justify-around items-center min-w-full">
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-8 py-4 mx-4"
              >
                <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
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
          <div className="flex shrink-0 justify-around items-center min-w-full">
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-8 py-4 mx-4"
              >
                <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
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