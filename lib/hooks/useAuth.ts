'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (email: string, password: string) => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })
    
    if (result?.ok) {
      router.push('/dashboard')
    }
    
    return result
  }

  const loginWithGoogle = async () => {
    await signIn('google', { callbackUrl: '/dashboard' })
  }

  const logout = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return {
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    login,
    loginWithGoogle,
    logout,
    accessToken: session?.accessToken
  }
}

