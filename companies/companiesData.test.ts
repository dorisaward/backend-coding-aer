import { companiesData } from './companiesData'
import fs from 'fs'

jest.mock('fs')
jest.mock('path', () => ({
  join: jest.fn((...args) => args.join('/')),
  ...jest.requireActual('path')
}))

const mockFs = fs as jest.Mocked<typeof fs>

describe('companiesData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns companies when data exists', () => {
    // Given
    mockFs.existsSync.mockReturnValue(true)
    // @ts-expect-error mock return value is not of type Dirent<NonSharedBuffer>
    mockFs.readdirSync.mockReturnValue(['company1.json'])
    mockFs.readFileSync.mockReturnValue(JSON.stringify([testData]))

    jest.mock('../zod/CompanyData.ts', () => ({
      CompanyData: { parse: (item: unknown) => item }
    }))

    // When
    const result = companiesData()

    // Then
    expect(result).toEqual([{ ...testData, employees: [] }])
  })

  it('returns empty array if data path does not exist', () => {
    // Given
    mockFs.existsSync.mockReturnValue(false)

    // When
    const result = companiesData()

    // Then
    expect(result).toEqual([])
  })

  it('logs warning for invalid JSON', () => {
    // Given
    mockFs.existsSync.mockReturnValue(true)
    // @ts-expect-error mock return value is not of type Dirent<NonSharedBuffer>
    mockFs.readdirSync.mockReturnValue(['bad.json'])
    mockFs.readFileSync.mockReturnValue('not json')
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

    // When
    companiesData()

    // Then
    expect(warnSpy).toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})

const testData = {
  id: 26,
  name: 'Bode and Sons',
  industry: 'Other Consumer Services',
  active: true,
  website: 'https://devhub.com',
  telephone: '304-534-5956',
  slogan: 'Monitored system-worthy pricing structure',
  address: '5 Atwood Road',
  city: 'Charleston',
  country: 'United States'
}
