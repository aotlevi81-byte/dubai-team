import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: siteConfig.page.title,
  description: siteConfig.page.description,
  icons: [
    {
      href: siteConfig.logo.href,
      url: siteConfig.logo.href
    }
  ]
}

const font = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${font.className} selection:bg-brand antialiased selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Navigation />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
