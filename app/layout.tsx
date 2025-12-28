import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import './globals.css'

// Inter - Single typeface for everything
// Optimized for performance: preload enabled, subset limited to latin
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap', // Prevents invisible text during font load
  preload: true,
})

export const metadata: Metadata = {
  title: 'Nayuku Cage Fishing',
  description: 'Professional aquaculture services in Uganda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

