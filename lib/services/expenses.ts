import { apiClient } from '../api'
import { 
  Expense, 
  CreateExpenseRequest, 
  ExpenseFilters, 
  PaginatedResponse,
  ExpenseCategory 
} from '../types'

export class ExpenseService {
  // Get paginated expenses
  async getExpenses(filters: ExpenseFilters = {}): Promise<PaginatedResponse<Expense>> {
    const response = await apiClient.get<PaginatedResponse<Expense>>('/expenses', filters)
    return response.data
  }

  // Get all expenses
  async getAllExpenses(): Promise<Expense[]> {
    const response = await apiClient.get<Expense[]>('/expenses/all')
    return response.data
  }

  // Get expense by ID
  async getExpenseById(id: number): Promise<Expense> {
    const response = await apiClient.get<Expense>(`/expenses/${id}`)
    return response.data
  }

  // Create expense
  async createExpense(expenseData: CreateExpenseRequest): Promise<Expense> {
    const response = await apiClient.post<Expense>('/expenses', expenseData)
    return response.data
  }

  // Update expense
  async updateExpense(id: number, expenseData: Partial<CreateExpenseRequest>): Promise<Expense> {
    const response = await apiClient.put<Expense>(`/expenses/${id}`, expenseData)
    return response.data
  }

  // Delete expense
  async deleteExpense(id: number): Promise<void> {
    await apiClient.delete(`/expenses/${id}`)
  }

  // Void expense
  async voidExpense(id: number): Promise<Expense> {
    const response = await apiClient.post<Expense>(`/expenses/${id}/void`)
    return response.data
  }

  // Get expense summary
  async getExpenseSummary(filters: Partial<ExpenseFilters> = {}): Promise<{
    totalAmount: number
    count: number
    averageAmount: number
    byCategory: Array<{
      category: ExpenseCategory
      totalAmount: number
      count: number
    }>
  }> {
    const response = await apiClient.get('/expenses/summary', filters)
    return response.data
  }

  // Get expenses by category
  async getExpensesByCategory(filters: Partial<ExpenseFilters> = {}): Promise<Array<{
    category: ExpenseCategory
    totalAmount: number
    count: number
  }>> {
    const response = await apiClient.get('/expenses/by-category', filters)
    return response.data
  }
}

export const expenseService = new ExpenseService()
export default expenseService

