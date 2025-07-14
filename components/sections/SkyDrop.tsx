const SkyDrop = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SkyDrop</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            첨단 드론 배송 솔루션으로 빠르고 안전한 물류 서비스를 제공합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">스마트 배송 시스템</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                자동 경로 최적화
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                실시간 배송 추적
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                안전한 착륙 시스템
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
            <p className="text-gray-600">드론 배송 시연 영상</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkyDrop