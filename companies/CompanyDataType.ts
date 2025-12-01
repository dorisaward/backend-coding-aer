import zod from 'zod'
import { CompanyData } from '../zod/CompanyData.ts'
import { EmployeeData } from '../zod/EmployeeData.ts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CompanyDataWithEmployees = CompanyData.extend({
  employees: zod.array(EmployeeData)
})

export type CompanyDataTypeWithEmployees = zod.infer<
  typeof CompanyDataWithEmployees
>
