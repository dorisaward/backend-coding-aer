import { Router } from 'express'
import { companiesData } from './companiesData.ts'

const companiesRouter = Router()

companiesRouter.get('/companies', (_, res) => {
  res
    .status(200)
    .json(companiesData())
})

export { companiesRouter }
