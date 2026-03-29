import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import '@/shared/globals.css'

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-cormorant-garamond',
})

const betterYesterday = localFont({
    src: [
        {
            path: '../_shared/assets/fonts/Better Yesterday.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-better-yesterday',
})

const appleGaramond = localFont({
    src: [
        {
            path: '../_shared/assets/fonts/AppleGaramond-Bold.ttf',
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

/* Root layout component that wraps the entire application.
 * Applies global fonts and sets the HTML language attribute.
 * @param children - The child components to be rendered within the layout
 * @returns The root layout component with global styles and fonts
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={`${cormorantGaramond.variable} ${betterYesterday.variable} ${appleGaramond.variable}`}>{children}</body>
        </html>
    )
}
