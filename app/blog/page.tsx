export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Consejos para Optimizar tu Gestión Financiera Rural",
      excerpt: "Descubre las mejores prácticas para mantener tu empresa agropecuaria financieramente saludable.",
      date: "15 de Enero, 2024",
      readTime: "5 min",
      category: "Gestión Financiera",
      image: "💰"
    },
    {
      title: "Cómo Elegir el Software Contable para el Campo",
      excerpt: "Guía completa para seleccionar la mejor herramienta contable para empresas agropecuarias.",
      date: "10 de Enero, 2024",
      readTime: "7 min",
      category: "Tecnología Rural",
      image: "🌾"
    },
    {
      title: "Control de Gastos en Empresas Agropecuarias",
      excerpt: "Estrategias efectivas para controlar los 20 tipos de gastos más comunes en el sector rural.",
      date: "5 de Enero, 2024",
      readTime: "6 min",
      category: "Control de Gastos",
      image: "📊"
    },
    {
      title: "Reportes Financieros que Toda Empresa Rural Debe Tener",
      excerpt: "Los reportes esenciales para tomar decisiones informadas en tu negocio agropecuario.",
      date: "28 de Diciembre, 2023",
      readTime: "8 min",
      category: "Reportes",
      image: "📈"
    },
    {
      title: "Gestión de Proyectos Estacionales en Agricultura",
      excerpt: "Cómo organizar y controlar proyectos que varían según las estaciones del año.",
      date: "20 de Diciembre, 2023",
      readTime: "4 min",
      category: "Proyectos",
      image: "🌱"
    },
    {
      title: "Digitalización del Campo: El Futuro de la Agricultura",
      excerpt: "Cómo la tecnología está transformando la gestión de empresas agropecuarias.",
      date: "15 de Diciembre, 2023",
      readTime: "10 min",
      category: "Innovación",
      image: "🚜"
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog AíDER
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias en gestión financiera agropecuaria, 
            tecnología rural y mejores prácticas para empresas del campo.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="text-6xl mb-4">💰</div>
                <div className="text-sm text-primary-600 font-semibold mb-2">DESTACADO</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  5 Consejos para Optimizar tu Gestión Financiera Rural
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Descubre las mejores prácticas para mantener tu empresa agropecuaria financieramente saludable. 
                  Aprende a optimizar tus procesos contables y tomar decisiones más informadas en el campo.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>15 de Enero, 2024</span>
                  <span className="mx-2">•</span>
                  <span>5 min de lectura</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Leer artículo completo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-8xl">💰</div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="text-sm text-primary-600 font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Leer más
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para comenzar con AíDER?
          </h3>
          <p className="text-primary-100 mb-6">
            Regístrate gratis y comienza a gestionar las finanzas de tu empresa agropecuaria hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registro"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Crear Cuenta Gratuita
            </a>
            <a
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
