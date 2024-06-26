import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToastProvider } from '@/components/toaster-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThinkerAI',
  description: 'AI SaaS App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en"><ClerkProvider>
        <body className={inter.className}>
          <ModalProvider/>
          <ToastProvider/>
          {children}
        </body>
      </ClerkProvider></html>
    
    
  )
}
