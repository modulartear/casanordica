import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Jost } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })

export const metadata: Metadata = {
  title: 'Cortinas Roller a Medida | Casa Nórdica · Diseño, luz y calidez',
  description:
    'Cortinas roller y de tela a medida con diseño nórdico. Elegí tu modelo, indicá las medidas y recibí tu presupuesto por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-casa-nordica.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2e2e2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${dmSans.variable} ${jost.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
