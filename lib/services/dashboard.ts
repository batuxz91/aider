import { apiClient } from '../api'
import { 
  DashboardData, 
  Business, 
  ActivityItem, 
  MonthlyData 
} from '../types'

export class DashboardService {
  // Get dashboard data
  async getDashboardData(): Promise<DashboardData> {
    const response = await apiClient.get<DashboardData>('/dashboard')
    return response.data
  }

  // Get projects for filter
  async getProjects(): Promise<Business[]> {
    const response = await apiClient.get<Business[]>('/dashboard/projects')
    return response.data
  }

  // Get financial summary
  async getFinancialSummary(businessId?: number): Promise<{
    totalIncome: number
    totalExpenses: number
    netProfit: number
    profitMargin: number
  }> {
    const response = await apiClient.get<{
      totalIncome: number
      totalExpenses: number
      netProfit: number
      profitMargin: number
    }>('/dashboard/summary', { businessId })
    return response.data
  }

  // Get dashboard metrics
  async getMetrics(businessId?: number): Promise<{
    totalProjects: number
    activeProjects: number
    totalClients: number
    totalProviders: number
    monthlyGrowth: number
    expenseTrend: 'up' | 'down' | 'stable'
    incomeTrend: 'up' | 'down' | 'stable'
  }> {
    const response = await apiClient.get<{
      totalProjects: number
      activeProjects: number
      totalClients: number
      totalProviders: number
      monthlyGrowth: number
      expenseTrend: 'up' | 'down' | 'stable'
      incomeTrend: 'up' | 'down' | 'stable'
    }>('/dashboard/metrics', { businessId })
    return response.data
  }

  // Get recent activity
  async getRecentActivity(limit: number = 10): Promise<ActivityItem[]> {
    const response = await apiClient.get<ActivityItem[]>('/dashboard/recent-activity', { limit })
    return response.data
  }

  // Get charts data
  async getChartsData(businessId?: number, year?: number): Promise<{
    monthlyData: MonthlyData[]
    categoryBreakdown: Array<{
      category: string
      amount: number
      percentage: number
    }>
    projectComparison: Array<{
      project: Business
      income: number
      expenses: number
      profit: number
    }>
  }> {
    const response = await apiClient.get<{
      monthlyData: MonthlyData[]
      categoryBreakdown: Array<{
        category: string
        amount: number
        percentage: number
      }>
      projectComparison: Array<{
        project: Business
        income: number
        expenses: number
        profit: number
      }>
    }>('/dashboard/charts-data', { businessId, year })
    return response.data
  }
}

export const dashboardService = new DashboardService()
export default dashboardService

