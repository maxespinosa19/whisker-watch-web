import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whisker Watch',
  description: 'Discover cute strays around you!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className + ' bg-pink-100'}>{children}</body>
    </html>
  )
}
