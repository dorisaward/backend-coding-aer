import { CompanyId } from './CompanyId'

export interface EmployeeData {
  id: number
  first_name: string
  last_name: string
  email?: string
  role: string
  company_id: CompanyId
}
