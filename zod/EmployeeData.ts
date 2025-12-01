import zod from 'zod'
import { CompanyId } from './CompanyId.ts'

export const EmployeeData = zod.object({
  id: zod.number(),
  first_name: zod.string(),
  last_name: zod.string(),
  email: zod.string().optional(),
  role: zod.string(),
  company_id: CompanyId
})
