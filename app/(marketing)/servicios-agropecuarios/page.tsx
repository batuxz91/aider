export default function ServiciosAgropecuariosPage() {
  const serviciosAgropecuarios = [
    {
      nombre: "Servicio de Cosecha",
      descripcion: "Recolección y procesamiento de cultivos",
      icono: "🌾"
    },
    {
      nombre: "Servicio de Siembra",
      descripcion: "Plantación y distribución de semillas",
      icono: "🌱"
    },
    {
      nombre: "Servicio de Pulverización",
      descripcion: "Aplicación de agroquímicos y fertilizantes",
      icono: "💨"
    },
    {
      nombre: "Servicio de Embolsado",
      descripcion: "Almacenamiento y conservación de granos",
      icono: "📦"
    },
    {
      nombre: "Transporte de Granos",
      descripcion: "Logística y distribución de productos",
      icono: "🚛"
    },
    {
      nombre: "Servicio de Arado",
      descripcion: "Preparación del suelo para cultivos",
      icono: "🚜"
    },
    {
      nombre: "Servicio de Rastra",
      descripcion: "Nivelación y refinamiento del terreno",
      icono: "⚙️"
    },
    {
      nombre: "Servicio de Fertilización",
      descripcion: "Aplicación de nutrientes al suelo",
      icono: "🌿"
    },
    {
      nombre: "Servicio de Desmalezado",
      descripcion: "Control de malezas y vegetación",
      icono: "✂️"
    },
    {
      nombre: "Servicio de Riego",
      descripcion: "Sistemas de irrigación y riego",
      icono: "💧"
    },
    {
      nombre: "Servicio de Monitoreo",
      descripcion: "Seguimiento y control de cultivos",
      icono: "📡"
    },
    {
      nombre: "Asesoramiento Técnico",
      descripcion: "Consultoría especializada en agricultura",
      icono: "👨‍🌾"
    },
    {
      nombre: "Servicio de Maquinaria",
      descripcion: "Alquiler y mantenimiento de equipos",
      icono: "🔧"
    },
    {
      nombre: "Servicio de Fumigación",
      descripcion: "Control de plagas y enfermedades",
      icono: "🦠"
    },
    {
      nombre: "Carga y Descarga",
      descripcion: "Manejo de productos y materiales",
      icono: "📋"
    }
  ]

  const categoriasGastos = [
    "Combustible", "Mantenimiento y Repuestos", "Lubricantes y Aceites", "Neumáticos",
    "Seguros de Maquinaria", "Sueldos y Jornales", "Cargas Sociales", "Viáticos y Movilidad",
    "Impuestos y Tasas", "Honorarios Profesionales", "Servicios Públicos", "Semillas y Fertilizantes",
    "Agroquímicos", "Herramientas y Accesorios", "Almacenamiento", "Fletes y Transporte",
    "Comunicaciones", "Capacitación", "Seguros Generales", "Otros Gastos"
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios Agropecuarios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AíDER incluye servicios sugeridos especializados para el sector agropecuario argentino, 
            pero también te permite <strong>configurar tus propios servicios personalizados</strong> según las necesidades específicas de tu empresa rural.
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Servicios Sugeridos + Personalización
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
            Comienza con nuestros servicios sugeridos y personaliza tu sistema agregando, 
            modificando o eliminando servicios según tu modelo de negocio específico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosAgropecuarios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="text-4xl mb-4 text-center">{servicio.icono}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-600 text-center">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorías de Gastos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Categorías de Gastos Personalizables
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8 text-center">
              AíDER incluye categorías de gastos sugeridas para el sector agropecuario, 
              pero puedes <strong>crear, modificar o eliminar categorías</strong> según las necesidades específicas de tu empresa.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categoriasGastos.map((categoria, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                  <span className="text-sm font-medium text-gray-700">{categoria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capacidades de Configuración */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Capacidades de Personalización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-4xl mb-4 text-center">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Configuración de Servicios
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Agregar servicios personalizados</li>
                <li>• Modificar servicios existentes</li>
                <li>• Eliminar servicios no utilizados</li>
                <li>• Definir precios por servicio</li>
                <li>• Configurar unidades de medida</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Configuración de Categorías
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Crear categorías de gastos personalizadas</li>
                <li>• Modificar categorías existentes</li>
                <li>• Eliminar categorías no utilizadas</li>
                <li>• Definir subcategorías</li>
                <li>• Configurar códigos de contabilidad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            ¿Por qué elegir AíDER para tu empresa agropecuaria?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-2">Especialización</h3>
              <p className="text-green-100">Diseñado específicamente para el sector agropecuario argentino</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Control Financiero</h3>
              <p className="text-green-100">Gestión completa de ingresos, egresos y rentabilidad</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Reportes</h3>
              <p className="text-green-100">Análisis detallado por proyecto y temporada</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold mb-2">Maquinaria</h3>
              <p className="text-green-100">Control de equipos, mantenimiento y costos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Terceros</h3>
              <p className="text-green-100">Gestión de clientes, proveedores y empleados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Facturación</h3>
              <p className="text-green-100">Liquidaciones profesionales con descuentos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Personalización</h3>
              <p className="text-green-100">Configura servicios y categorías según tu negocio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Flexibilidad</h3>
              <p className="text-green-100">Adapta el sistema a tu modelo de negocio</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/register"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Registro Gratuito
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
