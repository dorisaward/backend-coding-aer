import zod from 'zod'
import { CompanyId } from './CompanyId.ts'

export const CompanyData = zod.object({
  id: CompanyId,
  name: zod.string(),
  industry: zod.string(),
  active: zod.boolean(),
  website: zod.string(),
  telephone: zod.string(),
  slogan: zod.string(),
  address: zod.string(),
  city: zod.string(),
  country: zod.string()
})
