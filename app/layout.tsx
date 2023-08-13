import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster.provider'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MigrAI',
  description: 'Unlock seamless Canadian immigration with MigrAI. Harness AI-driven insights, tailored advice, and streamlined processes for your migration journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>


        <ModalProvider /> 
        <ToasterProvider />
        {children}</body>
    </html>
  </ClerkProvider>
  )
}
