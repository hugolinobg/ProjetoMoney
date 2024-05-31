import { Router } from 'express'

import ExpenseController from '../controller/ExpenseController.js'
import CategoryController from '../controller/CategoryController.js'

const routes = Router()

routes.get('/v1/api', (req, res) => {
  return res.send({ message: 'Server running!!!' })
})

routes.get('/v1/api/expense', ExpenseController.find)
routes.post('/v1/api/expense', ExpenseController.create)
routes.put('/v1/api/expense/:id', ExpenseController.put)
routes.delete('/v1/api/expense/:id', ExpenseController.delete)

routes.get('/v1/api/category', CategoryController.find)
routes.post('/v1/api/category', CategoryController.create)
routes.put('/v1/api/category/:id', CategoryController.put)
routes.delete('/v1/api/category/:id', CategoryController.delete)

export default routes
