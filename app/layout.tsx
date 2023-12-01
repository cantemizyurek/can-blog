import { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Can Temizyurek',
  description: 'Personal website of Can Temizyurek',
  creator: 'Can Temizyurek',
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-pink-100 flex flex-col min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
