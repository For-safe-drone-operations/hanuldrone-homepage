import Image from 'next/image'
import Link from 'next/link'
import ContactModal from '@/components/ui/ContactModal'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200/50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* 로고 */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/svg/companyLogo.svg'
              alt='한울드론 로고'
              width={120}
              height={40}
              priority
              className='h-10 w-auto'
            />
          </Link>

          {/* 네비게이션 */}
          <nav className='flex items-center space-x-4 md:space-x-6 lg:space-x-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base'
            >
              메인
            </Link>
            <a
              href='https://hanuldrone.blog/'
              className='text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base'
            >
              블로그
            </a>
          </nav>

          {/* 문의 버튼 */}
          <div className='flex items-center'>
            <ContactModal>
              <button
                type='button'
                className='bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base'
              >
                문의하기
              </button>
            </ContactModal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
