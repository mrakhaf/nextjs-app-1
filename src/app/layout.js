'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Ini dari root</h1>
        <Link className={`link ${pathname === '/dashboard' ? styles.active : ''}`} href="/dashboard">Dashboard</Link>
        <Link className={`link ${pathname === '/contact' ? styles.active : ''}`} href="/contact">Contact Us</Link>
        {children}

      </body>
    </html>
  )
}
