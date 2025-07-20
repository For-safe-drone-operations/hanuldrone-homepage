import { siteConfig } from '../../siteConfig'

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen pt-16 overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        <video
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src='/video/CES_HanulDrone_homepage_muted.mp4'
            type='video/mp4'
          />
        </video>
      </div>

      {/* Content */}
      <div className='relative z-10 min-h-screen flex items-end justify-start'>
        <div className='container mx-auto px-4'>
          {/* Main Title */}
          <div className='text-left mb-40 ml-4'>
            <div className='mb-8'>
              <div className='mb-4'>
                <div className='inline-block -px-1 -py-0.5 rounded-lg backdrop-blur-sm bg-black/5'>
                  <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight text-left'>
                    {siteConfig.company.name}
                  </h1>
                </div>
              </div>
              <div className='mb-8'>
                <div className='inline-block -px-1 -py-0.5 rounded-lg backdrop-blur-sm bg-black/3'>
                  <div className='text-3xl md:text-4xl text-white/90 font-light text-left'>
                    {siteConfig.sections.hero.subtitle.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < siteConfig.sections.hero.subtitle.split('\n').length - 1 && <br/>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce drop-shadow-lg'>
        <div className='flex flex-col items-center'>
          <span className='text-sm mb-2'>스크롤</span>
          <div className='w-6 h-10 border-2 border-white/40 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
