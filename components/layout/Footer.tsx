import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // 공통 스타일 클래스를 변수로 분리
  const textStyles = 'text-sm text-gray-500'
  const copyrightStyles = 'text-sm text-gray-600'

  // 회사 정보를 배열로 구조화 (각 항목에 고유 id 부여)
  const companyInfo = [
    { id: 'company-name', text: '(주)한울드론 | 대표 엄송근' },
    {
      id: 'address',
      text: '충청남도 태안군 남면 곰섬로 236-49, 216호(창업2관)',
    },
    { id: 'business-number', text: '사업자 등록번호 : 596-81-02847' },
    { id: 'email', text: 'hanuldrone3@hanuldrone.com' },
  ]

  return (
    <footer className='bg-gray-50 py-8 md:py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col gap-6 md:gap-8'>
          {/* 회사 로고 */}
          <div className='flex justify-center'>
            <Image
              src='/svg/companyLogo.svg'
              alt='한울드론 로고'
              width={120}
              height={40}
              className='h-10 w-auto opacity-80'
            />
          </div>
          
          <div className='flex flex-col gap-2'>
            {companyInfo.map((info) => (
              <div key={info.id} className={textStyles}>
                {info.text}
              </div>
            ))}
          </div>
          <div className={copyrightStyles}>
            ⓒ 2023-{currentYear} Hanuldrone inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
