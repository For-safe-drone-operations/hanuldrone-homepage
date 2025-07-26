import type { Metadata } from 'next'
import { pretendard } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { siteConfig } from '@/siteConfig'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const siteName = siteConfig.company.name
const siteDescription =
  '국방 드론 기술로 생명과 안전을 지키고, 지역·민간으로 가치를 확장하는 국방·공공 드론 솔루션 솔루션 전문기업'
const siteUrl = 'https://hanuldrone.com'

export const metadata: Metadata = {
  applicationName: siteName,
  title: {
    default: `${siteName} - 국방·공공 드론 솔루션 전문기업`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    '드론',
    '한울드론',
    '군사용 드론',
    '물류 드론',
    '드론 배송',
    '국방 드론',
    '드론 솔루션',
    '자율비행',
    '드론 기술',
    'UAV',
    'VTOL',
    '무인항공기',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} - 첨단 드론 솔루션 전문기업`,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - 첨단 드론 솔루션 전문기업`,
    description: siteDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${pretendard.variable} font-sans antialiased bg-gradient-to-b from-blue-500 via-sky-300 to-white min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
