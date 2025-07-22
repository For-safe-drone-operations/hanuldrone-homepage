import Image from 'next/image'
import { siteConfig } from '../../siteConfig'
import Text from '@/components/ui/Text'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // 공통 스타일 클래스를 변수로 분리
  const textStyles = 'text-sm text-gray-500'
  const copyrightStyles = 'text-sm text-gray-600'

  // 회사 정보를 config에서 가져오기
  const companyInfo = siteConfig.footer.companyInfo

  return (
    <footer className='bg-white border-t border-gray-200 py-8 md:py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col gap-4 md:gap-5'>
          {/* 회사 로고 */}
          <div className='flex justify-start'>
            <Image
              src='/svg/companyLogo.svg'
              alt={`${siteConfig.company.name} 로고`}
              width={120}
              height={40}
              className='h-10 w-auto opacity-80'
            />
          </div>
          
          <div className='flex flex-col gap-1'>
            {companyInfo.map((info) => (
              <div key={info.id} className={textStyles}>
                <Text>{info.text}</Text>
              </div>
            ))}
          </div>
          <div className={copyrightStyles}>
            <Text>ⓒ 2023-{currentYear} 한울드론. All Rights Reserved.</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
