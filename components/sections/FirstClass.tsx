const FirstClass = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">First Class</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최고 품질의 드론 검사 및 모니터링 서비스
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">정밀 검사</h3>
            <p className="text-gray-600">
              고해상도 카메라와 센서를 활용한 정밀한 시설물 검사
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">실시간 모니터링</h3>
            <p className="text-gray-600">
              24시간 실시간 모니터링으로 안전 상태 확인
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-bold mb-4">데이터 분석</h3>
            <p className="text-gray-600">
              AI 기반 데이터 분석으로 예방 정비 솔루션 제공
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstClass