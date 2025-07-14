const Testimonials = () => {
  const testimonials = [
    {
      name: "김영수",
      company: "서산시청",
      role: "스마트시티 담당관",
      content: "한울드론의 배송 서비스로 업무 효율성이 크게 향상되었습니다. 정확하고 빠른 서비스가 인상적입니다.",
      rating: 5
    },
    {
      name: "박미진",
      company: "한서대학교",
      role: "연구교수",
      content: "드론 검사 기술의 정밀도가 매우 높습니다. 연구 협력을 통해 더 나은 기술 발전을 기대합니다.",
      rating: 5
    },
    {
      name: "이정호",
      company: "태안군청",
      role: "환경과장",
      content: "해안 모니터링 서비스가 환경 보호에 큰 도움이 되고 있습니다. 지속적인 협력을 원합니다.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">고객 후기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            한울드론과 함께한 고객들의 생생한 경험을 들어보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials