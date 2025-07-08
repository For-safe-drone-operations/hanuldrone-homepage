import localFont from 'next/font/local'

export const pretendard = localFont({
  src: [
    {
      path: '../public/font/Pretendard-Black.woff2',
      weight: '900',
    },
    {
      path: '../public/font/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../public/font/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/font/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/font/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/font/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/font/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: '../public/font/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../public/font/Pretendard-Thin.woff2',
      weight: '100',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})