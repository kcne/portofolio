import type { Metadata } from 'next'
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased light",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  )
}
