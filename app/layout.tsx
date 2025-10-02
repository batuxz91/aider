import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AíDER - Sistema de Gestión Financiera Agropecuaria',
  description: 'Sistema integral de gestión financiera especializado para empresas del sector agropecuario argentino',
  keywords: 'gestión financiera, agropecuario, agricultura, contabilidad, facturación, AíDER',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
