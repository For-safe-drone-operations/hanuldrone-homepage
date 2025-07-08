import Image from 'next/image'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className='relative'>
      {/* 배경 그라데이션 */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-cyan-200 h-screen' />

      {/* 구름 효과 */}
      <div className='absolute top-20 left-10 w-32 h-16 bg-white/20 rounded-full blur-xl' />
      <div className='absolute top-32 right-20 w-24 h-12 bg-white/15 rounded-full blur-lg' />
      <div className='absolute bottom-32 left-20 w-28 h-14 bg-white/10 rounded-full blur-lg' />

      {/* 메인 콘텐츠 */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen p-8'>
        {/* 상단 배지 */}
        <div className='absolute top-8 right-8 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold'>
          <span className='w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-xs'>
            🚁
          </span>
          Now available in Korea
        </div>

        {/* 메인 타이틀 */}
        <div className='text-center mb-12'>
          <h1 className='text-8xl md:text-9xl font-black text-white mb-4 tracking-tight'>
            Air
          </h1>
          <h1 className='text-6xl md:text-7xl font-black text-white mb-8 tracking-tight'>
            delivery
          </h1>
          <p className='text-xl md:text-2xl text-white/90 font-medium max-w-2xl'>
            Get anything. From the sky. Same day.
          </p>
          <p className='text-lg md:text-xl text-white/80 mt-2'>
            차세대 드론 기술로 하늘에서 바로 배송받으세요
          </p>
        </div>

        {/* 중앙 드론 캐릭터 */}
        <div className='relative mb-12'>
          <div className='relative w-48 h-48 mx-auto'>
            {/* 드론 몸체 */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl'>
              {/* 드론 눈 */}
              <div className='absolute top-12 left-12 w-6 h-6 bg-white rounded-sm'></div>
              <div className='absolute top-12 right-12 w-6 h-6 bg-white rounded-sm'></div>
              <div className='absolute top-16 left-16 w-4 h-4 bg-white rounded-sm'></div>
              <div className='absolute top-16 right-16 w-4 h-4 bg-white rounded-sm'></div>
            </div>

            {/* 프로펠러 */}
            <div className='absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg animate-spin'></div>
            <div className='absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg animate-spin'></div>
            <div className='absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg animate-spin'></div>
            <div className='absolute -bottom-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg animate-spin'></div>

            {/* 프로펠러 암 */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-1 bg-white rounded-full'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-52 bg-white rounded-full'></div>
          </div>
        </div>

        {/* 버튼 */}
        <div className='flex gap-6 mb-12'>
          <button
            type='button'
            className='bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
          >
            주문하기
          </button>
          <button
            type='button'
            className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300'
          >
            서비스 알아보기
          </button>
        </div>
      </div>

      {/* 플로팅 아이템들 */}
      <div
        className='absolute top-20 left-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg animate-bounce'
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className='absolute top-40 right-24 w-12 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg animate-bounce'
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div
        className='absolute bottom-40 left-24 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg animate-bounce'
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className='absolute bottom-20 right-16 w-18 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg animate-bounce'
        style={{ animationDelay: '1.5s' }}
      ></div>
      <div
        className='absolute top-1/2 left-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce'
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className='absolute top-1/2 right-8 w-16 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg animate-bounce'
        style={{ animationDelay: '2.5s' }}
      ></div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
