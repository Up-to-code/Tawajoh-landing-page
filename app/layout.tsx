import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'تَوَجُّه - منصتك لبناء مشروعك الرقمي الذكي',
  description: 'منصة رقمية ذكية قادمة قريبًا - اترك بريدك وسنخبرك عند الانطلاق',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
