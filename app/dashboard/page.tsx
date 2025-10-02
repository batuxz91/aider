'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/contexts/AuthContext'
import { dashboardService } from '@/lib/services/dashboard'
import { DashboardData, ActivityItem } from '@/lib/types'

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await dashboardService.getDashboardData()
        setDashboardData(data)
      } catch (error: any) {
        setError(error.message || 'Error al cargar los datos')
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchDashboardData()
    }
  }, [isAuthenticated])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
        {error}
      </div>
    )
  }

  const stats = [
    { 
      name: 'Ingresos del Mes', 
      value: `$${dashboardData?.totalIncome?.toLocaleString('es-AR') || '0'}`, 
      change: '+12%', 
      changeType: 'positive' 
    },
    { 
      name: 'Egresos del Mes', 
      value: `$${dashboardData?.totalExpenses?.toLocaleString('es-AR') || '0'}`, 
      change: '+5%', 
      changeType: 'negative' 
    },
    { 
      name: 'Ganancia Neta', 
      value: `$${dashboardData?.netProfit?.toLocaleString('es-AR') || '0'}`, 
      change: '+8%', 
      changeType: 'positive' 
    },
    { 
      name: 'Proyectos Activos', 
      value: dashboardData?.activeProjects?.toString() || '0', 
      change: '+2', 
      changeType: 'positive' 
    },
  ]

  const recentTransactions = dashboardData?.recentActivity?.map((activity: ActivityItem) => ({
    id: activity.id,
    description: activity.description,
    amount: `$${activity.amount.toLocaleString('es-AR')}`,
    type: activity.type === 'INCOME' ? 'ingreso' : 'egreso',
    date: activity.date
  })) || []

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Resumen de tu gestión financiera agropecuaria
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    stat.changeType === 'positive' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.changeType === 'positive' ? '↗' : '↘'}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Ingresos vs Egresos</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de ingresos vs egresos</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Transacciones Recientes</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString('es-AR')}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <p className={`text-sm font-medium ${
                      transaction.type === 'ingreso' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'ingreso' ? '+' : '-'}{transaction.amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 bg-gray-50">
            <a href="/dashboard/ingresos" className="text-sm font-medium text-green-600 hover:text-green-500">
              Ver todas las transacciones →
            </a>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/dashboard/ingresos/nuevo"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">+</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Nuevo Ingreso</p>
            </div>
          </a>
          
          <a
            href="/dashboard/egresos/nuevo"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-lg">-</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Nuevo Egreso</p>
            </div>
          </a>
          
          <a
            href="/dashboard/liquidaciones/nueva"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">📄</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Nueva Liquidación</p>
            </div>
          </a>
          
          <a
            href="/dashboard/reportes"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">📊</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Ver Reportes</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

