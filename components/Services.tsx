export default function Services() {
  const services = [
    {
      title: "Gestión Financiera Integral",
      description: "Control completo de ingresos y egresos con cálculo automático de IVA. Especializado para el sector agropecuario argentino.",
      features: ["Control de ingresos", "Gestión de egresos", "Cálculo automático de IVA", "Liquidaciones"],
      icon: "💰"
    },
    {
      title: "Servicios Agropecuarios Personalizables",
      description: "Servicios sugeridos del sector + capacidad de crear servicios personalizados según tu modelo de negocio.",
      features: ["Servicios sugeridos", "Servicios personalizados", "Categorías configurables", "Adaptable a tu negocio"],
      icon: "🌾"
    },
    {
      title: "Facturación y Cobranza",
      description: "Sistema completo de liquidaciones con descuentos, términos de pago y generación de PDFs profesionales.",
      features: ["Facturas automáticas", "Sistema de descuentos", "Control de pagos", "Exportación PDF"],
      icon: "📄"
    },
    {
      title: "Gestión de Terceros",
      description: "Administra clientes, proveedores, empleados y maquinaria. Base de datos completa para el sector rural.",
      features: ["Base de datos de clientes", "Control de proveedores", "Gestión de empleados", "Inventario de maquinaria"],
      icon: "👥"
    },
    {
      title: "Reportes y Análisis",
      description: "Dashboard financiero con métricas clave, reportes Excel y análisis de rentabilidad por proyecto.",
      features: ["Dashboard en tiempo real", "Reportes Excel", "Análisis por proyecto", "Métricas de rentabilidad"],
      icon: "📊"
    },
    {
      title: "Soporte Especializado",
      description: "Equipo especializado en el sector agropecuario para resolver consultas específicas del negocio rural.",
      features: ["Soporte especializado", "Capacitación del sector", "Actualizaciones gratuitas", "Mesa de ayuda"],
      icon: "🛠️"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una suite completa de herramientas financieras especializadas para el sector agropecuario, 
            diseñadas para simplificar la gestión de tu empresa rural y potenciar su rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/register"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Registro Gratuito
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
