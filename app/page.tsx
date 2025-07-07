import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8'>
      <div className='bg-white/20 backdrop-blur-md rounded-lg p-8 shadow-xl'>
        <h1 className='text-4xl font-bold text-blue-900 mb-4'>한울 드론</h1>
        <p className='text-xl text-blue-700 mb-6'>
          차세대 드론 기술로 미래를 선도합니다
        </p>
        <div className='flex gap-4'>
          <button
            type='button'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors'
          >
            시작하기
          </button>
          <button
            type='button'
            className='bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors'
          >
            더 알아보기
          </button>
        </div>
      </div>
    </div>
  )
}
