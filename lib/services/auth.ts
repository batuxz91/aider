import { apiClient } from '../api'
import { 
  LoginRequest, 
  LoginResponse, 
  RegisterRequest, 
  User, 
  UserProfile, 
  ChangePasswordRequest 
} from '../types'

export class AuthService {
  // Login
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>('/users/login', credentials)
    
    if (response.data.token) {
      apiClient.setToken(response.data.token)
    }
    
    return response.data
  }

  // Register
  async register(userData: RegisterRequest): Promise<User> {
    const response = await apiClient.post<User>('/users/register', userData)
    return response.data
  }

  // Get current user
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/users/me')
    return response.data
  }

  // Get user profile
  async getUserProfile(): Promise<UserProfile> {
    const response = await apiClient.get<UserProfile>('/users/profile')
    return response.data
  }

  // Update profile
  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await apiClient.put<User>('/users/me', userData)
    return response.data
  }

  // Complete profile
  async completeProfile(profileData: Partial<UserProfile>): Promise<UserProfile> {
    const response = await apiClient.post<UserProfile>('/users/complete-profile', profileData)
    return response.data
  }

  // Change password
  async changePassword(passwordData: ChangePasswordRequest): Promise<void> {
    await apiClient.post('/users/change-password', passwordData)
  }

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    await apiClient.post('/users/forgot-password', { email })
  }

  // Reset password
  async resetPassword(token: string, newPassword: string): Promise<void> {
    await apiClient.post('/users/reset-password', { token, newPassword })
  }

  // Check if email exists
  async checkEmailExists(email: string): Promise<boolean> {
    const response = await apiClient.get<{ exists: boolean }>(`/users/exists?email=${email}`)
    return response.data.exists
  }

  // Delete account
  async deleteAccount(): Promise<void> {
    await apiClient.delete('/users/me')
    this.logout()
  }

  // Logout
  logout(): void {
    apiClient.setToken(null)
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return apiClient['token'] !== null
  }

  // Get stored token
  getToken(): string | null {
    return apiClient['token']
  }
}

export const authService = new AuthService()
export default authService

