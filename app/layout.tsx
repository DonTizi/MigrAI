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
  description: 'Your Immigration AI Solver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <ClerkProvider>
    <html lang="en">
      <Script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="74bd671a-db9d-4aad-aa9b-776827ce6afe";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</Script>
      <body className={inter.className}>


        <ModalProvider /> 
        <ToasterProvider />
        {children}</body>
    </html>
  </ClerkProvider>
  )
}
