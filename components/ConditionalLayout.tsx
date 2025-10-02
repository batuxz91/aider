'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()

  // Si estamos en el dashboard o autenticación, no mostrar header ni footer
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return <>{children}</>
  }

  // Para todas las demás páginas, mostrar header y footer
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}