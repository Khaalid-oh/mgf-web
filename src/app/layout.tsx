import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.css'

const exo = Exo_2({ subsets: ['latin',] })

export const metadata: Metadata = {
  title: 'MGF web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  )
}
