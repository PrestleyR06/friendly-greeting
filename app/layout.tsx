import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kleanera | Elevating Property Standards',
  description: 'Premium property maintenance and cleaning services for real estate, Airbnb, serviced accommodation, and commercial properties. Experience structured, quality-controlled property care.',
  keywords: ['property maintenance', 'cleaning services', 'Airbnb cleaning', 'end of tenancy cleaning', 'commercial cleaning', 'real estate cleaning', 'Kleanera'],
  icons: {
    icon: '/images/kleanera-icon.png',
    apple: '/images/kleanera-icon.png',
  },
}

export const viewport = {
  themeColor: '#f3faff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
