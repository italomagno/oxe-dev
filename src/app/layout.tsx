import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

const arial = Noto_Sans({ subsets: ['latin'], weight: ["100", '400', '700'] })

export const metadata: Metadata = {
  title: 'OxeDev',
  description: 'Dale boys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={arial.className}>
        <Header />
        {
          children
        }
        <Footer />
        </body>
    </html>
  )
}
