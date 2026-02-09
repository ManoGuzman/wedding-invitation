import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
})

// Add your local fonts
const handwrittenFont = localFont({
  src: [
    {
      path: './fonts/Better Yesterday.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BetterYesterday-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-handwritten',
})

const appleGaramondFont = localFont({
  src: [
    {
      path: './fonts/AppleGaramond-Bold.ttf',
      weight: '400',
      style: 'bold',
    }
  ],
  variable: '--font-apple-garamond',
})

export const metadata: Metadata = {
  title: 'Boda Gaby y Ale',
  description: 'Invitación digital de boda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${cormorantGaramond.variable} ${handwrittenFont.variable} ${appleGaramondFont.variable}`}>{children}</body>
    </html>
  )
}
