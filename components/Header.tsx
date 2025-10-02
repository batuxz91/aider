'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">AíDER</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/precios" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Precios
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Contacto
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/registro"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Prueba Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Inicio
              </Link>
              <Link href="/servicios" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Servicios
              </Link>
              <Link href="/precios" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Precios
              </Link>
              <Link href="/sobre-nosotros" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Contacto
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Blog
              </Link>
              <div className="pt-4">
                <Link
                  href="/registro"
                  className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                >
                  Prueba Gratuita
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
