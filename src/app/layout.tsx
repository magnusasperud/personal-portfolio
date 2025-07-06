import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/contexts/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Engineer Portfolio',
  description: 'Professional portfolio showcasing data engineering expertise, projects, and experience.',
  keywords: ['data engineer', 'portfolio', 'data science', 'analytics', 'python', 'sql'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Data Engineer Portfolio',
    description: 'Professional portfolio showcasing data engineering expertise.',
    siteName: 'Data Engineer Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
