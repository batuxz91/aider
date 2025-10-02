// User Types
export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone?: string
  address?: string
  createdAt: string
  updatedAt: string
}

export interface UserProfile extends User {
  business?: Business
  role?: string
  isActive: boolean
}

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

// Business/Project Types
export interface Business {
  id: number
  name: string
  description?: string
  address?: string
  phone?: string
  email?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface BusinessSummary {
  id: number
  name: string
  totalIncome: number
  totalExpenses: number
  netProfit: number
  activeProjects: number
}

// Client Types
export interface Client {
  id: number
  name: string
  email?: string
  phone?: string
  address?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateClientRequest {
  name: string
  email?: string
  phone?: string
  address?: string
}

// Provider Types
export interface Provider {
  id: number
  name: string
  email?: string
  phone?: string
  address?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateProviderRequest {
  name: string
  email?: string
  phone?: string
  address?: string
}

// Employee Types
export interface Employee {
  id: number
  firstName: string
  lastName: string
  email?: string
  phone?: string
  position?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateEmployeeRequest {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  position?: string
}

// Vehicle Types
export interface Vehicle {
  id: number
  name: string
  type: string
  brand?: string
  model?: string
  year?: number
  licensePlate?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateVehicleRequest {
  name: string
  type: string
  brand?: string
  model?: string
  year?: number
  licensePlate?: string
}

// Service Types
export interface Service {
  id: number
  name: string
  description?: string
  parentId?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  children?: Service[]
}

export interface CreateServiceRequest {
  name: string
  description?: string
  parentId?: number
}

// Expense Category Types
export interface ExpenseCategory {
  id: number
  name: string
  description?: string
  parentId?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  children?: ExpenseCategory[]
}

export interface CreateExpenseCategoryRequest {
  name: string
  description?: string
  parentId?: number
}

// Expense Types
export interface Expense {
  id: number
  amount: number
  description: string
  date: string
  categoryId: number
  category?: ExpenseCategory
  businessId: number
  business?: Business
  providerId?: number
  provider?: Provider
  isVoid: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateExpenseRequest {
  amount: number
  description: string
  date: string
  categoryId: number
  businessId: number
  providerId?: number
}

export interface ExpenseFilters {
  dateFrom?: string
  dateTo?: string
  categoryId?: number
  businessId?: number
  providerId?: number
  page?: number
  size?: number
}

// Settlement Types
export interface Settlement {
  id: number
  period: string
  totalIncome: number
  totalExpenses: number
  netIncome: number
  ivaAmount: number
  status: 'PENDING' | 'PAID' | 'VOID'
  businessId: number
  business?: Business
  createdAt: string
  updatedAt: string
  payments?: SettlementPayment[]
}

export interface SettlementPayment {
  id: number
  amount: number
  paymentDate: string
  paymentMethod: string
  notes?: string
  isVoid: boolean
  createdAt: string
}

export interface CreateSettlementRequest {
  period: string
  businessId: number
}

export interface SettlementFilters {
  dateFrom?: string
  dateTo?: string
  businessId?: number
  status?: string
  page?: number
  size?: number
}

// Dashboard Types
export interface DashboardData {
  totalIncome: number
  totalExpenses: number
  netProfit: number
  activeProjects: number
  recentActivity: ActivityItem[]
  monthlyData: MonthlyData[]
}

export interface ActivityItem {
  id: number
  type: 'INCOME' | 'EXPENSE' | 'SETTLEMENT'
  description: string
  amount: number
  date: string
}

export interface MonthlyData {
  month: string
  income: number
  expenses: number
  profit: number
}

// Report Types
export interface ProjectReport {
  project: Business
  totalIncome: number
  totalExpenses: number
  netProfit: number
  expensesByCategory: CategorySummary[]
  monthlyBreakdown: MonthlyData[]
}

export interface CategorySummary {
  category: ExpenseCategory
  totalAmount: number
  percentage: number
}

export interface FinancialSummary {
  totalIncome: number
  totalExpenses: number
  netProfit: number
  profitMargin: number
  expensesByCategory: CategorySummary[]
  monthlyTrend: MonthlyData[]
}

// Common Types
export interface PaginationParams {
  page?: number
  size?: number
}

export interface SearchParams {
  query?: string
  searchText?: string
}

export interface DateRangeParams {
  dateFrom?: string
  dateTo?: string
}

export interface StatusParams {
  showInactive?: boolean
  status?: string
}

// API Response Types
export interface ApiError {
  message: string
  status: number
  details?: any
}

export interface PaginatedResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
  first: boolean
  last: boolean
}

