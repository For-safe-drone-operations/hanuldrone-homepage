import type { Metadata } from 'next'
import { pretendard } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '한울 드론',
  description: '차세대 드론 기술로 미래를 선도하는 한울 드론',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} font-sans antialiased bg-gradient-to-b from-blue-500 via-sky-300 to-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
