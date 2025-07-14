const Locations = () => {
  const locations = [
    { name: "서산시", logo: "/image/logo-seosan.png", project: "스마트시티 드론 배송" },
    { name: "태안군", logo: "/image/logo-taean.jpg", project: "해안 모니터링" },
    { name: "한서대학교", logo: "/image/logo-hanseo-university.jpg", project: "연구개발 협력" },
    { name: "국토교통부", logo: "/image/logo-ministry-of-land.jpg", project: "드론 정책 개발" },
    { name: "KRIT", logo: "/image/logo-krit.jpg", project: "기술 혁신" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">협력 기관</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 기관과의 협력을 통해 드론 기술의 발전을 이끌어가고 있습니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <img 
                src={location.logo} 
                alt={location.name}
                className="w-16 h-16 object-contain mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations