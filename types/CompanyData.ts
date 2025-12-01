import type { EmployeeData } from './EmployeeData.ts'

export interface CompanyData {
  id: number
  name: string
  industry: string
  active: boolean
  website: string
  telephone: string
  slogan: string
  address: string
  city: string
  country: string
  employees: EmployeeData[]
}
