'use client'

import { useState } from 'react'

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState('servicios')

  const tabs = [
    { id: 'servicios', name: 'Servicios', icon: '⚙️' },
    { id: 'categorias', name: 'Categorías', icon: '📊' },
    { id: 'empresa', name: 'Empresa', icon: '🏢' },
    { id: 'usuarios', name: 'Usuarios', icon: '👥' }
  ]

  const serviciosSugeridos = [
    { id: 1, nombre: 'Servicio de Cosecha', descripcion: 'Recolección y procesamiento de cultivos', activo: true },
    { id: 2, nombre: 'Servicio de Siembra', descripcion: 'Plantación y distribución de semillas', activo: true },
    { id: 3, nombre: 'Servicio de Pulverización', descripcion: 'Aplicación de agroquímicos y fertilizantes', activo: true },
    { id: 4, nombre: 'Servicio de Embolsado', descripcion: 'Almacenamiento y conservación de granos', activo: false },
    { id: 5, nombre: 'Transporte de Granos', descripcion: 'Logística y distribución de productos', activo: true }
  ]

  const categoriasSugeridas = [
    { id: 1, nombre: 'Combustible', descripcion: 'Gastos en combustible para maquinaria', activo: true },
    { id: 2, nombre: 'Mantenimiento y Repuestos', descripcion: 'Repuestos y mantenimiento de equipos', activo: true },
    { id: 3, nombre: 'Sueldos y Jornales', descripcion: 'Remuneraciones del personal', activo: true },
    { id: 4, nombre: 'Semillas y Fertilizantes', descripcion: 'Insumos agrícolas', activo: true },
    { id: 5, nombre: 'Agroquímicos', descripcion: 'Productos fitosanitarios', activo: false }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Configuración del Sistema</h2>
        <p className="text-gray-600">
          Personaliza AíDER según las necesidades específicas de tu empresa agropecuaria.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'servicios' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Gestión de Servicios</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                + Nuevo Servicio
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h4 className="text-lg font-medium text-gray-900">Servicios Sugeridos</h4>
                <p className="text-sm text-gray-600">
                  Activa o desactiva los servicios sugeridos según tu modelo de negocio.
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {serviciosSugeridos.map((servicio) => (
                  <div key={servicio.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-gray-900">{servicio.nombre}</h5>
                      <p className="text-sm text-gray-500">{servicio.descripcion}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                        Editar
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={servicio.activo}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Servicios Personalizados</h4>
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">🔧</div>
                <p>No tienes servicios personalizados aún.</p>
                <p className="text-sm">Crea tu primer servicio personalizado para comenzar.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categorias' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Gestión de Categorías</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                + Nueva Categoría
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h4 className="text-lg font-medium text-gray-900">Categorías Sugeridas</h4>
                <p className="text-sm text-gray-600">
                  Activa o desactiva las categorías sugeridas según tus necesidades.
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {categoriasSugeridas.map((categoria) => (
                  <div key={categoria.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-gray-900">{categoria.nombre}</h5>
                      <p className="text-sm text-gray-500">{categoria.descripcion}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                        Editar
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={categoria.activo}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Categorías Personalizadas</h4>
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">📊</div>
                <p>No tienes categorías personalizadas aún.</p>
                <p className="text-sm">Crea tu primera categoría personalizada para comenzar.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'empresa' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Configuración de Empresa</h3>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">🏢</div>
                <p>Configuración de empresa en desarrollo.</p>
                <p className="text-sm">Próximamente podrás configurar los datos de tu empresa.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'usuarios' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Gestión de Usuarios</h3>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">👥</div>
                <p>Gestión de usuarios en desarrollo.</p>
                <p className="text-sm">Próximamente podrás gestionar usuarios y permisos.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
