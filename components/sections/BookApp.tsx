const BookApp = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            드론 서비스 예약
          </h2>
          <p className="text-xl mb-8 opacity-90">
            간편한 예약 시스템으로 필요한 드론 서비스를 신청하세요
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">검사 서비스</h3>
              <p className="mb-6 opacity-90">
                시설물 점검, 안전 검사, 모니터링 서비스를 예약하세요
              </p>
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                검사 예약하기
              </button>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">배송 서비스</h3>
              <p className="mb-6 opacity-90">
                빠르고 안전한 드론 배송 서비스를 이용해보세요
              </p>
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                배송 예약하기
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-4">
              더 자세한 상담이 필요하시나요?
            </p>
            <button className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              전문가 상담 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookApp