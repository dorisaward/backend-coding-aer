import { CompanyData } from '../zod/CompanyData.ts'
import type { CompanyDataTypeWithEmployees } from './CompanyDataType.ts'
import fs from 'fs'
import path from 'path'

export const companiesData = (): CompanyDataTypeWithEmployees[] => {
  const dataPath = path.join('data', 'companies')
  const companies: CompanyDataTypeWithEmployees[] = []
  if (fs.existsSync(dataPath)) {
    const files = fs.readdirSync(dataPath)
    files.forEach((file) => {
      const filePath = path.join(dataPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      try {
        const data = JSON.parse(fileContent)
        if (Array.isArray(data)) {
          data.forEach((item) => {
            companies.push({ ...CompanyData.parse(item), employees: [] }) // TODO: add in employee data
          })
        } else {
          console.warn(`Invalid company data in file: ${file}`) // Log warning if data is not in expected shape
        }
      } catch (e) {
        console.warn(`Error parsing ${file}:`, e) // Log error if JSON parsing fails
      }
    })
  } else {
    console.error(`Data path does not exist: ${dataPath}`) // Throw error if path does not exist
  }
  return companies
}
