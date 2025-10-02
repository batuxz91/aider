'use client'

import { useState } from 'react'
import { apiClient } from '@/lib/api'

export default function TestApiPage() {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const testApiConnection = async () => {
    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      // Test 1: API Health Check
      const healthResponse = await fetch('http://localhost:8080/api/health')
      const healthData = await healthResponse.json()

      // Test 2: API Info
      const infoResponse = await fetch('http://localhost:8080/api')
      const infoData = await infoResponse.json()

      setResult({
        health: healthData,
        info: infoData,
        timestamp: new Date().toISOString()
      })
    } catch (err: any) {
      setError(err.message || 'Error al conectar con la API')
    } finally {
      setIsLoading(false)
    }
  }

  const testAuth = async () => {
    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      // Test registration
      const registerData = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123'
      }

      const response = await apiClient.post('/users/register', registerData)
      setResult({
        type: 'Registration Test',
        data: response.data,
        timestamp: new Date().toISOString()
      })
    } catch (err: any) {
      setError(err.message || 'Error en el test de autenticación')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Test de Integración con SGF API
          </h1>
          
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button
                onClick={testApiConnection}
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? 'Probando...' : 'Test Conexión API'}
              </button>
              
              <button
                onClick={testAuth}
                disabled={isLoading}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isLoading ? 'Probando...' : 'Test Autenticación'}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                <h3 className="font-semibold">Error:</h3>
                <p>{error}</p>
              </div>
            )}

            {result && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                <h3 className="font-semibold mb-2">Resultado:</h3>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Información de la API:
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>URL Base:</strong> http://localhost:8080/api</li>
                <li><strong>Estado esperado:</strong> 200 OK</li>
                <li><strong>Formato:</strong> JSON</li>
                <li><strong>Autenticación:</strong> Bearer Token (JWT)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Endpoints a probar:
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GET /api/health - Estado de la API</li>
                <li>• GET /api - Información de la API</li>
                <li>• POST /api/users/register - Registro de usuarios</li>
                <li>• POST /api/users/login - Login de usuarios</li>
                <li>• GET /api/dashboard - Datos del dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

