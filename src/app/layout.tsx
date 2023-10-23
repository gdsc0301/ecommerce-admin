import './globals.scss'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { Providers } from './providers'

const mainFontFamily = Lato({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Visie Ecommerce',
  description: 'Visie store',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  authors: [{
    name: 'Guilherme Carvalho',
    url: 'https://www.linkedin.com/in/guilherme-c/'
  }]
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${mainFontFamily.className} relative pb-[102px] lg:pb-[104px] min-h-screen`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
