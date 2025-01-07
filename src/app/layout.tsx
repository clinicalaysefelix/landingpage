import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import { siteConfig } from '@/config'
import { WhatsappButton } from '@/components/whatsapp-button'

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    { name: 'Aridan Pantoja', url: 'https://aridan.dev' },
    { name: 'Karol Wojtyla', url: 'https://github.com/kwojtyla' },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  icons: '/favicon.ico',
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn('antialiased', plusJakartaSans.className)}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="h-full flex-grow">{children}</main>
          <Footer />
          <WhatsappButton />
        </div>
      </body>
    </html>
  )
}
