import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

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
        className={`${inter.variable} font-sans antialiased bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
