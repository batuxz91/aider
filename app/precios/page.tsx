export default function PreciosPage() {
  const planes = [
    {
      nombre: "Básico",
      precio: "$29.900",
      periodo: "por mes",
      descripcion: "Perfecto para pequeñas empresas agropecuarias",
      caracteristicas: [
        "Hasta 3 proyectos simultáneos",
        "Gestión de ingresos y egresos",
        "15 servicios agropecuarios",
        "Facturación básica (hasta 50 facturas/mes)",
        "Reportes Excel",
        "Soporte por email",
        "1 usuario"
      ],
      destacado: false,
      cta: "Comenzar Prueba Gratuita",
      color: "gray"
    },
    {
      nombre: "Profesional",
      precio: "$59.900",
      periodo: "por mes",
      descripcion: "Ideal para empresas en crecimiento",
      caracteristicas: [
        "Hasta 10 proyectos simultáneos",
        "Gestión completa de ingresos y egresos",
        "Todos los servicios agropecuarios",
        "Facturación ilimitada",
        "Reportes Excel y PDF",
        "Dashboard avanzado",
        "Soporte prioritario",
        "Hasta 5 usuarios",
        "Integración con bancos",
        "Backup automático"
      ],
      destacado: true,
      cta: "Comenzar Prueba Gratuita",
      color: "green"
    },
    {
      nombre: "Empresarial",
      precio: "$99.900",
      periodo: "por mes",
      descripcion: "Para grandes empresas agropecuarias",
      caracteristicas: [
        "Proyectos ilimitados",
        "Gestión financiera completa",
        "Todos los servicios y categorías",
        "Facturación masiva",
        "Reportes personalizados",
        "Dashboard ejecutivo",
        "Soporte 24/7",
        "Usuarios ilimitados",
        "API completa",
        "Integración con sistemas contables",
        "Gerente de cuenta dedicado",
        "Capacitación personalizada"
      ],
      destacado: false,
      cta: "Contactar Ventas",
      color: "blue"
    }
  ]

  const beneficios = [
    {
      titulo: "Prueba Gratuita de 14 Días",
      descripcion: "Prueba todas las funcionalidades sin compromiso",
      icono: "🆓"
    },
    {
      titulo: "Sin Contratos a Largo Plazo",
      descripcion: "Cancela cuando quieras, sin penalizaciones",
      icono: "🔄"
    },
    {
      titulo: "Actualizaciones Incluidas",
      descripcion: "Nuevas funcionalidades sin costo adicional",
      icono: "🆕"
    },
    {
      titulo: "Soporte Especializado",
      descripcion: "Equipo experto en el sector agropecuario",
      icono: "👨‍🌾"
    }
  ]

  const faqs = [
    {
      pregunta: "¿Puedo cambiar de plan en cualquier momento?",
      respuesta: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan en tu próxima facturación."
    },
    {
      pregunta: "¿Qué incluye la prueba gratuita?",
      respuesta: "La prueba gratuita incluye acceso completo a todas las funcionalidades del plan Profesional por 14 días, sin necesidad de tarjeta de crédito."
    },
    {
      pregunta: "¿Hay descuentos por pago anual?",
      respuesta: "Sí, ofrecemos un 20% de descuento si pagas todo el año por adelantado. Contacta a nuestro equipo de ventas para más información."
    },
    {
      pregunta: "¿Puedo cancelar mi suscripción?",
      respuesta: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay penalizaciones ni costos ocultos."
    },
    {
      pregunta: "¿Los datos están seguros?",
      respuesta: "Absolutamente. Utilizamos encriptación de grado empresarial y realizamos copias de seguridad diarias. Tus datos están protegidos y son completamente tuyos."
    },
    {
      pregunta: "¿Ofrecen capacitación?",
      respuesta: "Sí, incluimos capacitación básica para todos los planes y capacitación personalizada para el plan Empresarial."
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Precios de AíDER
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tu empresa agropecuaria. 
            Todos los planes incluyen prueba gratuita de 14 días.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🎉 Oferta de Lanzamiento: 20% de descuento en el primer mes
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {planes.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 ${
                plan.destacado ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.nombre}</h3>
                <p className="text-gray-600 mb-4">{plan.descripcion}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.precio}</span>
                  <span className="text-gray-600 ml-2">{plan.periodo}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.destacado
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : plan.color === 'blue'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            ¿Por qué elegir AíDER?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{beneficio.icono}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.pregunta}</h3>
                <p className="text-gray-600">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para optimizar tu gestión financiera?
          </h2>
          <p className="text-green-100 mb-6 text-lg">
            Comienza tu prueba gratuita de 14 días hoy mismo. Sin compromisos, sin tarjeta de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registro"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Comenzar Prueba Gratuita
            </a>
            <a
              href="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Hablar con Ventas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
