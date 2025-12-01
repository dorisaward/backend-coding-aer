import express from 'express'
import { companiesRouter } from './companies/companiesRouter.ts'
const app = express()
const port = 8080

app.use(companiesRouter)

app.get('/', (_, res) => {
  res.send('Hello World from Express!')
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
