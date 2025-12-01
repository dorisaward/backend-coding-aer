import { Router } from 'express'
import { companiesData } from './companiesData.ts'

const companiesRouter = Router()

// companiesRouter.use((req, res, next) => {
//   TODO: Authentication/Monitoring/Schema checks goes here
//   next()
// })

companiesRouter.get('/companies', (_, res) => {
  res.status(200).json({ data: companiesData(), pagination: 'TODO' })
})

export { companiesRouter }
