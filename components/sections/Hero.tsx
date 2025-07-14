const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          한울드론
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          혁신적인 드론 기술로 더 나은 미래를 만들어갑니다
        </p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          서비스 알아보기
        </button>
      </div>
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/CES_HanulDrone_homepage_muted.mp4" type="video/mp4" />
      </video>
    </section>
  )
}

export default Hero